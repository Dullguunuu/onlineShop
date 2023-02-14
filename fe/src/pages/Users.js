import React, { useState, useEffect } from 'react'
import UserLoginModal from './sub/UserLoginModal'

export default function Users() {
    const [modal, setModal] = useState(false)

    const userInit = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        image: "",
        phone: "",
    }

    const [userItem, setUserItem] = useState(userInit)
    const [tableData, setTableData] = useState([])
    const [isEdited, setIsEdited] = useState(false)
    const [editId, setEditId] = useState("")

    function getData() {
        fetch("http://localhost:6060/api/user")
            .then((res) => res.json())
            .then((data) => {
                console.log(data.result);
                setTableData(data.result)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    function handleEditUser({ id, firstName, lastName, username, email, image, phone }) {
        setEditId(id)
        setIsEdited(true)
        setModal(!modal)
        setUserItem({ firstName, lastName, username, email, image, phone })
    }

    function handleUserSubmit(e) {
        e.preventDefault();

        console.log(userItem);

        isEdited ?
            fetch(`http://localhost:6060/api/user/${editId}`, {
                method: "PUT",
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(userItem)
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setIsEdited(false);
                    setModal(!modal)
                    setUserItem(userInit);
                    getData();
                })
            :
            fetch("http://localhost:6060/api/user", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userItem)
            })
                .then((res) => res.json)
                .then((data) => {
                    console.log(data)
                    setModal(!modal)
                    setUserItem(userInit)
                    getData();
                })
    }

    function handleDelUser(id) {
        fetch(`http://localhost:6060/api/user/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                getData();
            })
    }
    return (
        <div>
            <button className='btn btn-primary mb-5' onClick={() => setModal(!modal)} >+ Add User</button>
            <UserLoginModal
                modal={modal}
                setModal={setModal}
                userItem={userItem}
                setUserItem={setUserItem}
                handleUserSubmit={handleUserSubmit}
            />
            <div>
                {
                    tableData.map((e, index) => (
                        <div className='d-flex gap-5 align-items-center' >
                            <div className="d-flex gap-5 align-items-end mb-5 ms-5">
                                <img src={e.image ? e.image : require("../images/blank-profile.webp")} style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
                                <div>
                                    <p className='fst-italic fw-bold'>Username: <span className='fst-normal fw-normal'>{e.username}</span></p>
                                    <p className='fst-italic fw-bold'>Fullname: <span className='fst-normal fw-normal'>{e.firstName} {e.lastName}</span></p>
                                </div>
                                <div>
                                    <p className='fst-italic fw-bold'>Email: <span className='fst-normal fw-normal'>{e.email}</span></p>
                                    <p className='fst-italic fw-bold'>Phone: <span className='fst-normal fw-normal'>{e.phone}</span></p>
                                </div>
                            </div>
                            <div>
                                <button className='btn btn-outline-success me-2' onClick={() => handleEditUser(e)}><i className="bi bi-pencil-square"></i></button>
                                <button className='btn btn-outline-danger' onClick={() => handleDelUser(e.id)}><i className="bi bi-trash3"></i></button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
