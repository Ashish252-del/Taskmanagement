import React from "react";
import Completed from "./Completed";
import Progress from "./Progress";
import Todo from "./Todo";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";


const style = {
  position: "absolute",
  top: "20%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
 

};
const TaskManagement = () => {
   const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <button className="addtask" style={{marginLeft:'200px', marginTop:'50px'}} onClick={handleOpen}>CREATE TASK</button>
     
      <div className="row taskrow" style={{marginLeft:'200px'}}>
        <Todo />
        <Completed />
        <Progress />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
  >
        <Box sx={style}>

          <input type='text' placeholder="write here" style={{ border: '2px solid black', height:'40px', margin:'10px'}}/>
          
          <button className="postbuton">Add Task</button>
        </Box>
      </Modal>
    </>
  );
};

export default TaskManagement;