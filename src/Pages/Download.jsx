import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Download() {
  return (
    <div className='container my-5'>
      <div className='d-flex justify-content-between align-items-center'>
        <h2>Download  Resume  History</h2>
<Link><FaArrowLeft />Back</Link>
      </div>
  <div className='row my-5'>
    {/* Duplicate the row according to the resume row */}
    <div className="col-lg-4">
      <div style={{height:'350px'}} className='rounded shadow p-3 '>
        <h6>Review at:time stamp</h6>
        <div className='mt-4 text-center'>
          <Link to={'/resume/:id'}><img className='w-50' src="https://template.canva.com/EAG0So5lBF0/1/0/1131w-oA_ZsX4MvMk.jpg" alt="resume not found" /></Link>
        </div>

      </div>
    </div>


  </div>

    </div>
  )
}

export default Download
