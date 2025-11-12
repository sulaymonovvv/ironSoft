import React from "react";

const Navbar = () => {
  return (
    <div className="text-white flex justify-between items-center w-[90%] mx-auto py-5">
      <img className="w-[150px]" src="public/logo (1).png" alt="Logo" />
      <ul className=" flex justify-between items-center text-[14px]">
        <li className="pe-[50px]">
          <a href="#">Services</a>
        </li>
        <li className="pe-[50px]">
          <a href="#">Our works</a>
        </li>
        <li className="pe-[50px]">
          <a href="#">About us</a>
        </li>
        <li className="pe-[50px]">
          <a href="#">Contact us</a>
        </li>
      </ul>
      <button className=" bg-[#018abe] rounded-xl border-none px-4 py-2 font-bold font-[var(--second-family)] text-[12px] leading-[170%] tracking-[-0.02em] uppercase">
        Get started
      </button>
    </div>
  );
};

export default Navbar;
