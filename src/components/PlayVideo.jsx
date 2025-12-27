import React, { useEffect, useState } from "react";
import axiosInstance from "../api/AxiosInstance";

const PlayVideo = ({ videoId }) => {

   const apiKey = import.meta.env.VITE_API_KEY;

   const [videoData, setVideoData] = useState();

   useEffect(() => {
      const fetchVideoData = async () => {
         try {
            const response = await axiosInstance.get(`/videos?part=snippet%2Cstatistics&id=${videoId}&key=${apiKey}`);
            const data = response.data;
            setVideoData(data.items[0]);
         } catch (error) {
            console.log("Error on fetch video data : ", error.message);
         }
      };

      fetchVideoData();
   }, [videoId]);


   return (
      <section className="basis-[70%]">
         {videoData && (
            <div className="w-full">
               <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; full-screen"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                  className="w-full h-[75vh] rounded-lg"
               ></iframe>
               <h3 className="font-bold text-xl py-3">{videoData.snippet.title}</h3>
         </div>
         )}
      </section>
   );
};

export default PlayVideo;
