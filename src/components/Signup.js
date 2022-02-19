// import React,{useState} from 'react'

// export const Signup = () => {
//   const [ data,setData] = useState({
//     username : "",
//     email : "",
//     password : "",
//     confirmPassword : "",
//   })
//   const {username,email,password,confirmPassword} = data;
//   const changeHandler = e => {
//     setData({...data,[e.target.name]:e.target.value})
//   }
//   const submitHandler = e => {
//     e.preventDefault();
//     if(username.length<5){
//       alert("username must be at least 5 characters")
//     }else if(password !== confirmPassword){
//       alert("passwords are not matching")
//     }else{
//       console.log(data); 
//     }
//   }
//   return (
//     <div>
//       <center>
//         <form onSubmit={submitHandler}>  
//           <input type="text" name="username" value={username} onChange={changeHandler}/><br/>
//           <input type="email" name="email" value={email} onChange={changeHandler}/><br/>
//           <input type="password" name="password" value={password} onChange={changeHandler}/><br/>
//           <input type="password" name="confirmPassword" value={confirmPassword} onChange={changeHandler}/><br/>
//           <input type="submit" name="submit"/><br/>
//         </form>
//       </center>
//     </div>
//   )
// }

// export default Signup;


import React,{useState} from 'react'

export const Signup = () => {

    const [ data,setData] = useState({
            username : "",
            email : "",
            id : "",
            password : "",
            confirmPassword : "",
          })
          const {username,email,id,password,confirmPassword} = data;
          const changeHandler = e => {
            setData({...data,[e.target.name]:e.target.value})
          }
          const submitHandler = e => {
            e.preventDefault();
            if(username.length<5){
              alert("username must be at least 5 characters")
            }else if(password !== confirmPassword){
              alert("passwords are not matching")
            }else{
              console.log(data); 
            }

            let myForm = document.getElementsByClassName("myform");

            let name = myForm.name.value;
            let email = myForm.email.value;
            let number = myForm.number.value;
            let password = myForm.password.value;
            let confirmPassword = myForm.confirmPassword.value;

            console.log(name,email,number,password,confirmPassword);

            if(localStorage.getItem("users") == null){
              localStorage.setItem("users",JSON.stringify([]));
            }

            var user = {
              name,
              email,
              id,
              number,
              password,
              confirmPassword,
            }

            let array = JSON.parse(localStorage.getItem("users"));

            array.push(user);

            localStorage.setItem("users",JSON.stringify(array));

          }

  return (
    <>
    <div>
        <center>
         <form onSubmit={submitHandler} className="myform">  
          <input type="text" name="username" value={username} onChange={changeHandler} placeholder="username" /><br/>
          <input type="email" name="email" value={email} onChange={changeHandler} placeholder="email"/><br/>
          <input type="number" name="id" value={id} onChange={changeHandler} placeholder="doctor_id"/><br/>
          <input type="password" name="password" value={password} onChange={changeHandler} placeholder="password"/><br/>
          <input type="password" name="confirmPassword" value={confirmPassword} onChange={changeHandler} placeholder="re enter the password"/><br/>
          <input type="submit" name="submit"/><br/>
         </form>
      </center>
    </div>
    </>
    
  )
}

// export default Signup