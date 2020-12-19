import React from 'react';
import VideoItem from './video-item';

const VideoList=({videos, onVodSelect, onNext, onPrev})=> {
   
   
       console.log(videos)
    return(
        
           <div>
           <div className="ui celled list">
          {videos.map(video=> <VideoItem video={video} key={video.id.videoId} onVodSelect={onVodSelect}/>)}
           </div>
             <div>
                <div className="ui buttons">
                    <button className="ui negative button" onClick={onPrev}>prev</button>
                      <div className="or"></div>
                    <button className="ui primary button" onClick={onNext}>next</button>
                </div>
             </div>
           </div>
      
    )
}
export default VideoList;