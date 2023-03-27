import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Basket() {
    const navigate = useNavigate();

    return (
        <div className='d-flex flex-column justify-content-center align-items-center col-6' style={{ width: "100vw", height: "60vh" }}>
            <i class="bi bi-cart" style={{ fontSize: "100px" }}></i>
            <p className='fw-bold' style={{ fontSize: "1.5rem" }}>Your cart is empty</p>
            <p style={{ fontSize: "1.2rem" }}>Looks like you have not added anything to your cart. Go ahead & explore products.</p>
            <button className="mt-5" onClick={() => navigate("/product")}>Go Shopping</button>
        </div>
    )
}
