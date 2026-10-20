
import React from 'react'
import { IoIosTrash } from 'react-icons/io'
import { Link } from 'react-router-dom'

function Saved() {
  return (
    <div className='container d-flex flex-column justify-content-center align-items-center my-5'>
<h1 className='fw-bold'>All Saved Resumes</h1>
  <table className="table table-hover table-stripped my-5">
    <thead className='fs-3'>
      <tr>
        <th>#</th>
        <th>Resume</th>
        <th>Job Role</th>
        <th>...</th>
      </tr>
    </thead>
    <tbody  className='fs-5'>
      <tr>
        <td>1</td>
        <td><Link to={'/resume/:id'}>NAME</Link></td>
        <td>job</td>
        <td><button className='btn btn-danger'><IoIosTrash /></button></td>
      </tr>
    </tbody>
  </table>
  </div>
  )
}

export default Saved
