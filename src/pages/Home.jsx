import React, { useState } from "react";
import SideBar from "../components/SideBar";
import NavLinks from '../components/NavLinks'

const Home = ({ showSideBar }) => {
   return (
      <main className="flex">
         <SideBar showSideBar={showSideBar} />
         <div className={`pt-14 p-2 w-full flex-1`}>
            <NavLinks/> 
         </div>
      </main>
   );
};

export default Home;
