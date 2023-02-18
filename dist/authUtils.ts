import { AxiosInstance } from "axios";
import { setCookie } from "./cookieUtils";

export const setToken = (axios: AxiosInstance, token: string) => {
  axios.defaults.headers.Authorization = "Bearer " + token
  setCookie("authorization", "Bearer " + token)
}
