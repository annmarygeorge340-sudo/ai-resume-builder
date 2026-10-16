import { Button, Divider } from '@mui/material'
import React from 'react'

function Preview() {
  return (
    <div className='w-100'>
      <h2>Full Name</h2>
<p className='fs-5 lh-1'>Phone no:</p>
<p className='fs-5 lh-1'>Email:</p>
<p className='fs-5 lh-1'>Linkedin:</p>
<p className='fs-5 lh-1'>Github:</p>
<p className='fs-5 lh-1'>Location:</p>      
<Divider className='bg-dark'/>
<h2>Professional Summary</h2>
<p>Summary</p>
<Divider className='bg-dark'/>
<h2>Technical Skills</h2>
<span><Button variant='text' className='bg-dark text-light rounded mb-2'>skills</Button></span>
<Divider className='bg-dark '/>
<p className='fs-5 lh-1 '>Bachelor's Degree</p>
<p className='fs-5 lh-1'>university/collage name:</p>
<p className='fs-5 lh-1'>year of Graduation:</p>
    </div>
  )
}

export default Preview
