import React, { useEffect, useState } from 'react'

export default function Categories() {

    const cateInit = {
        categoryName: "",
        categoryLink: "",
    }

    const [cateItem, setCateItem] = useState(cateInit);
    const [tableData, setTableData] = useState([]);
    const [isedited, setIsEdited] = useState(false);
    const [categoryId, setCategoryId] = useState("")

    function getData() {
        fetch("http://localhost:6060/api/category")
            .then((res) => res.json())
            .then((data) => {
                console.log(data.result)
                setTableData(data.result)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    function handleEditCategory({ id, categoryName, categoryLink }) {
        setCategoryId(id);
        setIsEdited(true);
        setCateItem({ categoryName: categoryName, categoryLink: categoryLink })
    }

    function handleCategorySubmit(e) {
        e.preventDefault();

        isedited ?
            fetch(`http://localhost:6060/api/category/${categoryId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(cateItem)
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setIsEdited(false);
                    setCateItem(cateInit);
                    getData();
                })
            :
            fetch("http://localhost:6060/api/category", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(cateItem)
            })
                .then((res) => res.json)
                .then((data) => {
                    console.log(data)
                    getData()
                    setCateItem(cateInit)
                })
    }

    function handleDelCategory(id) {
        fetch(`http://localhost:6060/api/category/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                getData()
            })
    }

    return (
        <div>
            <form className='row g-2' onSubmit={handleCategorySubmit}>
                <div className='col-4'>
                    <input placeholder='Category Name' className='form-control' value={cateItem.categoryName} onChange={(e) => setCateItem({ ...cateItem, categoryName: e.target.value })} />
                </div>
                <div className='col-4'>
                    <input placeholder='Category Link' className='form-control' value={cateItem.categoryLink} onChange={(e) => setCateItem({ ...cateItem, categoryLink: e.target.value })} />
                </div>
                <div className='col-auto'>
                    <button className='btn btn-primary'>+ Create new</button></div>
            </form>
            <table className='table table-hover mt-4'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Menu Name</th>
                        <th scope='col'>Link</th>
                        <th scope='col'>Action Buttons</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((e, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{e.categoryName}</td>
                            <td>{e.categoryLink}</td>
                            <td className='d-flex gap-2'>
                                <button className='btn btn-outline-success' onClick={() => handleEditCategory(e)}>Edit</button>
                                <button className='btn btn-outline-danger' onClick={() => handleDelCategory(e.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}
