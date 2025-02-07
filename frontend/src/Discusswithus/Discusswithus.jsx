import React, { useState } from 'react'
import Header from '../comman/Header';

const Discusswithus = () => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add logic to send the form data to your backend
    console.log('Form submitted with data:', { name, email, phone, message });
  };

  return (
    <>
    <Header/>
    
    <div className="container-fuild  text-white" style={{height:"20rem",background:'url(bg.png)',color:"black"}}>

    <div className="col-md-12 pt-5">
        <center><label htmlFor="" className='display-1 fw-bolder mt-5'>Contact Us</label></center>
            <br />
        <center><label htmlFor="" className='fs-5'>

                <a className='text-white text-decoration-none'  href="/" >Home</a> 
                <label htmlFor="" className='text-primary ps-1 pe-1'> ≫&nbsp;</label> 

                <a className='text-white text-decoration-none' href="Solutions">Solutions</a> 
                <label htmlFor="" className='text-primary ps-1 pe-1'> ≫&nbsp;</label> 

                <a  className='text-white text-decoration-none' href="about">Contact Us</a>
        </label></center>


    </div>
            
    </div>

 
   <div className="container-fluid text-dark">
   <div className="row">
    

            <div className="col-md-1"></div>
    
            <div className="col-md-5 m-0   mt-5 ">
                <label htmlFor="" className='fs-1 ps-3'> Contact us</label>
                <br />
                <p className='ps-3 '>Have a question or comment? Let us know by filling out the
                form below and we'll be in touch shortly.
                </p>
                
                <div className='p-4 rounded-5 shadow mt-2' style={{background:' rgb(244, 248, 255)'}}>

                
                    
                    <form onSubmit={handleSubmit} className='rounded-5'>
                
                    <div className="mb-2">
                        <label  className="form-label">Name</label>
                        <input type="text" className="form-control"  placeholder="Name"
                            value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>                  

                    <div className="mb-2">
                        <label  className="form-label">Email address</label>
                        <input type="email" className="form-control"  placeholder="Email id"
                            value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    


                    <div className="mb-2">
                        <label  className="form-label">Phone no *</label>
                        <input type="number" className="form-control"  placeholder="Enter a Mobile no"
                            value={phone} onChange={(e) => setPhone(e.target.value)} required
                        />
                    </div>



                    <div className="mb-2">
                        <label  className="form-label text-black">Message *</label>
                        <textarea type="textarea" className="form-control"  placeholder="Write a Message if any" rows={6}
                            value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                    </div>
                    <button type="submit" className='btn btn-primary w-100'>Submit</button>
                    </form>
                </div>

            </div>

            
                
            <div className="col-md-5 m-0 ps-5  pe-5 mt-5  ">

                <div className='fs-1'>Our contact info</div>

                <div class="d-flex  border-black pt-4">
                    <i class="bi bi-geo-alt-fill" style={{color:'#00E7F0' }}  ></i> 
                    <p class="sc-ecQkdc dambaF ps-3">  SCF No. 34, 1st Floor, Sector 16-A, Part-1, Faridabad, Haryana - 121002</p>
                </div>

            

                <div class="d-flex border-top  border-black pt-4">
                <i style={{color:'#00E7F0' }} class="bi bi-telephone-fill"></i>
                    {/* <img style={{width:'35px',height:"30px"}} className=''  src="/src/Discusswithus/phone-call-svgrepo-com.svg" alt="Phone"  /> */}
                    <p class="sc-ecQkdc dambaF ps-3">+91-129-488 2321</p>
                </div>
                
                
                
                <div class="d-flex border-top   border-black pt-4" style={{borderBottom:"1px solid black"}}>
                    <i style={{width:'30px',height:"30px",color:'#00E7F0'}}  class="bi bi-envelope-at-fill"></i>
                    <p class=" ps-1">info@hbsinfotech.com</p>
                </div>
                

                
                <div className='fs-1'><strong>Location</strong></div>
                
                <iframe className='rounded-3 border' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4215898742223!2d77.2051956783493!3d28.617124112947987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce36e9e91bcff%3A0x3bf95bd66ac9204c!2sSansad%20Bhawan%20Delhi!5e0!3m2!1sen!2sin!4v1737112171942!5m2!1sen!2sin"
                    width="100%" height="50%" 
                    style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>

                
                
                
            




            
            
            
            
            </div>
            
            
            <div className="col-md-1"></div>
</div>
   </div>
    
<br /><br /><br /><br /><br /><br /><br /><br />
<Footer/>

    </>
  )
}
import Footer from '/src/comman/Footer'

export default Discusswithus