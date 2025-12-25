import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts, SiYoutubegaming, SiYoutubekids } from "react-icons/si";
import { MdHelpOutline, MdOutlineSubscriptions } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RiGraduationCapLine, RiShoppingBag4Line, RiNewsLine } from "react-icons/ri";
import { PiMusicNoteBold, PiCoatHangerBold, PiApplePodcastsLogoBold } from "react-icons/pi";
import { BiMovie } from "react-icons/bi";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { BsTrophy } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { LuFlag, LuSettings } from "react-icons/lu";
import { BiMessageError } from "react-icons/bi";

const SideBar = ({ showSideBar }) => {
   const [showAll, setShowAll] = useState(false);

   const categories = [
      { icon: <RiShoppingBag4Line />, name: "Shopping" },
      { icon: <PiMusicNoteBold />, name: "Music" },
      { icon: <BiMovie />, name: "Movies" },
      { icon: <HiOutlineStatusOnline />, name: "Live" },
      { icon: <SiYoutubegaming />, name: "Gaming" },
      { icon: <RiNewsLine />, name: "News" },
      { icon: <BsTrophy />, name: "Sports" },
      { icon: <RiGraduationCapLine />, name: "Courses" },
      { icon: <PiCoatHangerBold />, name: "Fashion & Beauty" },
      { icon: <PiApplePodcastsLogoBold />, name: "PodCasts" },
   ];

   const footerList = [
      ["About", "Press", "Copyright", "Contact us", "Creators", "Advertise", "Developers"],
      ["Terms", "Privacy", "Policy & Safety", "How YouTube works", "Test new features"],
   ];

   return (
      <section className={`w-62 h-screen pt-15 pb-2`}>
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

            <div className="px-5 py-3">
               <h3 className="p-2">Explore</h3>
               {categories.map((item, index) =>
                  showAll ? (
                     <div className="flex gap-4 items-center p-2 rounded-md cursor-pointer hover:bg-(--hover-color)">
                        <span className="text-2xl">{item.icon}</span>
                        <p>{item.name}</p>
                     </div>
                  ) : index < 3 ? (
                     <div className="flex gap-4 items-center p-2 rounded-md cursor-pointer hover:bg-(--hover-color)">
                        <span className="text-2xl">{item.icon}</span>
                        <p>{item.name}</p>
                     </div>
                  ) : null
               )}
               <div
                  onClick={() => setShowAll(!showAll)}
                  className="flex gap-4 items-center p-2 rounded-md cursor-pointer hover:bg-(--hover-color)"
               >
                  <span className="text-xl">{showAll ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                  <p>Show {showAll ? "less" : "more"}</p>
               </div>
            </div>

            <hr className="text-(--highlight-color)" />

            <div className="px-5 py-3">
               <h3 className="p-2 font-bold">More from YouTube</h3>
               <div className="flex gap-4 items-center p-2 rounded-md cursor-pointer hover:bg-(--hover-color)">
                  <FaYoutube className="text-2xl text-red-600" />
                  <p>YouTube Premium</p>
               </div>
               <div className="flex gap-4 items-center p-2 rounded-md cursor-pointer hover:bg-(--hover-color)">
                  <SiYoutubemusic className="text-2xl text-red-600" />
                  <p>YouTube Music</p>
               </div>
               <div className="flex gap-4 items-center p-2 rounded-md cursor-pointer hover:bg-(--hover-color)">
                  <SiYoutubekids className="text-2xl text-red-600" />
                  <p>YouTube Kids</p>
               </div>
            </div>

            <hr className="text-(--highlight-color)" />

            <div className="px-5 py-3">
               <div className="flex gap-4 items-center p-2 rounded-md cursor-pointer hover:bg-(--hover-color)">
                  <LuSettings className="text-2xl" />
                  <p>Settings</p>
               </div>
               <div className="flex gap-4 items-center p-2 rounded-md cursor-pointer hover:bg-(--hover-color)">
                  <LuFlag className="text-2xl" />
                  <p>Report history</p>
               </div>
               <div className="flex gap-4 items-center p-2 rounded-md cursor-pointer hover:bg-(--hover-color)">
                  <MdHelpOutline className="text-2xl" />
                  <p>Help</p>
               </div>
               <div className="flex gap-4 items-center p-2 rounded-md cursor-pointer hover:bg-(--hover-color)">
                  <BiMessageError className="text-2xl" />
                  <p>Send feedBack</p>
               </div>
            </div>

            <hr className="text-(--highlight-color)" />

            <footer className="px-5 py-3">
               <ul className="flex flex-wrap gap-x-3 gap-y-1">
                  {footerList[0].map((item) => (
                     <li key={item} className="text-xs font-bold text-white/60">
                        {item}
                     </li>
                  ))}
               </ul>
               <ul className="flex flex-wrap gap-x-3 gap-y-1 py-4">
                  {footerList[1].map((item) => (
                     <li key={item} className="text-xs font-bold text-white/60">
                        {item}
                     </li>
                  ))}
               </ul>
               <span className="text-xs text-white/40">© 2025 Google LLC</span>
            </footer>
         </div>
      </section>
   );
};

export default SideBar;
