import React, { useEffect, useState } from 'react'

export default function Brands() {

    const brandInit = {
        brandName: "",
        brandLink: "",
    }

    const [brandItem, setBrandItem] = useState(brandInit);
    const [tableData, setTableData] = useState([]);
    const [isedited, setIsEdited] = useState(false);
    const [brandId, setBrandId] = useState("")

    function getData() {
        fetch("https://onlineshop-backend-mongoose.onrender.com/api/brand")
            .then((res) => res.json())
            .then((data) => {
                console.log(data.result)
                setTableData(data.result)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    function handleEditBrand({ id, brandName, brandLink }) {
        setBrandId(id);
        setIsEdited(true);
        setBrandItem({ brandName: brandName, brandLink: brandLink })
    }

    function handleBrandSubmit(e) {
        e.preventDefault();

        isedited ?
            fetch(`https://onlineshop-backend-mongoose.onrender.com/api/brand/${brandId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(brandItem)
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setIsEdited(false);
                    setBrandItem(brandInit);
                    getData();
                })
            :
            fetch("https://onlineshop-backend-mongoose.onrender.com/api/brand", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(brandItem)
            })
                .then((res) => res.json)
                .then((data) => {
                    console.log(data)
                    getData()
                    setBrandItem(brandInit)
                })
    }

    function handleDelBrand(id) {
        fetch(`https://onlineshop-backend-mongoose.onrender.com/api/brand/${id}`, {
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
            <form className='row g-2' onSubmit={handleBrandSubmit}>
                <div className='col-4'>
                    <input placeholder='Brand Name' className='form-control' value={brandItem.brandName} onChange={(e) => setBrandItem({ ...brandItem, brandName: e.target.value })} />
                </div>
                <div className='col-4'>
                    <input placeholder='Brand Link' className='form-control' value={brandItem.brandLink} onChange={(e) => setBrandItem({ ...brandItem, brandLink: e.target.value })} />
                </div>
                <div className='col-auto'>
                    <button className='btn btn-primary'>+ Create new</button></div>
            </form>
            <table className='table table-hover mt-4'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Brand Name</th>
                        <th scope='col'>Link</th>
                        <th scope='col'>Action Buttons</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((e, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{e.brandName}</td>
                            <td>{e.brandLink}</td>
                            <td className='d-flex gap-2'>
                                <button className='btn btn-outline-success' onClick={() => handleEditBrand(e)}>Edit</button>
                                <button className='btn btn-outline-danger' onClick={() => handleDelBrand(e.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}
