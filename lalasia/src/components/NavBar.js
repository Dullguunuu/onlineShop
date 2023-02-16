import "../style/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { menuItems } from "../data/menuData";
import { useState } from "react";
import CreateAccountModal from "./CreateAccountModal";
import axios from "axios";

export const NavBar = ({ current, setCurrent }) => {
  const [modal, setModal] = useState(false)
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();


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
        } else {
          alert("The password or email you’ve entered is incorrect. ")
        }
      })
      .catch((err) => alert(err))
  }

  return (
    // <header className="flex align-items space-between">
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
          <img src={require("../assets/icon-img/bag.png")} alt="" />
          <div className="dropdown-menu-end">
            <img src={require("../assets/icon-img/user.png")} alt="" type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="inside" />
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
