import React from 'react';
import SearchBar from './search-bar';
import Api from '../network/api';
import VideoList from './video-list';
import VideoDetails from './video-details';



class App extends React.Component{
    
    state ={videos:[], selectedVod:null, data:null, pageToken:null, prevToken:null , searchTerm:null}
    onFormSubmit=async(term)=>{
        const response =await Api.get("search",{
            params:{
            q:term,
            maxResults:5}
        });
       this.setState({videos:response.data.items, data:response.data, searchTerm:term, pageToken:response.data.nextPageToken, selectedVod:response.data.items[0]});

       console.log(response)

    };
    onVodSelect=(video)=>{
       this.setState({selectedVod:video});
      
    }
    onNext=async()=>{
        if(this.state.data){
            const responsetwo = await Api.get("search",{
                params:{
                   q:this.state.searchTerm,
                   maxResults:5,
                   pageToken:this.state.pageToken
                }
            });
            console.log(responsetwo)
            this.setState({videos:responsetwo.data.items, pageToken:responsetwo.data.nextPageToken, prevToken:responsetwo.data.prevPageToken,selectedVod:responsetwo.data.items[0]})
       
        
    }
}

onPrev=async()=>{
    if(this.state.data && this.state.prevToken){
        const responsetwo = await Api.get("search",{
            params:{
               q:this.state.searchTerm,
               maxResults:5,
               pageToken:this.state.prevToken
            }
        });
        console.log(responsetwo)
        this.setState({videos:responsetwo.data.items, pageToken:responsetwo.data.nextPageToken, prevToken:responsetwo.data.prevPageToken,selectedVod:responsetwo.data.items[0]})
   
    
}
}
    render(){
    return(
        <div className="ui container " style={{marginTop:'10px'}}>
                <div>
                  <SearchBar onFormSubmit={this.onFormSubmit}/>
                </div>
            
            <div className="ui grid">
                <div className="row">
                   <div className="nine wide column">
                      <VideoDetails selectedVod={this.state.selectedVod}/>
                   </div>
                   <div className="seven wide column ">
                      <VideoList videos={this.state.videos} onVodSelect={this.onVodSelect} onNext={this.onNext} onPrev={this.onPrev}/>
                   </div>
                </div>
            </div>
            
        </div>
    )
}}
export default App