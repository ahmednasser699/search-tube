import React from 'react';
import './item.css';
const KEY = "AIzaSyDB7tsbV2UD2RwxD5gzOvujmPqLlCsOsYg";
const VideoItem=({video, onVodSelect})=> {
    
    return(
        <div className="item voditem" >
            <img onClick={()=>onVodSelect(video)} style={{cursor:'pointer'}} className="ui image" src={video.snippet.thumbnails.default.url} alt='img'></img>
        <div className="content">
            <div className="header" onClick={()=>onVodSelect(video)} style={{cursor:'pointer'}}>{video.snippet.title}</div>
       <a href={`https://www.googleapis.com/youtube/channel/key=${KEY}${video.snippet.channelTitle}`}>{video.snippet.channelTitle}</a> 
        </div>
        </div>
     
    )
}
export default VideoItem;