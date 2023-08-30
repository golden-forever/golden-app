import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://file.notion.so/",
});

axiosClient.interceptors.request.use(config => {
  // const user = null;
  // if (user) {
  //   config.headers["Authorization"] = `Bearer ${user.token}`;
  // }
  return config;
});

//All request will wait 2 seconds before timeout
// axiosClient.defaults.timeout = 2000;

export function getRequest(URL: string) {
  return axiosClient.get(`${URL}`).then(response => response);
}

export function postRequest(URL: string, payload: {}) {
  return axiosClient.post(`${URL}`, payload).then(response => response);
}

export function patchRequest(URL: string, payload: {}) {
  return axiosClient.patch(`${URL}`, payload).then(response => response);
}

export function deleteRequest(URL: string) {
  return axiosClient.delete(`${URL}`).then(response => response);
}
