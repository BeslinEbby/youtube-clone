import React, { useEffect, useState } from "react";
import { LuThumbsUp, LuThumbsDown } from "react-icons/lu";
import { PiShareFatBold } from "react-icons/pi";
import { FiBookmark } from "react-icons/fi";
import { LiaDownloadSolid } from "react-icons/lia";
import { MdMoreHoriz } from "react-icons/md";
import ConvertValue from "../utils/ConvertValue";
import { formatDistanceToNow } from "date-fns";
import axiosInstance from "../api/AxiosInstance";
import Comments from "./Comments";

const PlayVideo = ({ videoId }) => {

   const apiKey = import.meta.env.VITE_API_KEY;

   const [videoData, setVideoData] = useState();
   const [channelData, setChannelData] = useState();
   const [showDesc, setShowDesc]=useState(false)
   const [commentData, setCommentData] = useState([]);

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

   useEffect(() => {
      const channelId = videoData && videoData.snippet.channelId;

      const fetchChannelData = async () => {
         try {
            const response = await axiosInstance.get(
               `/channels?part=snippet%2Cstatistics&id=${channelId}&key=${apiKey}`
            );
            const data = response.data;
            setChannelData(data && data.items[0]);
         } catch (error) {
            console.log("Error on fetch channel data : ", error.message);
         }
      };

      const fetchCommentData = async () => {
         try {
            const response = await axiosInstance.get(
               `commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${apiKey}`
            );
            const data = response.data;
            setCommentData(data.items);
         } catch (error) {
            console.log("Error on fetch comment data : ", error.message);
         }
      };

      fetchChannelData();
      fetchCommentData();
   }, [videoData]);      

   return (
      <section className="basis-[70%]">
         {videoData && (
            <div className="w-full">
               <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  title={videoData.snippet.title}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                  className="w-full h-[75vh] rounded-lg"
               ></iframe>
               <h3 className="font-bold text-xl py-3">{videoData.snippet.title}</h3>
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                     <div className="flex items-center gap-3 cursor-pointer">
                        <img
                           className="rounded-full w-10 h-10"
                           src={channelData && channelData.snippet.thumbnails.default.url}
                           alt="channel logo"
                        />
                        <div>
                           <h4 className="font-semibold">{videoData && videoData.snippet.channelTitle}</h4>
                           <span className="text-xs text-white/60">
                              {ConvertValue(channelData && channelData.statistics.subscriberCount)} subscribers
                           </span>
                        </div>
                     </div>
                     <button className="text-black bg-white text-sm rounded-3xl py-2 px-4 cursor-pointer hover:bg-white/90">
                        Subscribe
                     </button>
                  </div>

                  <div className="flex items-center gap-4">
                     <div className="py-2 px-3 bg-(--highlight-color) rounded-2xl flex items-center gap-1 cursor-pointer hover:bg-(--hover-color)">
                        <LuThumbsUp className="text-xl" />
                        <span className="pl-1 text-sm">{ConvertValue(videoData.statistics.likeCount)}</span>
                        <hr className="text-white/60 w-6 rotate-90" />
                        <LuThumbsDown className="text-xl" />
                     </div>
                     <button className="py-2 px-3 bg-(--highlight-color) rounded-3xl flex items-center gap-1 cursor-pointer hover:bg-(--hover-color)">
                        <PiShareFatBold className="text-2xl" />
                        <span className="text-sm">Share</span>
                     </button>
                     <button className="py-2 px-3 bg-(--highlight-color) rounded-3xl flex items-center gap-1 cursor-pointer hover:bg-(--hover-color)">
                        <FiBookmark className="text-2xl" />
                        <span className="text-sm">Save</span>
                     </button>
                     <button className="py-2 px-3 bg-(--highlight-color) rounded-3xl flex items-center gap-1 cursor-pointer hover:bg-(--hover-color)">
                        <LiaDownloadSolid className="text-2xl" />
                        <span className="text-sm">Download</span>
                     </button>
                     <button className="p-2 bg-(--highlight-color) rounded-full cursor-pointer hover:bg-(--hover-color)">
                        <MdMoreHoriz className="text-2xl" />
                     </button>
                  </div>
               </div>
               <div
                  onClick={() => setShowDesc(true)}
                  className="p-4 my-2 text-sm rounded-lg text-white/90 bg-(--highlight-color) hover:bg-(--hover-color) cursor-pointer"
               >
                  <div className="flex items-center gap-2 font-semibold">
                     <span>{ConvertValue(videoData.statistics.viewCount)} views </span>
                     <span>{formatDistanceToNow(new Date(videoData.snippet.publishedAt), { addSuffix: true })}</span>
                     <p></p>
                  </div>
                  <div className={showDesc ? "line-clamp-0" : "line-clamp-2"}>
                     <p>{videoData.snippet.description}</p>
                     <div className="pt-2 pb-4">
                        {videoData.snippet.tags && videoData.snippet.tags.map((tag) => (
                           <span key={tag} className="text-sky-500 pr-2">
                              #{tag}
                           </span>
                        ))}
                     </div>
                  </div>
                  <button
                     className="cursor-pointer font-semibold"
                     onClick={(e) => {
                        e.stopPropagation();
                        setShowDesc(!showDesc);
                     }}
                  >
                     {showDesc ? "Show less" : "...more"}
                  </button>
               </div>
            </div>
         )}
         <Comments videoData={videoData} commentData={commentData} />
      </section>
   );
};

export default PlayVideo;
