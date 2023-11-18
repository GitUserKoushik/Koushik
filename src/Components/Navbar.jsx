import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div style={{height:"50px", width:"97%",margin:"auto",borderBottom:"1px solid black",display:"flex",justifyContent:"space-between"}}>
        <div style={{height:"50px",width:"190px", display:"flex",color:"black",fontSize:"40px",fontWeight:"7900",}}>
            SUPERBYK

        </div>
        <div style={{height:"50px", width:"400px", display:"flex",justifyContent:"space-between", alignItems:"center"}}>
           <Link style={{textDecoration:"none",color:"black",letterSpacing:"2px",fontWeight:"900"}}className="nav-link"  to="/">
            Home
           </Link>
           <Link style={{textDecoration:"none",color:"black",letterSpacing:"2px",fontWeight:"900"}}className="nav-link"  to="/Product">
            Product
           </Link>
           <Link style={{textDecoration:"none",color:"black",letterSpacing:"2px",fontWeight:"900"}}className="nav-link"  to="/Login">
            Login
           </Link>
           <Link style={{textDecoration:"none",color:"black",letterSpacing:"2px",fontWeight:"900"}}className="nav-link"  to="/Register">
            Register
           </Link>

        </div>
      
    </div>
  )
}

