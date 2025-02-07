import React, { useState } from 'react'
import './SecoundHeader.css'
import { Link } from 'react-router-dom';
const SecoundHeader = () => {
    const [state, setstate] = useState([
            {
                id:1,
                svg:"src/features/secoundHeader/img/doctorateactive.svg",
                name:"Doctorate"
            },
            {
                id:2,
                svg:"src/features/secoundHeader/img/AI+active.svg",
                name:"AI & ML"
            },
            {
                id:3,
                svg:"src/features/secoundHeader/img/MBA+active.svg",
                name:"MBA"
            },
            {
                id:4,
                svg:"src/features/secoundHeader/img/data+science+active.svg",
                name:"Data Science"
            },
            {
                id:5,
                svg:"src/features/secoundHeader/img/Marketing+active.svg",
                name:"Marketing"
            },
            {
                id:6,
                svg:"src/features/secoundHeader/img/management+active.svg",
                name:"Management"
            },
            {
                id:7,
                svg:"src/features/secoundHeader/img/technology+active.svg",
                name:"Software & Tech"
            },
            {
                id:8,
                svg:"src/features/secoundHeader/img/Law+Active.svg",
                name:"Law"
            }


        
    ]);
   
    



    const [isHoveringService, setIsHoveringService] = useState(false); 
  return (
    <>
        <center onMouseLeave={() => setIsHoveringService(false)} style={{width:'100%',background:" #062a6c",}} className='shadow  p-0 m-0 ' >
            <div className='p-0 m-0 ' style={{width:"55%"}}>
                <div className="row m-0 p-0">
                    {state.map((item,index)=>
                        <div key={index} className="col m-0 p-0 " 
                            onMouseEnter={() => setIsHoveringService(true)} >
                            <div className='hovercolor btn-color' >
                                                            
                                    <img  id='img'  className='text-decoration-none grayscale '
                                        width='30px' src={item.svg} style={{stroke:"green",strokeWidth:"30"}} />
                              
                                <span className=' textsize'>
                                    <label id='label' htmlFor="" className='showhim  m-auto d-flex' >
                                        <label htmlFor="">{item.name}&nbsp;</label>
                                        <svg   xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" 
                                            className="svgrotate bi bi-chevron-down mt-1" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/></svg>
                                    </label>
                                </span> 
                            </div>
                        </div>
                    )}
                </div>
            
            </div>

            <div className={`services-dropdow${isHoveringService?'show' : ''}`} style={{position:"relative",zIndex:5,top:"0%"}}  >
                <div style={{ width: "60%", height: "0"}}>
                    <div className="row  shadow p-3 mb-5  bg-body" style={{ borderBottomRightRadius: '2rem', borderBottomLeftRadius: '2rem' }}>
                        <div className="col-md-4 mt-3 bg-transparent rounded-0 " style={{ borderRight: "1px solid gray", borderTop: "0", borderLeft: '0', borderBottom: "0" }}>
                           
                            <button className='btn btn-color d-flex text-dark'>Degree / Exec. PG  
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-gray-400 group-hover:text-white block" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>
                            </button><br />
                        
                            <button className='btn btn-color d-flex text-dark'>Executive Certificate 
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-gray-400 group-hover:text-white block" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>
                            </button>
                            
                        </div> 
                        
                        <div className="col-md-8 ">
                            <br />
                            <div className="row" align='left'>

                                <div className="col-md-6">
                                    <div class="mb-1">
                                        <div class="row g-0">
                                            <div class="col-md-3 ">
                                                <img src="https://d2o2utebsixu4k.cloudfront.net/upgrad/uni-cards-logos/DS_UniLogo_Dweb/DS_ProgramLogo_Dweb_IITB.svg" alt="" className=" border img-fluid rounded-start" />
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <label class="text-dark ps-2" style={{ fontSize: "10px" }}>IIIT Bangalore</label>
                                                    <a href="" className='td-none mt-0 pt-0'><p class="card-text mt-0 ps-2 ps-2" style={{ fontSize: "10px" }}>Executive Program in Generative AI for Leaders</p></a>
                                                    {/* <p class="card-text ps-2"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                              

                                <div className="col-md-6">
                                    <div class="mb-1" >
                                        <div class="row g-0">
                                            <div class="col-3">
                                                <img src="https://d2o2utebsixu4k.cloudfront.net/upgrad/uni-cards-logos/DS_UniLogo_Dweb/DS_ProgramLogo_Dweb_IITB.svg" alt="" className=" border img-fluid rounded-start" />
                                            </div>
                                            <div class="col-8">
                                                <div class="">
                                                    <h5 class="text-dark ps-2" style={{ fontSize: "10px" }}>IIIT Bangalore</h5>
                                                    <a href="" className='td-none mt-0 pt-0'><p class="card-text ps-2" style={{ fontSize: "10px" }}>Post Graduate Certificate in Machine Learning and Deep Learning (Executive)</p></a>
                                                    
                                                    {/* <p class="card-text ps-2"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-md-6">
                                    <div class="mb-1 pb-0" >

                                        <div class="row g-0">
                                            <div class="col-3" >
                                                <img style={{height:"110%"}} src="http://d2o2utebsixu4k.cloudfront.net/upgrad/new-home/svg/upGrad.svg" alt="" className=" border img-fluid rounded-start" />
                                            </div>
                                            <div class="col-8">
                                                <div class="">
                                                    <h5 class="ps-2 text-dark" style={{ fontSize: "10px" }}>upGrad</h5>
                                                    <a href="" className='td-none mt-0 pt-0'><p class="card-text ps-2" style={{ fontSize: "10px" }}>Advanced Certificate Program in Generative AI</p></a>

                                                    {/* <p class="card-text ps-2"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                                <div className="col-md-6">
                                    <div class="mb-1" >

                                        <div class="row g-0">
                                            <div class="col-3">
                                                <img src="https://d2o2utebsixu4k.cloudfront.net/upgrad/logos/U%26AI_Logo.svg" alt="" className=" border img-fluid rounded-start" />
                                            </div>
                                            <div class="col-8">
                                                <div class="">
                                                    <h5 class="pt-0 mt-0 text-dark ps-2" style={{ fontSize: "10px" }}>upGrad | Microsoft</h5>
                                                    <a href='' className='td-none'><p class="card-text ps-2" style={{ fontSize: "10px" }}>The U & AI GenAI Certificate Program from Microsoft</p></a>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                                <div className="col-md-6">
                                    <div class="mb-1" >

                                        <div class="row g-0">
                                            <div class="col-3">
                                                <img src="https://d2o2utebsixu4k.cloudfront.net/upgrad/uni-cards-logos/DS_UniLogo_Dweb/DS_ProgramLogo_Dweb_IITB.svg" alt="" className=" border img-fluid rounded-start" />
                                            </div>
                                            <div class="col-8">
                                                <div class="">
                                                    <h5 class="text-dark ps-2" style={{ fontSize: "10px" }}>IIIT Bangalore</h5>
                                                    <div className='td-none'></div>
                                                    <a href='' className='td-none'><p class="card-text ps-2" style={{ fontSize: "10px" }}>
                                                        Post Graduate Certificate in Machine Learning & NLP (Executive)</p></a>
                                                    {/* <p class="card-text ps-2"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>





                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </center>
       
      




    </>
  )
}

export default SecoundHeader