import axios from 'axios';
const KEY = "AIzaSyDB7tsbV2UD2RwxD5gzOvujmPqLlCsOsYg";

export default axios.create({
    baseURL: ' https://www.googleapis.com/youtube/v3/',
    params:{
        part:'snippet',
        type: 'video',
        key:KEY
    
       }
  

});

