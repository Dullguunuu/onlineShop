import "../style/Product.css";
import { useState, useEffect } from "react";

export const Product = () => {
  const [productData, setProductData] = useState([])

  function getData() {
    fetch("http://localhost:6060/api/product")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.result);
        setProductData(data.result)
      })
  }

  useEffect(() => {
    getData()
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
      <div className="products flex gap-4">
        <i class="bi bi-arrow-left-circle-fill"></i>
        {productData.map((e, index) => (
          <div className="" key={index}>
            <img
              src={e.thumbImage}
              alt=""
              style={{ height: "360px", width: "394px" }}
            />
            {/* <span>{e.category}</span> */}
            <a href={`/product/card/${e.id}`} className="productDetail-a">{e.productName}</a>
            <p style={{ color: "#AFADB5" }}>{e.description}</p>
            <p>${e.price}</p>
          </div>
        ))}
        <i class="bi bi-arrow-right-circle-fill"></i>
      </div>
    </>
  );
};
