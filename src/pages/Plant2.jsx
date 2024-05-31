import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useDispatch, useSelector } from "react-redux";
import { addcount } from "../features/cartSlice";

export const Plant2 = ({ currentPage, itemsPerPage }) => {
    const dispatch = useDispatch();

    const handleAddCart = (data) => {
      console.log(data);
      dispatch(
        addcount({
          ...data,
        }),
      );
      alert("Successfully");
    };

    const items = useSelector((state) => state.cart.items[0].data);

    const [hoveredItem, setHoveredItem] = useState(null); // State to track hovered item
    const [likedItems, setLikedItems] = useState({}); // State to track liked items

    const handleFavoriteClick = (itemId) => {
      setLikedItems((prevLikedItems) => ({
        ...prevLikedItems,
        [itemId]: !prevLikedItems[itemId],
      }));
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="container grid grid-cols-3">
        {currentItems.map((item) => (
          <div className="mt-10" key={item.id}>
            <div
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <img
                src={item.image_url}
                alt="img"
                className="w-[250px] h-[250px] object-cover"
              />

              <div className="relative">
                <div className="mt-8 h-[100px] absolute top-[-78px] left-4 translate-x-[50%]">
                  {hoveredItem === item.id && (
                    <div className="flex space-x-5">
                      <button onClick={() => handleAddCart(item)}>
                        <ShoppingCartOutlinedIcon className="text-[#362424] hover:text-[#46A358]" />
                      </button>
                      {likedItems[item.id] ? (
                        <FavoriteIcon
                          className="text-[#3D3D3D] hover:text-[#46A358] cursor-pointer"
                          onClick={() => handleFavoriteClick(item.id)}
                        />
                      ) : (
                        <FavoriteBorderOutlinedIcon
                          className="text-[#3D3D3D] hover:text-[#46A358] cursor-pointer"
                          onClick={() => handleFavoriteClick(item.id)}
                        />
                      )}
                      <SearchOutlinedIcon className="text-[#3D3D3D] hover:text-[#46A358]" />
                    </div>
                  )}
                </div>

                <div className="mt-16">
                  <p className="text-[#3D3D3D]">{item.common_name}</p>
                  <h3 className="text-[#46A358] font-semibold">
                    $ {item.genus_id}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
