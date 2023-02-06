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
        images: {},
        createdUser: "",
        updatedUser: ""
    }

    const [productItem, setProductItem] = useState(productInit)
    const [tableData, setTableData] = useState([])
    const [isEdited, setIsEdited] = useState(false)
    const [editId, setEditId] = useState("")

    function getData() {
        fetch("http://localhost:6060/api/product")
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
        setProductItem({ position: position, menuName: menuName, link: link })
    }

    function handleProductSubmit(e) {
        e.preventDefault();
        isEdited ?
            fetch(`http://localhost:6060/api/product/${editId}`, {
                method: "PUT",
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(productItem)
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setIsEdited(false);
                    setProductItem(productInit);
                    getData();
                })
            :
            fetch("http://localhost:6060/api/product", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(productItem)
            })
                .then((res) => res.json)
                .then((data) => {
                    console.log(data)
                    getData()
                    setProductItem(productInit)
                })
    }


    return (
        <div>
            <button className='btn btn-primary' onClick={() => setProductModal(!productModal)}>+ Add Product</button>
            <ProductLoginModal
                productModal={productModal}
                setProductModal={setProductModal}
                productInit={productInit}
                productItem={productItem}
                setProductItem={setProductItem}
                tableData={tableData}
                setTableData={setTableData}
                isEdited={isEdited}
                setIsEdited={setIsEdited}
                editId={editId}
                setEditId={setEditId}
                handleProductSubmit={handleProductSubmit}
            />
            <div className='row row-cols-4 gap-4'>
                {
                    tableData.map((e, index) => (
                        <div className="card col p-0 m-0" style={{ width: "18rem" }}>
                            <img />
                            <div className="card-body">
                                <h5 className="card-title">{e.productName}</h5>
                                <p className="card-text">{e.description}</p>
                                <div className='d-flex justify-content-between'>
                                    <p className='fw-bold'>${e.price}</p>
                                    <button className='badge bg-success'>{e.discount}%</button>
                                </div>
                                <button className='btn btn-outline-secondary'><i class="bi bi-pencil"></i>Edit</button>
                                <button className='btn btn-outline-danger'><i class="bi bi-trash3"></i>Delete</button>
                            </div >
                        </div >
                    ))
                }
            </div >
        </div >
    )
}