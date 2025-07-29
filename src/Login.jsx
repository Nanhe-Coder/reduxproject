import { useState } from "react"

const Login=()=>{
    const[log,setlog]=useState(false);
    const[error,seterror]=useState("");
   const[form,setform]=useState({
    name:"",
    email:"",
    password:""
   })
   const[login,setlogin]=useState({
    email:"",
    password:""
   })
   const handleChange=(e)=>{
    setform({...form,[e.target.name]:e.target.value})
   }

   const handleinput=(e)=>{
    setlogin({...login,[e.target.name]:e.target.value})
   }
   const handleClear=()=>{
     setform({
        name:"",
        email:"",
        password:""
     })
   }
   const validate = () => {
    if (!form.name || !form.email || !form.password) {
      return "All fields are required!";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      return "Please enter a valid email!";
    }
    if (form.password.length < 6) {
      return "Password must be at least 6 characters!";
    }
    return "";
  };
   const handleSave=(e)=>{
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      seterror(validationError);
      return;
    }

    seterror("");
    console.log("this is my data",form);
    localStorage.setItem("user", JSON.stringify(form));
    handleClear();
    alert("Registration successful!");
    setlog(true);
   }
   const handlelogin=()=>{
    const savedUser = JSON.parse(localStorage.getItem("user"));
if (
  savedUser.email === login.email &&
  savedUser.password === login.password
) {
  alert("Login Successful");
} else {
  alert("Invalid Credentials");
}
 }

    return(
        <>
       {
        !log?  <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form onSubmit={handleSave} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <input type="text" name="name" onChange={handleChange} value={form.name} placeholder="Please Enter  your name" className="w-full mb-4 p-3 border rounded"/>
        <input type="email" name="email" onChange={handleChange} value={form.email} placeholder="Please Enter your email" className="w-full mb-4 p-3 border rounded"/>
        <input type="password" name="password" onChange={handleChange} value={form.password} placeholder="Please Enter your password" className="w-full mb-4 p-3 border rounded"/>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Register</button>
        </form>
        </div>:<div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form onSubmit={handlelogin} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input type="email" name="email" onChange={handleinput} value={login.email} placeholder="Please Enter your email" className="w-full mb-4 p-3 border rounded"/>
        <input type="password" name="password" onChange={handleinput} value={login.password} placeholder="Please Enter your password" className="w-full mb-4 p-3 border rounded"/>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
        </form></div>
       }
        </>
    )
}


export default Login