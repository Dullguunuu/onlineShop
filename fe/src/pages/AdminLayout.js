import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function AdminLayout() {
    return (
        <div className="container-fluid p-2">
            <div className="row">
                <div className='row'>
                    <div className="col-md-3">
                        <p id="title1">Admin<span id="title2">ecommerce</span></p>
                    </div>
                    <div className="col-md-9">
                        <input className="form-control" placeholder="Search" />
                    </div>
                </div>
                <div className="col-md-3">
                    <ul className='selects'>
                        <li><i class="bi bi-columns-gap"></i><Link to="/admin" >Dashboard</Link></li>
                        <li><i class="bi bi-menu-up"></i><Link to="/admin/menus" >Menus</Link></li>
                        <li><i class="bi bi-tags"></i><Link to="/admin/categories" >Categories</Link></li>
                        <li><i class="bi bi-collection"></i><Link to="/admin/products" >Products</Link></li>
                        <li><i class="bi bi-people"></i><Link to="/admin/customers" >Customers</Link></li>
                        <li><i class="bi bi-cart"></i><Link to="/admin/orders" >Orders</Link></li>
                        <li><i class="bi bi-globe"></i><Link to="/admin/sellers" >Sellers</Link></li>
                    </ul>
                </div>
                <div className='col-md-9 bg-light p-4'>
                    <Outlet />
                </div>

            </div>
        </div >
    )
}
