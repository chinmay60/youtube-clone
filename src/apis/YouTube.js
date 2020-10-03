import Axios from 'axios';

const KEY ='AIzaSyBAWVawdXagmLxYGAhpLL8PSQCq853092I';

export default Axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params:{
    part: 'snippet',
    maxResults: 5,
    key:KEY
  }
});
