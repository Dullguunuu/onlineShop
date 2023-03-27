import { useState, useEffect } from "react";
// import { productCard } from "../data/productCard";
import "../App.css";
import { ProductsPage } from "../data/pagesData";
import ProductCard from "../components/ProductCard";
import { RiSearch2Line } from 'react-icons/ri';
import { BiFilterAlt } from "react-icons/bi"

export const Products = () => {

  const [productData, setProductData] = useState([])
  const [categories, setCategories] = useState([])
  const [fetchData, setFetchData] = useState([])
  const [searchText, setSearchText] = useState()

  function getData() {
    fetch("http://localhost:6060/api/product")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.result);
        setProductData(data.result)
        setFetchData(data.result)
      })
  }

  function getCategory() {
    fetch(`http://localhost:6060/api/category`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.result);
        setCategories(data.result)
      })
  }
  useEffect(() => {
    getData();
    getCategory();
  }, [])

  function onChangeSearch(para) {
    const newArr = []
    fetchData.map((e) => {
      if (e.productName.toLowerCase() && e.productName.toLowerCase().includes(para.toLowerCase())) {
        newArr.push(e)
      }
      setProductData(newArr)
    })
  }

  function searchProduct() {
    const newArr = []
    fetchData.map((e) => {
      if (e.productName.includes(searchText)) {
        newArr.push(e)
      }
      setProductData(newArr)
    })
  }

  function fromLowestPrice() {
    const byLowest = [...productData].sort((a, b) => a.price - b.price)
    setProductData(byLowest)
  }

  function fromHighestPrice() {
    const byHighest = [...productData].sort((a, b) => b.price - a.price)
    setProductData(byHighest)
  }

  return (
    <div>
      <div className="flex flex-d align-items justify-content">
        {ProductsPage.map((data) => (
          <>
            <div className="containerTitle flex flex-d align-items justify-content">
              <h1 className="bigTitle">{data.title}</h1>
              <span className="bigText">{data.text}</span>
            </div>
            <img src={data.img} alt="" />
          </>
        ))}
      </div>
      <div className="row gap-3 mt-5">
        <div className="col-10 flex align-items-center justify-content-between productPageSearch gap-2 ">
          <RiSearch2Line style={{ fontSize: "30px" }} />
          <input
            type="text"
            placeholder="Search property" className="productPageInput p-2" value={searchText}
            onChange={(e) => onChangeSearch(e.target.value)}
          />
          <button onClick={searchProduct}>Find Now</button>
        </div>
        <div className="dropdown col">
          <button className="filterProductBtn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <BiFilterAlt style={{ fontSize: "30px" }} /> Filter
          </button>
          <ul className="dropdown-menu dropdown-menu-end p-4" style={{ width: "300px" }}>
            <p className="fw-bold">By Price:</p>
            <li><a class="dropdown-item" href="#" onClick={fromLowestPrice}><i className="bi bi-arrow-up me-2"></i>from lowest</a></li>
            <li onClick={fromHighestPrice}><a className="dropdown-item" href="#"><i className="bi bi-arrow-down me-2"></i>from highest</a></li>
            <p className="fw-bold mt-2">By Category:</p>
            <li className="form-check">
              {categories.map((e) =>
                <>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                    {e.categoryName}
                  </label>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="flex align-items-end gap-3 mt-5">
          <h2>Total Product</h2>
          <p className="badge bg-success">{productData.length}</p>
        </div>
        <div className="productCard">
          {productData.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
