import React from 'react'

export default function UserLoginModal({ modal, setModal }) {
    const modalDispStyle = modal ? "block" : "none";
    return (
        <div className='modal' style={{ display: modalDispStyle }}>
            <div className='modal-body'>
                <form>
                    <div className='p-2'>
                        <label className='form-label'>First name</label>
                        <input className='form-control' type="text" />
                    </div>
                    <div className='p-2'>
                        <label className='form-label'>Last name</label>
                        <input className='form-control' type="text" />
                    </div>
                    <div className='p-2'>
                        <label className='form-label'>Email</label>
                        <input className='form-control' type="email" />
                    </div>
                    <div className='p-2'>
                        <label className='form-label'>Phone</label>
                        <input className='form-control' type="number" />
                    </div>
                    <div className='p-2'>
                        <label className='form-label'>Password</label>
                        <input className='form-control' type="password" />
                        <p className='pt-2'>Password must contain </p>
                        <ul>

                            <li>at least 8 characters</li>
                            <li>at least one uppercase and lowercase letter</li>
                            <li>at least one number and letter</li>
                        </ul>
                    </div>
                    <div className='d-flex gap-2 justify-content-end'>
                        <button className='btn btn-primary'>Create User</button>
                        <button className='btn btn-danger' onClick={() => setModal(!modal)}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
