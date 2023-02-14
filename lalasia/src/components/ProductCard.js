import { useEffect, useState } from "react";
import "./../style/ProductCard.css";

export default function ProductCard({ item }) {
  const [categories, setCategories] = useState([])

  function getCategory() {
    fetch("http://localhost:6060/api/category")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.result)
        setCategories(data.result)
      })
  }
  useEffect(() => {
    getCategory()
  }, [])

  return (
    <div className="product-card">
      <img src={item.thumbImage} alt="img" />
      <p className="fw-bold mt-3 mb-0" style={{ color: "#AFADB5" }}>{
        categories?.map(({ id, categoryName }) => {
          if (id === item.categoryId) {
            return <span>{categoryName}</span>
          }
        })
      }</p>
      <a href={`/product/card/${item.id}`} className="productDetail-a">{item.productName}</a>
      <p className="product-card-text mb-0">{item.description}</p>
      <p className="product-card-price">${item.price}</p>
    </div>
  );
}
