import React from "react";
import PlayVideo from "../components/PlayVideo";
import { useParams } from "react-router-dom";

const SelectedVideo = () => {
   const { videoId, categoryId } = useParams();

   return (
      <section className="pt-16 p-13  w-full h-full flex">
         <PlayVideo videoId={videoId} />
      </section>
   );
};

export default SelectedVideo;
