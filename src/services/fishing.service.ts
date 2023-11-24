import { AxiosResponse } from "axios"
import { FishingCategory } from "../models/fishing"
import http from "./http.service"

export const fishingService = {
  getRegions: async (): Promise<AxiosResponse<any>> => {
    return await http.get(`/cities`, {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json"
      }
    })
  },
  getSliders: async (): Promise<AxiosResponse<any>> => {
    return await http.get(`/mainsliders`, {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json"
      }
    })
  },
  getCategoriesById: async (
    id: number
  ): Promise<AxiosResponse<FishingCategory[]>> => {
    return await http.get(`/categories?id=${id}`, {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json"
      }
    })
  }
}
