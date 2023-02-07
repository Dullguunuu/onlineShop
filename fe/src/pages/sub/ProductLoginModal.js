import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function UserLoginModal({ productModal, setProductModal, productInit, productItem, setProductItem, tableData, setTableData, isEdited, setIsEdited, editId, setEditId, handleProductSubmit }) {
    const modalDispStyle = productModal ? "block" : "none";

    const [categoryData, setCategoryData] = useState([])
    const [brandData, setBrandData] = useState([])
    const [userData, setUserData] = useState([])

    const [loading, setLoading] = useState(false);

    function getCategoryData() {
        fetch("http://localhost:6060/api/category")
            .then((res) => res.json())
            .then((data) => {
                console.log(data.result);
                setCategoryData(data.result)
            })
    }

    function getBrandData() {
        fetch("http://localhost:6060/api/brand")
            .then((res) => res.json())
            .then((data) => {
                console.log(data.result);
                setBrandData(data.result)
            })
    }

    function getUserData() {
        fetch("http://localhost:6060/api/user")
            .then((res) => res.json())
            .then((data) => {
                console.log(data.result);
                setUserData(data.result)
            })
    }

    useEffect(() => {
        getCategoryData();
        getBrandData();
        getUserData();
    }, [])

    const sendImg = async (fieldName, files) => {
        setLoading(true)
        console.log(files)
        console.log(fieldName)
        const url = "https://api.cloudinary.com/v1_1/dnedspqvv/upload";
        const newArr = [];
        for (let i = 0; i < files[0].length; i++) {
            newArr.push(files[0][i])
        }

        const promise = await Promise.all(
            newArr.map((file) => {
                const formData = new FormData();
                formData.append("file", file)
                formData.append("api_key", 717874992253798)
                formData.append("folder", "online-shop-images")
                formData.append("upload_preset", "mu1axwmr")
                return axios.post(url, formData)
            })
        )
        console.log(promise)

        const arr = [];

        promise.map((res) => {
            arr.push(res.data.secure_url)
        })

        if (fieldName === "images") {
            setProductItem({ ...productItem, images: arr })
        } else {
            setProductItem({ ...productItem, thumbImage: arr[0] })
        }
        setLoading(false)
    }

    return (
        <div className='modal' style={{ display: modalDispStyle }}>
            <div className='productModalBody'>
                <form>
                    <div className='m-3'>
                        <label className='form-label'>Product name </label>
                        <input className='form-control' type="text" value={productItem.productName} onChange={(e) => setProductItem({ ...productItem, productName: e.target.value })} />
                    </div>
                    <div className='d-flex'>
                        <select className='form-select m-3' value={productItem.categoryId} onChange={(e) => setProductItem({ ...productItem, categoryId: e.target.value })}>
                            <option selected>Select category</option>
                            {
                                categoryData.map((e) => (
                                    <option value={e.id} >{e.categoryName}</option>
                                ))
                            }
                        </select>
                        <select className='form-select m-3' value={productItem.brandId} onChange={(e) => setProductItem({ ...productItem, brandId: e.target.value })}>
                            <option selected>Select brand</option>
                            {
                                brandData.map((e) => (
                                    <option value={e.id}>{e.brandName} </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className='d-flex '>
                        <div className='m-3'>
                            <label className='form-label'>Price</label>
                            <input className='form-control' type="number" value={productItem.price} onChange={(e) => setProductItem({ ...productItem, price: e.target.value })} />
                        </div>
                        <div className='m-3'>
                            <label className='form-label'>Sale percent</label>
                            <input className='form-control' type="number" value={productItem.salePercent} onChange={(e) => setProductItem({ ...productItem, salePercent: e.target.value })} />
                        </div>
                        <div className='m-3'>
                            <label className='form-label'>Quantity</label>
                            <input className='form-control' type="number" value={productItem.quantity} onChange={(e) => setProductItem({ ...productItem, quantity: e.target.value })} />
                        </div>
                    </div>
                    <div className='m-3'>
                        <label className='form-label'>Description</label>
                        <textarea className='form-control' rows="2" type="text" value={productItem.description} onChange={(e) => setProductItem({ ...productItem, description: e.target.value })} />
                    </div>
                    {loading && "loading..."}
                    <div className='m-3'>
                        <label className='form-label'>Thumb image</label>
                        <input className='form-control' type="file" onChange={(e) => {
                            console.log(e.target.files);
                            const arr = [];
                            arr.push(e.target.files);
                            sendImg("thumbImage", arr)
                        }} />
                        {/* {
                            isEdited ?
                                <div className='col-3 p-2'>
                                    <img src={productItem.images[0]} />
                                </div>
                                : ''
                        } */}
                    </div>
                    <div className='m-3'>
                        <label className='form-label'>Images</label>
                        <input className='form-control' type="file" multiple onChange={(e) => {
                            console.log(e.target.files)
                            const arr = [];
                            arr.push(e.target.files);
                            sendImg("images", arr)
                        }} />

                    </div>
                    <div className='d-flex'>
                        <select className='form-select m-3' >
                            <option selected>Created user</option>
                            {
                                userData.map((e, index) => (
                                    <option value={index}>{e.firstName} {e.lastName}</option>
                                ))
                            }
                        </select>
                        <select className='form-select m-3'>
                            <option selected>Updated user</option>
                            {
                                userData.map((e, index) => (
                                    <option value={index}>{e.firstName} {e.lastName}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className='d-flex gap-2 justify-content-end'>
                        <button className='btn btn-primary' onClick={handleProductSubmit}>Add product</button>
                        <button className='btn btn-danger' onClick={() => setProductModal(!productModal)}>Close</button>
                    </div>
                </form>
            </div >
        </div >
    )
}
