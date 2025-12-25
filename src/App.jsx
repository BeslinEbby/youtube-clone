import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
   const [showSideBar, setShowSideBar] = useState(true);

   return (
      <div className="bg-black min-h-screen w-full text-white">
         <Header setShowSideBar={setShowSideBar} />
         <Routes>
            <Route path="/" element={<Home showSideBar={showSideBar} />} />
         </Routes>
      </div>
   );
};

export default App;
