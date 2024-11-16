import React from "react";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <nav
        data-aos="fade-down"
        className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-0"
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 p-5">
              <img src={Logo} alt="" className="w-10" />
              
            </div>
            <div className="text-white hidden sm:block">
              <ul className="flex items-center gap-6 text-xl py-4 ">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Research</a>
                </li>
                <li>
                  <a href="#">Galaxy</a>
                </li>
                <li>
                  <a href="#">Planet</a>
                </li>
              </ul>
            </div>
            <div>
              <button className=" text-white border-2 border-white px-3 py-1 rounded-md">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
