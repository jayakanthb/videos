import axios from "axios";
const KEY = "AIzaSyAL9jCDWvRD2G5nUgBrLEgEhZTQsRvzt80";

export const baseParams = {
  part: "snippet",
  maxResults: 5,
  key: KEY
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});