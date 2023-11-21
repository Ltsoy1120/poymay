import axios, { AxiosError, AxiosHeaders, AxiosResponse } from "axios"
import { store } from "../store"
import { setErrorMessage } from "../store/slices/generalErrorSlice"
const API_URL = process.env.REACT_APP_API_URL

export const http = axios.create({
  baseURL: API_URL,
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }
})

http.interceptors.request.use(config => {
  // const accessToken = localStorage.getItem("access_token")

  config.headers = {
    ...config.headers
  } as AxiosHeaders

  // config.headers.post["Content-Type"] = "application/json"
  // if (accessToken) {
  //   config.headers.append("Authorization", `Bearer ${accessToken}`)
  // }

  return config
})

http.interceptors.response.use(
  (res: AxiosResponse) => res,
  (error: AxiosError<any>) => {
    console.error("Error", error)

    switch (error.response?.status) {
      case 400:
        showError(
          error.response?.status,
          error.response?.data.message ?? "Некорректные данные"
        )
        break
      case 401:
        showError(
          error.response?.status,
          error.response?.data.message ?? "Ошибка аутентификации и авторизации"
        )
        break
      case 403:
        showError(error.response?.status, "Доступ запрещен")
        break
      case 500:
        showError(
          error.response?.status,
          error.response?.data.message ?? "Сервер временно недоступен"
        )
        break
      case 504:
        showError(error.response?.status, "Данные недоступны")
        break
    }
  }
)
const showError = (status: number, message: string) => {
  store.dispatch(
    setErrorMessage({
      status,
      message
    })
  )
}
export default http
