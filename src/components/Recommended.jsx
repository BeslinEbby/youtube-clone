import React, { useEffect, useState } from "react";
import ConvertValue from "../utils/ConvertValue";
import { Link } from "react-router-dom";
import axiosInstance from "../api/AxiosInstance";
import { MdMoreVert } from "react-icons/md";
import { formatDistanceToNow } from "date-fns";

const Recommended = ({ categoryId, videoId }) => {
   const apiKey = import.meta.env.VITE_API_KEY;

   const [recomVideos, setRecomVideos] = useState([]);

   useEffect(() => {
      const fetchRecomVideos = async () => {
         try {
            const response = await axiosInstance.get(
               `videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=IN&videoCategoryId=${categoryId}&key=${apiKey}`
            );
            const data = response.data;
            setRecomVideos(data.items);
         } catch (error) {
            console.log("Error on fetch recommended video data : ", error.message);
         }
      };

      fetchRecomVideos();
   }, [categoryId, videoId]);

   return (
      <section className="basis-[30%]">
         {recomVideos?.map((item) => (
            <Link
               key={item.id}
               to={`/video/${item.snippet.categoryId}/${item.id}`}
               className="flex justify-between gap-2 mb-4"
            >
               <div className="basis-[40%] ">
                  <img className="w-full rounded-lg" src={item.snippet.thumbnails.medium.url} alt="" />
               </div>
               <div className="basis-[58%] text-xs">
                  <h4 className="text-sm font-semibold line-clamp-2">{item.snippet.title}</h4>
                  <h6 className="text-white/60 py-1">{item.snippet.channelTitle}</h6>
                  <p className="text-white/60">{ConvertValue(item.statistics.viewCount)} views &bull; <span>{formatDistanceToNow(new Date(item.snippet.publishedAt), {addSuffix: true})}</span></p>
               </div>
               <div className="text-2xl basis-[2%]">
                  <MdMoreVert />
               </div>
            </Link>
         ))}
      </section>
   );
};

export default Recommended;
