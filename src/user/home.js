import React from "react"

const Home=()=>{
    return(
        <div>
            <div className=" d-flex align-items-center" style={{height:"60vh"}}>
                <div><h1 className="text-center col-9 mx-auto" style={{color:`#1F4690`,fontSize:"6em"}}>Welcome to Adrixus Technologies</h1></div>               
            </div>
            <div className="col-5 mx-auto">
                    <div className="d-inline"><a href="/register" className="m-1 col-5 btn btn-lg btn-danger">Register</a></div>
                    <div className="d-inline"><a href="/login" className="m-1 col-5 btn btn-lg btn-warning">Login</a></div>

                </div>
        </div>
    )
}

export default Home