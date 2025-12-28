import React from "react";
import PlayVideo from "../components/PlayVideo";
import { useParams } from "react-router-dom";
import Recommended from "../components/Recommended";

const SelectedVideo = () => {
   const { videoId, categoryId } = useParams();

   return (
      <section className="pt-16 p-13  w-full h-full flex gap-4">
         <PlayVideo videoId={videoId} />
         <Recommended categoryId={categoryId} videoId={videoId}/>
      </section>
   );
};

export default SelectedVideo;
