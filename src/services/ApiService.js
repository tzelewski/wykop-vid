import axios from "axios";
import { ApiKey, ApiUrl } from "./../Settings";

export function getPosts(pageIndex) {
  return axios
    .get(`${ApiUrl}/Links/Promoted/1/appkey/${ApiKey}/page/${pageIndex}`)
    .then((r) => r.data.data)
    .then((r) => r.filter((x) => x.source_url.includes("youtu")));
}
