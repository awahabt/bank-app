import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [toggle, settoggle] = useState(false);
  return (
    <nav className="w-full py-6 flex items-center justify-between navbar">
      <img src={logo} alt="HooBank" className="w-[124px] h-[32px]" />
      <ul className="flex items-center text-white gap-4 sm:flex hidden ">
        {navLinks.map((Link, index) => 
           (
            <li key={Link.id}
              className={`font-poppins ${
                active === Link.id ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(Link.id)}
            >
              <a href={"#" + Link.id}>{Link.title}</a>
            </li>
          )
        )}
      </ul>

      <div className=" flex flex-1 justify-end  sm:hidden items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h=[28px] object-contain"
          onClick={() => settoggle((prev) => !prev)}
        />
      

      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 bg-black-gradient absolute top-20 items-center justify-center right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
      >
        <ul className="flex  flex-col justify-center items-center text-white gap-4 max-[640px] ">
          {navLinks.map((Link, index) => {
            return (
              <li
                className={`font-poppins ${
                  active === Link.id ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mr-1" : "mb-4"}`}
                onClick={() => setActive(Link.id)}
                key={Link.id}
              >
                <a href={"#" + Link.id}>{Link.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
