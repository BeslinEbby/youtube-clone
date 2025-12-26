import React, { useState } from "react";
import SideBar from "../components/SideBar";
import NavLinks from '../components/NavLinks'
import Feed from "../components/Feed";

const Home = ({ showSideBar }) => {

     const [category, setCategory]=useState(0)
   
   return (
      <main className="flex h-screen w-full">
         <SideBar showSideBar={showSideBar} />
         <div className="pt-14 p-2 flex-1 overflow-y-scroll home">
            <NavLinks/> 
            <Feed category={category}/>
         </div>
      </main>
   );
};

export default Home;
