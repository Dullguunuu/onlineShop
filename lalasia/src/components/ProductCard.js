import { useEffect, useState } from "react";
import "./../style/ProductCard.css";

export default function ProductCard({ item }) {
  const [categories, setCategories] = useState([])

  function getCategory() {
    fetch("http://localhost:6060/api/category")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.result)
        setCategories(data.result)
      })
  }

  let cateItem = categories.filter((e) => e.id == item.categoryId)
  console.log(cateItem)

  useEffect(() => {
    getCategory()
  }, [])

  return (
    <div className="product-card">
      <img src={item.thumbImage} alt="img" />
      <p className="product-card-category">{cateItem.categoryName}</p>
      {/* {item.categoryId == categories.map((e) => e.id) && <p className="product-card-category">{categories.categoryName}</p>} */}
      <a href={`/product/card/${item.id}`} className="productDetail-a">{item.productName}</a>
      <p className="product-card-text">{item.description}</p>
      <p className="product-card-price">${item.price}a</p>
    </div>
  );
}
