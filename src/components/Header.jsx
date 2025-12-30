import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { MdMoreVert } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { RiMicLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import axiosInstance from "../api/AxiosInstance";

const Header = ({ setShowSideBar }) => {
   const apiKey = import.meta.env.VITE_API_KEY;

   const [search, setSearch] = useState("");
   const [searchData, setSearchData] = useState([]);

   useEffect(() => {
      const fetchSearchData = async () => {
         try {
            const response = await axiosInstance.get(
               `/search?part=snippet&q=${search}&maxResults=20&regionCode=IN&type=video&key=${apiKey}`
            );
            const data = response.data;
            setSearchData(data.items);
         } catch (error) {
            console.log("Error on fetch search data in Feed : ", error.message);
         }
      };

      fetchSearchData();
   }, [search]);

   return (
      <header className="h-14 w-full px-5 fixed top-0 left-0 z-50 flex justify-between items-center bg-black">
         <div className="w-1/4 flex items-center gap-3">
            <button className="text-2xl p-3 rounded-full hover:bg-(--hover-color) cursor-pointer">
               <RxHamburgerMenu onClick={() => setShowSideBar((prev) => !prev)} />
            </button>
            <Link to="/">
               <img className="w-25" src={logo} alt="logo" />
            </Link>
         </div>
         <div className="w-168 flex items-center gap-4">
            <div className="flex flex-1 items-center justify-between border border-(--highlight-color) rounded-3xl h-11">
               <div className="relative h-full flex-1 flex items-center justify-between pl-2 border border-transparent rounded-l-3xl group focus-within:border-blue-500">
                  <button className="hidden group-focus-within:block text-xl p-2">
                     <FiSearch />
                  </button>
                  <input
                     className="bg-transparent h-full border-0 outline-0 pl-1 text-sm flex-1"
                     type="text"
                     name=""
                     id=""
                     placeholder="Search"
                     value={search}
                     onChange={(e) => setSearch(e.target.value)}
                  />
                  <button
                     onClick={() => setSearch("")}
                     className={`${
                        search.length > 0 ? "block" : "hidden"
                     } text-2xl cursor-pointer p-2 rounded-full hover:bg-(--hover-color)`}
                  >
                     <IoMdClose />
                  </button>
                  {searchData.length > 0 && (
                     <div className="absolute top-12 left-0 z-30 bg-(--highlight-color) hidden group-focus-within:block w-full h-149 rounded-lg p-2 overflow-y-scroll ">
                        {searchData.map((item) => (
                           <Link to={`video/0/${item.id.videoId}`} className="flex items-center gap-4 p-3 hover:bg-(--hover-color) rounded-lg">
                              <FiSearch className="text-xl shrink-0" />
                              <span className="line-clamp-1 text-sm font-semibold">{item.snippet.title}</span>
                           </Link>
                        ))}
                     </div>
                  )}
               </div>
               <button className="bg-(--highlight-color) w-16 h-full text-2xl flex justify-center items-center rounded-r-2xl cursor-pointer">
                  <FiSearch />
               </button>
            </div>
            <button className="bg-(--highlight-color) p-3 rounded-full text-2xl cursor-pointer hover:bg-(--hover-color)">
               <RiMicLine />
            </button>
         </div>
         <div className="w-1/4 flex items-center justify-end gap-4">
            <button className="text-2xl cursor-pointer">
               <MdMoreVert />
            </button>
            <button className="text-2xl flex items-center gap-2 border border-[#3e3434] rounded-3xl px-3 py-2 cursor-pointer hover:bg-(--hover-color)">
               <CgProfile />
               <span className="text-sm">Sign In</span>
            </button>
         </div>
      </header>
   );
};

export default Header;
