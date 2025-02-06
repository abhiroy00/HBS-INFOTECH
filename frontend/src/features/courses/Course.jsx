import "bootstrap/dist/css/bootstrap.min.css";
import './course.css'
import microsot from '../courses/images/microsoft.png';
import iitguhati from '../courses/images/iiguhati.png';
import courseImage1 from '../courses/images/course1.jpeg'; // 
import courseImage2 from '../courses/images/course2.jpeg'; // Add an image for the course
import courseImage3 from '../courses/images/course3.jpeg'; // Add an image for the course


import { useEffect, useState } from "react";
import Header from "../../comman/Header";
import Footer from "../../comman/Footer";
import { Link } from "react-router-dom";




// Logo
import application from './logos/application.webp'
import assement from './logos/assement.webp'
import champion from './logos/champion.webp'
import course from './logos/crash course.webp'
import foundation from './logos/foundation.webp'
import graduation from './logos/graduation.webp'
import interview from './logos/interview.webp'
import resume from './logos/resume.webp'
import support from './logos/support.webp'









// Infinte Scroll
import accenture from './infinite/accenture.webp'
import amazon from './infinite/amazon.webp'
import biz2credit from './infinite/biz2credit.webp'
import blenheim from './infinite/blenheim.webp'
import brigei2i from './infinite/brigei2i.webp'
import capgemini from './infinite/Capgemini.webp'
import citi from './infinite/citi.webp'
import converhytics from './infinite/convergytics.webp'
import genpact from './infinite/genpact.webp'
import Google from './infinite/Google.webp'
import groww from './infinite/groww.webp'
import HDFC from './infinite/HDFC.webp'
import Kmart from './infinite/Kmart.webp'
import KMGP from './infinite/KMGP.webp'
import mahindra from './infinite/mahindra.webp'
import Marketine from './infinite/Marketine.webp'
import Microsoft from './infinite/Microsoft.webp'
import MIQ from './infinite/MIQ.webp'
import Netflix from './infinite/Netflix.webp'
import Novartis from './infinite/Novartis.webp'
import paisabazzar from './infinite/paisa bazzar.webp'
import Quantiphi from './infinite/Quantiphi.webp'
import Target from './infinite/Target.webp'
import Tatainsight from './infinite/TATA Insight.webp'
import TATA from './infinite/tata steel.webp'
import ValueLabs from './infinite/ValueLabs.webp'
import Vedantu from './infinite/Vedantu.webp'
import Walmart from './infinite/Walmart.webp'
import yesbank from './infinite/Yes Bank.webp'
import Zigram from './infinite/Zigram.webp'
import Zip from './infinite/Zip.webp'
import Zomato from './infinite/Zomato.webp'


export default function Course() {
 


  const [state, setstate] = useState( [{
      "id":1,
      'title':'Introduction to Computer Programming',
      "subTitle":"Add-On : Pair Programming using ChatGPT",
      "topic":'Topic',
      't1':'Introduction to Python Programming',
      't2':'Data Types in Python',
      "t3":"In-Built Functions & Methods",
      "t4":"Indexing & Slicing",
      "t5":"Operators in Data Types",
      "t6":"Statements, Indentation & Conditionals",
      "t7":"Loops & Iterations",
      "t8":"Conditional & Infinite Looping",
      "t9":"Custom Functions in Python",
      "t10":"Advanced Looping Concepts",
    },{
      "id":2,
      'title':'Numerical Programming in Python',
      "subTitle":"Add-On : Data Wrangling using Pandas AI",
      "topic":'Mastering Data Wrangling',
      't1':'Advanced Data Wrangling Concepts',
      't2':'Data Wrangling on Different Data Formats',
      "t3":"Data Visualization with Matplotlib & Seaborn",
      "t4":"Data Vizualization Tips & Variable Analysis",
      "t5":"Exploratory Data Analysis | Ecommerce Case Study",
      "t6":"Data Modelling via APIs",
      "t7":"Interactive Visuals with Plotly",
      "t8":"Streamlit Dashboards with dynamic Interactions",
      "t9":"",
      "t10":"",
    },{
      "id":3,
      'title':'Relational Databases',
      "subTitle":"Add-On : ChatGPT for writing SQL queries",
      "topic":'Fundamentals of SQL Query',
      't1':'Dealing With Multiple Tables',
      't2':'Advanced SQL Joins',
      "t3":"Type Casting & Math Functions",
      "t4":"DateTime Functions",
      "t5":"String Functions",
      "t6":"Window Functions",
      "t7":"Complex queries using CTE & Connecting with Azure Database",
      "t8":"Data Exploration With SQL & Python",
      "t9":"Database Management & Schema Design",
      "t10":"",
    },{
      "id":4,
      'title':"Data Visualization Tools",
      "subTitle":"Add-On : Creating presentations using ChatGPT",
      "topic":'',
      't1':'Data Exploration with In-Built Functions',
      't2':'Excel Dashboarding',
      "t3":"PowerQuery in Excel",
      "t4":"Introduction to PowerBI & ETL",
      "t5":"Dashboarding Concepts with Power BI",
      "t6":"Introduction to DAX",
      "t7":"Advanced DAX Functions",
      "t8":"Getting Started with Tableau Ecosystem",
      "t9":"Dashboarding & Storytelling with Tableau",
      "t10":"",
    },{
      "id":5,
      'title':"Applied Business Analytics",
      "subTitle":"Add-On : Leveraging AI for equations simplified via ChatGPT",
      "topic":'',
      't1':   'Probability_Theory_and_Random_Variables',
      't2':   'Summary_Statistics',
      "t3":   "Probability_Distributions",
      "t4":   "Sampling_and_Statistical_Inference",
      "t5":   "Concept_of_Confidence",
      "t6":   "Hypothesis_Testing",
      "t7":   "Business_Metrics_101",
      "t8":   "Web_Analytics",
      "t9":   "Experiment_Design",
      "t10":  "Workflow_Management_Automated_Code_Execution",
    },{
      "id":6,
      'title':'Machine Learning & Generative AI with Microsoft Azure',
      "subTitle":"Add-On : Use AI to create AI",
      "topic":'',
      't1':'Supervised_Learning_Regression',
      't2':'Supervised_Learning_Classification',
      "t3":'Tree_Based_Model',
      "t4":'Bagging_Boosting_and_Non_Linear_Algorithms',
      "t5":'Data_Preparation_for_ML_Models_and_Cross_Validation',
      "t6":'Feature_Engineering_and_Model_Interpretation',
      "t7":'Unsupervised_Learning',
      "t8":'Customer_Segmentation_Case_Study',
      "t9":'Time_Series_Analysis',
      "t10":'Recommender_Systems',
    }
  ]);
  const [onedata, setonedata] = useState({});
  const [languageColl, setlanguageColl] = useState([
    {'img':'python.webp',
      'title':'Python'
    },
    {'img':'pandas.webp',
      'title':'Pandas'
    },
    {'img':'numpy.webp',
      'title':'NumPy'
    },
    {'img':'matplotlib.webp',
      'title':'Matplotlib'
    },
    {'img':'SQL.webp',
      'title':'SQL'
    },
    {'img':'tableau.webp',
      'title':'Tableau'
    },
    {'img':'power-bi.webp',
      'title':'PowerBI'
    },
    {'img':'git.webp',
      'title':'GIT'
    },
    {'img':'github.webp',
      'title':'GitHub'
    },
    {'img':'scikit.3c999cb6.svg',
      'title':'Scikit-Learn'
    },
    {'img':'xgboost.ce4f3649.svg',
      'title':'XGBoost'
    },
    {'img':'NLTK.webp',
      'title':'NLTK'
    },
    {'img':'scipy.0c3c9f53.svg',
      'title':'SciPy'
    },
    {'img':'pytorch.webp',
      'title':'PyTorch'
    },
    {'img':'tensor-flow.webp',
      'title':'TensorFlow'
    },
    {'img':'gpt.webp',
      'title':'Chat GPT'
    },
    {'img':'claude.58786435.svg',
      'title':'Claude'
    },
    {'img':'langchain.2852fd57.svg',
      'title':'LangChain'
    },
    {'img':'hugging-face.318578d3.svg',
      'title':'Hugging Face'
    },
    {'img':'midway-journey.97430ae0.svg',
      'title':'MidJourney'
    },
    {'img':'gemini.cb778bb8.svg',
      'title':'Gemini'
    },
    {'img':'dall-e.a621d4c5.svg',
      'title':'Dall-E'
    },
    {'img':'runway-ml.43c8523a.svg',
      'title':'Runway ML'
    },
    {'img':'gradio.4e207dfb.svg',
      'title':'Gradio'
    },
    

  ]);

  function Introduction() {
      setonedata(state[0])
      console.log(onedata);
      
  }

  function Numerical () {
    setonedata(state[1])
    console.log(onedata);
  }

  function Relational() {
     setonedata(state[2])
     console.log(onedata);
  }

  function Data() {
      setonedata(state[3])
      console.log(onedata);
  }

  function Applied() {
     setonedata(state[4])
     console.log(onedata);
  }

  function Machine() {
    setonedata(state[5])
    console.log(onedata);
  }
  useEffect(() => {
    
    setonedata(state[0])
  }, []);



  
  return (
    <>
    <Header></Header>
   
   <div className="row hero-section text-white bg-black">
    <div className="col-md-6">
    <div className=" bg-black p-4">
          <h1>Certification in Full Stack Data Science and AI</h1>
          <p className="rating">4.6+ ★★★★☆ (22534 Reviews)</p>
          <p className="cohort">Next Cohort Starting On 14th January</p>
          <div className="collaborations">
              <p className="text-white">In collaboration with:</p>
              <div className="row">
              <div className="col-3"> <img className="bg-white rounded-4" width={'100%'} src="/src/features/courses/logos/IIT Guwahati.webp" alt="E&ICT Academy IIT Guwahati" />
              </div>
              <div className="col-3"><img className="bg-white rounded-4" width={'100%'} src="/src/features/courses/images/microsoft.png" alt="Microsoft" /></div>
              </div>
          </div>
          
          <ul className="features" >
            <li>Advanced Certification from E&amp;ICT Academy, IIT Guwahati</li>
            <li>6 months part-time program with online classes</li>
            <li>Revised curriculum for post Chat-GPT era</li>
            <li>No prior coding experience required</li>
            <li>Suitable for final years, graduates, and early professionals</li>
          </ul>
          <div className="buttons">
            <a href="#" className="btn explore">Explore Program</a>
            <a href="#" className="btn enroll">Enroll Now</a>
          </div>
    </div>

    </div>
    <div className="col-md-6">
    <img className="rounded-5 card m-0 p-0 shadow h-50" width={'100%'} src="/src/features/courses/images/AI-full-stack.jpg" alt="IIT Guwahati Campus" />
  
    
    </div>
   </div>
    
        






      <section className="success-stories" style={{backgroundColor: '#FFFFFF'}}>
        <h1 style={{color:'black'}}>Success <span>Stories</span></h1>
        <p>Meet our graduates who have not only secured new and better jobs but have also experienced significant salary hikes.</p>
        <div className="stories-container">
            <div className="story-card">
              <div className="story-header">
              </div>
              <div className="story-content">
                <img  className='bg-danger' src="/src/features/courses/person/Arkoparavo_Pradhan_e68d486271.webp" alt="Vanshika Raj" />
                <div className="story-info">
                  <div className="d-flex">
                      <span className="status">Fresher →</span>               
                      <span className="position">ML Engineer</span>               
                  </div>
                  <span className="linkedin-icon">LinkedIn</span>
                  <h2>Vanshika Raj</h2>
                  <p>"The program offered here is robust, well-guided and most importantly, has proven to work."</p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>

            <div className="story-card">
              
              <div className="story-content">
                <img  className='bg-danger' src="/src/features/courses/person/calender_front_color_13231195c8.webp" alt="Arkoparavo Pradhan" />
                <div className="story-info">
                  <div className="d-flex">
                  <span className="status">Fresher →</span>
                  <span className="position">Data Analyst</span>
                  {/* <span className="company">TATA STEEL</span> */}
                  </div>
                  <span className="linkedin-icon">LinkedIn</span>
                  <h2>Arkoparavo Pradhan</h2>
                  <p>"The best part about this program is that it is designed, so students don't feel overwhelmed."</p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>

            <div className="story-card">
              
              <div className="story-content">
                <img  className='bg-danger'  src="/src/features/courses/person/Kamya_Malhotra_removebg_preview_de470a6afc.webp" alt="Kamya Malhotra" />
                
                <div className="story-info">
                  <div className="d-flex">
                    <span className="status">Fresher →</span>
                    <span className="position">Stat Programmer</span>
                  
                  </div>
                  {/* <span className="company">Company Logo</span> */}
                  <span className="linkedin-icon">LinkedIn</span>
                  <h2>Kamya Malhotra</h2>
                  <p>"My experience at AlmaBetter was fabulous, and I'll always be thankful to the entire AlmaBetter team."</p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
        </div>
      </section>
      <br /><br /><br />


{/*   Introduction to Computer Programming */}
      <section>
      <div className="bg-black text-white p-0 mt-5">
              <h1 className="text-center display-5 fw-bolder text-white">
                    Curriculum and 
                    <a href="" className="text-danger">Learning Track</a></h1>
              <center className="p-5 mb-5 h5">
              We have designed our data science course with curriculum and learning pedagogy based on what top tech companies expect when you join them after you graduate. The curriculum focuses on learning by doing including solving real world problems and working on real industry level projects.
              </center>

              <center>
              <div align="center" class="container p-0 m-0" >
       



              <div className="col-md-4">
              <div class="section text-start " style={{position:"relative",left:'40%'}} >
                  
                  <div class="course " onClick={Introduction} >
                      <div  class=" course-number ">01 &ensp;</div>
                      <div class="course-info p-0 m-0">
                          <h6 className="title text-white">Introduction to Computer Programming</h6>
                          <p class="add-on">Add-On: Pair Programming using ChatGPT</p>
                      </div>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-gray-400 group-hover:text-white block" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>
                  </div>


                  <div class="course " onClick={Numerical}>
                      <div class="course-number">02 &ensp;</div>
                      <div class="course-info">
                          <h6 className="title text-white">Numerical Programming in Python</h6>
                          <p class="add-on">Add-On: Data Wrangling using Pandas AI</p>
                      </div>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-gray-400 group-hover:text-white block" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>
                  </div>
                  
                  <div class="course " onClick={Relational}>
                      <div class="course-number">03 &ensp;</div>
                      <div class="course-info">
                          <h6 className="title text-white">Relational Databases</h6>
                          <p class="add-on">Add-On: ChatGPT for writing SQL queries</p>
                      </div>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-gray-400 group-hover:text-white block" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>
                  </div>
                  
                  <div class="course " onClick={Data}>
                      <div class="course-number">04 &ensp;</div>
                      <div class="course-info">
                          <h6 className="title text-white">Data Visualization Tools</h6>
                          <p class="add-on">Add-On: Creating presentations using ChatGPT</p>
                      </div>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-gray-400 group-hover:text-white block" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>
                  </div>
                  
                  <div class="course " onClick={Applied}>

                      <div class="course-number">05 &ensp; </div>
                      <div class="course-info">
                          <h6 className="title text-white">Applied Business Analytics</h6>
                          <p class="add-on">Add-On: Leveraging AI for equations simplified via ChatGPT</p>
                      </div>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-gray-400 group-hover:text-white block" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>
                  </div>
                  
                  <div class="course " onClick={Machine} >
                      <div class="course-number">06 &ensp;</div> 
                      <div class="course-info">
                          <h6 className="title text-white">Machine Learning & Generative AI with Microsoft Azure</h6>
                          <p class="add-on">Add-On: Use AI to create AI</p>
                      </div>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-gray-400 group-hover:text-white block" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>
                  </div>

              </div>
              </div>

        <div className="col-md-1"></div>

       <div className="col-md-4 bggray p-0 m-0 bg-dark rounded-3">
             <div style={{display:'flex'}} className="row ">
                  <div className="row p-4">
                      <div className="col-md-4 ">
                          <h4>Topics</h4>
                      </div>
                      <div className="col-md-8 text-end ">
                          Dutation : <label htmlFor="" className="text-danger">1 month</label>
                      </div>
                      
                  </div>
             
              </div>
             <hr />
             <div className='scrollview ' style={{overflow:'scroll',position:"relative",height:'300px', scrollbarWidth: 'none'}}>
             <ul className="text-start" >
               <li>• {onedata.t1}</li><br /><br />
               <li>• {onedata.t2}</li><br /><br />
               <li>• {onedata.t3}</li><br /><br />
               <li>• {onedata.t4}</li><br /><br />
               <li>• {onedata.t5}</li><br /><br />
               <li>• {onedata.t6}</li><br /><br />
               <li>• {onedata.t7}</li><br /><br />
               <li>• {onedata.t8}</li><br /><br />
               <li>• {onedata.t9}</li><br /><br />
               <li>• {onedata.t10}</li><br /><br />
             </ul>
             </div>
       </div>
       <div className="col-md-1"></div>

   </div>
</center>
            
</div>

     
        <div className="bg-black pt-5">
        
<hr />
       <center>
       <div className="row container ">
        {languageColl.map((item,index)=>
        <>
        <div align='center' className="col-md-2 col-4 mb-5">
                <img className=" rounded-2 p-1 imgsizehover"  src={item.img} width={'40px'} height='40px' alt="" />
                
                <p className="text-white text-center ">&ensp; {item.title}</p>
          </div>
        </>)}
          
        </div>
       </center>
        
              
        </div>
      </section>
{/*   Introduction to Computer Programming  end */}



  <section>
  <div className="certification-box mb-5">
        <br /><br />
        
        <h1 style={{color:'black', marginLeft:'33%',fontSize:'28px', textTransform:'capitalize'}}>unlock your data science  
        <span style={{color: 'red'}}> certifiction</span></h1>
        <br />      
        <p  className="text-center">elevate your career with esteemed certifiction, unlock new oppertunites and demonstrate your mastery in data science.</p>
        
        <div className="Certificate-option">
          <h3 className="border-bottom">E&amp;ITC, IIT Guwahati</h3>
          <h3 className="data-iit border-bottom"> Microsoft</h3>
          <h3 className="data-iit border-bottom">almaBetter</h3>
        </div>
        <div className="row Certificate-option">
          <div className="col-md-5">
            <h6 className=""><strong>Advanced Certification from E&amp;ICT <br /> Academy, IIT Guwahati</strong></h6>
            
            <p className="">Upon successfully completing this program,<br />
              you'll earn an Advanced Certiification in Full <br />
              stack Data Science that is jointly offered by E&amp;ICT <br />
              Academy, IIT Guwahati as the Knowledge Partner.
              </p>
            <br />
            
            <h6 className="">
              <strong>Guest lectures from IIT G faculty</strong>
            </h6>
            
            <p className="">Access to lectures from top faculties of IIT Guwahati</p>
        
            <h6 className=""><strong>2-day campus immersion at IIT Guwahati <br />
            (optional)</strong></h6>
            
            <p className="">Experential learning opportunity at IIT Guwahati campus</p>
            <br />
            <div align='' className="m-start" >
              <button className="button-explore p-2 me-2 rounded-3"> explore programe</button> 
              <button className="button-download p-1  rounded-3"> download brochure</button>
            </div>
          </div>
          <div className="col-md-5">
            <img width={'100%'} className="" src="https://marketplace.canva.com/EAFtLMllF3s/1/0/1600w/canva-blue-and-gold-simple-certificate-zxaa6yB-uaU.jpg" alt />
          </div>
        </div>
      </div>
  </section>


      
   
      {/* Placement Section */}
      <section className="placement-section">
        <h2>
          <span>Placements</span></h2>
        <p>Kick start your Data Science career today with our flagship program in collaboration with E&amp;ICT IIT Guwahati. Learn Data Science with top engineers. Challenge yourself by building real-time projects.</p>
        <div className="stats">
          <div className="stat-item">
            <h3>30,000+</h3>
            <p>Students</p>
          </div>
          <div className="stat-item">
            <h3>40 LPA</h3>
            <p>Highest Salary</p>
          </div>
          <div className="stat-item">
            <h3>15 LPA</h3>
            <p>Average Salary</p>
          </div>
          <div className="stat-item">
            <h3>700+</h3>
            <p>Hiring Partners</p>
          </div>
        </div>
        <a href="#" className="download-btn">Download Placement Report</a>
      </section>



     
       
     
{/* marquee */}
<section className="">

<h1 className="text-black " style={{marginLeft:"13%"}}>Who we've helped</h1>

<marquee scrollamount="15" behavior="alternate" direction="right"   className='' style={{marginTop:"-0%"}} >
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={accenture} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={amazon} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={biz2credit} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={blenheim} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={brigei2i} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={capgemini} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={citi} /></label>
        
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={converhytics} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={genpact} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Google} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={groww} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={HDFC} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Kmart} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={KMGP} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={mahindra} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Marketine} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Microsoft} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={MIQ} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Netflix} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Novartis} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={paisabazzar} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Quantiphi} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Target} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Tatainsight} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={TATA} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={ValueLabs} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Vedantu} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Zigram} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Zip} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Zomato} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Walmart} /></label>
      

</marquee>

<marquee scrollamount="15" behavior="alternate" direction="left"  className='' style={{marginTop:"-7%"}} >
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={accenture} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={amazon} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={biz2credit} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={blenheim} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={brigei2i} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={capgemini} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={citi} /></label>
        
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={converhytics} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={genpact} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Google} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={groww} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={HDFC} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Kmart} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={KMGP} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={mahindra} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Marketine} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Microsoft} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={MIQ} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Netflix} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Novartis} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={paisabazzar} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Quantiphi} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Target} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Tatainsight} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={TATA} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={ValueLabs} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Vedantu} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Zigram} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Zip} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Zomato} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Walmart} /></label>
      

</marquee>

<marquee scrollamount="15" behavior="alternate" direction="right"  className='' style={{marginTop:"-7%"}}>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Vedantu} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Zigram} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Zip} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Zomato} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Walmart} /></label>
      
        
       <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Marketine} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Microsoft} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={accenture} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={amazon} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={biz2credit} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={blenheim} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={brigei2i} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={capgemini} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={citi} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={converhytics} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={genpact} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Google} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={groww} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={HDFC} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Kmart} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={KMGP} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={mahindra} /></label>
        
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={MIQ} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Netflix} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Novartis} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={paisabazzar} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Quantiphi} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Target} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={Tatainsight} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={TATA} /></label>
        <label className=""><img className="rounded-3 bg-white p-2 ms-5" width={'140px'} height={'100px'} src={ValueLabs} /></label>
        

</marquee>


</section>
{/* marquee end */}
        
     








  
   
<div style={{backgroundColor:'black' , width:'100%',  color:'white'}}>
      <div  align='center'>
        <br />
        <h1  style={{fontSize:'32px', textTransform:'capitalize'}}>100% job assurance with <span className="text-danger "><u>allemx career track</u></span></h1>
        <sub  className="">We have designed a dedicated data science career track along with career support services to help you become industry ready and make sure you land your dream job!</sub>
        
      </div>
      <h2 className="job-headmain">AlmaX Eligibility Requirements</h2>
      <div className="cert-cards m-4 p-5">
        <div className="cert-cards-in m-3">
          <img className="cert-img" src={graduation}/>
          <h3 className="cert-head">Graduation Degree</h3>
          <p className="cert-para">Must be a graduate at the time of AlmaX <br /> enrollment</p>
        </div>
        <div className="cert-cards-in m-3">
          <img className="cert-img" src={foundation}/>
          <h3 className="cert-head">Completed the Foundation Track</h3>
          <p className="cert-para">Completed the foundation track of the course.</p>
        </div>
        <div className="cert-cards-in m-3">
          <img className="cert-img" src={assement}/>
          <h3 className="cert-head">Completed the foundation track of the course.</h3>
          <p className="cert-para">Take entrance exam for AlmaX</p>
        </div>
      </div>
    
  
      <br />
      <h2 className="almax-carrer-services">AlmaX carrer services</h2>
   

      <div className="almax-div">
        <div className="cert-cards p-5">
          <div className="cert-cards-in m-3">
            <img className="cert-img" src={support}/>
            <h3 className="cert-head">Placement Support</h3>
            <p className="cert-para">Complete support from our dedicated placement team until you get a job</p>
          </div>
          <div className="cert-cards-in m-3">           
            <img className="cert-img" src={resume}/>
            <h3 className="cert-head">Resume Building</h3>
            <p className="cert-para">Resume sharing in our network of 700+ hiring partners</p>
          </div>
          <div className="cert-cards-in m-3">
            <img className="cert-img" src={application}/>
            <h3 className="cert-head">AlmaX Job Application</h3>
            <p className="cert-para">End to end application tracking of multiple interview rounds</p>
          </div>
        </div>
        
        <div className="cert-cards p-5 ">
          <div className="cert-cards-in m-3">
            <img className="cert-img" src={interview}/>
            <h3 className="cert-head">Mock Interviews</h3>
            <p className="cert-para">Professional mock interviews assistance</p>
          </div>
          <div className="cert-cards-in m-3">
            <img className="cert-img" src={course}/>
            <h3 className="cert-head">Dedicated Career Coach</h3>
            <p className="cert-para">Expert data science career coaches to guide you throughout the program</p>
          </div>
          <div className="cert-cards-in m-3">
            <img className="cert-img" src={champion}/>
            <h3 className="cert-head">Growth Champion</h3>
            <p className="cert-para">Know learning strategies and get mentorship from our top Alumni.</p>
          </div>
        </div>
      </div>


      <div>
        <div align='center'>
        <h5><strong>Land your dream job at one of the leading tech companies</strong></h5>
        <img  className="btn-secondary rounded-3 p-2" width={'80%'} src="/src/features/courses/images/companies.png" alt="" />
        <br />
        <br />
        <u>Go to Program Fee section to know Career Services Fee.</u><br /><br />
        <button className="btn-danger rounded-3 p-1">Explore Program</button><br /><br />
        </div>
      </div>
  </div>
      <br />



     
      <h1 className="a-program">A flex program created</h1>
      <h1 className="just-for-u"><u className="">Just for you!</u></h1>

<div align='justify' className="row ms-5 m-auto text-black">
  <div className="col-md-6 p-0 m-3 first-row">
      <div className="row ">
        <div className="col-md-3 m-auto">
        <img width='100%' src="/src/features/courses/images/Icon_1_8d39ad9702.webp" />
        </div>
        <div className="col-md-9 p-4">
          <strong>What if I miss a class?</strong><br />
          <i>Our class timings are 8 PM to 10:30 PM. In case you miss a
            class, you can watch the recording later. If you miss multiple
            classes, you can switch to another Cohort.</i>
        </div>
      </div>
  </div>
  <div className="col-md-6 p-0 m-3 first-row">
      <div className="row ">
        <div className="col-md-3 m-auto">
        <img width='100%' src="/src/features/courses/images/icon_2_4b29c8db5a.webp" alt />
        </div>
        <div className="col-md-9 p-4">
          <strong>What if I miss a class?</strong><br />
          <i>Our class timings are 8 PM to 10:30 PM. In case you miss a
            class, you can watch the recording later. If you miss multiple
            classes, you can switch to another Cohort.</i>
        </div>
      </div>
  </div>
  <div className="col-md-6 p-0 m-3 first-row">
      <div className="row ">
        <div className="col-md-3 m-auto">
        <img width='100%' src="/src/features/courses/images/icon_3_c030482cc1.webp" alt />
        </div>
        <div className="col-md-9 p-4">
          <strong>What if I miss a class?</strong><br />
          <i>Our class timings are 8 PM to 10:30 PM. In case you miss a
            class, you can watch the recording later. If you miss multiple
            classes, you can switch to another Cohort.</i>
        </div>
      </div>
  </div>
  <div className="col-md-6 p-0 m-3 first-row">
      <div className="row ">
        <div className="col-md-3 m-auto">
        <img width='100%' src="/src/features/courses/images/icon4_ef18ddc009.webp" alt />
        </div>
        <div className="col-md-9 p-4">
          <strong>What if I miss a class?</strong><br />
          <i>Our class timings are 8 PM to 10:30 PM. In case you miss a
            class, you can watch the recording later. If you miss multiple
            classes, you can switch to another Cohort.</i>
        </div>
      </div>
  </div>
</div>
       

  <div className="Buttons"> 
    <button className="program-button me-4" style={{marginLeft: '150px'}}>
      <span className="button_top"> Download brochure </span>
    </button>
    <button className="program-button2">
      <span className="button_top2"> Download Placement Report </span>
    </button>
  </div>
    














        <h1 className="course-fees">Course <span className="ms-0 job-headu"><u>fees</u></span></h1>
        <h1 className=""><u ></u></h1>
        <br />
        <br />
        <div className="feeeees">
          <button className="Tution-fees"><u>Tution Fees</u></button>
          <button className="career-fees"><u>Career Services Fees</u></button>
        </div>
        

        <div align='center' className="d-flex " style={{marginLeft:"10rem"}}>
          <div className="card  me-3" style={{width:"40%",height:"100%"}}>
            <div className="">
              <p className="pricing-plan">Premium</p>
              <div className="price-value" data-currency="$ USD" data-currency-simple="USD">
                <p className="price-company">AlmaBetter + Microsoft</p>
                <p className="price-number">Rs.<span className="price-integer">50,000</span>/mo</p>
              </div>
              <div className="pricing-note">*Pay in easy EMIs starting at INR 7000 per month.</div>
              <ul className="check-list" role="list">
                <li className="check-list-item">
                  <svg version={1.0} preserveAspectRatio="xMidYMid meet" height={16} viewBox="0 0 30 30.000001" zoomAndPan="magnify" width={16} xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(102, 78, 255)'}}>
                    <defs>
                      <clipPath id="id1">
                        <path fill="#664eff" clipRule="nonzero" d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656" />
                      </clipPath>
                    </defs>
                    <g clipPath="url(#id1)">
                      <path fillRule="nonzero" fillOpacity={1} d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125" fill="#664eff" />
                    </g></svg>Intensive data science curriculum covering <br />basic  to advance concepts
                </li>
                <li className="check-list-item">
                  <svg version={1.0} preserveAspectRatio="xMidYMid meet" height={16} viewBox="0 0 30 30.000001" zoomAndPan="magnify" width={16} xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(102, 78, 255)'}}>
                    <defs>
                      <clipPath id="id1">
                        <path fill="#664eff" clipRule="nonzero" d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656" />
                      </clipPath>
                    </defs>
                    <g clipPath="url(#id1)">
                      <path fillRule="nonzero" fillOpacity={1} d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125" fill="#664eff" />
                    </g></svg>100+ Live Data Science classes, 8 PM to 10:30 <br />PM.  Lifetime access to all the class recordings
                </li>
                <li className="check-list-item">
                  <svg version={1.0} preserveAspectRatio="xMidYMid meet" height={16} viewBox="0 0 30 30.000001" zoomAndPan="magnify" width={16} xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(102, 78, 255)'}}>
                    <defs>
                      <clipPath id="id1">
                        <path fill="#664eff" clipRule="nonzero" d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656" />
                      </clipPath>
                    </defs>
                    <g clipPath="url(#id1)">
                      <path fillRule="nonzero" fillOpacity={1} d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125" fill="#664eff" />
                    </g></svg>20+ capstone data science projects &amp; 1000+ <br />coding problems and assessments
                </li>
                <li className="check-list-item">
                  <svg version={1.0} preserveAspectRatio="xMidYMid meet" height={16} viewBox="0 0 30 30.000001" zoomAndPan="magnify" width={16} xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(102, 78, 255)'}}>
                    <defs>
                      <clipPath id="id1">
                        <path fill="#664eff" clipRule="nonzero" d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656" />
                      </clipPath>
                    </defs>
                    <g clipPath="url(#id1)">
                      <path fillRule="nonzero" fillOpacity={1} d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125" fill="#664eff" />
                    </g></svg>50+ mock interviews with dedicated career coaches
                </li>
                <li className="check-list-item">
                  <svg version={1.0} preserveAspectRatio="xMidYMid meet" height={16} viewBox="0 0 30 30.000001" zoomAndPan="magnify" width={16} xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(102, 78, 255)'}}>
                    <defs>
                      <clipPath id="id1">
                        <path fill="#664eff" clipRule="nonzero" d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656" />
                      </clipPath>
                    </defs>
                    <g clipPath="url(#id1)">
                      <path fillRule="nonzero" fillOpacity={1} d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125" fill="#664eff" />
                    </g></svg>Dual Certification
                </li>
              </ul>
              <br />
              <button className="button ">Enroll now</button>
              <br />
              <br />
              <button className="button2"> Talk to our admission team</button>
            </div>
          </div>


          <div className="card " style={{width:"40%",height:"100%"}}>
            <div className="">
              <p className="pricing-plan">Premium</p>
              <div className="price-value" data-currency="$ USD" data-currency-simple="USD">
                <p className="price-company">AlmaBetter + Microsoft</p>
                <p className="price-number">Rs.<span className="price-integer">50,000</span>/mo</p>
              </div>
              <div className="pricing-note">*Pay in easy EMIs starting at INR 7000 per month.</div>
              <ul className="check-list" role="list">
                <li className="check-list-item">
                  <svg version={1.0} preserveAspectRatio="xMidYMid meet" height={16} viewBox="0 0 30 30.000001" zoomAndPan="magnify" width={16} xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(102, 78, 255)'}}>
                    <defs>
                      <clipPath id="id1">
                        <path fill="#664eff" clipRule="nonzero" d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656" />
                      </clipPath>
                    </defs>
                    <g clipPath="url(#id1)">
                      <path fillRule="nonzero" fillOpacity={1} d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125" fill="#664eff" />
                    </g></svg>Intensive data science curriculum covering <br />basic  to advance concepts
                </li>
                <li className="check-list-item">
                  <svg version={1.0} preserveAspectRatio="xMidYMid meet" height={16} viewBox="0 0 30 30.000001" zoomAndPan="magnify" width={16} xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(102, 78, 255)'}}>
                    <defs>
                      <clipPath id="id1">
                        <path fill="#664eff" clipRule="nonzero" d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656" />
                      </clipPath>
                    </defs>
                    <g clipPath="url(#id1)">
                      <path fillRule="nonzero" fillOpacity={1} d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125" fill="#664eff" />
                    </g></svg>100+ Live Data Science classes, 8 PM to 10:30 <br />PM.  Lifetime access to all the class recordings
                </li>
                <li className="check-list-item">
                  <svg version={1.0} preserveAspectRatio="xMidYMid meet" height={16} viewBox="0 0 30 30.000001" zoomAndPan="magnify" width={16} xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(102, 78, 255)'}}>
                    <defs>
                      <clipPath id="id1">
                        <path fill="#664eff" clipRule="nonzero" d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656" />
                      </clipPath>
                    </defs>
                    <g clipPath="url(#id1)">
                      <path fillRule="nonzero" fillOpacity={1} d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125" fill="#664eff" />
                    </g></svg>20+ capstone data science projects &amp; 1000+ <br />coding problems and assessments
                </li>
                <li className="check-list-item">
                  <svg version={1.0} preserveAspectRatio="xMidYMid meet" height={16} viewBox="0 0 30 30.000001" zoomAndPan="magnify" width={16} xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(102, 78, 255)'}}>
                    <defs>
                      <clipPath id="id1">
                        <path fill="#664eff" clipRule="nonzero" d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656" />
                      </clipPath>
                    </defs>
                    <g clipPath="url(#id1)">
                      <path fillRule="nonzero" fillOpacity={1} d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125" fill="#664eff" />
                    </g></svg>50+ mock interviews with dedicated career coaches
                </li>
                <li className="check-list-item">
                  <svg version={1.0} preserveAspectRatio="xMidYMid meet" height={16} viewBox="0 0 30 30.000001" zoomAndPan="magnify" width={16} xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(102, 78, 255)'}}>
                    <defs>
                      <clipPath id="id1">
                        <path fill="#664eff" clipRule="nonzero" d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656" />
                      </clipPath>
                    </defs>
                    <g clipPath="url(#id1)">
                      <path fillRule="nonzero" fillOpacity={1} d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125" fill="#664eff" />
                    </g></svg>Dual Certification
                </li>
              </ul>
              <br />
              <button className="button ">Enroll now</button>
              <br />
              <br />
              <button className="button2"> Talk to our admission team</button>
            </div>
          </div>
        </div>
      
   
    <br />
    <br />

    
    
    

    
    

   <Footer></Footer>





</>
  );
}
