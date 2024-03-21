import { AxiosResponse } from "axios"
import { ClientDTO, CreateVaucherResultDTO } from "../models/client"
import {
  FishingCategory,
  VaucherKaspiPayRequest,
  VaucherKaspiPayResponse
} from "../models/fishing"
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
  },
  createVauchers: async (
    payload: ClientDTO
  ): Promise<AxiosResponse<CreateVaucherResultDTO>> => {
    return await http.post(`/vouchers`, payload, {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json"
      }
    })
  },
  createVauchersKaspiPay: async (
    payload: VaucherKaspiPayRequest
  ): Promise<AxiosResponse<VaucherKaspiPayResponse>> => {
    return await http.post(`/vouchers/kaspi/pay`, payload)
  }
  // getVoucherPdf: async (
  //   id: number
  // ): Promise<AxiosResponse<FishingCategory[]>> => {
  //   return await http.get(`/uploads/report-${id}.pdf`, {
  //     responseType: "arraybuffer",
  //     headers: {
  //       Accept: "application/pdf"
  //     }
  //   })
  // }
}
