import { AppDispatch } from ".."
import { ClientDTO } from "../../models/client"
import { fishingService } from "../../services/fishing.service"
import {
  setCategoriesById,
  setFishingData,
  setSliders,
  setVaucherData
} from "../slices/fishingSlice"

export const getRegions = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await fishingService.getRegions()
      if (resp.data) {
        dispatch(setFishingData(resp.data))
        return resp.data
      }
    } catch (error) {}
  }
}

export const getSliders = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await fishingService.getSliders()
      if (resp.data) {
        dispatch(setSliders(resp.data))
        return resp.data
      }
    } catch (error) {}
  }
}

export const getCategoriesById = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await fishingService.getCategoriesById(id)
      if (resp.data) {
        dispatch(setCategoriesById(resp.data))
        return resp.data
      }
    } catch (error) {}
  }
}

export const createVauchers = (payload: ClientDTO) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await fishingService.createVauchers(payload)
      if (resp.data) {
        dispatch(setVaucherData(resp.data.data))
        return resp.data
      }
    } catch (error) {}
  }
}
