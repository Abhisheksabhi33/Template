import React from "react";
import logo from "./assets/logo.svg";
import menu from "./assets/icons/menu.svg";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="lg:px-[90px] lg:justify-center flex flex-row justify-between items-center py-4 bg-[#fff]">
      <img onClick={() => navigate("/")} className="cursor-pointer mx-14 ml-0" src={logo} alt={logo} />

      <div className=" font-medium lg:flex hidden items-center gap-14 ml-16">
        {["About Us", "Blog", "FAQ", "Contacts Us", "Careers"].map((item, index) => (
          <p className="  text-[#112D35] cursor-pointer">
            {item}
          </p>
        ))}

        <button className="bg-cyan w-[140px] h-[46px] text-white font-medium rounded-full ">
        Try Inito
        </button>
      </div>

      <img className="lg:hidden block cursor-pointer" src={menu} alt={menu} />
    </div>
  );
}

export default Header;
