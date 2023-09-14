import React, { useState } from "react";
import "./loginstyle.css";
import { useNavigate } from "react-router-dom";
export default function LoginView() {
    const navigate=useNavigate()
    const [persone,setpersone]= useState({
        name:"",
        phone:"",
        password:"",
    })
    const handlechange=(e)=>{
        const {name,value}=e.target
        setpersone({
            ...persone,
            [name]: [value]
        })
    }
    const handlesubmit=()=>{
        localStorage.setItem('persone',persone.name)
        navigate('/')
    }
  return (
    <main className="maindiv">
      <section className="mainLogin">
        <div>
          <input type="text"   name="name" onChange={handlechange} placeholder="Name"/>
          <input type="number" name="phone"  onChange={handlechange} placeholder="Phone"/>
          <input type="password"  name="password"  onChange={handlechange} placeholder="Passowrd"/>
          <button onClick={handlesubmit}>Login</button>
        </div>
      </section>
    </main>
  );
}
