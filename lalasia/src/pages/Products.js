import { productCard } from "../data/productCard";
import "../App.css";
import { ProductsPage } from "../data/pagesData";
import ProductCard from "../components/ProductCard";
import { RiSearch2Line } from 'react-icons/ri';
import { BiFilterAlt } from "react-icons/bi"

export const Products = () => {
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
      <div className="row gap-3">
        <div className="col-10 flex align-items-center justify-content-between productPageSearch gap-2 ">
          <RiSearch2Line style={{ fontSize: "30px" }} />
          <input
            type="text"
            placeholder="Search property" className="productPageInput p-2"
          />
          <button>Find Now</button>
        </div>
        <button className="filterProductBtn col"><BiFilterAlt style={{ fontSize: "30px" }} />Filter</button>
      </div>
      <div>
        {/* <div className="flex justify-between">
          <div>
            <h1>Total Product</h1>
            <span>184</span>
          </div>
          <div>
            <span>Sort By</span>
          </div>
        </div> */}
        <div className="productCard">
          {productCard.map((item) => (
            <ProductCard item={item} key={item._id} />
          ))}
        </div>
      </div>
    </div>
  );
};
