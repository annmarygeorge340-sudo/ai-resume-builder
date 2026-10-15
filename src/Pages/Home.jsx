import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
    {/* landing */}
    <div style={{height:'100vh',background:'url(/landing.png)',backgroundSize:'cover',backgroundAttachment:'fixed'}} className='d-flex justify-content-center align-items-center'>
    <div style={{backgroundColor:"rgba(0,0,0,0.4)"}} className='text-center rounded p-5 w-50 text-light'><h1>Designed to get heired.Your skills,your story,your next Job-all Job in one.</h1>
    <Link to={'/resume'}style={{backgroundColor:"#957053"}} className='btn text-light p-3 fs-5'>Make Your Resume With AI</Link>
    </div>
    </div>
    {/* about */}
<div className='container my-5'>
  <h1 className='text-center my-5'>What's AI Builder</h1>
  <div className='row align-items-center'>
    <div className='col-lg-1'></div>
    <div className='col-lg-5'>
<p style={{textAlign:"justify",fontSize:"20px"}}>      An AI rBuilder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for freshers who may not know the correct format or keywords required for modern recruitment systems.</p>

<p style={{textAlign:"justify",fontSize:"20px"}}>The system can suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly.</p>

<p style={{textAlign:"justify",fontSize:"20px"}}>The main goal of the AI rBuilder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can edit content, preview their resume, and download it in formats such as PDF</p>
<p style={{textAlign:"justify",fontSize:"20px"}}>Ths type of system is especially useful for students & fresh graduates, who want to create high-quality resumes that increase their chances of getting shortlisted for job interviews.</p>
    </div>
     <div className='col-lg-1'></div>
       <div className='col-lg-5'>
        <img style={{height:"100%"}} className='img-fluid' src="/about.avif" alt="no img" />
       </div>
  </div>
</div>

    {/* image */}
    <div  style={{height:'100vh',background:'url(https://img.magnific.com/free-photo/multiracial-male-female-colleagues-having-discussion-team-meeting_1163-5107.jpg?semt=ais_hybrid&w=740&q=80)',backgroundSize:'cover',backgroundAttachment:'fixed'}} className='d-flex justify-content-center align-items-center'></div>
 
 
    {/* testimony */}


    <div className='container my-5'>
  <h1 className='text-center my-5'>What's AI Builder</h1>
  <div className='row align-items-center'>
    <div className='col-lg-1'></div>
    <div className='col-lg-5'>
<p style={{textAlign:"justify",fontSize:"20px"}}>      An AI rBuilder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. .</p>

<p style={{textAlign:"justify",fontSize:"20px"}}>The system can suggest job-specific keywords, professional summaries, and skills. </p>

<p style={{textAlign:"justify",fontSize:"20px"}}>Ths type of system is especially useful for students & fresh graduates, who want to create high-quality resumes.</p>
    </div>
     <div className='col-lg-1'></div>
       <div className='col-lg-5'>
        <div className='row'>
          <div className="col-md-3 p-3"> <img style={{height:"75%"}} className='img-fluid' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="no img" /></div>
          <div className="col-md-3 p-3"> <img style={{height:"75%"}} className='img-fluid' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png" alt="no img" /></div>

          <div className="col-md-3 p-3"> <img style={{height:"75%"}} className='img-fluid' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png" alt="no img" /></div>

          <div className="col-md-3 p-3"> <img style={{height:"75%"}} className='img-fluid' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png" alt="no img" /></div>

          <div className="col-md-3 p-3"> <img style={{height:"75%"}} className='img-fluid' src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="no img" /></div>

          <div className="col-md-3 p-3"> <img style={{height:"75%"}} className='img-fluid' src="https://tse3.mm.bing.net/th/id/OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA?pid=Api&P=0&h=180" alt="no img" /></div>
          <div className="col-md-3 p-3"> <img style={{height:"75%"}} className='img-fluid' src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="no img" /></div>

          <div className="col-md-3 p-3"> <img style={{height:"75%"}} className='https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg' src="/about.avif" alt="no img" /></div>

          <div className="col-md-3 p-3"> <img style={{height:"75%"}} className='img-fluid' src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png" alt="no img" /></div>
          <div className="col-md-3 p-3"> <img style={{height:"75%"}} className='img-fluid' src="https://tse3.mm.bing.net/th/id/OIP.wPWx97qT9JbAIeh4t6TDVQHaHa?pid=Api&P=0&h=180" alt="no img" /></div>
          <div className="col-md-3 p-3"> <img style={{height:"75%"}} className='img-fluid' src="https://img.freepik.com/premium-photo/design-professional-profile-picture-with-sharp-focus-natural-lighting-clean-neutral-background_880763-20280.jpg?w=1060" alt="no img" /></div>
          <div className="col-md-3 p-3"> <img style={{height:"75%"}} className='img-fluid' src="https://tse2.mm.bing.net/th/id/OIP.4oYqJqInuQd2TAlPPdggLgHaHa?pid=Api&P=0&h=180" alt="no img" /></div>
        </div>
       </div>
  </div>
</div>


    </div>
  )
}

export default Home
