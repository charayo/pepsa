import React from 'react';
import AccountFooter from '../account-footer/AccountFooter';
import './Signup.css';
function Signup() {
    return (
        <div className="sign-up-div p-4">
            <div className="d-flex justify-content-between text-center">
                <span className="fa fa-angle-left text-white"></span>
                <span className="text-white">SIGN UP</span>
                <span>SIGN IN</span>
            </div>
            <div className="header text-center text-white m-4">
                <h1 className="title">Pepsa</h1>
                <div className="my-2">
                    .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
                </div>
                <span>Sign up now</span>
                
            </div>
            <div className="card input-card w-100 container p-3 mt-2">
                <div className="row">
                    <div className="p3 col-6">
                        <h6 className="text-dark"><small className="font-weight-bold ">Full Name</small></h6>
                        <input type="email" className="border-0 w-100 mt-2" placeholder="Enter fullname here"/>
                    </div>
                    <div className="p3 col-6 text-right">
                    </div>
                </div>
            </div>
            <div className="card input-card w-100 container p-3 mt-2">
                <div className="row">
                    <div className="p3 col-6">
                        <h6 className="text-dark"><small className="font-weight-bold ">Phone Number</small></h6>
                        <input type="text" className="border-0 w-100 mt-2" placeholder="+23481234567"/>
                    </div>
                    <div className="p3 col-6 text-right">
                        <h6 className="text-dark"><small className="font-weight-bold">Use Email Address</small></h6>
                    </div>
                </div>
            </div>
            <div className="card input-card w-100 container p-3 mt-2">
                <div className="row">
                    <div className="p3 col-6">
                        <h6 className="text-dark"><small className="font-weight-bold">Create Password</small></h6>
                        <input type="password" className="border-0 w-100 mt-2" placeholder="*************"/>
                    </div>
                    <div className="p3 col-6 text-right">
                    </div>
                </div>
            </div>
            <div className="card input-card w-100 container p-3 mt-2">
                <div className="row">
                    <div className="p3 col-6">
                        <h6 className="text-dark"><small className="font-weight-bold">Confirm Password</small></h6>
                        <input type="password" className="border-0 w-100 mt-2" placeholder="*************"/>
                    </div>
                    <div className="p3 col-6 text-right">
                    </div>
                </div>
            </div>
            <div className="container">
                <small>
                    <input type="checkbox" name="" id="" /><span>Read, click and agreed to <a href="">Terms and Conditions</a></span>
                </small>
            </div>
            <AccountFooter title="SIGN UP" tag1="Already have an account " tag2="SIGN IN"/>

        </div>
    )
}

export default Signup
