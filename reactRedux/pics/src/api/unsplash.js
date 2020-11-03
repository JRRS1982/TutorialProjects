import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    // as per the unsplash docs... we need to include a header with auth.
    Authorization: "Client-ID cCd8B3JOJ4LOW1_V053RUWEXBDRijih_9mkP9vAmm74", // access key from unsplash
  },
});
