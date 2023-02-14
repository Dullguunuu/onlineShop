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
        <button className="filterProductBtn col"><BiFilterAlt style={{ fontSize: "30px" }} />Filter</button>
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
