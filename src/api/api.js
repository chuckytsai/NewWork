import axios from "axios";

let WeatherRequest = axios.create({
  baseURL: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/"
});
//====台灣中央氣象局api=======
export let WeatherApi = (Area, from, to) =>
  WeatherRequest.get(Area + "?Authorization=CWB-A0E4A14B-FEB4-49ED-8473-4DD8300A8518"
    + "&timeFrom=" + from + "&timeTo=" + to);