import React from 'react';
import './AccountFooter.css';
function AccountFooter(props) {
    return (
        <div className="m-0 p-0">
            <div className="text-center mt-2">
                <input type="button" value={props.title} className="btn w-75 rnd font-weight-bold pepsa-text py-2 btn-maroon" />
            </div>
            <div className="m-0 p-0 text-center text-white">
                <small>{props.tag1}</small><span className="pepsa-text2">{props.tag2}</span>
            </div>
            <div className="text-center text-white font-weight-bold mt-4 p-4">
                <span>Or Continue with</span>
            </div>
            <div className="d-flex justify-content-around mb-3">
                <button className="btn pepsa-text btn-maroon px-3">
                    <span className="fa fa-facebook-f "> Facebook</span>
                </button>
                <button className="btn pepsa-text btn-maroon px-3">
                    <span className="fa fa-google "> Google</span>
                </button>
            </div>
        </div>
    )
}

export default AccountFooter
