import "./../style/ProductCard.css";

export default function ProductCard({ item }) {
  return (
    <div className="product-card">
      <img src={item.thumbImage} alt="img" />
      {/* <span className="product-card-category">{item.category}</span> */}
      <a href="/product/card" className="productDetail-a">{item.productName}</a>
      <span className="product-card-text">{item.description}</span>
      <span className="product-card-price">${item.price}</span>
    </div>
  );
}
