import React,{useState} from "react"

const Signup=()=>{


    const[fname,setFname]=useState("")
    const[lname,setLname]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[cpassword,setCpassword]=useState("")
    const[error,setError]=useState("")
    const [success,setSuccess]=useState(false)


    async function postSignup() {
      const response = await fetch(`https://adrixustech-backend.herokuapp.com/api/user-signup`, {
          method: 'POST',
          headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            "firstName":fname,
            "lastName":lname,
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
        }
       console.log(data);
  }


    const clickSubmit=(e)=>{
        e.preventDefault();
        postSignup()
        
    }
    
    const signupForm=()=>(
        <div className="p-3 rounded" style={{backgroundColor:"#F6F6F6"}}>
            <h2 className="text-center">Register Yourself</h2>
            <div>{showError()}</div>
            <div>{showSuccess()}</div>
            <form  >
        <div className="form-group">
          <label className="text-dark">First Name</label>
          <input
            type="text"
            className="col-12 form-control"
            onChange={(e)=>{setFname(e.target.value)}}
            value={fname}
            placeholder="Enter your First Name"
            required
          />
         
         
        </div>

        <div className="form-group mt-3">
          <label className="text-dark">Last Name : </label>
          <input
            type="text"
            className="form-control col-12"
            placeholder="Enter your Last Name"
            onChange={(e)=>{setLname(e.target.value)}}
            value={lname}
            //onChange={handleChange("password")}
            //value={password}
          />
        </div>

        <div className="form-group mt-3">
          <label className="text-dark">Email : </label>
          <input
            type="email"
            className="form-control col-12"
            placeholder="Enter your Email Id"
            onChange={(e)=>{setEmail(e.target.value)}}
            value={email}
            //onChange={handleChange("password")}
            //value={password}
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
            //onChange={handleChange("password")}
            //value={password}
          />
        </div>

        <div className="form-group mt-3">
          <label className="text-dark">Confirm Password: </label>
          <input
            type="password"
            className="form-control col-12"
            placeholder="Enter same Password as above."
            onChange={(e)=>{setCpassword(e.target.value)}}
            value={cpassword}
            //onChange={handleChange("password")}
            //value={password}
          />
        </div>


           <button onClick={clickSubmit} className=" col-12 btn btn-lg btn-block mt-3 text-light" style={{backgroundColor:`#1F4690`}}>Sign Up</button>
           <p className="text-center">Already Registered ? <a href="/login">Login</a></p>
        </form>
        </div>
     )

     const showError=()=>(
      <div className="alert alert-danger" style={{display:error ? "":"none"}}>
            {error}
      </div>
       )
      const showSuccess  =()=>(
      <div className="alert alert-success" style={{display:success ? "":"none"}}>
           New Account is Created. Please <a href="/login">Login</a>.
      </div>
)


    return(
        <div className="d-flex align-items-center" style={{minHeight:"90vh"}}>
           
            <div className="col-5 mx-auto">{signupForm()}</div>
        </div>
        
    )
}

export default Signup