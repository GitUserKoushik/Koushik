import React from 'react'
import { Link } from 'react-router-dom';
import supbyk1 from '../Images/supbyk1.jpg'
import supbyk2 from '../Images/slide_02.jpg';
import supbyk3 from '../Images/supbyk3.jpg'
import supbyk4 from '../Images/supbyk4.jpg';
import supbyk6 from '../Images/supbyk6.jpg';
import supbyk5 from '../Images/supbyk5.jpg';

import { Button, Container, Grid, TextField,Typography, Paper} from "@mui/material";

export default function Home() {

let logout = ()=>{
localStorage.clear();
window.location.reload();
}
  return (
    <>
    <div style={{display:"flex", justifyContent:"center",columnGap:"20px"}}>
  
        <img src= {supbyk3} alt="" style={{height:"400px", width:"60%",marginLeft:"10px"}}  />
        <Paper style={{display:"flex", flexDirection:"column",justifyContent:"center",rowGap:"30px",height:"180px",width:"300px",marginTop:"80px"}}>
        <Typography variant='h4' style={{marginTop:"80px",paddingLeft:"20px"}}>
            Buy Superbikes
          </Typography>
         <Button variant='contained' color='primary' style={{width:"180px",margin:"auto",marginBottom:"80px"}}>
          <Link to="/Register" style={{textDecoration:"none",color:"white"}}>
          Register
          </Link>

         </Button>
         </Paper>

    </div>
    <div style={{display:"flex",margin:"auto",width:"95%",height:"300px",justifyContent:"space-between",alignItems:"center"}}>
      <div style={{height:"250px", width:"230px",border:"5px solid white",borderRadius:"15px",boxShadow:"1px 1px 10px 0px"}}>
        <img src={supbyk4} alt=""  style={{height:"250px", width:"230px",borderRadius:"11px"}}/>
      </div>
      <div style={{height:"250px", width:"230px",border:"5px solid white",borderRadius:"15px",boxShadow:"1px 1px 10px 0px"}}>
          <img src={supbyk5} alt=""  style={{height:"250px", width:"230px",borderRadius:"11px"}}/>
      </div>
      <div style={{height:"250px", width:"230px",border:"5px solid white",borderRadius:"15px",boxShadow:"1px 1px 10px 0px"}}>
          <img src={supbyk6} alt=""  style={{height:"250px", width:"230px",borderRadius:"11px"}}/>
      </div>
      <div style={{height:"250px", width:"230px",border:"5px solid white",borderRadius:"15px",boxShadow:"1px 1px 10px 0px"}}>
          <img src={supbyk1} alt=""  style={{height:"250px", width:"230px",borderRadius:"11px"}}/>
      </div>
    </div>
    <button onClick={logout} style={{marginLeft:"600px", height:"30px",width:"100px",padding:"5px",borderRadius:"5px"}}>
      Logout
    </button>
    </>
  )
}
