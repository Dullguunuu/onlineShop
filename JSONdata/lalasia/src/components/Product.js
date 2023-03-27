import "../style/Product.css";
import { useState, useEffect } from "react";

export const Product = () => {
  const [productData, setProductData] = useState([])
  const [categories, setCategories] = useState([])

  function getData() {
    fetch("http://localhost:6060/api/product")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.result);
        setProductData(data.result)
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
  return (
    <>
      <div className="col-12 col-md-6 text-center mt-5">
        <p style={{ color: "#FFB23F" }}>Product</p>
        <h2>Our popular product</h2>
        <p style={{ color: "#AFADB5" }} className="mb-5 mt-3">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </p>
      </div>
      <div className="products flex gap-4 overflow">
        <i class="bi bi-arrow-left-circle-fill"></i>
        {productData.slice(0, 10).map((e, index) => (
          <div className="" key={index}>
            <img
              src={e.thumbImage}
              alt=""
              style={{ height: "360px", width: "394px" }}
            />
            <p className="fw-bold mt-4 mb-2" style={{ color: "#AFADB5" }}>{
              categories?.map(({ id, categoryName }) => {
                if (id === e.categoryId) {
                  return <span>{categoryName}</span>
                }
              })
            }</p>
            <a href={`/product/card/${e.id}`} className="productDetail-a">{e.productName}</a>
            <p style={{ color: "#AFADB5" }} className="mt-2">{e.description}</p>
            <p className="fw-bold">${e.price}</p>
          </div>
        ))}
        <i class="bi bi-arrow-right-circle-fill"></i>
      </div>
    </>
  );
};
