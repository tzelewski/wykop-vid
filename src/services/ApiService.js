import axios from "axios";
import { ApiUrl } from "./../Settings";

export function config(token)  {
  return { headers: { Authorization: `Bearer ${token}` }};
  }

export function getPosts(pageIndex) {
  return axios
    .post(`${ApiUrl}/auth`, {"data": {
      "key": `${process.env.REACT_APP_WYKOP_API_KEY}`,
      "secret": `${process.env.REACT_APP_WYKOP_API_SECRET}`
    }})
    .then((r) => axios.get(`${ApiUrl}/links?page=${pageIndex}&limit=80&type=homepage`, config(r.data.data.token)))
    .then((r) => r.data.data.filter((x) => x.source?.url.includes("youtu")));
}
