import React from 'react'
import { formatDistanceToNow } from 'date-fns';
import ConvertValue from '../utils/ConvertValue';
import { LuThumbsDown, LuThumbsUp } from 'react-icons/lu';

const Comments = ({videoData, commentData}) => {
  return (
     <div className="py-3">
        <h2 className="text-xl font-semibold pb-4">
           {videoData && ConvertValue(videoData.statistics.commentCount)} Comments
        </h2>
        <input
           className="w-full p-2 border-b border-white/60 outline-0 text-sm"
           placeholder="Add a comment..."
           type="text"
        />
        {commentData?.map((item, index) => (
           <div key={index} className="pt-6 flex gap-4 w-full">
              <img
                 className="rounded-full w-10 h-10"
                 src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                 alt=""
              />
              <div className="text-xs">
                 <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{item.snippet.topLevelComment.snippet.authorDisplayName} </h3>
                    <span>
                       {formatDistanceToNow(new Date(item.snippet.topLevelComment.snippet.publishedAt), {
                          addSuffix: true,
                       })}
                    </span>
                 </div>
                 <p className="text-sm py-2">{item.snippet.topLevelComment.snippet.textDisplay}</p>
                 <div className="flex  items-center gap-1">
                    <LuThumbsUp className="text-sm w-8 h-8 p-2 rounded-full hover:bg-(--hover-color) cursor-pointer" />
                    <span>{ConvertValue(item.snippet.topLevelComment.snippet.likeCount)}</span>
                    <LuThumbsDown className="text-sm w-8 h-8 p-2 rounded-full  hover:bg-(--hover-color) cursor-pointer" />
                    <span className="font-semibold py-2 px-3 ml-2 rounded-3xl hover:bg-(--hover-color) cursor-pointer">
                       Reply
                    </span>
                 </div>
              </div>
           </div>
        ))}
     </div>
  );
}

export default Comments