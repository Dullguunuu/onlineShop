import "../style/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { menuItems } from "../data/menuData";
import { useState } from "react";
import CreateAccountModal from "./CreateAccountModal";
import axios from "axios";

export const NavBar = ({ current, setCurrent }) => {
  const [modal, setModal] = useState(false)
  const [user, setUser] = useState({ email: "", password: "" });
  const [isLogged, setIsLogged] = useState()
  const navigate = useNavigate();

  // localStorage.clear()

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value })
  }

  function onLogin(e) {
    e.preventDefault();
    axios
      .post("http://localhost:6060/api/customer/login", user)
      .then(({ data: { status, result } }) => {
        console.log(status);
        if (status) {
          localStorage.setItem("user", result.firstName);
          setIsLogged(localStorage.user)
        } else {
          alert("The password or email you’ve entered is incorrect. ")
        }
      })
      .catch((err) => alert(err))
  }

  return (
    <div className="navContainer">
      <nav className="flex align-items space-between border-bottom">
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
          {localStorage.user ?
            <p className="mb-0 me-3">Hi, {localStorage.getItem("user")}</p> : ""}
          <Link to="/basket"><img src={require("../assets/icon-img/bag.png")} alt="" className="position-relative" />
            {localStorage.user ? <span style={{ position: "absolute", top: 0 }} className="translate- middle badge rounded-pill bg-success">12</span> : ""}
          </Link>
          <div className="dropdown-menu-end">
            <img src={require("../assets/icon-img/user.png")} alt="" type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="inside" />
            {!localStorage.user ?
              <form className="dropdown-menu p-4" style={{ width: "300px" }} >
                <div className="mb-3">
                  <label for="dropdownFormEmail" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="dropdownFormEmail" placeholder="email@example.com"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3" >
                  <label for="dropdownFormPassword" className="form-label" > Password</label >
                  <input type="password" className="form-control" id="dropdownFormPassword" placeholder="Password"
                    name="password"
                    value={user.password}
                    onChange={handleChange} />
                </div >
                <button type="submit" className="btn col-12" style={{ background: "#518581", color: "white" }} onClick={onLogin}> Log in</button >
                <hr className="mt-3 mb-3" />
                <button type="submit" className="btn btn-outline-secondary col-12" onClick={(e) => {
                  e.preventDefault();
                  setModal(!modal);
                }}> Create Account</button >
              </form >
              :
              <div className="dropdown-menu">
                <button className="dropdown-item ps-4 pe-4" onClick={() => {
                  localStorage.clear();
                  navigate("/")
                }}><i className="bi bi-box-arrow-right me-3" style={{ fontSize: "20px" }}></i>Log Out</button>
              </div>
            }
          </div >
        </div >
      </nav >
      <CreateAccountModal
        modal={modal}
        setModal={setModal}
      />
    </div >
  );
};
