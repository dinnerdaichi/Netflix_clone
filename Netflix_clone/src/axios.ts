import axios from 'axios'


const intence = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default intence;