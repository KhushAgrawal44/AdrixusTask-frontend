import React,{useState} from "react"
import { useNavigate } from "react-router-dom";

const Signin=()=>{


    const[fname,setFname]=useState("")
    const[lname,setLname]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[error,setError]=useState("")
    const [success,setSuccess]=useState(false)

    let navigate = useNavigate(); 

    async function postSignin() {
      const response = await fetch(`https://adrixustech-backend.herokuapp.com/api/user-signin`, {
          method: 'POST',
          headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            "email":email,
            "password":password
          })
         
        })
        const data=await response.json()
        if(data.error)
        {
          console.log(data.error);
          setError(data.error)
        }
        else{
          setSuccess(true)
          navigate("/dashboard");

        }
       console.log(data);
  }

    const clickSubmit=(e)=>{
        e.preventDefault();
        postSignin()
    }
    
    const signinForm=()=>(
        <div className="p-3 rounded" style={{backgroundColor:"#F6F6F6"}}>
            <div>{showError()}</div>
            <h2 className="text-center">Log In to your Account</h2>
            <form  >
       

        <div className="form-group mt-3">
          <label className="text-dark">Email : </label>
          <input
            type="email"
            className="form-control col-12"
            placeholder="Enter your Email Id"
            onChange={(e)=>{setEmail(e.target.value)}}
            value={email}
            
          />
        </div>

        <div className="form-group mt-3">
          <label className="text-dark">Password: </label>
          <input
            type="password"
            className="form-control col-12"
            placeholder="Enter Password"
            onChange={(e)=>{setPassword(e.target.value)}}
            value={password}
            
          />
        </div>

       
           <button onClick={clickSubmit} className=" col-12 btn btn-lg btn-block mt-3 text-light" style={{backgroundColor:`#1F4690`}}>Log In</button>
           <p className="text-center">Dont have an Account ? <a href="/register">Register</a></p>
        </form>
        </div>
     )


     const showError=()=>(
      <div className="alert alert-danger" style={{display:error ? "":"none"}}>
            {error}
      </div>
       )


    return(
        <div className="d-flex align-items-center" style={{minHeight:"90vh"}}>
            <div className="col-5 mx-auto">{signinForm()}</div>
        </div>
        
    )
}

export default Signin