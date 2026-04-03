import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="overflow-x-hidden  overflow-y-hidden">
        <header className="header m-0 p-0 w-full leading-25 h-25 fixed z-50 bg-white">
          <div className="container px-28 h-38 ">
            <div className="flex items-center justify-between">
              <div className=" w-37 h-37  text-center flex flex-col items-center   whitespace-nowrap ">
                <img
                  src={logo}
                  alt="logo"
                  className="h-15 w-15 cursor-pointer"
                />
                <h5 className="text-black text-xl font-bold cursor-pointer">
                  Fresh Bites
                </h5>
              </div>

              <div className="navigation">
                <div className="flex items-center gap-7 justify-center font-bold flex-start cursor-pointer ">
                  <Link to="/" className="text-red-600">
                    Home
                  </Link>
                  <Link to="/foods" className="text-gray-600">
                    Foods
                  </Link>
                  <Link to="/cart" className="text-gray-600">
                    Cart
                  </Link>
                  <Link to="/contact" className="text-gray-600">
                    Contact
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <span className="relative cursor-pointer">
                  <i className="fa-solid fa-basket-shopping text-gray-700 text-lg"></i>

                  <span className="absolute top-6 bg-red-600 text-white rounded-xl -right-2.5 h-4 w-4 flex items-center justify-center ">
                    0
                  </span>
                </span>
                <span className="text-black cursor-pointer ">
                  <a href="/login">
                    <i className="fa-solid fa-user"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
