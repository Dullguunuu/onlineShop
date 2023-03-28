import { React, useEffect, useState } from 'react'

export default function Customers() {
    const [tableData, setTableData] = useState([])

    function getData() {
        fetch("https://onlineshop-backend-mongoose.onrender.com/api/customer")
            .then((res) => res.json())
            .then((data) => {
                console.log(data.result);
                setTableData(data.result)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    function handleDelCustomer(id) {
        fetch(`https://onlineshop-backend-mongoose.onrender.com/api/customer/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                getData()
            })
    }

    return (
        <table className='table table-hover m-4'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Fullname</th>
                    <th scope='col'>Username</th>
                    <th scope='col'>E-mail</th>
                    <th scope='col'>Phone</th>
                    <th scope='col'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((e, index) => (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{e.firstName} {e.lastName}</td>
                        <td>{e.username}</td>
                        <td>{e.email}</td>
                        <td>{e.phone}</td>
                        <td className='d-flex gap-2'>
                            <button className='btn btn-outline-success'>Edit</button>
                            <button className='btn btn-outline-danger' onClick={() => handleDelCustomer(e.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
