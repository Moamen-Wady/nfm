import axios from "axios";

export default axios.create({
  withCredentials: true,
  baseURL: "https://nfm-sigma.vercel.app/",
});
