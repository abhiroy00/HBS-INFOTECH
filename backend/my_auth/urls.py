from django.urls import path
from .views import *
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import resend_otp
from django.urls import include, path, re_path



urlpatterns = [
    path('register/', register, name='Email_register'),
    path('verify/', verify_otp, name='Verify_otp'),
    path('forgot/pass/', forgot_password, name='forgot_password'),
    path('reset/pass/', reset_password, name='reset_password'),
    path('forgot/email/', forgot_email, name='forgot_email'),
    path('reset/email/', reset_email, name='reset_email'),
    
    path ('login/', login, name='email_pass_to_obtain_accesstoken'),
    path('resend-otp/', resend_otp, name='resend_otp'),

    path('logout/', logout, name='logout'),

    # Social Login Routes (Google)
    path('v1/auth/google/', GoogleLogin.as_view(), name='google_login'),
    path('v1/auth/google/callback/', GoogleLoginCallback.as_view(), name='google_login_callback'),

    # DRF Authentication and Registration
    path("v1/auth/", include("dj_rest_auth.urls")),
    re_path(r"^v1/auth/accounts/", include("allauth.urls")),
    path("v1/auth/registration/", include("dj_rest_auth.registration.urls")),


    # path('token/', TokenObtainPairView.as_view(), name='email_pass_to_obtain_pair'),
    # path('token/refresh/', TokenRefreshView.as_view(), name='refresh_token_to_obtain_acesstoken'),        
]
