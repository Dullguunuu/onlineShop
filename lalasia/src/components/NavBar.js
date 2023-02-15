import { nanoid } from "nanoid";
import "../style/Navbar.css";
import { Link } from "react-router-dom";
import { menuItems } from "../data/menuData";
import { useState } from "react";
import CreateAccountModal from "./CreateAccountModal";

export const NavBar = ({ current, setCurrent }) => {
  const [modal, setModal] = useState(false)
  console.log(current);
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
          <div className="dropdown-menu-end">
            < img src={require("../assets/icon-img/user.png")} alt="" type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" />
            <form className={`dropdown-menu p-4 ${modal ? "none" : "show"}`} style={{ width: "300px" }}>
              <div className="mb-3">
                <label for="dropdownFormEmail" className="form-label">Email address</label>
                <input type="email" className="form-control" id="dropdownFormEmail" placeholder="email@example.com" />
              </div>
              <div className="mb-3" >
                <label for="dropdownFormPassword" className="form-label" > Password</label >
                <input type="password" className="form-control" id="dropdownFormPassword" placeholder="Password" />
              </div >
              <button type="submit" className="btn col-12" style={{ background: "#518581", color: "white" }}> Log in</button >
              <hr className="mt-3 mb-3" />
              <button type="submit" className="btn btn-outline-secondary col-12" onClick={(e) => {

                e.preventDefault();
                setModal(!modal);
              }}> Create Account</button >
            </form >
          </div >
        </div >
      </nav >
      <hr />
      <CreateAccountModal
        modal={modal}
        setModal={setModal}
      />
    </div >
  );
};
