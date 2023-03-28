import axios from 'axios';
import { React, useState } from 'react'

export default function UserLoginModal({ modal, setModal, getData }) {
    const modalDispStyle = modal ? "block" : "none";

    const userInit = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        image: "",
        phone: "",
        password: ""
    }

    const [userItem, setUserItem] = useState(userInit)
    const [isValid, setIsValid] = useState(false)
    const [passConfig, setPassConfig] = useState()

    function handleCustomerSubmit(e) {
        e.preventDefault()

        fetch("https://onlineshop-backend-mongoose.onrender.com/api/user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userItem)
        })
            .then((res) => res.json)
            .then((data) => {
                console.log(data)
                setUserItem(userInit)
                setModal(!modal)
                getData();
            })
    }

    return (
        <div className='modal' style={{ display: modalDispStyle }}>
            <div className='userModalBody' >
                <form>
                    <div className='d-flex gap-3 mb-4'>
                        <div className='col'>
                            <label className='form-label'>First name</label>
                            <input className='form-control' type="text" value={userItem.firstName} onChange={(e) => setUserItem({ ...userItem, firstName: e.target.value })} />
                        </div>
                        <div className='col'>
                            <label className='form-label'>Last name</label>
                            <input className='form-control' type="text" value={userItem.lastName} onChange={(e) => setUserItem({ ...userItem, lastName: e.target.value })} />
                        </div>
                    </div>
                    <div className='d-flex gap-3 mb-4'>
                        <div className='col'>
                            <label className='form-label'>Username</label>
                            <input className='form-control' type="text" value={userItem.username} onChange={(e) => setUserItem({ ...userItem, username: e.target.value })} />
                        </div>
                        <div className='col'>
                            <label className='form-label'>Phone</label>
                            <input className='form-control' type="number" value={userItem.phone} onChange={(e) => setUserItem({ ...userItem, phone: e.target.value })} />
                        </div>
                    </div>
                    <div className='mb-4 col-8'>
                        <label className='form-label'>Email</label>
                        <input className='form-control' type="email" value={userItem.email} onChange={(e) => setUserItem({ ...userItem, email: e.target.value })} />
                    </div>
                    <div className='mb-4 col-8'>
                        <label className='form-label'>Thumb image</label>
                        <input className='form-control' type="file" onChange={(e) => {
                            console.log(e.target.files);
                            const url = "https://api.cloudinary.com/v1_1/dnedspqvv/upload";

                            const formData = new FormData();
                            let file = e.target.files[0];
                            formData.append("file", file);
                            formData.append("api_key", 717874992253798);
                            formData.append("folder", "online-shop-images");
                            formData.append("upload_preset", "mu1axwmr");

                            axios
                                .post(url, formData)
                                .then((res) => {
                                    console.log(res);

                                    setUserItem({
                                        ...userItem, image: res.data.secure_url,
                                    })
                                })
                                .catch((err) => console.log(err))
                        }} />

                    </div>

                    <div className='mb-4 col-8'>
                        <label className='form-label'>Password</label>
                        <input className='form-control' type="text" value={userItem.password}
                            onChange={(e) => {
                                setUserItem({ ...userItem, password: e.target.value })
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
                        <input className='form-control' type="text" style={{ border: passConfig == userItem.password ? "1px solid lightgrey" : "1px solid rgba(255, 0, 0, 0.421)" }} onChange={(e) => setPassConfig(e.target.value)} />
                    </div>
                    <div className='d-flex gap-2 justify-content-end mt-4'>
                        <button className='btn btn-primary' onClick={handleCustomerSubmit}>Create Admin User</button>
                        <button className='btn btn-danger' onClick={() => setModal(!modal)}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
