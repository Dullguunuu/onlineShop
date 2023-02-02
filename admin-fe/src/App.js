import './App.css';

function App() {

  return (
    <div className="container-fluid p-4">
      <div className="row">
        <div className="col-md-3">
          <p id="title1">Admin<span id="title2">ecommerce</span></p>
          <div>
            <p className="dashSelects"><i class="bi bi-columns-gap"></i>Dashboard</p>
            <p className="dashSelects"><i class="bi bi-menu-up"></i>Menus</p>
            <p className="dashSelects"><i class="bi bi-collection"></i>Products</p>
            <p className="dashSelects"><i class="bi bi-tags"></i>Categories</p>
            <p className="dashSelects"><i class="bi bi-people"></i>Customers</p>
            <p className="dashSelects"><i class="bi bi-cart3"></i>Orders</p>
            <p className="dashSelects"><i class="bi bi-globe"></i>Sellers</p>
          </div>
        </div>
        <div className="col-md-9">
          <input className="form-control p-3" placeholder="Search" />
        </div>
      </div>
    </div >
  );
}

export default App;
