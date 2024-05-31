import React from "react";
import Rating from "@mui/material/Rating";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import face from "../assets/face.svg";
import twit from "../assets/twit.svg";
import link from "../assets/link.svg";
import mes from "../assets/mes.svg";
import im from "../assets/img5.png";
import SearchIcon from "@mui/icons-material/Search";
import { SecondShop } from "../components/SecondShop";
import { NavLink } from "react-router-dom";
import { SecondCarousel } from "./SecondCarousel";
import { useSelector } from "react-redux";
import { SecondCardItem } from "../components/SecondCardItem";

export const Shop = () => {
  const { list } = useSelector((state) => state.cart);

  return (
    <>
      <div className="container">
        <div className="flex space-x-4 mt-20">
          <div className="flex space-x-20 w-[500%] mt-10">
            <div>
              <div>
                <NavLink to="/" className="font-semibold hover:font-bold">
                  Home
                </NavLink>
                <NavLink to="/shop" className="font-semibold hover:font-bold">
                  /Shop
                </NavLink>
                <NavLink
                  to="/shop/shoppingcard"
                  className="font-semibold hover:font-bold"
                >
                  /ShoppingCard
                </NavLink>
              </div>

              {list?.cart && list?.cart.length > 0
                ? list?.cart.map((item) => {
                    return <>{/* <SecondCardItem/> */}</>;
                  })
                : null}

              <div>
                <img src={im} alt="img" className="w-[100px] h-[100px] mt-10" />
              </div>
              <div>
                <img src={im} alt="img" className="w-[100px] h-[100px] mt-10" />
              </div>
              <div>
                <img src={im} alt="img" className="w-[100px] h-[100px] mt-10" />
              </div>
              <div>
                <img src={im} alt="img" className="w-[100px] h-[100px] mt-10" />
              </div>
            </div>

            <div className="mt-36">
              <img src={im} alt="img" className="w-[404px] h-[304px]" />
            </div>

            <div className="mt-16 relative right-16">
              <SearchIcon className="text-[#3D3D3D]" />
            </div>
          </div>

          {/* second side */}
          <div className="mt-20 relative right-3">
            <h1 className="font-bold text-[#3D3D3D] text-2xl">
              Barberton Daisy
            </h1>
            <div className="flex space-x-72 mt-3 w-[110%]">
              <h4 className="text-[#46A358] font-semibold text-[18px]">
                $119.00
              </h4>
              <div className="flex space-x-2 mt-[4px]">
                <Rating name="size-small" defaultValue={2} size="small" />
                <p className="text-[15px] text-[#3D3D3D] relative bottom-1">
                  19 Customer Review
                </p>
              </div>
            </div>

            <div className="w-[573px] h-[1px] bg-green-100 mt-2"></div>

            <div>
              <h2 className="font-semibold text-[#3D3D3D] mt-3">
                Short Description:
              </h2>
              <p className="text-[#727272] w-[54%] mt-2">
                The ceramic cylinder planters come with a wooden stand to help
                elevate your plants off the ground. The ceramic cylinder
                planters come with a wooden stand to help elevate your plants
                off the ground.
              </p>
              <h2 className="font-semibold text-[#3D3D3D] mt-5">Size:</h2>

              <div className="flex space-x-3 mt-3">
                <div className="border-[#727272] hover:border-[#46A358] text-[#727272] hover:text-[#46A358] w-[28px] h-[28px] border-[1px] rounded-[50%] text-center font-bold">
                  S
                </div>
                <div className="border-[#727272] hover:border-[#46A358] text-[#727272] hover:text-[#46A358] w-[28px] h-[28px] border-[1px] rounded-[50%] text-center font-bold">
                  M
                </div>
                <div className="border-[#727272] hover:border-[#46A358] text-[#727272] hover:text-[#46A358] w-[28px] h-[28px] border-[1px] rounded-[50%] text-center font-bold">
                  L
                </div>
                <div className="border-[#727272] hover:border-[#46A358] text-[#727272] hover:text-[#46A358] w-[28px] h-[28px] border-[1px] rounded-[50%] text-center font-bold">
                  XL
                </div>
              </div>

              <div className="flex space-x-7 mt-7">
                <div>
                  <button className="w-[33px] h-[38px] pb-2 bg-[#46A358] text-2xl text-white rounded-[50%] text-center">
                    -
                  </button>
                </div>
                <div>
                  <p className="text-xl text-[#3D3D3D] mt-2">1</p>
                </div>
                <div>
                  <button className="w-[33px] h-[38px] pb-2 bg-[#46A358] text-2xl text-white rounded-[50%] text-center">
                    +
                  </button>
                </div>

                <div className="flex space-x-3">
                  <div>
                    <button className="bg-[#46A358] text-white w-[130px] h-[40px] rounded-lg">
                      BUY NOW
                    </button>
                  </div>

                  <div>
                    <button className="border-[#46A358] border-[1px] text-[#46A358] text-[14px] w-[130px] h-[40px] rounded-lg font-semibold">
                      ADD TO CART
                    </button>
                  </div>

                  <div className="w-[40px] h-[40px] border-[#46A358] border-[1px] rounded-lg">
                    <FavoriteBorderIcon className="text-[#46A358] mt-2 ml-[6px]" />
                  </div>
                </div>
              </div>

              <div className="leading-7 mt-5">
                <p className="text-[#727272]">
                  <span className="text-slate-400">SKU:</span> 1995751877966
                </p>
                <p className="text-[#727272]">
                  <span className="text-slate-400">Categories:</span> Potter
                  Plants
                </p>
                <p className="text-[#727272]">
                  <span className="text-slate-400">Tags:</span> Home, Garden,
                  Plants
                </p>
              </div>
              <div className="flex mt-3">
                <div>
                  <h2 className="text-[#3D3D3D] font-semibold">
                    Share this products:
                  </h2>
                </div>
                <div className="flex space-x-5 ml-4 mt-1">
                  <div>
                    <img src={face} alt="img" />
                  </div>
                  <div className="mt-[2px]">
                    <img src={twit} alt="img" />
                  </div>
                  <div>
                    <img src={link} alt="img" />
                  </div>
                  <div>
                    <img src={mes} alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SecondShop />
        <SecondCarousel />
      </div>
    </>
  );
};
