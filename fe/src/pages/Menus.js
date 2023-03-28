import React, { useEffect, useState } from 'react';
// import axios from "axios"

export default function Menus() {

    const menuInit = {
        position: 0,
        menuName: "",
        link: "",
    }

    const [menuItem, setMenuItem] = useState(menuInit);
    const [tableData, setTableData] = useState([])
    const [isedited, setIsEdited] = useState(false);
    const [editId, setEditId] = useState("");

    function getData() {
        fetch("https://onlineshop-backend-mongoose.onrender.com/api/menu")
            .then((res) => res.json())
            .then((data) => {
                console.log(data.result);
                setTableData(data.result)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    function handleEditMenu({ id, position, menuName, link }) {
        setEditId(id)
        setIsEdited(true)
        setMenuItem({ position: position, menuName: menuName, link: link })
    }

    function handleMenuSubmit(e) {
        e.preventDefault();
        isedited ?
            fetch(`https://onlineshop-backend-mongoose.onrender.com/api/menu/${editId}`, {
                method: "PUT",
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(menuItem)
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setIsEdited(false);
                    setMenuItem(menuInit);
                    getData();
                })
            :
            fetch("https://onlineshop-backend-mongoose.onrender.com/api/menu", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(menuItem)
            })
                .then((res) => res.json)
                .then((data) => {
                    console.log(data)
                    getData()
                    setMenuItem(menuInit)
                })

        // axios.post(menuItem)
        //     .then(res => {
        //         console.log(res.data);
        //     }).catch(err => console.log(err))
        //     .finally(() => console.log("done"))

    }

    function handleDelMenu(id) {
        fetch(`https://onlineshop-backend-mongoose.onrender.com/api/menu/${id}`, {
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
            <form className='row g-2' onSubmit={handleMenuSubmit}>
                <div className='col-auto'>
                    <input className='form-control' placeholder='Position'
                        type="number" name="position"
                        value={menuItem.position}
                        onChange={(e) => setMenuItem({ ...menuItem, position: e.target.value })} />
                </div>
                <div className='col-auto'>
                    <input className='form-control' placeholder='Menu Name' value={menuItem.menuName} onChange={(e) => setMenuItem({ ...menuItem, menuName: e.target.value })}
                        type="text" name="menuName" /></div>
                <div className='col-auto'><input className='form-control' value={menuItem.link} onChange={(e) => setMenuItem({ ...menuItem, link: e.target.value })} placeholder='Link' type="text" name="link" /></div>
                <div className='col-auto'><button className='btn btn-primary addMenuBtn'>+ Add menu </button></div>
            </form>
            <table className='table table-hover mt-4'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Menu Name</th>
                        <th scope='col'>Link</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((e, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{e.menuName}</td>
                            <td>{e.link}</td>
                            <td className='d-flex gap-2'>
                                <button className='btn btn-outline-success' onClick={() => handleEditMenu(e)}>Edit</button>
                                <button className='btn btn-outline-danger' onClick={() => handleDelMenu(e.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


// cloudinary