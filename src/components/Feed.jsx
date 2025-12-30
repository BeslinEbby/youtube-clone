import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ConvertValue from "../utils/ConvertValue";
import axiosInstance from "../api/AxiosInstance";
import { formatDistanceToNow } from "date-fns";
import { MdMoreVert } from "react-icons/md";

const Feed = ({ category }) => {
   const apiKey = import.meta.env.VITE_API_KEY;

   const [data, setData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axiosInstance.get(
               `/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${apiKey}`
            );
            const data = response.data;
            setData(data.items);
         } catch (error) {
            console.log("Error on fetch data in Feed : ", error.message);
         }
      };

      fetchData();
   }, [category]);

   return (
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1 p-2">
         {data.map((item) => (
            <Link
               key={item.id}
               to={`video/${item.snippet.categoryId}/${item.id}`}
               className="flex flex-col gap-1 p-3 rounded-lg hover:bg-(--hover-color)"
            >
               <img src={item.snippet.thumbnails.medium.url} alt="" className="rounded-lg" />
               <div className="flex justify-between gap-3 pt-2">
                  <img className="w-10 h-10 shrink-0 rounded-full border" src={null} alt="" />
                  <div className="">
                     <h2 className="font-semibold line-clamp-2">{item.snippet.title}</h2>
                     <h4 className="text-sm text-white/60">{item.snippet.channelTitle}</h4>
                     <p className="text-sm text-white/60">
                        {ConvertValue(item.statistics.viewCount)} Views &bull;{" "}
                        {formatDistanceToNow(new Date(item.snippet.publishedAt), { addSuffix: true })}
                     </p>
                  </div>
                  <MdMoreVert className=" w-6 h-6 shrink-0" />
               </div>
            </Link>
         ))}
      </section>
   );
};

export default Feed;
