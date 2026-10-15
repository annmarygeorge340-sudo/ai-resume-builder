import React from 'react'
import { IoDocumentText } from 'react-icons/io5'
import { TbFileDownloadFilled } from 'react-icons/tb'
import { Link } from 'react-router-dom'

function Resume() {
  return (
    <div>
<div style={{height:"100vh"}} className="container">
  <h1 className='text-center my-5'>Create an ATS Friendly Resume in Minutes with AI</h1>
<div className="container">
  <div className="row">
    <div className="col-lg-1"></div>
    <div className="col-lg-4 rounded shadow text-center p-5">
      <IoDocumentText className='fs-1 mb-3 text-warning' />
      <h4>Add Your Details</h4>
      <p>Out AI will generate Skills and Summary</p>
      <h4>Step 1</h4>
    </div>
    <div className="col-lg-2"></div>
    <div className="col-lg-4 rounded shadow text-center p-5">
<TbFileDownloadFilled className='fs-1 mb-3 text-danger'/>
<h4>Download your Resume</h4>
<p>Download PDF and start applying</p>
<h4>Step 2</h4>
    </div>
    <div className="col-lg-1"></div>
  </div>
</div>
<div className='text-center mt-5'>
  <Link to={"/resume-details"} style={{backgroundColor:"#957053"}} className='btn text-light mt-5  rounded'>Lets start</Link>
</div>
</div>
    </div>
  )
}

export default Resume
