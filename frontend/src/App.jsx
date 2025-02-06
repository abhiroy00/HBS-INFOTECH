
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './features/about/About';
import Course from './features/courses/Course';
import Solutions from './features/new_ solutions/Solutions';
import AtsMantra from './BridgetheGap/AtsMantra';
import CoconutERP from './BridgetheGap/CoconutERP';
import MicrosoftSolutions from './BridgetheGap/MicrosoftSolutions';
import RecruitmentServices from './BridgetheGap/RecruitmentServices';
import UI_UXDesign from './BridgetheGap/UI_UXDesign';
import ApplicationDevelopment from './BridgetheGap/ApplicationDevelopment';
import Discusswithus from './Discusswithus/Discusswithus';
import SecoundHeader from './features/secoundHeader/SecoundHeader';
import Room from './features/videocall/Room';
import Ui_Ux from './features/services/services_pages/ui_ux/Ui_Ux';
import Cloud from './features/services/services_pages/colud/Cloud';
import Software from './features/services/services_pages/software/Software';
import Ai from './features/services/services_pages/AIml/Ai';
import DataEngineer from './features/services/services_pages/Data_engineer/DataEngineer';
import DigitalTransfrommation from './features/services/services_pages/Digital_transformation/DigitalTransfrommation';
import Mobile from './features/services/services_pages/mobile/Mobile';
import Devops from './features/services/services_pages/Devops.jsx/Devops';
import Automation from './features/services/services_pages/Automation/Automation';
import DevelopmentTeams from './features/services/services_pages/DevelopmentTeams/DevelopmentTeams';
import EmbeddedSoftware from './features/services/services_pages/EmbeddedSoftware/EmbeddedSoftware';
import IdentityandAccess from './features/services/services_pages/IdentityandAccess/IdentityandAccess';
import SoftwareAuditing from './features/services/services_pages/SoftwareAuditing/SoftwareAuditing';
import SecurityAudit from './features/services/SecurityAudit/SecurityAudit';
import NearshoringServices from './features/services/services_pages/NearshoringServices/NearshoringServices';
import FinancialServices from './features/industries/industriesPages/FinancialServices/FinancialServices';
import Telecom from './features/industries/industriesPages/Telecom/Telecom';
import Media_Entertainment from './features/industries/industriesPages/Media&Entertainment/Media_Entertainment';
import Biotech_Healthcare from './features/industries/industriesPages/Biotech&Healthcare/Biotech_Healthcare';
import SportsBetting from './features/industries/industriesPages/SportsBetting/SportsBetting';
import Manufacturing from './features/industries/industriesPages/Manufacturing/Manufacturing';
import 'bootstrap/dist/css/bootstrap.min.css'
import CourseMain from './features/coursemain/CourseMain';
import CourseHome from './features/coursemain/coursehome/CourseHome'
import CourseLearn from './features/coursemain/courselearn/CourseLearn';
import CoursePractice from './features/coursemain/coursePractice/CoursePractice';
import CourseProject from './features/coursemain/courseProject/CourseProject';
import CourseClassroom from './features/coursemain/courseClassroom/CourseClassroom';
import Upcoming from './features/coursemain/courseClassroom/classroom_children/upcoming';
import Completed from './features/coursemain/courseClassroom/classroom_children/Completed';
import Mentorship from './features/coursemain/Mentorship/Mentorship';
import Book_a_session from './features/coursemain/Mentorship/Mentorship_children/Book_a_session';
import Previous_Booking from './features/coursemain/Mentorship/Mentorship_children/Previous_Booking';
import Manage_Booking from './features/coursemain/Mentorship/Mentorship_children/Manage_Booking';
import CourseCarriar from './features/coursemain/coursecarriar/CourseCarriar';
import RegisterPage from './features/auth/Register/RegisterPage';
import Login from './features/auth/Login/Login';
import Jobboard from './features/coursemain/Jobboard/Jobboard';
import PrivateRoute from './features/auth/Private/PrivateRoute';




function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />, 
      children:[
        {
          path:"/about",
          element:<About></About>
        },
        
        {
          path:"/solutions",
          element:<Solutions></Solutions>
        },
        {
          path:"/applicationDevelopment",
          element:<ApplicationDevelopment/>
        },
        {
          path:"/UI_UXDesign",
          element:<UI_UXDesign/>
        },
        {
          path:"/RecruitmentServices",
          element:<RecruitmentServices/>
        },
        {
          path:"/MicrosoftSolutions",
          element:<MicrosoftSolutions/>
        },
        {
          path:"/CoconutERP",
          element:<CoconutERP/>
        },
        {
          path:"/AtsMantra",
          element:<AtsMantra/>
        },

       
      ]
    },
    {
      path:"/course",
      element:
     
      <Course></Course>
     
    },
    {
      path:"/Discusswithus",
      element:<Discusswithus/>
    },
    {
      path:"/SecoundHeader",
      element:<SecoundHeader/>
    },
    {
      path:"/videocall",
      element:<Room></Room>
    },
    {
      path:"/ui",
      element:<Ui_Ux></Ui_Ux>

    },
    {
      path:"/cloud",
      element:<Cloud/>
    },
    {
      path:"/software",
      element:<Software></Software>

    },
    {
      path:"/ai",
      element:<Ai></Ai>
    },
    {
      path:"/dataengineering",
      element:<DataEngineer></DataEngineer>
    },
    {
      path:"/digitaltransformation",
      element:<DigitalTransfrommation></DigitalTransfrommation>
    },
    {
      path:"/mobile",
      element:<Mobile></Mobile>
    },
    {
      path:"/devops",
      element:<Devops></Devops>
    },
    {
      path:"/automation",
      element:<Automation></Automation>
    },
    {
      path:"/devlopment_team",
      element:<DevelopmentTeams></DevelopmentTeams>
    },
    {
      path:"/embeddedsoftware",
      element:<EmbeddedSoftware></EmbeddedSoftware>

    },
    {
      path:"/IdentityandAccess",
      element:<IdentityandAccess></IdentityandAccess>
    },
    {
      path:"/softwareauditing",
      element:<SoftwareAuditing></SoftwareAuditing>
      
    },
    {
      path:"/securityaudit",
      element:<SecurityAudit></SecurityAudit>
    },
    {
      path:"/nearshoringservices",
      element:<NearshoringServices></NearshoringServices>
    },
    {
      path:"/financialservices",
      element:<FinancialServices></FinancialServices>
    },
    {
      path:"/telecom",
      element:<Telecom></Telecom>
    },
    {
      path:"/media_entertainment",
      element:<Media_Entertainment></Media_Entertainment>
    },
    {
      path:"/biotech_healthcare",
      element:<Biotech_Healthcare></Biotech_Healthcare>
      
    },
    {
      path:"/SportsBetting",
      element:<SportsBetting></SportsBetting>
    },
    {
      path:"/Manufacturing",
      element:<Manufacturing></Manufacturing>
    },
    {
      path:"/CourseMain",
      element:
      
      <CourseMain></CourseMain>
   
      ,
      children:[
        {
          path:"/CourseMain/courseHome",
          element:<CourseHome></CourseHome>
        },
        {
          path:"/CourseMain/courseLean",
          element:<CourseLearn></CourseLearn>
        },
        {
          path:"/CourseMain/courspractice",
          element:<CoursePractice></CoursePractice>
        },
        {
          path:"/CourseMain/courseproject",
          element:<CourseProject></CourseProject>
        },
        {
          path:"/CourseMain/CourseCarriar",
          element:<CourseCarriar></CourseCarriar>
        },
        {
          path:"/CourseMain/jobboard",
          element:<Jobboard></Jobboard>

        },
        {
          path:"/CourseMain/CourseClassroom",
          element:<CourseClassroom></CourseClassroom>,
          children:[
            {
              path:"/CourseMain/CourseClassroom/upcoming",
              element:<Upcoming ></Upcoming>
            },
            {
              path:"/CourseMain/CourseClassroom/Completed",
              element:<Completed></Completed>
            }
          ]
        },
        {
          path:"/CourseMain/Mentorship",
          element:<Mentorship></Mentorship>,
          children:[
            {
              path:"/CourseMain/Mentorship/",
              element:<Book_a_session></Book_a_session>
            },
            {
              path:"/CourseMain/Mentorship/Book_a_session",
              element:<Book_a_session></Book_a_session>
            },
            {
              path:"/CourseMain/Mentorship/Previous_Booking",
              element:<Previous_Booking></Previous_Booking>
            },
            {
              path:"/CourseMain/Mentorship/Manage_Booking",
              element:<Manage_Booking></Manage_Booking>
            },
           
          ]
        }
      ]
     
    },
    {
      path:"/register",
      element:<RegisterPage></RegisterPage>
    },
    {
      path:"/login",
      element:<Login></Login>
    }
    

    
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
