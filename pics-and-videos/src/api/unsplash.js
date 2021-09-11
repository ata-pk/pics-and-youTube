import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID fGpDbMp-CYIkeOZLn9NWbYVtuYw0tbAfKPS5HALwcMw",
  },
});
