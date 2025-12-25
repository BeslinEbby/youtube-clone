import React from "react";
import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions} from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const SideBar = ({ showSideBar }) => {
   
   return (
      <section className={`w-62 h-screen pt-15 `}>
         <div className="h-full overflow-y-scroll side-scroll ">
            <div className="px-5 py-3">
               <div className="flex gap-4 items-center p-2 rounded-md cursor-pointer hover:bg-(--hover-color)">
                  <AiFillHome className="text-2xl" />
                  <p>Home</p>
               </div>
               <div className="flex gap-4 items-center p-2 rounded-md cursor-pointer hover:bg-(--hover-color)">
                  <SiYoutubeshorts className="text-2xl" />
                  <p>Shorts</p>
               </div>
               <div className="flex gap-4 items-center p-2 rounded-md cursor-pointer hover:bg-(--hover-color)">
                  <MdOutlineSubscriptions className="text-2xl" />
                  <p>Subscriptions</p>
               </div>
               <div className="flex gap-4 items-center p-2 rounded-md cursor-pointer hover:bg-(--hover-color)">
                  <CgProfile className="text-2xl" />
                  <p>You</p>
               </div>
               <div className="flex gap-4 items-center p-2 rounded-md cursor-pointer hover:bg-(--hover-color)">
                  <FaHistory className="text-2xl" />
                  <p>History</p>
               </div>
            </div>

            <hr className="text-(--highlight-color)" />

            <div className="px-8 py-4">
               <p className="text-sm pb-2">Sign in to like videos, comment, and subscribe.</p>
               <button className="text-2xl text-sky-500 flex items-center gap-2 border border-(--highlight-color) rounded-3xl px-3 py-1.5 cursor-pointer hover:bg-(--hover-color)">
                  <CgProfile />
                  <span className="text-sm">Sign In</span>
               </button>
            </div>

            <hr className="text-(--highlight-color)" />

         </div>
      </section>
   );
};

export default SideBar;
