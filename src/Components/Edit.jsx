import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';   
import { MdEditSquare } from 'react-icons/md';
import { TextField } from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
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
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit
