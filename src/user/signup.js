import React from "react"

const Signup=()=>{
    
    const signupForm=()=>(
        <div className="p-3 rounded" style={{backgroundColor:"#F6F6F6"}}>
            <h2 className="text-center">Register Yourself</h2>
            <form  >
        <div className="form-group">
          <label className="text-dark">First Name</label>
          <input
            type="text"
            className="col-12 form-control"
            //onChange={handleChange("phoneNo")}
            //value={phoneNo}
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
            //onChange={handleChange("password")}
            //value={password}
          />
        </div>


           <button className=" col-12 btn btn-lg btn-block mt-3 text-light" style={{backgroundColor:`#1F4690`}}>Sign Up</button>
           <p className="text-center">Already Registered ? <a href="/login">Login</a></p>
        </form>
        </div>
     )


    return(
        <div className="d-flex align-items-center" style={{minHeight:"90vh"}}>
            <div className="col-5 mx-auto">{signupForm()}</div>
        </div>
        
    )
}

export default Signup