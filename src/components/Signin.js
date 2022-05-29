import React from 'react'
import {useState} from "react";
import {Link} from "react-router-dom"; 

export const Signin = () => {

    const [data,setdata] = useState({
            email : "",
            id : "",
            passwoed : ""
          })
          const {email,id, password} = data;
        
          const changeHandler = e => {
            setdata({...data,[e.target.name]:[e.target.value]})
          }
          const submitHandler = e => {
            e.preventDefault();
            console.log(data);
            //window.location.href="./components/Home"

            let myForm = document.getElementsByClassName("myform");

            let email = myForm.email.value;
            let id = myForm.id.value;
            let password = myForm.password.value;

            let all_users = JSON.parse(localStorage.getItem("users"));

            all_users.forEach(function(user){
              if(email === user.email && password === user.password && id===user.id ){
                alert("successfully loged in");
              }else{
                alert("enter valid credentials");
              }  
            })

            {<Link to="/Home"><li>Home</li></Link>}
          }

  return (
    <center>
       <form onSubmit={submitHandler} className="myform" >
           <input type="email" name="email" value={email} placeholder='email' onChange={changeHandler}/><br/>
           <input type="number" name="id" value={id} placeholder='doctor_id' onChange={changeHandler}/><br/>           
           <input type="password" name="password" value={password} placeholder='password' onChange={changeHandler}/><br/>           
           <input type="submit" name="submit"/>
         </form>
    </center>
  )
}

// export default Signin