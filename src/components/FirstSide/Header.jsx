import React from "react";
import img1 from "../../assets/img1.svg";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import { useSelector } from "react-redux";

export const Header = () => {
  const { list } = useSelector((state) => state.cart);
  return (
    <>
      <div className="container fixed top-0 w-full z-10 bg-white">
        <div className="flex justify-between">
          <NavLink to="/">
            <div className="flex">
              <img src={img1} alt="img" className="mt-6" />
              <h1 className="font-bold text-green-600 mt-8 ml-2">GREENSHOP</h1>
            </div>
          </NavLink>

          <div className="mt-8">
            <ul className="flex space-x-12">
              <li>
                <NavLink
                  to="/"
                  className="hover:font-bold hover:text-[#3D3D3D] pb-3 border-b-1 font-semibold hover:border-b-[#46A358] hover:border-b-4"
                >
                  Home
                </NavLink>

                {/* <div className="w-[50px] h-[2px] relative top-3 bg-green-900"></div> */}
              </li>
              <li>
                <NavLink
                  to="/shop"
                  className="hover:font-bold hover:text-[#3D3D3D] pb-3 border-b-1 font-semibold hover:border-b-[#46A358] hover:border-b-4"
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/plant"
                  className="hover:font-bold hover:text-[#3D3D3D] pb-3 border-b-1 font-semibold hover:border-b-[#46A358] hover:border-b-4"
                >
                  Plant Care
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  className="hover:font-bold hover:text-[#3D3D3D] pb-3 border-b-1 font-semibold hover:border-b-[#46A358] hover:border-b-4"
                >
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="flex space-x-7 mt-6 relative right-20">
            <div>
              <SearchIcon />
            </div>
            <div>
              <NavLink to="/shop/shoppingcard">
                <LocalGroceryStoreOutlinedIcon />
              </NavLink>
              <div className="w-[15px] h-[13px] rounded-[50%] bg-green-600 relative bottom-7 left-4">
                <span className="text-white text-[11px] left-[5px] relative bottom-2">
                  {list?.length}
                </span>
              </div>
            </div>
            <div>
              <button className="w-[100px] h-[35px] bg-green-600 rounded-lg text-white">
                <AutoGraphOutlinedIcon className="relative right-2" />
                Login
              </button>
            </div>
          </div>
        </div>
        <div className="w-[1100px] h-[1px] bg-gray-100 mt-2"></div>
      </div>
    </>
  );
};
