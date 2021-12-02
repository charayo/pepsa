import React from 'react'
import AccountFooter from '../account-footer/AccountFooter'

function Login() {
    return (
        <div className="sign-in-div p-4">
            <div className="d-flex justify-content-between text-center">
                <span className="fa fa-angle-left text-white"></span>
                <span className="text-white">SIGN IN</span>
                <span>SIGN UP</span>
            </div>
            <div className="header text-center text-white m-4">
                <h1 className="title">Pepsa</h1>
                <div className="icons p-3 mb-2 mx-auto">
                    <span className="rounded-circle bg-white text-danger p-3 mr-2">icon1</span>
                    <span className="rounded-circle bg-white text-danger p-3 mr-2">icon2</span>
                    <span className="rounded-circle bg-white text-danger p-3 mr-2">icon3</span>
                </div>
                <div className="my-2">
                    .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
                </div>
                <span>Sign in now</span>
                
            </div>
            <div className="card input-card w-100 container p-3 mt-2">
                <div className="row">
                    <div className="p3 col-6">
                        <h6 className="text-dark"><small className="font-weight-bold ">Email Address</small></h6>
                        <input type="email" className="border-0 w-100 mt-2" placeholder="Enter email here"/>
                    </div>
                    <div className="p3 col-6 text-right">
                        <h6 className="text-dark"><small className="font-weight-bold">Use Phone Number</small></h6>
                    </div>
                </div>
            </div>
            <div className="card input-card w-100 container p-3 mt-2">
                <div className="row">
                    <div className="p3 col-6">
                        <h6 className="text-dark"><small className="font-weight-bold">Password</small></h6>
                        <input type="password" className="border-0 w-100 mt-2" placeholder="*************"/>
                    </div>
                    <div className="p3 col-6 text-right">
                        <h6 className="text-dark"><small className="font-weight-bold ">Forgot Password?</small></h6>
                    </div>
                </div>
            </div>
            <AccountFooter title="SIGN IN"/>
        </div>
    )
}

export default Login
