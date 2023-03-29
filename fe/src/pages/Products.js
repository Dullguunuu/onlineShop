import React, { useEffect, useState } from 'react'
import ProductLoginModal from './sub/ProductLoginModal'

export default function Products() {
    const [productModal, setProductModal] = useState(false)
    const productInit = {
        productName: "",
        categoryId: "",
        brandId: "",
        price: "",
        salePercent: "",
        description: "",
        quantity: "",
        thumbImage: "",
        images: [],
        createdUser: "",
        updatedUser: "",
        // createDate: ""
    }

    const [productItem, setProductItem] = useState(productInit)
    const [tableData, setTableData] = useState([])
    const [isEdited, setIsEdited] = useState(false)
    const [editId, setEditId] = useState("")

    function getData() {
        fetch("https://onlineshop-backend-mongoose.onrender.com/api/product")
            .then((res) => res.json())
            .then((data) => {
                console.log(data.result);
                setTableData(data.result)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    function handleEditProduct({ id, productName, categoryId, brandId, price, salePercent, description, quantity, thumbImage, images, createdUser, updatedUser }) {
        setEditId(id)
        setIsEdited(true)
        setProductModal(!productModal)
        setProductItem({ productName, categoryId, brandId, price, salePercent, description, quantity, thumbImage, images, createdUser, updatedUser })
    }

    function handleProductSubmit(e) {
        e.preventDefault();

        console.log(productItem);

        isEdited ?
            fetch(`https://onlineshop-backend-mongoose.onrender.com/api/product/${editId}`, {
                method: "PUT",
                headers: { 'Content-type': 'application/json', 'x-access-token': '' },
                body: JSON.stringify(productItem)
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setIsEdited(false);
                    setProductModal(!productModal)
                    setProductItem(productInit);
                    getData();
                })
            :
            fetch("https://onlineshop-backend-mongoose.onrender.com/api/product", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(productItem)
            })
                .then((res) => res.json)
                .then((data) => {
                    console.log(data)
                    setProductModal(!productModal)
                    setProductItem(productInit)
                    getData();
                })
    }

    function handleDelProduct(id) {
        fetch(`https://onlineshop-backend-mongoose.onrender.com/api/product/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                getData();
            })
    }

    return (
        <div className='p-4'>
            <button className='btn btn-primary' onClick={() => setProductModal(!productModal)}>+ Add Product</button>
            <ProductLoginModal
                productModal={productModal}
                setProductModal={setProductModal}
                productItem={productItem}
                setProductItem={setProductItem}
                handleProductSubmit={handleProductSubmit}
            />
            <div className='row row-cols-4 gap-4 p-2'>
                {
                    tableData.map((e, index) => (
                        <div className="card col p-2" style={{ width: "15rem" }}>
                            <img src={e.thumbImage} alt="" style={{ objectFit: "fill" }} />
                            <div className="card-body">
                                <h5 className="card-title">{e.productName}</h5>
                                <p className="card-text text-truncate">{e.description}</p>
                                <p style={{ color: e.quantity > 0 ? "green" : "red" }}>{e.quantity > 0 ? "in stock" : "out of stock"}</p>
                                <div className='d-flex justify-content-between align-items-baseline'>
                                    <p className='fw-bold'>${e.price}</p>
                                    {e.salePercent != 0 && <p className='fw-bold text-success'>-{e.salePercent}%</p>}
                                </div>
                                <div className='d-flex gap-2 justify-content-between'>
                                    <button className='btn btn-outline-secondary' onClick={() => handleEditProduct(e)}><i className="bi bi-pencil me-2" ></i>Edit</button>
                                    <button className='btn btn-outline-secondary text-danger' onClick={() => handleDelProduct(e.id)}><i className="bi bi-trash3 me-2"></i>Delete</button>
                                </div >
                            </div >
                        </div >
                    ))
                }

            </div >
        </div>
    )
}