import React, { useState } from 'react'
import axios from 'axios';

export default function UserLoginModal({ productModal, setProductModal, productInit, productItem, setProductItem, tableData, setTableData, isEdited, setIsEdited, editId, setEditId, handleProductSubmit }) {
    const modalDispStyle = productModal ? "block" : "none";



    return (
        <div className='modal' style={{ display: modalDispStyle }}>
            <div className='productModalBody'>
                <form>
                    <div className='m-3'>
                        <label className='form-label'>Product name </label>
                        <input className='form-control' type="text" value={productItem.productName} onChange={(e) => setProductItem({ ...productItem, productName: e.target.value })} />
                    </div>
                    <div className='d-flex'>
                        <select className='form-select m-3'>
                            <option selected>Select category</option>
                        </select>
                        <select className='form-select m-3'>
                            <option selected>Select brand</option>
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

                    <div className='m-3'>
                        <label className='form-label'>Thumb image</label>
                        <input className='form-control' type="file" />
                    </div>
                    <div className='m-3'>
                        <label className='form-label'>Images</label>
                        <input className='form-control' type="file" />
                    </div>
                    <div className='d-flex'>
                        <select className='form-select m-3'>
                            <option selected>Created user</option>
                        </select>
                        <select className='form-select m-3'>
                            <option selected>Updated user</option>
                        </select>
                    </div>
                    <div className='d-flex gap-2 justify-content-end'>
                        <button className='btn btn-primary' onClick={handleProductSubmit}>Add product</button>
                        <button className='btn btn-danger' onClick={() => setProductModal(!productModal)}>Close</button>
                    </div>
                </form>

                {/* <form>
                    <input className="form-control" placeholder='buteegdehuunii ner' value={productItem.productName} onChange={(e) => setProductItem({ ...productItem, productName: e.target.value })} />
                    <input className="form-control" placeholder='une' value={productItem.price} onChange={(e) => setProductItem({ ...productItem, price: e.target.value })} />
                    <input className="form-control" type="file" multiple onChange={(e) => {

                        const url = "https://api.cloudinary.com/v1_1/dnedspqvv/upload";

                        const formData = new FormData();

                        let file = e.target.files[0];
                        formData.append("file", file)
                        formData.append("api_key", 717874992253798)
                        formData.append("folder", "imageFolder")
                        formData.append("upload_preset", "mu1axwmr")

                        axios
                            .post(url, formData)
                            .then((res) => {
                                console.log(res);
                                setProductItem({ ...productItem, thumbImage: res.data.secure_url })
                            })

                    }} />
                    <button className='btn btn-primary'>Save</button>
                    <button className='btn btn-danger'>Close</button>
                </form> */}
            </div>
        </div>
    )
}
