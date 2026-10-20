import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';   
import {  MdDeleteForever, MdEditSquare } from 'react-icons/md';
import { TextField } from '@mui/material';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight:'80vh',
  overflow:'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Edit() {
      const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
       <Button style={{color:'#421c03'}} className='fs-6' onClick={handleOpen}> <MdEditSquare />Edit CV</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Edit Resume Details
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
          <div>
                   <h1>Personal Details</h1>
                  <div className='row p-3 '>
                     <TextField  id="standard-basic-fullname" label="Full Name" variant="standard" /> 
                      <TextField  id="standard-basic-location" label="Location" variant="standard" />
                       <FormControl variant='standard'>
                   <InputLabel id="demo-simple-select-label">Chose job title</InputLabel>
                   <Select
                     labelId="demo-simple-select-label"
                     id="demo-simple-select"
                   
                     label="JOB"
                   
                   >
                     <MenuItem value={"JOB"}>Job</MenuItem>
                  
                   </Select>
                 </FormControl>
                  </div>
                 </div>
                 {/* contact */}
                 <div>
   <h1>Contact Details</h1>
          <div className='row p-3'>
             <TextField  id="standard-basic-email" label="E-mail" variant="standard" /> 
             <TextField  id="standard-basic-contactno" label="Contact Number" variant="standard" />
              <TextField  id="standard-basic-linkedin" label="Linkedin link" variant="standard" /> 
             <TextField  id="standard-basic-github" label="Github Link" variant="standard" />
          </div>
        </div>
                 {/* educational derails */}
                  <div>
          <h1>Educational Details</h1>
          <div className='row p-3'>
            
             <TextField  id="standard-basic-Degree" label="Bachelor's Degree" variant="standard" /> 
             <TextField id="standard-basic-university" label="university/collage name" variant="standard" />
              <TextField  id="standard-basic-year" label="year of Graduation" variant="standard" /> 
          </div>
        </div>

        {/* skills */}
        <div>
          <h2>Skills</h2>
          <div className='d-flex p-3'>
            <input type="text" placeholder='Add Skills' className='form-control'/>
<button className='btn'>Add</button>
          </div>
          <h5>Added Skills:</h5>
          <div className='d-flex justify-content-between flex-wrap p-3'>
            <Button variant='contained'>Skills <MdDeleteForever className='ms-3 fs-4' /></Button>

          </div>
      
<h2>Summary</h2>
<div className='row p-3'>
  <TextField id='summary' label='summary' variant='standard'></TextField>
</div>
  </div>
{/* update button */}
<button className='btn btn-primary'>Update CV</button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit
