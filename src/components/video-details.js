import React from 'react';

const VideoDetails =({selectedVod})=>{
   
    if(!selectedVod){
        return <div>search for videos in youtube</div>
    }
    const url =`https://www.youtube.com/embed/${selectedVod.id.videoId}`
    return(
        <div>
        <div className="ui embed">
       <iframe src={url} title="vod" allowFullScreen/>

       
       </div>
       <div className="ui segment">
       <div className="content">
    <div className="header">{selectedVod.snippet.title}</div>
    {selectedVod.snippet.description}
       </div>
       </div>
       </div>
    )
}
export default VideoDetails;