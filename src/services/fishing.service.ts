import { AxiosResponse } from "axios"
import http from "./http.service"
export const fishingService = {
  getRegions: async (): Promise<AxiosResponse<any>> => {
    return await http.get(`/cities`, {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json"
      }
    })
  }
}
