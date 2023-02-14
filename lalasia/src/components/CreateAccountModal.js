import React from 'react'
import { useState } from 'react'
import "../App.css"

export default function CreateAccountModal({ modal, setModal }) {
    const modalDisplay = modal ? "block" : "none"

    const customerInit = {
        firstName: "",
        lastName: "",
        username: "",
        phone: "",
        email: "",
        password: ""
    }

    const [customerItem, setCustomerItem] = useState(customerInit)
    const [isValid, setIsValid] = useState(false)
    const [passConfig, setPassConfig] = useState()

    function handleCustomerSubmit(e) {
        e.preventDefault()

        fetch("http://localhost:6060/api/customer", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(customerItem)
        })
            .then((res) => res.json)
            .then((data) => {
                console.log(data)
                setCustomerItem(customerInit)
                setModal(!modal)
            })
    }

    return (
        <div className="modal" style={{ display: modalDisplay }}>
            <div className="modal-body">
                <h1 className="modal-title">Welcome.
                    <span className='xButton' onClick={() => setModal(!modal)}><i class="bi bi-x"></i></span>
                </h1>
                <div className="row">
                    <form onSubmit={handleCustomerSubmit}>
                        <div className='flex gap-4 mb-4'>
                            <div className='col'>
                                <label className='form-label'>First name</label>
                                <input className='form-control' type="text" value={customerItem.firstName} onChange={(e) => setCustomerItem({ ...customerItem, firstName: e.target.value })} />
                            </div>
                            <div className='col'>
                                <label className='form-label'>Last name</label>
                                <input className='form-control' type="text" value={customerItem.lastName} onChange={(e) => setCustomerItem({ ...customerItem, lastName: e.target.value })} />
                            </div>
                        </div>
                        <div className='flex gap-4 mb-4'>
                            <div className='col'>
                                <label className='form-label'>Username</label>
                                <input className='form-control' type="text" value={customerItem.username} onChange={(e) => setCustomerItem({ ...customerItem, username: e.target.value })} />
                            </div>
                            <div className='col'>
                                <label className='form-label'>Phone</label>
                                <input className='form-control' type="number" value={customerItem.phone} onChange={(e) => setCustomerItem({ ...customerItem, phone: e.target.value })} />
                            </div>
                        </div>
                        <div className='mb-4 col-8'>
                            <label className='form-label'>Email</label>
                            <input className='form-control' type="email" placeholder='email@example.com'
                                value={customerItem.email} onChange={(e) => setCustomerItem({ ...customerItem, email: e.target.value })} />
                        </div>
                        <div className='mb-4 col-8'>
                            <label className='form-label'>Password</label>
                            <input className='form-control' type="text" value={customerItem.password}
                                onChange={(e) => {
                                    setCustomerItem({ ...customerItem, password: e.target.value })
                                    const regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])/g);
                                    const regex1 = new RegExp(/(?=.*[!@#$%^&*])(?=.*[0-9])/g);
                                    const regex2 = new RegExp(/(?=.{8,})/g);

                                    const para = e.target.value;

                                    const newArr = []
                                    newArr.push(
                                        regex.test(para),
                                        regex1.test(para),
                                        regex2.test(para)
                                    )
                                    setIsValid(newArr)
                                }} />
                            <p className='mt-4'>Password must contain </p>
                            <ul >
                                <li style={{ color: isValid[0] ? "green" : "red" }}>at least one uppercase and lowercase letter</li>
                                <li style={{ color: isValid[1] ? "green" : "red" }}>at least one number and special character</li>
                                <li style={{ color: isValid[2] ? "green" : "red" }}>at least 8 characters</li>
                            </ul>
                        </div>
                        <div className='col-8'>
                            <label className='form-label'>Password Confirmation</label>
                            <input className='form-control' type="text" style={{ border: passConfig == customerItem.password ? "1px solid lightgrey" : "1px solid rgba(255, 0, 0, 0.421)" }} onChange={(e) => setPassConfig(e.target.value)} />
                        </div>
                        <div className='d-flex gap-2 mt-4 justify-content-end'>
                            <button className='btn' style={{ background: "#518581", color: "white" }}>Create User</button>
                            <button className='btn btn-outline-danger col-2' onClick={() => setModal(!modal)}>Close</button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}