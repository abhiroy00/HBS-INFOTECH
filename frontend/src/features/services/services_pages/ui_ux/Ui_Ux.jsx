import "./ui.css"
import Leipzig_Chargers from "../ui_ux/img/Leipzig_Chargers.mp4";
import { useEffect, useState } from "react";
import Slider from "./Slider";

import Header from "/src/comman/Header.jsx";

import Footer from "/src/comman/Footer.jsx";

export default function Ui_Ux() {

  useEffect(() => {

   
  }, []);



  const [state, setstate] = useState([
    {id:1,
      svg:"/src/features/services/services_pages/ui_ux/img/icon_Web-developers-orange.svg",
      title:'User-centered design',
      arrow:'Empathy and understanding are at the core of creating effective solutions. By actively listening to users’ needs, generating innovative ideas, crafting prototypes and testing our solutions, we build products that make a difference.'
    },
    {id:2,
      svg:"/src/features/services/services_pages/ui_ux/img/icon_Generative_AI_Development_Services_orange1.svg",
      title:'Usability testing',
      arrow:'By leveraging insights, our UX and UI design teams refine designs and transform the user experience into something extraordinary.'
    },
    {id:3,
      svg:"/src/features/services/services_pages/ui_ux/img/icon_Maximized-efficiency-orange.svg",
      title:'User research',
      arrow:'By gaining insights into user behaviors, motivations, and pain points, you can validate design assumptions and make informed decisions that lead to innovative solutions and exceptional user experiences.'
    },
    {id:4,
      svg:"/src/features/services/services_pages/ui_ux/img/icon_UX-UI-designers-orange.svg",
      title:'Interaction design',
      arrow:'Unleash your creativity and design user interactions that are both intuitive and captivating. Create navigation systems, buttons and forms that will leave a lasting impression on your users.'
    },
    {id:5,
      svg:"/src/features/services/services_pages/ui_ux/img/icon-automation-testing-services-manual-testing-orange.svg",
      title:'Information architecture (IA)',
      arrow:'Unlock the power of intuitive and user-friendly organization, as you structure your content, features and functionalities to boost accessibility and make it easy for users to find the content they’re looking for.'
    },
    {id:6,
      svg:"/src/features/services/services_pages/ui_ux/img/icon-data-science-forecast-business-and-development-risks-orange.svg",
      title:'Agile and Lean UX methodologies',
      arrow:'By prioritizing collaboration, flexibility and quick feedback loops, we ensure that UX design evolves in perfect harmony with development efforts, creating a seamless and inspiring user experience.'
    },
    {id:7,
      svg:"/src/features/services/services_pages/ui_ux/img/icon-ux-ui-design-orange.svg",
      title:'Wireframing and prototyping',
      arrow:'Testing designs early, gathering user feedback and validating usability and functionality are key to creating exceptional products.'
    },
    {id:8,
      svg:"/src/features/services/services_pages/ui_ux/img/icons-_Cloud-Consulting-Services-orange.svg",
      title:'Accessibility design',
      arrow:"At Software Sys, we believe that everyone deserves to feel empowered and included. That's why we offer accessibility audits, assistive technology testing and user testing with people with disabilities. Our goal is to promote compliance and inclusivity that makes products and services accessible to everyone."
    }]);

  

    const [data, setdata] = useState([
      {
        id:1,
        title:"What is the difference between UI and UX design?",
        desc:`UI and UX design are like two sides of the same coin, both equally important and yet distinct in their roles. The user interface (UI) is all about the look and feel of a product, while the user experience (UX) is all about how it works and how it impacts the user. In other words, the UI is the beauty that attracts the user, while the UX is the functionality that keeps them engaged.So, to create a truly great product, you need both great UI and UX design working together in perfect harmony. Remember, the best designs are not just visually stunning, they are also intuitive, easy to use and create a positive emotional connection with the user. `,
      },{
        id:2,
        title:"What principles does your team follow while designing products?",
        desc:`We use human-centered design principles. Our mission is to empower users to achieve their goals easily. We believe in the power of "white patterns" of interaction design, which build trust, foster emotional connections and drive ROI for stakeholders.`,
      },
      {
        id:3,
        title:"How do you know that your design is good?",
        desc:"Our designs are backed by data, which gives us confidence in delivering the best quality possible. We work tirelessly to ensure that every product, service, or website aligns perfectly with its intended goals. Our comprehensive mix of tests, both quantitative and qualitative, at every stage of the design process guarantees that our designs are always on the right track.",
      },{
        id:4,
        title:"Which businesses do you work with?",
        desc:"We are proud to have worked with various businesses and organizations in a multitude of industries, ranging from fintech to sports betting and more. Our unwavering commitment to providing exceptional service, coupled with our extensive skills and professionalism, has enabled us to consistently deliver outstanding results. Regardless of the size or reputation of the company we work with, we approach each project with the same level of dedication and strive to exceed expectations every time.",
      },
      {
        id:5,
        title:"Why is User Experience (UX) important for businesses?",
        desc:"UX is a powerful tool that can help you create a positive and memorable experience for your users. By understanding their needs and anticipating their thoughts and feelings, you can build a loyal customer base dedicated to your brand. Through a well-crafted UX, you can define customer pathways and pave the way for your business's success.",
      },{
        id:6,
        title:"What is UX & UI Design?",
        desc:"UX and UI design are related fields that focus on creating functional and user-friendly digital experiences in various environments. User experience (UX) design refers to the overall experience a user has when interacting with a product or service. User interface (UI) design creates software's visual and interactive elements, aiming to create an intuitive and appealing interface that is easy to use. When applied together under the watchful eye of UX and UI designers, companies will be able deliver functional and aesthetically pleasing products and services.",
      },{
        id:7,
        title:"How is Software Sys different from other companies that provide design services?",
        desc:`Good question! Software Sys is different from other design companies in a few ways. Firstly, we believe in open discussions with our clients to arrive at the best possible solution. We don't expect our clients to do all the work; we conduct our own research, engage in conversations with our clients and amongst ourselves and devise a plan to create a product that exceeds initial expectations.
              Secondly, we never make assumptions. Every idea or suggestion we present is backed up with data and reasoning.
               Thirdly, we treat each project as if it were our own. We go above and beyond to ensure that our clients are not just satisfied, but delighted. We understand that emotions drive everyone involved in a project, from the client to the design team to the end user, so we allow ourselves to be human and not just machines.`,
      }
    ]);
  return (
    <>
  <Header></Header>
<div className="text-black">
  
 <div className="fluid" style={{backgroundColor:"white"}}>
      <div className="backgroundimg w-100" >
        <div className="trnbox" style={{width:"100%",height:"600px"}}>
        <center className="m-auto mt-5 ">
        
          <svg width={'100px'} className="rcicel" xmlns="http://www.w3.org/2000/svg" id="Warstwa_1" version="1.1" viewBox="0 0 48 48"><defs></defs><path class="st0" d="M5.8,45l6.1-21.2h24.2l6.1,21.2M16.4,23.8l4.6-18.5c.8-3.1,5.1-3.1,5.9,0l4.6,18.5"></path></svg> 

          <div className="firNyj"> <h1 className="fRjBVq sm-header2">UX & UI Design Services</h1></div>


          <div className="dwCooV cCEOnh sm-body20 m-auto">
              Turn user expectations and your business goals into intuitive, memorable designs by working with user experience (UX) and user interface (UI) experts who put passion into products.&nbsp;
          </div>
        
        <br /><br /><br />
        <button className="btn btn-dark rounded-5">Contact Us</button>

        </center>


  

        
        {/* <div className="backgroundimg" style={{width:"100%",height:"600px"}}></div> */}
        </div>

        
      </div>

      
</div>


{/* Enhance your product with a top UI & UX design team */}
<div className="container-fluid  p-5">
          <div align="" className="row">
            <div className="col-md-4  mb-5">
              <h1 className="m-auto"><strong>Enhance your product with a top UI & UX design team</strong></h1>
            </div>
            
            <div className="col-md-8 pe-5">
                  <h5>We’re a team of UI & UX design experts with a track record of delivering exceptional experiences to our clients. Through continuous improvement and development, we’ve refined our design process so that we can quickly understand your business, learn your goals and wow your clients.</h5>
            </div>
          </div>
</div>
{/* Enhance your product with a top UI & UX design team End */}




<div align='justify' className="" >
        <div className="row ">
             <div className="col-md-3"></div>
              <div className="col-md-4 shadow rounded-3  cplcEN  ms-5" style={{marginLeft:"0"}}>
                      <svg width={'70px'} loading="lazy" decoding="async" data-nimg="1" className="sc-29fb4b30-2 " style={{color:'transparent'}}  xmlns="http://www.w3.org/2000/svg" id="Warstwa_1" data-name="Warstwa 1" viewBox="0 0 100 100"><defs></defs><g><g><path className="cls-1" d="m57.07,34.22c0,3.91-3.17,7.08-7.07,7.08s-7.08-3.17-7.08-7.08,3.17-7.08,7.08-7.08,7.07,3.17,7.07,7.08Z"></path><path className="cls-1" d="m40.75,81.04c-5.17,0-6.95-4.23-6.95-9.39v-13.75c0-5.17,4.23-9.4,9.39-9.4h13.61c5.17,0,9.4,4.23,9.4,9.4v13.75c0,5.17-1.78,9.39-6.95,9.39"></path><g><line className="cls-1" x1="59.33" y1="60.73" x2="59.33" y2="91.78"></line><line className="cls-1" x1="40.67" y1="60.73" x2="40.67" y2="91.78"></line></g></g><g><path className="cls-1" d="m32.96,34.22c0,3.91-3.17,7.08-7.07,7.08s-7.08-3.17-7.08-7.08,3.17-7.08,7.08-7.08,7.07,3.17,7.07,7.08Z"></path><path className="cls-1" d="m16.63,81.04c-5.17,0-6.95-4.23-6.95-9.39v-13.75c0-5.17,4.23-9.4,9.39-9.4h10.1"></path><line className="cls-1" x1="16.55" y1="60.73" x2="16.55" y2="91.78"></line></g><g><path className="cls-1" d="m67.04,34.22c0,3.91,3.17,7.08,7.07,7.08s7.08-3.17,7.08-7.08-3.17-7.08-7.08-7.08-7.07,3.17-7.07,7.08Z"></path><path className="cls-1" d="m83.37,81.04c5.16,0,6.94-4.23,6.94-9.39v-13.75c0-5.17-4.23-9.4-9.39-9.4h-10.1"></path><line className="cls-1" x1="83.45" y1="60.73" x2="83.45" y2="91.78"></line></g></g><g><path className="cls-1" d="m69.13,15.3c0,3.91-3.17,7.08-7.07,7.08s-7.08-3.17-7.08-7.08,3.17-7.08,7.08-7.08,7.07,3.17,7.07,7.08Z"></path><path className="cls-1" d="m45.02,15.3c0,3.91-3.17,7.08-7.07,7.08s-7.08-3.17-7.08-7.08,3.17-7.08,7.08-7.08,7.07,3.17,7.07,7.08Z"></path></g></svg> 
                      <h3 className=" dBoilV sm-header1">88%</h3>
                      <p className=" kyBtyV sm-body17">of internet users are less likely to return to a website after poor user experience.</p>               
              </div>
              <div className="col-md-5 ms-2 pt-4 " >
                {/* <video  autoPlay={true} muted src={Leipzig_Chargers} className="rounded-3 shadow"></video> */}
                <video   className="rounded-3 videoBorder videomobielview shadow" style={{width:"90%"}}>
                      <source className="" style={{width:"240%"}} src={Leipzig_Chargers} type="video/mp4" />
                </video>
              </div>
                
            
              
        </div>
        <br /><br /><br />
</div>

<hr />
{/* Data visualization  Card */}
<section className="sc-9e3861ef-1 gRDIGO" style={{backgroundColor:"rgb(248, 248, 248)"}}>
  <div align='justify' className="sc-953bb80d-0 ePPvGo">
    <div 
      className="sc-9e3861ef-4 cgNtKC"
      style={{
        marginLeft: 0,
        marginRight: 0,
        display: "flex",
        flexGrow: 0,
        flexShrink: 0,
        alignItems: "normal",
        justifyContent: "flex-start",
        flexFlow: "wrap"
      }}
    >
      <div
        style={{
          boxSizing: "border-box",
          minHeight: 1,
          position: "relative",
          paddingLeft: 0,
          paddingRight: 0,
          width: "66.6667%",
          flex: "0 0 66.6667%",
          maxWidth: "66.6667%",
          marginLeft: "0%",
          right: "auto",
          left: "auto"
        }}
      >
        <h2 className="sc-c25bae65-0 bjbLu sc-9e3861ef-3 iacRPG sm-header3">
          <span className="sc-9e3861ef-2 OfxfR">Our UI and UX services</span>
        </h2>
      </div>
    </div>
    <div className="row">
      <div className="col-md-8 mb-5 aaa" style={{}}>
     
        <div className=" bg-white rounded-4 ">
          <img alt="" loading="lazy" width={0} height={0} decoding="async" data-nimg={1} className="sc-0 bNepPj" sizes="100vw" src="/src/features/services/services_pages/ui_ux/img/service-1-our-UI-and-UX-services-1-768x399.webp" style={{ color: "transparent" }}
          />
          <div className="sc-2518156b-2 gpVdNd"> <h3 className="sc-c25bae65-0 bjbLu sc-2518156b-5 efAofw sm-header5">   Data visualization </h3> 
          <p className="sc-ca4a3661-6 greJTC sm-body15">   Present complex data in a visually compelling and understandable   format. Work with a design team that transforms raw data into   visual representations, such as charts, graphs, infographics and   interactive dashboards. </p>
          </div>
      
        </div>
      </div>
      <div className="col-md-4 mb-4 aaa">
        <div className=" bg-white rounded-4" >
          <img alt="" loading="lazy" width={0} height={0} decoding="async" data-nimg={1} className="sc-2518156b-0 bNepPj" sizes="100vw" src="/src/features/services/services_pages/ui_ux/img/service-2-UI-UX-consulting-768x388.png" style={{ color: "transparent" }}
          />
          <div className="sc-2518156b-2 gpVdNd"> <h3 className="sc-c25bae65-0 bjbLu sc-2518156b-5 efAofw sm-header5">  
          UI &amp; UX consulting </h3> <p className="sc-ca4a3661-6 greJTC sm-body15">   Design and build positive user experiences that are innovative,   functional and intuitive. We build interfaces that users truly   enjoy using.&nbsp; </p>
          </div>
        </div>
      </div>
      <div className="col-md-4  aaa">
        <div className=" bg-white rounded-4">
          <img alt="" loading="lazy" width={0} height={0} decoding="async" data-nimg={1} className="sc-2518156b-0 bNepPj" sizes="100vw" src="/src/features/services/services_pages/ui_ux/img/service-3-Web-app-design-768x388.png" style={{ color: "transparent" }}
          />
          <div className="sc-2518156b-2 gpVdNd"> <h3 className="sc-c25bae65-0 bjbLu sc-2518156b-5 efAofw sm-header5">   Web app design </h3> <p className="sc-ca4a3661-6 greJTC sm-body15">   Create a remarkable first impression and convert visitors into   customers. We craft designs that engage users by putting their   needs at the center of our efforts. From ideation to execution,   our design process ensures every product meets expectations and   makes an impression on the target audience. </p>
          </div>
        </div>
      </div>
      <div className="col-md-4  aaa">
        <div className=" bg-white rounded-4">
          <img alt="" loading="lazy" width={0} height={0} decoding="async" data-nimg={1} className="sc-2518156b-0 bNepPj" sizes="100vw" src="/src/features/services/services_pages/ui_ux/img/service-4-Mobile-app-design-768x401 (1).png" style={{ color: "transparent" }}
          />
          <div className="sc-2518156b-2 gpVdNd"> <h3 className="sc-c25bae65-0 bjbLu sc-2518156b-5 efAofw sm-header5">   Mobile app design </h3> <p className="sc-ca4a3661-6 greJTC sm-body15">   Implement a native app design process that brings joy to users,   developers and project managers alike. Our process results in   mobile solutions that deliver a fantastic user experience and   easy-to-use interfaces, so your products can attract more new   customers and boost engagement from existing users. </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-5 aaa">
        <div className=" bg-white rounded-4">
          <img alt="" loading="lazy" width={0} height={0} decoding="async" data-nimg={1} className="sc-2518156b-0 bNepPj" sizes="100vw" src="/src/features/services/services_pages/ui_ux/img/service-5-Cross-platform-experience-768x388.png" style={{ color: "transparent" }}
          />
          <div className="sc-2518156b-2 gpVdNd"> <h3 className="sc-c25bae65-0 bjbLu sc-2518156b-5 efAofw sm-header5">   Cross-platform experience{" "} </h3> <p className="sc-ca4a3661-6 greJTC sm-body15">   Develop solutions that reach your target audience wherever they   are. We design an experience that users can understand and   smoothly interact with on any device: smartphones, laptops,   tablets and smart TVs. </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4 aaa">
        <div className=" bg-white rounded-4">
          <img alt="" loading="lazy" width={0} height={0} decoding="async" data-nimg={1} className="sc-2518156b-0 bNepPj" sizes="100vw" src="/src/features/services/services_pages/ui_ux/img/service-6-Discovery-workshops-768x388.png" style={{ color: "transparent" }}
          />
          <div className="sc-2518156b-2 gpVdNd"> <h3 className="sc-c25bae65-0 bjbLu sc-2518156b-5 efAofw sm-header5">  
           Discovery workshops </h3> <p className="sc-ca4a3661-6 greJTC sm-body15">   Identify the key elements you need for successful product   development and business growth through customized discovery   workshops. Our experts can assist you in defining your product’s   vision, business needs, user personas, requirements, and project   scope to build a solid foundation for your solution’s   success.&nbsp; </p>
          </div>
        </div>
      </div>
      <div className="col-md-8  aaa">
        <div className="bg-white  rounded-4" style={{height:"100%"}}>
          <img alt="" loading="lazy" width={0} height={0} decoding="async" data-nimg={1} className="sc-2518156b-0 bNepPj" sizes="100vw" src="/src/features/services/services_pages/ui_ux/img/service-7-Design-sprint-768x398.webp" style={{ color: "transparent" }}
          />
          <div className="sc-2518156b-2 gpVdNd"> <h3 className="sc-c25bae65-0 bjbLu sc-2518156b-5 efAofw sm-header5">   Design sprint </h3> 
          <p className="sc-ca4a3661-6 greJTC sm-body15">   Reduce the standard number of steps of new product development to   get maximum value in a short period and shorten time to market.   Instead of waiting to launch a minimal product to verify an idea,   you get precise data from a realistic prototype.&nbsp; </p>
          </div>
        </div>
      </div>
      <br />
      <div className="col-md-4  aaa">
        <div className=" bg-white rounded-4">
          <img alt="" loading="lazy" width={0} height={0} decoding="async" data-nimg={1} className="sc-2518156b-0 bNepPj" sizes="100vw" src="/src/features/services/services_pages/ui_ux/img/service-8-Customer-experience-CX-design--768x388.png" style={{ color: "transparent" }}
          />
          <div className="sc-2518156b-2 gpVdNd"> <h3 className="sc-c25bae65-0 bjbLu sc-2518156b-5 efAofw sm-header5">   Customer experience (CX) design{" "} </h3> <p className="sc-ca4a3661-6 greJTC sm-body15">   Build a strong connection between your customers and brand. We   make sure your user base feels involved, empowered and   valued.&nbsp; </p>
          </div>
        </div>
      </div>
      <div className="col-md-4  aaa">
        <div className=" bg-white rounded-4">
          <img alt="" loading="lazy" width={0} height={0} decoding="async" data-nimg={1} className="sc-2518156b-0 bNepPj" sizes="100vw" src="/src/features/services/services_pages/ui_ux/img/service-9-Design-system-UI-kit-768x388.png" style={{ color: "transparent" }}
          />
          <div className="sc-2518156b-2 gpVdNd"> <h3 className="sc-c25bae65-0 bjbLu sc-2518156b-5 efAofw sm-header5">   Design system &amp; UI kit </h3> <p className="sc-ca4a3661-6 greJTC sm-body15">   Standardize design across your entire organization through design   systems that help you design faster, iterate at scale, and produce   consistently better assets and interfaces. We create scalable   design systems that save you time and money.&nbsp; </p>
          </div>
        </div>
      </div>
      <div className="col-md-4  aaa">
        <div className=" bg-white rounded-4">
          <img alt="" loading="lazy" width={0} height={0} decoding="async" data-nimg={1} className="sc-2518156b-0 bNepPj" sizes="100vw" src="/src/features/services/services_pages/ui_ux/img/service-10-Design-audit-768x388.png" style={{ color: "transparent" }}
          />
          <div className="sc-2518156b-2 gpVdNd"> <h3 className="sc-c25bae65-0 bjbLu sc-2518156b-5 efAofw sm-header5">   Design audit </h3> <p className="sc-ca4a3661-6 greJTC sm-body15">   Get actionable insights about users’ interaction with a product   and identify potential improvements. Better UX boosts business   KPIs, improves customer satisfaction and increases   conversion.&nbsp; </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Data visualization  Card end*/}



{/* marque start */}
<section  className=" " >

<div className=""> <h1 className="ps-5 pt-5 ms-5 fs-1"><strong>Who we’ve helped</strong></h1></div>
<br /><br />
<marquee  behavior="alternate"  style={{marginLeft:"0rem",marginRight:"0rem",marginTop:"-40px"}}>
      <label htmlFor="" className="rounded-5 p-2 bg-white" style={{marginLeft:"5rem"}}><img  style={{width:'140px',height:"50px"}} src="/src/features/services/services_pages/ui_ux/marqueSVG/logo-v2-Procountor-old-finago.svg"  /> </label>
      <label htmlFor="" className="rounded-5 p-2 bg-white" style={{marginLeft:"5rem"}}><img  style={{width:'140px',height:"50px"}} src="/src/features/services/services_pages/ui_ux/marqueSVG/logo-v2-Beteast.svg"  /></label>
      <label htmlFor="" className="rounded-5 p-2 bg-white" style={{marginLeft:"5rem"}}><img  style={{width:'140px',height:"50px"}} src="/src/features/services/services_pages/ui_ux/marqueSVG/logo-v2-CoreLogic-1.svg"  /></label>
      <label htmlFor="" className="rounded-5 p-2 bg-white" style={{marginLeft:"5rem"}}><img  style={{width:'140px',height:"50px"}} src="/src/features/services/services_pages/ui_ux/marqueSVG/logo-v2-GemOne.svg"  /></label>
      <label htmlFor="" className="rounded-5 p-2 bg-white" style={{marginLeft:"5rem"}}><img  style={{width:'140px',height:"50px"}} src="/src/features/services/services_pages/ui_ux/marqueSVG/logo-v2-Snow.webp"  /></label>
      <label htmlFor="" className="rounded-5 p-2 bg-white" style={{marginLeft:"5rem"}}><img  style={{width:'140px',height:"50px"}} src="/src/features/services/services_pages/ui_ux/marqueSVG/logo-v2-t-mobile.webp"  /></label>
      <label htmlFor="" className="rounded-5 p-2 bg-white" style={{marginLeft:"5rem"}}><img  style={{width:'140px',height:"50px"}} src="/src/features/services/services_pages/ui_ux/marqueSVG/logo-v2-TravelCounsellors.svg"  /></label>
      <label htmlFor="" className="rounded-5 p-2 bg-white" style={{marginLeft:"5rem"}}><img  style={{width:'140px',height:"50px"}} src="/src/features/services/services_pages/ui_ux/marqueSVG/logo-v2-yourgolftravel.webp"  /></label>
    </marquee>
</section>
{/* marque start */}



{/* Step Understand */}
<hr />
<div align='' className="row mt-5 pt-5 m-auto" style={{backgroundColor:"rgb(248, 248, 248)"}}>
    
        <label align='justify' className="eKNbte p-2 ms-5 mb-3 bg-white">
              <div className="sc-56b001b4-3 dGeYTz">
                  <div className="sc-56b001b4-5 fGxxwJ">1</div>
                  <div className="sc-56b001b4-4 fguNjW">Step</div>
              </div>
              <h3 className="sc-c25bae65-0 htUqiQ sc-56b001b4-1 fXIVlP sm-header5">Understand</h3>
              <p className="sc-ca4a3661-6 sc-56b001b4-0 greJTC cFinKL sm-body15">Collaborate with stakeholders to establish a shared vision of the problem, define business goals and identify areas of concern in your product.&nbsp;</p>
        </label>

        <label align='justify' className="eKNbte p-2 ms-5 mb-3 bg-white">
              <div className="sc-56b001b4-3 dGeYTz">
                  <div className="sc-56b001b4-5 fGxxwJ">2</div>
                  <div className="sc-56b001b4-4 fguNjW">Step</div>
              </div>
              <h3 className="sc-c25bae65-0 htUqiQ sc-56b001b4-1 fXIVlP sm-header5">Design</h3>
              <p className="sc-ca4a3661-6 sc-56b001b4-0 greJTC cFinKL sm-body15">Define how to reach your goals, prioritize features and create a product prototype, while verifying technical feasibility with the development team.&nbsp;</p>
          </label>

          <label align='justify' className="eKNbte p-2 ms-5 mb-3 bg-white">
            <div className="sc-56b001b4-3 dGeYTz">
                <div className="sc-56b001b4-5 fGxxwJ">3</div>
                <div className="sc-56b001b4-4 fguNjW">Step</div>
            </div>
            <h3 className="sc-c25bae65-0 htUqiQ sc-56b001b4-1 fXIVlP sm-header5">Test</h3>
            <p className="sc-ca4a3661-6 sc-56b001b4-0 greJTC cFinKL sm-body15">Test your product prototype with your target users to uncover their needs, behaviors and potential obstacles during the development phase.&nbsp;</p>
        </label>

        <label align='justify' className="eKNbte p-2 ms-5 mb-3 bg-white">
                <div className="sc-56b001b4-3 dGeYTz">
                    <div className="sc-56b001b4-5 fGxxwJ">4</div>
                    <div className="sc-56b001b4-4 fguNjW">Step</div>
                </div>
                <h3 className="sc-c25bae65-0 htUqiQ sc-56b001b4-1 fXIVlP sm-header5">Iterate</h3>
                <p className="sc-ca4a3661-6 sc-56b001b4-0 greJTC cFinKL sm-body15">Utilize insights gathered through user testing to enhance usability and create a top-tier experience that your users will genuinely enjoy.&nbsp;</p>
          </label>

        
    

</div>   
{/* Step Understand end*/}

<section>
    <hr />
    <div className="row mt-5 " >  
        
          <div align='jusfity' className="col-md-5 fs-1 fw-bolder  ps-5">
              Four steps to revamp your product's UI & UX        
          </div>
          
          <div align='justify' className="col-md-5 p-5 mt-5 text-start">
              At Software Sys, we follow these essential steps in our design and development process 
              that enable us to offer quality services and ensure our clients receive outstanding solutions.
          </div>
    


          <div align='center' style={{backgroundColor:'white'}}>
            <video autoPlay={true} muted  className="w-75" style={{backgroundColor:'white'}}>
                <source src={'src/features/services/services_pages/ui_ux/img/leipzig_chargers_macbook_2.mp4'} type="video/mp4" />
            </video>
          </div>


    </div>
</section>




<hr />
<section className="sc-2513f5e2-0 kYudVh"  style={{backgroundImage:'url("/src/features/services/services_pages/ui_ux/img/dribbble_baner.webp")'}}>
  <div className="sc-953bb80d-0 ePPvGo">
    <div className="sc-2513f5e2-4 jrQBPI">
      <h2 className="sc-c25bae65-0 bjbLu sc-2513f5e2-3 dtKckU sm-header3">
        Check out our Dribbble
      </h2>
      <div className="sc-2513f5e2-2 gdJEUE">
        <a
        
          className="sc-8be7c32f-0 sc-8be7c32f-3 fBnrFY fggBNG"
          href="#"
        >
          Go to Dribbble
        </a>
      </div>
    </div>
  </div>
  
</section>



      


<section style={{backgroundColor:"white"}} className=" gRDIGO"> 

<div className="sc-953bb80d-0 ePPvGo">
  <div  className="sc-9e3861ef-4 pt-5"  >
    <div>
        <h3 className="sc-c25bae65-0 bjbLu sc-9e3861ef-3 iacRPG sm-header3">
          <span className="sc-9e3861ef-2 OfxfR col-md-8 mb-5">
            Our user experience design services are a perfect match if you want
            to…
          </span>
        </h3>
    </div>
  </div>
</div>

<Slider/>

</section>
{/*  */}




{/* UI and UX methodologies &amp; frameworks */}
<section align='center' style={{backgroundColor:"rgb(248, 248, 248)"}} >
<div  className="container cgNtKC ">
  <div  className=""> 
      <h2 className="sc-c25bae65-0 bjbLu sc-9e3861ef-3 iacRPG sm-header3">
          <span className="sc-9e3861ef-2 OfxfR">
          UI and UX methodologies &amp; frameworks
          </span>
        </h2>
  </div>
  <br /><br />
</div>

 <div align='center' className="container w-75">
 
        <div align='center' className="row">
          {state.map((item,index)=>
        
              <div key={index} id="abcd" className="myDIV aaaaa col-md-5 bg-white border border-success rounded-3 m-auto me-3 mb-3 " style={{position:"relative",top:"0.4rem"}}>
                  <div  className="showhim hoverable d-flex ">
                      <img className="" style={{width:'15%',minWidth:"50px"}} src={item.svg} alt="" />
                      <h5 className="m-auto ">{item.title}</h5>
                      {/* grSScn     */}
                      <div className="showme  ">
                      <i class="bi bi-arrow-right-short text-danger fs-1"></i>
                      </div>
                  </div>
                  <p  className="show-on-hover" >{item.arrow} </p>
              </div>

          )}      
          </div>
   
    </div>
  <br /><br />
</section>
{/* UI and UX methodologies &amp; frameworks end */}



{/* Card with Multi color */}
<section className="sc-9e3861ef-1 " style={{backgroundColor:"white"}}>
  <div className="sc-953bb80d-0 ePPvGo">
    <div
      className="sc-9e3861ef-4 cgNtKC">
      <div> <h2 className="sc-c25bae65-0 bjbLu sc-9e3861ef-3 iJLRot sm-header3">
          <span className="sc-9e3861ef-2 OfxfR">
            UX &amp; UI design insights
          </span>
        </h2>
      </div>

      <div className="sc-884c5c01-2 dVelyY">
        <div className="sm-section-excerpt">
          <div className="section-right__excerpt">
            <p>
              Get expert advice and best practices on designing user-friendly
              products, managing efficient design processes and creating
              rewarding experiences.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  </div>



  <div className="w-75 m-auto">
    
      
        <div className=" d-flex overflow-scroll " >
        
            <div className="d-flex " >
              <div className="col-md-4 col-3 "> 
              <div className="" style={{marginRight: 20 }}>
                <a className="sc-4fc5d34f-5 khqIMH" >
                  <div className="sc-4fc5d34f-2 iBTRIq">
                    <img alt="Implementing a Design Process that Combines New Solutions with Proven Methods" className="sc-4fc5d34f-3 dIJiAh"
                      src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F05%2Fblog-hero-image-header-23-may-768x320.webp&w=1920&q=75"
                      style={{ color: "transparent" }} />
                  </div>

                  
                  <div className="sc-4fc5d34f-4 bcbQTa pt-0 ">
                    <div className="sc-144bd507-0 bUMhHQ">
                    <div className="sc-144bd507-0 bUMhHQ">                
                      <div className="sc-1865605d-3 bNZlex">
                      <img  className="sc-1865605d-0 hZOqNx"  src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F07%2FAgata_Polny-1-150x150.webp&w=1920&q=75" />
                      <div className="sc-1865605d-2 kSEuet text-white">
                          <p className="sc-ca4a3661-0 sc-1865605d-4 laTSeM cSKAKg sm-overline">Agata Polny</p>
                          <p className="sc-ca4a3661-13 sc-1865605d-5 kDQSjW bdCFfJ sm-hint">2024/07/11</p>
                      </div>
                      </div>
                    </div>
                    </div>
                    <p className="sc-c25bae65-0 htUqiQ sc-4fc5d34f-7 koBQVO sm-header4">
                      Implementing a Design Process that Combines New Solutions with
                      Proven Methods
                    </p>
                    <div className="sc-4fc5d34f-6 ">
                      <button className="sc-ff402c-0 kaBMTH">
                        Read more
                        <svg xmlns="http://www.w3.org/2000/svg" width={8} height={14} fill="none" viewBox="0 0 8 14" className="sc-ff402c-1 djQrSY"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m1 1 6 6-6 6"/></svg>
                      </button>
                    </div>
                  </div>
                </a>
              </div></div>

              <div className="col-md-4 col-3"><div className="" style={{ marginRight: 20 }}>
                <a className="sc-4fc5d34f-5 diNtOS" >
                  <div className="sc-4fc5d34f-2 iBTRIq">
                    <img alt="Implementing a Design Process that Combines New Solutions with Proven Methods" className="sc-4fc5d34f-3 dIJiAh"
                      src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F11%2FGrafika-UX-and-UI-Guidelines-for-Building-a-Better-Sports-Betting-Experience1-768x320.webp&w=1920&q=75"
                      style={{ color: "transparent" }} />
                  </div>

                  
                  <div className="sc-4fc5d34f-4 bcbQTa pt-0">
                    <div className="sc-144bd507-0 bUMhHQ">
                    <div className="sc-144bd507-0 bUMhHQ">                
                      <div className="sc-1865605d-3 bNZlex">
                      <img  className="sc-1865605d-0 hZOqNx"  src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F07%2FAgata_Polny-1-150x150.webp&w=1920&q=75" />
                      <div className="sc-1865605d-2 kSEuet text-white">
                          <p className="sc-ca4a3661-0 sc-1865605d-4 laTSeM cSKAKg sm-overline">Agata Polny</p>
                          <p className="sc-ca4a3661-13 sc-1865605d-5 kDQSjW bdCFfJ sm-hint">2024/07/11</p>
                          </div>
                      </div>
                    </div>
                    </div>
                    <p className="sc-c25bae65-0 htUqiQ sc-4fc5d34f-7 koBQVO sm-header4">
                      Implementing a Design Process that Combines New Solutions with
                      Proven Methods
                    </p>
                    <div className="sc-4fc5d34f-6 ">
                      <button className="sc-ff402c-0 kaBMTH border-white text-white">
                        Read more
                        <svg xmlns="http://www.w3.org/2000/svg" width={8} height={14} fill="none" viewBox="0 0 8 14" className="sc-ff402c-1 djQrSY"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m1 1 6 6-6 6"/></svg>
                      </button>
                    </div>
                  </div>
                </a>
              </div></div>

              <div className="col-md-4 col-3"><div className="" style={{ marginRight: 20 }}>
                <a className="sc-4fc5d34f-5 fHcyk" >
                  <div className="sc-4fc5d34f-2 iBTRIq">
                    <img alt="Implementing a Design Process that Combines New Solutions with Proven Methods" className="sc-4fc5d34f-3 dIJiAh"
                      src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F07%2Fblog-featured-image-less-can-be-more-how-empty-states-create-engaging-user-experiences-and-drive-business-goals-768x320.webp&w=1920&q=75"
                      style={{ color: "transparent" }} />
                  </div>

                  
                  <div className="sc-4fc5d34f-4 bcbQTa pt-0">
                    <div className="sc-144bd507-0 bUMhHQ">
                    <div className="sc-144bd507-0 bUMhHQ">                
                      <div className="sc-1865605d-3 bNZlex">
                      <img  className="sc-1865605d-0 hZOqNx"  src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F07%2FAgata_Polny-1-150x150.webp&w=1920&q=75" />
                      <div className="sc-1865605d-2 kSEuet text-white">
                          <p className="sc-ca4a3661-0 sc-1865605d-4 laTSeM cSKAKg sm-overline">Agata Polny</p>
                          <p className="sc-ca4a3661-13 sc-1865605d-5 kDQSjW bdCFfJ sm-hint">2024/07/11</p>
                          </div>
                      </div>
                    </div>
                    </div>
                    <p className="sc-c25bae65-0 htUqiQ sc-4fc5d34f-7 koBQVO sm-header4">
                      Implementing a Design Process that Combines New Solutions with
                      Proven Methods
                    </p>
                    <div className="sc-4fc5d34f-6 ">
                      <button className="sc-ff402c-0 kaBMTH">
                        Read more
                        <svg xmlns="http://www.w3.org/2000/svg" width={8} height={14} fill="none" viewBox="0 0 8 14" className="sc-ff402c-1 djQrSY"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m1 1 6 6-6 6"/></svg>
                      </button>
                    </div>
                  </div>
                </a>
              </div></div>


              <div className="col-md-4 col-3"> <div className="" style={{ marginRight: 20 }}>
                <a className="sc-4fc5d34f-5 khqIMH" >
                  <div className="sc-4fc5d34f-2 iBTRIq">
                    <img alt="Implementing a Design Process that Combines New Solutions with Proven Methods" className="sc-4fc5d34f-3 dIJiAh"
                      src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F08%2Fblog-hero-image-header-22-Aug-768x320.webp&w=1920&q=75"
                      style={{ color: "transparent" }} />
                  </div>

                  
                  <div className="sc-4fc5d34f-4 bcbQTa pt-0">
                    <div className="sc-144bd507-0 bUMhHQ">
                    <div className="sc-144bd507-0 bUMhHQ">                
                      <div className="sc-1865605d-3 bNZlex">
                      <img  className="sc-1865605d-0 hZOqNx"  src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F07%2FAgata_Polny-1-150x150.webp&w=1920&q=75" />
                      <div className="sc-1865605d-2 kSEuet text-white">
                          <p className="sc-ca4a3661-0 sc-1865605d-4 laTSeM cSKAKg sm-overline">Agata Polny</p>
                          <p className="sc-ca4a3661-13 sc-1865605d-5 kDQSjW bdCFfJ sm-hint">2024/07/11</p>
                          </div>
                      </div>
                    </div>
                    </div>
                    <p className="sc-c25bae65-0 htUqiQ sc-4fc5d34f-7 koBQVO sm-header4">
                      Implementing a Design Process that Combines New Solutions with
                      Proven Methods
                    </p>
                    <div className="sc-4fc5d34f-6 ">
                      <button className="sc-ff402c-0 kaBMTH">
                        Read more
                        <svg xmlns="http://www.w3.org/2000/svg" width={8} height={14} fill="none" viewBox="0 0 8 14" className="sc-ff402c-1 djQrSY"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m1 1 6 6-6 6"/></svg>
                      </button>
                    </div>
                  </div>
                </a>
              </div>
              </div>

              <div className="col-md-4 col-3"><div className="" style={{ marginRight: 20 }}>
                <a className="sc-4fc5d34f-5 diNtOS" >
                  <div className="sc-4fc5d34f-2 ">
                    <img alt="Implementing a Design Process that Combines New Solutions with Proven Methods" className="sc-4fc5d34f-3 dIJiAh"
                      src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F07%2Fblog-featured-image-less-can-be-more-how-empty-states-create-engaging-user-experiences-and-drive-business-goals-768x320.webp&w=1920&q=75"
                      style={{ color: "transparent" }} />
                  </div>

                  
                  <div className="sc-4fc5d34f-4 bcbQTa pt-0">
                    <div className="sc-144bd507-0 bUMhHQ">
                    <div className="sc-144bd507-0 bUMhHQ">                
                      <div className="sc-1865605d-3 bNZlex">
                      <img  className="sc-1865605d-0 hZOqNx"  src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F07%2FAgata_Polny-1-150x150.webp&w=1920&q=75" />
                      <div className="sc-1865605d-2 kSEuet text-white">
                          <p className="sc-ca4a3661-0 sc-1865605d-4 laTSeM cSKAKg sm-overline">Agata Polny</p>
                          <p className="sc-ca4a3661-13 sc-1865605d-5 kDQSjW bdCFfJ sm-hint">2024/07/11</p>
                          </div>
                      </div>
                    </div>
                    </div>
                    <p className="sc-c25bae65-0 htUqiQ sc-4fc5d34f-7 koBQVO sm-header4">
                      Implementing a Design Process that Combines New Solutions with
                      Proven Methods
                    </p>
                    <div className="sc-4fc5d34f-6 ">
                      <button className="sc-ff402c-0 kaBMTH">
                        Read more
                        <svg xmlns="http://www.w3.org/2000/svg" width={8} height={14} fill="none" viewBox="0 0 8 14" className="sc-ff402c-1 djQrSY"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m1 1 6 6-6 6"/></svg>
                      </button>
                    </div>
                  </div>
                </a>
              </div>
              </div>



            </div>
         
        </div>
    
     
   
  </div>
</section>
{/* card with <u;fi Color End */}


<hr/>
{/* Design engaging products that set your brand apart */}
<section className="sc-63cd0f-2 hkitw" style={{backgroundColor:"rgb(248, 248, 248)"}}>
  <div className="sc-63cd0f-1 bTIAYg">
    <div className="sc-63cd0f-3 bfNsic">
      <div className="sc-63cd0f-6 eQKwsQ">
        <h2 className="sc-c25bae65-0 bjbLu sc-63cd0f-5 hJuCsQ sm-header3">
          Design engaging products that set your brand apart
        </h2>
        <div className="sc-63cd0f-4 kiMTlc">
          <div className="sc-8be7c32f-5 gguYMo">
            <a
              className="sc-8be7c32f-0 sc-8be7c32f-1 fBnrFY knIAgO"
             
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="sc-63cd0f-0 fHyvHq">
      <div className="sc-9e617051-1 dyBVuC">
        <div className="sc-9e617051-0 eYoFsx">
          <p className="sc-9e617051-2 iKTZrz sm-header3">1500</p>
          <p className="sc-9e617051-2 iKTZrz sm-header4">+ experts </p>
        </div>
        <div className="sc-9e617051-0 eYoFsx">
          <p className="sc-9e617051-2 iKTZrz sm-header3">25</p>
          <p className="sc-9e617051-2 iKTZrz sm-header4">
            + years of innovation{" "}
          </p>
        </div>
        <div className="sc-9e617051-0 eYoFsx">
          <p className="sc-9e617051-2 iKTZrz sm-header3">250</p>
          <p className="sc-9e617051-2 iKTZrz sm-header4">
            + clients who trust us
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Design engaging products that set your brand apart End */}



<hr />
<section align='justify' className="sc-9e3861ef-1 dVcJZQ" >
  <div className="sc-953bb80d-0 ePPvGo">
    <div className="sc-9e3861ef-4 cUVos row" > 
    <div className="col-md-4">
       <h2 className="sc-c25bae65-0 bjbLu sc-9e3861ef-3 iJLRot sm-header3">
            <span className="sc-9e3861ef-2 OfxfR">UI &amp; UX design FAQs</span>
      </h2>
    </div> 
    <div   className="col-md-6 sc-884c5c01-2 "   >
      <div className="sc-b263a12c-0 irxYKK">
      
          {data.map((item,index)=>
            <div key={index} className="sc-f9ea8f54-0 gvDaqZ m-0 p-3 " >
                    <div className=" hoverable showhim eEvJRF m-0 p-0">
                        <h3 className="sc--0  h6">
                            {item.title}
                        </h3>

                        <div className="showme pe-1" style={{background:'dark'}}>
                            <i class="bi bi-arrow-right-short text-danger " ></i>
                        </div>
                    </div>
                    <div  id="cont" aria-hidden="true" role="region" className="show-on-hover">
                        <p className="sc-ca4a3661-6 sc--3 greJTC drWCXn sm-">
                          {item.desc}&nbsp;
                        </p>
                    </div>
              </div>
          )}
      </div>
    </div>
    </div>
  </div>

</section>


<section align='' style={{backgroundColor:"rgb(248, 248, 248)"}}>

<div className="row p-4">
<div className="col-md-1"></div>
  <div className="col-md-4 fs-1 m-auto ">
      <strong>Looking for other software services?</strong>
  </div>
  <div className="col m-auto">For over two decades we’ve been helping companies across markets and sectors develop disruptive solutions. Proven ways of working, domain knowledge and an open culture that prioritizes ownership mean we contribute from day one.</div>
</div>


<div className=" justify ms-4 m-auto">
    <div className=" sc-7927336c-2 mt-5 m-auto" style={{width:"80%"}}>
        <div className="row">
            <div className="col-md-4 mb-4 ">
                <div style={{ boxSizing: "border-box" , minHeight: 1, position: "relative" , paddingLeft: 0,
                    paddingRight: 0, flexGrow: 0, flexShrink: 0, marginLeft: "0%" , }} className="sc-7927336c-1 ftbyDi">
                    <div className="sc-27806405-6 jGEIQa"> 
                        <img alt="" loading="lazy" decoding="async" data-nimg="fill" className="sc-27806405-5 gnDFbz" style={{ position: "absolute" , height: "100%" ,width: "100%" , left: 0, top: 0, right: 0, bottom: 0, objectFit: "cover" ,color: "transparent" }} sizes="100vw"
                            src="/src/features/services/services_pages/ui_ux/img/main-pages-featured-image-Generative-AI-Development-Services2-768x430.webp" />
                        <a className="sc-43d1ba49-0 kobdgU">
                            <div className="sc-27806405-3 ZEDbb">
                                <img alt="" loading="lazy"  decoding="async" data-nimg={1}
                                    className="sc-27806405-4 jzkMcX" style={{ color: "transparent" }} sizes="100vw"
                                    src="/src/features/services/services_pages/ui_ux/img/icon_Generative_AI_Development_Services_orange1.svg" />
                                <div className="sc-27806405-0 cDaeWI">
                                    <p className="sc-ca4a3661-9 sc-27806405-2 kyBtyV eltRhB sm-body17">
                                        Generative AI development services
                                    </p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={14} fill="none"
                                        viewBox="0 0 22 14" className="sc-27806405-1 gKVDRY">
                                        <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M20.91 7H1.002M14.274 1l6.636 6-6.636 6" />
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <div className="sc-27806405-8 hEhKDF">
                            <p className="sc-ca4a3661-9 sc-27806405-7 kyBtyV klutVo sm-body17">
                                Operationalize data to drive efficiency, insights and decision-making.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4 ">
                <div style={{ boxSizing: "border-box" , minHeight: 1, position: "relative" , paddingLeft: 0,
                    paddingRight: 0, flexGrow: 0, flexShrink: 0, marginLeft: "0%" , right: "auto" , left: "auto" }}
                    className="sc-7927336c-1 ftbyDi">
                    <div className="sc-27806405-6 jGEIQa">
                        <img alt="" loading="lazy" decoding="async" data-nimg="fill" className="sc-27806405-5 gnDFbz"
                            style={{ position: "absolute" , height: "100%" , width: "100%" , left: 0, top: 0, right: 0,
                            bottom: 0, objectFit: "cover" , color: "transparent" }} sizes="100vw"
                            src="/src/features/services/services_pages/ui_ux/img/main-pages-featured-image-cloud-consulting-services-768x410.webp" />
                        <a className="sc-43d1ba49-0 kobdgU">
                            <div className="sc-27806405-3 ZEDbb">
                                <img alt="" loading="lazy"  decoding="async" data-nimg={1}
                                    className="sc-27806405-4 jzkMcX" style={{ color: "transparent" }} sizes="100vw"
                                    src="/src/features/services/services_pages/ui_ux/img/icons-_Cloud-Consulting-Services-orange.svg" />
                                <div className="sc-27806405-0 cDaeWI">
                                    <p className="sc-ca4a3661-9 sc-27806405-2 kyBtyV eltRhB sm-body17">
                                        Cloud consulting &amp;services
                                    </p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={14} fill="none"
                                        viewBox="0 0 22 14" className="sc-27806405-1 gKVDRY">
                                        <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M20.91 7H1.002M14.274 1l6.636 6-6.636 6" />
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <div className="sc-27806405-8 hEhKDF">
                            <p className="sc-ca4a3661-9 sc-27806405-7 kyBtyV klutVo sm-body17">
                                Accelerate your cloud migration strategy and develop cloud-native
                                apps.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-md-4 mb-4">
                <div style={{ marginBottom:"1rem", boxSizing: "border-box" , minHeight: 1, position: "relative" ,
                    paddingLeft: 0, paddingRight: 0, flexGrow: 0, flexShrink: 0, marginLeft: "0%" , right: "auto" ,
                    left: "auto" }} className="sc-7927336c-1 ftbyDi">
                    <div className="sc-27806405-6 jGEIQa">
                        <img alt="" loading="lazy" decoding="async" data-nimg="fill" className="sc-27806405-5 gnDFbz"
                            style={{ position: "absolute" , height: "100%" , width: "100%" , left: 0, top: 0, right: 0,
                            bottom: 0, objectFit: "cover" , color: "transparent" }} sizes="100vw"
                            src="/src/features/services/services_pages/ui_ux/img/main-pages-featured-image-Automation-Testing-Services-768x410.webp" />
                        <a className="sc-43d1ba49-0 kobdgU">
                            <div className="sc-27806405-3 ZEDbb">
                                <img alt="" loading="lazy"  decoding="async" data-nimg={1}
                                    className="sc-27806405-4 jzkMcX" style={{ color: "transparent" }} sizes="100vw"
                                    src="/src/features/services/services_pages/ui_ux/img/icon-automation-testing-services-orange (1).svg" />
                                <div className="sc-27806405-0 cDaeWI">
                                    <p className="sc-ca4a3661-9 sc-27806405-2 kyBtyV eltRhB sm-body17">
                                        Automation testing
                                    </p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={14} fill="none"
                                        viewBox="0 0 22 14" className="sc-27806405-1 gKVDRY">
                                        <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M20.91 7H1.002M14.274 1l6.636 6-6.636 6" />
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <div className="sc-27806405-8 hEhKDF">
                            <p className="sc-ca4a3661-9 sc-27806405-7 kyBtyV klutVo sm-body17">
                                Build tailored testing platforms and boost test coverage for critical
                                app areas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    </div>

</div>
</section>


</div>
<Footer></Footer>
    </>
  )
}
