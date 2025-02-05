import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './header.css';
import { useState } from 'react'; 
import { FaAlignJustify } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHoveringServices, setIsHoveringServices] = useState(false); 
  const [isHoveringProduct, setIsHoveringProduct] = useState(false);
  const [isHoveringIndustries, setIsHoveringIndustries] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <div>
      <header className="py-3">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Left Side */}
          <div className='top'>
            <div className="logo d-flex align-items-center"></div>
            <h1 className="mb-0 fs-4 fw-bold text-white">HBS INFOTECH</h1>
          </div>

          {/* Right Side */}
          <div className="nav-bar">
            {/* Hamburger Icon for Mobile */}
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"><FaAlignJustify /></span>
            </button>

            {/* Navigation Menu */}
            <ul className={`nav ${isMenuOpen ? "show" : ""} d-lg-flex`}>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/course">Learning Path</Link>
              </li>

              {/* Services Link with Hover */}
              <li className="nav-item services" 
                onMouseEnter={() => setIsHoveringServices(true)} 
                onMouseLeave={() => setIsHoveringServices(false)}
              >
                <Link className="nav-link text-white" to="/solutions">Services</Link>
                {/* Conditionally show the dropdown */}
                <div align='left' className={` bg-white services-dropdown ${isHoveringServices ? 'show' : ''}` }
                 style={{zIndex:"100"}}>
                  <div className="services-menu">
                    <div className="services-left-side" style={{position:"relative",left:"30px"}}>
                      <h1 className='m-5'>AI expertise tailored to business goals </h1>
                      <button style={{
                        backgroundColor:"red",
                        position:"relative",
                        top:"100px",
                        left:"55px",
                        height:"4rem",
                        width:"20rem",
                        fontSize:"25px",
                        fontWeight:"bolder",
                        border:"none",
                        borderRadius:"10px",
                        color:"white"
                      }}>Let's work together</button>
                    </div>
                    <div className="services-mid-side">
                      <div className="mid-services-block1" style={{marginTop:"30px"}}>
                        <p className='correct2' style={{position:"relative", bottom:"25px"}}>Ideate</p>
                        <ul className='mid-link'>
                          <Link to="/ui"><li className='correct'>UX & UI Design Services </li></Link>
                          <Link to="/software"><li>Software Development Services</li></Link>
                          <Link to="/cloud"><li>Cloud Consulting & Services</li></Link>
                        </ul>
                      </div>

                      <div className="mid-services-block2" style={{marginTop:"20px"}}>
                        <p style={{position:"relative", bottom:"25px"}}>Improve</p>
                        <ul className='mid-link'>
                          <Link to="/digitaltransformation"><li>Digital Transformation Services</li></Link>
                          <Link to="/dataengineering"><li>Data Engineering and Data Science Services</li></Link>
                          <Link to="/mobile"><li>Mobile App Development Services</li></Link>
                          <Link to="/ai"><li>AI & ML Services</li></Link>
                        </ul>
                      </div>

                      <div className="mid-services-block3" style={{marginTop:"20px"}}>
                        <p style={{position:"relative", bottom:"25px"}}>Scale</p>
                        <ul className='mid-link'>
                          <Link to="/nearshoringservices"><li>Nearshoring Services for the North American Market</li></Link>
                          <Link to="/software"><li>Software Development Outsourcing Services</li></Link>
                        </ul>
                      </div>
                    </div>

                    <div className="services-right-side" style={{marginTop:"20px", marginRight:"20px"}}>
                      <div className="right-side-block1">
                        <p style={{position:"relative", bottom:"20px"}}>Build</p>
                        <ul className='mid-link'>
                          <Link to='/devlopment_team'> <li>Dedicated Software Development Teams</li></Link>
                          <Link to="/cloud"><li>Cloud Engineering Service</li></Link>
                          <Link to="/embeddedsoftware"><li>Embedded Software Services</li></Link>
                          <Link to="/mobile"> <li>Mobile Apps Development Services</li></Link>
                        </ul>
                      </div>

                      <div className="right-side-block2">
                        <p style={{position:"relative", bottom:"20px"}}>Operate</p>
                        <ul className='mid-link'>
                          <Link to="/IdentityandAccess"><li>Identity and Access Management Services</li></Link>
                          <Link to="/automation"><li>Automation Testing Services</li></Link>
                          <Link to="/devops"><li>DevOps Consulting Services & Solutions</li></Link>
                          <Link to="/softwareauditing"><li>Software Auditing Services</li></Link>
                          <Link to="/securityaudit"><li>Security Audit and Governance Services</li></Link>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* Products Link with Hover */}
              <li 
                className="nav-item"
                onMouseEnter={() => setIsHoveringProduct(true)} 
                onMouseLeave={() => setIsHoveringProduct(false)}
              >
                <Link className="nav-link text-white" to="#">Products</Link>
                <div className={`products-dropdown ${isHoveringProduct ? 'show' : ''}`}>
                  <div className="products-menu">
                    <ul>
                      <li>Our Apps</li>
                      <li>Our Websites</li>
                      <li>Our Services</li>
                      <li>Our AI/ML Products</li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* Industries Link with Hover */}
              <li 
                className="nav-item"
                onMouseEnter={() => setIsHoveringIndustries(true)} 
                onMouseLeave={() => setIsHoveringIndustries(false)}
              >
                <Link className="nav-link text-white" to="#">Industries</Link>
                <div className={`industries-dropdown ${isHoveringIndustries ? 'show' : ''}`}>
                  <div className="industries-menu">
                    <ul>
                      <li><Link to="/financialservices" style={{color:"black"}}>Financial Services</Link></li>
                      <li><Link to="/telecom" style={{color:"black"}}>Telecom</Link></li>
                      <li><Link to="biotech_healthcare" style={{color:"black"}}>Biotech & Healthcare</Link></li>
                      <li><Link to="/media_entertainment" style={{color:"black"}}>Media & Entertainment</Link></li>
                      <li><Link to="/SportsBetting" style={{color:"black"}}>Sports Betting</Link></li>
                      <li><Link to="/Manufacturing"  style={{color:"black"}}>Manufacturing</Link></li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <Link to="/login"><button className="signIn">Sign In</button></Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
