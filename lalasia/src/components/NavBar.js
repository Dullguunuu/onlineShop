import { nanoid } from "nanoid";
import "../style/Navbar.css";
import { Link } from "react-router-dom";
import { menuItems } from "../data/menuData";

export const NavBar = ({ current, setCurrent }) => {
  console.log(current);

  const menuIcons = [
    {
      _id: nanoid(),
      img: require("../assets/icon-img/bag.png"),
      link: "product",
    },
    {
      _id: nanoid(),
      img: require("../assets/icon-img/user.png"),
      link: "about-us",
    },
  ];

  return (
    // <header className="flex align-items space-between">
    <div className="navContainer">
      <nav className="flex align-items space-between">
        <Link
          to="/"
          className="flex align-items gap-3"
          onClick={() => {
            setCurrent("");
          }}
        >
          <img src={require("../assets/icon-img/logo.png")} alt="" />
          <img src={require("../assets/page/landing/Lalasia.png")} alt="" />
        </Link>
        <div className="flex align-items space-between ">
          {menuItems.map((e, index) =>
            current === e._id ? (
              <Link className="item item-active" to={e.link} key={index}>
                {e.name}
              </Link>
            ) : (
              <Link
                className="item"
                to={e.link}
                onClick={() => {
                  setCurrent(e._id);
                }}
                key={index}
              >
                {e.name}
              </Link>
            )
          )}
        </div>
        <div className="flex align-items space-between gap-3 btn-group">
          <img src={require("../assets/icon-img/bag.png")} alt="" />
          <div className="dropdown">
            <img src={require("../assets/icon-img/user.png")} alt="" type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" />
            <form className="dropdown-menu p-4">
              <div className="mb-3">
                <label for="dropdownFormEmail" className="form-label">Email address</label>
                <input type="email" className="form-control" id="dropdownFormEmail" placeholder="email@example.com" />
              </div>
              <div className="mb-3" >
                <label for="dropdownFormPassword" className="form-label" > Password</label >
                <input type="password" className="form-control" id="dropdownFormPassword" placeholder="Password" />
              </div >
              <button type="submit" className="btn" style={{ background: "#518581" }}> Sign in</button >
            </form >
          </div >


        </div >
      </nav >
      <hr />
    </div >
  );
};
