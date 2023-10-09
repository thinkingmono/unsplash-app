import axios from "axios";

const authFetch = axios.create({
    baseURL: 'https://api.unsplash.com/search/photos?',
    headers:{
        Authorization: 'Client-ID brTTS3FYgel65kX3IE_5Lq0wmqsmLVNyLeXuAmq9lrI'
    }
})

export default authFetch;