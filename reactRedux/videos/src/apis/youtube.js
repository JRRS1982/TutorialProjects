import axios from "axios";

const KEY = "AIzaSyByAD8vJao9_DjkZmcJuLpswyvauo8tLMo"; // public key restricted to use by localhost:3000

/**
 * make a pre-configured instance of axios with base url of the Youtube api
 */
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  }
});
