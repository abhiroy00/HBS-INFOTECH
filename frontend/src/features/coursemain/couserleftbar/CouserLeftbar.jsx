import { useState } from 'react';
import './CouserLeftbar.css';
import { CiHome } from "react-icons/ci";
import { SiK3S } from "react-icons/si";
import { SiGoogleclassroom } from "react-icons/si";
import { IoSparkles } from "react-icons/io5";
import { FaProjectDiagram } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { BiGitRepoForked } from "react-icons/bi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import Footer from '../../../comman/Footer';
export default function CouserLeftbar() {
  const [clicked, setClicked] = useState(null);

  const handleClick = (section) => {
    setClicked(section);
  };

  return (
    <div>
      <Link to="/CourseMain/courseHome">
      <div className={`home-left ${clicked === 'home' ? 'clicked' : ''}`} onClick={() => handleClick('home')}>
        <div className="logo" style={{color:"black"}}>
          <CiHome />
        </div>
        <p>Home</p>
      </div>
      </Link>
      <Link to="/CourseMain/courseLean">
      <div className={`learn-left ${clicked === 'learn' ? 'clicked' : ''}`} onClick={() => handleClick('learn')}>
        <div className="logo" style={{color:"black"}}>
          <SiK3S />
        </div>
        <p>Learn</p>
      </div>
      </Link>
      <Link to="/courseMain/CourseClassroom">
      <div className={`classroom-left ${clicked === 'classroom' ? 'clicked' : ''}`} onClick={() => handleClick('classroom')}>
        <div className="logo" style={{color:"black"}}>
          <SiGoogleclassroom />
        </div>
        <p>Classroom</p>
      </div>
      </Link>
      <Link to="/CourseMain/courspractice">
      <div className={`practice-left ${clicked === 'practice' ? 'clicked' : ''}`} onClick={() => handleClick('practice')}>
        <div className="logo" style={{color:"black"}}>
          <IoSparkles />
        </div>
        <p>Practice</p>
      </div>
      </Link>
      <Link to="/CourseMain/courseproject">
      <div className={`projects-left ${clicked === 'projects' ? 'clicked' : ''}`} onClick={() => handleClick('projects')}>
        <div className="logo" style={{color:"black"}}>
          <FaProjectDiagram />
        </div>
        <p>Projects</p>
      </div>
      </Link>
      <Link to="/CourseMain/CourseCarriar">
      <div className={`carriar-left ${clicked === 'carriar' ? 'clicked' : ''}`} onClick={() => handleClick('carriar')}>
        <div className="logo" style={{color:"black"}}>
          <MdWork />
        </div>
        <p>Carriar</p>
      </div>
      </Link>
      <Link to="/CourseMain/Mentorship">
      <div className={`mentorship-left ${clicked === 'mentorship' ? 'clicked' : ''}`} onClick={() => handleClick('mentorship')}>
        <div className="logo" style={{color:"black"}}>
          <BiGitRepoForked />
        </div>
        <p>Mentorship</p>
      </div>
      </Link>
      <Link to="/CourseMain/jobboard">
      <div className={`job-bord-left ${clicked === 'job-bord' ? 'clicked' : ''}`} onClick={() => handleClick('job-bord')}>
        <div className="logo" style={{color:"black"}}>
          <MdWork />
        </div>
        <p>Jobboard</p>
      </div>
      </Link>
      <Link to="/CourseMain/Referearn">
      <div className={`refer-eran-left ${clicked === 'refer-eran' ? 'clicked' : ''}`} onClick={() => handleClick('refer-eran')}>
        <div className="logo" style={{color:"black"}}>
          <AiOutlineUsergroupAdd />
        </div>
        <p>Refer&earn</p >
      </div>
      </Link>
      <div className={`community-left ${clicked === 'community' ? 'clicked' : ''}`} onClick={() => handleClick('community')}>
        <div className="logo" style={{color:"black"}}>
          <IoIosPeople />
        </div>
        <p>Community</p>
      </div>
      <div className="follow-us">
        <p>Follow us</p>
        <div className="follow-icons">
        <FaYoutube />
        <FaInstagram />
        <FaLinkedin />
        <BsDiscord />
        
          

        </div>
      </div>
     
    </div>
  );
}
