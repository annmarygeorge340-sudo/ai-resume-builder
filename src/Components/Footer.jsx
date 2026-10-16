import React from 'react'
import { FaFacebook, FaInstagram, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { MdMailOutline } from 'react-icons/md'

function Footer() {
  return (
    <div style={{backgroundColor:'#bca588',height:'300px'}} className='container-fluid'>
      <div className='row mx-5'>
        <div className="col-lg-4">
          <h4 className='my-3 fs-2 '>AIrBUILDER</h4>
<p style={{textAlign:"justify"}} className='fs-5'>  An AI Powered Resume Builder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for freshers who may not know the correct format or keywords required for modern recruitment systems.</p>
        </div>
        <div className="col-lg-4"></div>
        <div className="col-lg-4 my-3" >
        <h4>Contact US</h4>
        <MdMailOutline/> resumebuilder@gmail.com
        <p><FaPhoneAlt/> 9995745861</p>
        <h5>Connect With US</h5>
        <div className='fs-5'>
          <FaInstagram /> 
          <FaFacebook className='mx-3'/> 
            <FaWhatsapp/> 

        </div>
        </div>
        
      </div>
      <h4 className='text-center mt-4'>Designed & built with ❤️ using React</h4>
    </div>
    
  )
}

export default Footer
