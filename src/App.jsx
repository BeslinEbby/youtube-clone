import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import SelectedVideo from "./pages/SelectedVideo";

const App = () => {
   const [showSideBar, setShowSideBar] = useState(true);

   return (
      <div className="bg-black min-h-screen w-full text-white">
         <Header setShowSideBar={setShowSideBar} />
         <Routes>
            <Route path="/" element={<Home showSideBar={showSideBar} />} />
            <Route path="/video/:categoryId/:videoId" element={<SelectedVideo/>} />
         </Routes>
      </div>
   );
};

export default App;
