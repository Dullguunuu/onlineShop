import React from 'react'
import "../App.css";

export default function AdminLogin() {
    function adLogin(){
        
    }
    return (
        <div className='adminBackground'>
            <div className="modal-body" >
                <h1 className="modal-title">Welcome back.</h1>
                <div className="row">
                    <div className="col-md-12">
                        <div className="mb-4">
                            <label className="from-label mb-3">E-mail</label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="mb-4">
                            <label className="from-label mb-3">Password</label>
                            <input className="form-control" type="password" />
                        </div>
                        <button className="btn btn-outline-success ps-5 pe-5 d-flex" onClick={()=> adLogin()} >Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
