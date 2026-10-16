import React from 'react'
import { FaFileDownload } from 'react-icons/fa'
import Edit from '../Components/Edit'
import { IoDocumentText } from 'react-icons/io5'
import Preview from '../Components/Preview'
import { Link } from 'react-router-dom'
import { MdFileDownloadDone } from 'react-icons/md'
import { GrLinkPrevious } from 'react-icons/gr'

function View() {
  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          {/* navicon */}
<div className='d-flex justify-content-center align-items-center'>      
          {/* download */}
          <button style={{color:'#421c03'}} className='btn fs-5'><FaFileDownload/>Download</button>
          {/* edit */}
          <Edit/>
          {/* all resumes */}
          <Link style={{color:'#421c03'}} to={'/all-resumes'} className='btn mx-2 fs-5'><IoDocumentText/>all Resume</Link>
          {/* download history */}
           <Link style={{color:'#421c03'}} to={'/downloads'} className='btn mx-2 fs-5'><MdFileDownloadDone />Download History</Link>
          {/* back */}
           <Link style={{color:'#421c03'}} to={'/resumes-details'} className='btn mx-2 fs-5'><GrLinkPrevious />Previous</Link>
       
</div> 
    <div className='p-5'><Preview/>
      </div> 
        </div>
        <div className="col-lg-2"></div>

      </div>
      
    </div>
  )
}

export default View
