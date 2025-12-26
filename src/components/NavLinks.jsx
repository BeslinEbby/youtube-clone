import { useEffect, useState } from "react";
import axiosInstance from "../api/AxiosInstance";

const NavLinks = () => {
   const apiKey = import.meta.env.VITE_API_KEY;

   const [categories, setCategories] = useState([]);

   useEffect(() => {
      const fetchCategories = async () => {
         try {
            const response = await axiosInstance.get(`/videoCategories?part=snippet&regionCode=IN&key=${apiKey}`);
            const data = response.data;
            setCategories(data.items);
         } catch (error) {
            console.log("Error on fetching categories in navLinks : ", error.message);
         }
      };

      fetchCategories();
   }, []);

   return (
      <div className="h-12 w-full p-2 overflow-x-auto flex gap-3 sticky top-0 z-40 bg-black nav-links ">
         <button className="p-1 px-3 font-semibold text-sm bg-white text-black rounded-md cursor-pointer">All</button>
         {categories?.map((item) => (
            <button
               key={item.id}
               className="p-1 px-3 font-semibold text-sm bg-(--highlight-color) rounded-lg cursor-pointer whitespace-nowrap"
            >
               {item.snippet.title}
            </button>
         ))}
      </div>
   );
};

export default NavLinks;
