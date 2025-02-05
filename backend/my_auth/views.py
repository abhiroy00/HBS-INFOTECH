from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes
from .emails import *
from .models import *
from .serializer import *
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from dj_rest_auth.registration.views import SocialLoginView
from django.conf import settings

from urllib.parse import urljoin

import requests
from django.urls import reverse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.conf import settings
from django.shortcuts import render
from django.views import View


def handle_error(e):
    return Response({
        'status': 500,
        'message': 'Internal server error',
        'data': str(e),
    }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    callback_url = settings.GOOGLE_OAUTH_CALLBACK_URL
    client_class = OAuth2Client

class GoogleLoginCallback(APIView):
    def get(self, request, *args, **kwargs):
        """
        If you are building a fullstack application (eq. with React app next to Django)
        you can place this endpoint in your frontend application to receive
        the JWT tokens there - and store them in the state
        """

        code = request.GET.get("code")

        if code is None:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
        # Remember to replace the localhost:8000 with the actual domain name before deployment
        token_endpoint_url = urljoin("http://localhost:8000", reverse("google_login"))
        response = requests.post(url=token_endpoint_url, data={"code": code})

        return Response(response.json(), status=status.HTTP_200_OK)

class LoginPage(View):
    def get(self, request, *args, **kwargs):
        return render(
            request,
            "pages/login.html",
            {
                "google_callback_uri": settings.GOOGLE_OAUTH_CALLBACK_URL,
                "google_client_id": settings.GOOGLE_OAUTH_CLIENT_ID,
            },
        )
    
@api_view(['POST'])
def register(request):
    try:
        data = request.data
        serializer = UserSerializer(data=data)
        if serializer.is_valid():
            user = serializer.save()
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)
            send_otp_via_mail(user.email, user.otp)
            return Response({
                "status": 200,
                "message": "Registered successfully. Check your email for verification.",
                'data': serializer.data,
                "access_token": access_token,
            })

        return Response({
            'status': 400,
            'message': 'Something went wrong',
            'data': serializer.errors,
        })
    except Exception as e:
        return handle_error(e)


@api_view(['POST'])
def verify_otp(request):
    try:
        data = request.data
        serializer = VerifyAccountSerializer(data=data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            otp = serializer.validated_data['otp']
            user = User.objects.filter(email=email).first()
            if not user:
                return Response({
                    'status': 400,
                    'message': 'Invalid email',
                    'data': 'User with this email does not exist.',
                })

            if user.otp_expiration and timezone.now() > user.otp_expiration:
                return Response({
                    'status': 400,
                    'message': 'OTP expired',
                    'data': 'The OTP provided has expired. Please request a new one.',
                })

            if user.otp != otp:
                return Response({
                    'status': 400,
                    'message': 'Invalid OTP',
                    'data': 'The OTP provided does not match.',
                })

            user.is_verified = True
            user.otp_type = 'verify_user'
            user.otp = None
            user.save()

            send_account_verified_email(email)

            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)

            return Response({
                'status': 200,
                'message': 'Verified successfully',
                'data': {'email': email},
                'access_token': access_token,
            })

        return Response({
            'status': 400,
            'message': 'Something went wrong',
            'data': serializer.errors,
        })
    except Exception as e:
        return handle_error(e)


@api_view(['POST'])
def forgot_password(request):
    try:
        data = request.data
        email = data.get('email')

        if not email:
            return Response({
                'status': 400,
                'message': 'Please provide an email address.',
                'data': {'email': ''}
            })

        user = User.objects.filter(email=email).first()
        if not user:
            return Response({
                'status': 400,
                'message': 'User with this email does not exist',
                'data': {'email': email}
            })

        send_forget_pass_otp_via_mail(user.email)
        return Response({
            'status': 200,
            'message': 'OTP sent to your email for password reset',
        })
    except Exception as e:
        return handle_error(e)


@api_view(['POST'])
def reset_password(request):
    try:
        data = request.data
        email = data.get('email')
        otp = data.get('otp')
        new_password = data.get('new_password')

        if not email or not otp or not new_password:
            return Response({
                'status': 400,
                'message': 'Email, OTP, and new password are required',
                'data': {'email': email, 'otp': otp, 'new_password': new_password}
            })

        user = User.objects.filter(email=email).first()
        if not user:
            return Response({
                'status': 400,
                'message': 'User with this email does not exist',
            })

        if str(user.otp) != str(otp):
            return Response({
                'status': 400,
                'message': 'Invalid OTP',
            })

        if user.otp_expiration and timezone.now() > user.otp_expiration:
            return Response({
                'status': 400,
                'message': 'OTP expired',
                'data': 'The OTP provided has expired. Please request a new one.',
            })

        user.set_password(new_password)
        user.otp = None
        user.save()

        return Response({
            'status': 200,
            'message': 'Password reset successfully',
        })
    except Exception as e:
        return handle_error(e)


@api_view(['POST'])
def login(request):
    try:
        data = request.data
        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            return Response({
                'status': 400,
                'message': 'Email and password are required',
                'data': {'email': email, 'password': password},
            })

        user = authenticate(email=email, password=password)
        if user:
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)
            return Response({
                'status': 200,
                'message': 'Logged in successfully',
                'data': {'Access token': access_token}
            })

        return Response({
            'status': 400,
            'message': 'Invalid Credentials',
        })
    except Exception as e:
        return handle_error(e)


@api_view(['POST'])
def forgot_email(request):
    try:
        data = request.data
        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            return Response({
                'status': 400,
                'message': 'Email and password are required',
                'data': {'email': email, 'password': password},
            })

        user = authenticate(email=email, password=password)
        if not user:
            return Response({
                'status': 400,
                'message': 'Invalid email or password',
                'data': {'email': email},
            })

        send_forget_email_otp_via_mail(user.email)
        return Response({
            'status': 200,
            'message': 'OTP sent to your email for password reset',
        })
    except Exception as e:
        return handle_error(e)


@api_view(['POST'])
def reset_email(request):
    try:
        serializer = ResetEmailSerializer(data=request.data)

        if serializer.is_valid():
            email = serializer.validated_data['email']
            new_email = serializer.validated_data['new_email']
            otp = serializer.validated_data['otp']

            user = User.objects.filter(email=email).first()
            if not user:
                return Response({
                    'status': 400,
                    'message': 'User with this email does not exist.',
                })

            if str(user.otp) != str(otp):
                return Response({
                    'status': 400,
                    'message': 'Invalid OTP.',
                })

            if user.otp_expiration and timezone.now() > user.otp_expiration:
                return Response({
                    'status': 400,
                    'message': 'OTP expired',
                    'data': 'The OTP provided has expired. Please request a new one.',
                })

            user.email = new_email
            user.otp = None
            user.save()

            return Response({
                'status': 200,
                'message': 'Email updated successfully.',
            })

        return Response({
            'status': 400,
            'message': 'Validation failed.',
            'errors': serializer.errors
        })

    except Exception as e:
        return handle_error(e)


@api_view(['POST'])
def resend_otp(request):
    try:
        data = request.data
        email = data.get('email')

        if not email:
            return Response({'status': 400, 'message': 'Email is required.'})

        user = User.objects.filter(email=email).first()
        if not user:
            return Response({'status': 400, 'message': 'User not found.'})

        if user.is_verified:
            return Response({'status': 200, 'message': 'User is already verified.'})

        # Check if OTP has expired
        if user.otp_expiration and timezone.now() > user.otp_expiration:
            # OTP expired, generate a new one
            otp = generate_otp()
            otp_expiration = timezone.now() + timedelta(minutes=5)  # Set new expiration time

            # Update user with new OTP and expiration time
            user.otp = otp
            user.otp_expiration = otp_expiration
            user.save()

            # Send the new OTP to the user's email
            send_otp_via_mail(user.email, otp)

            return Response({
                'status': 200,
                'message': 'OTP resent successfully. Please check your email for the new OTP.'
            })

        # If OTP hasn't expired, send a reminder
        return Response({'status': 200, 'message': 'OTP is still valid. Please check your email for the OTP.'})

    except Exception as e:
        return handle_error(e)
    
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout(request):
    try:
        refresh_token = request.data.get('refresh_token')
        if not refresh_token:
            return Response({'status': 400, 'message': 'Refresh token is required.'}, status=status.HTTP_400_BAD_REQUEST)
        
        token = RefreshToken(refresh_token)
        token.blacklist()

        return Response({'status': 200, 'message': 'Logout successful.'}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({'status': 500, 'message': 'Internal server error', 'data': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)