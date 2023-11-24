import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
  FishingCategory,
  FishingCity,
  FishingSlidersResultDTO
} from "../../models/fishing"

export interface FishingState {
  fishingData: FishingCity[]
  region: string
  categoriesByRegion: FishingCategory[]
  categoryId: string
  sliders: FishingSlidersResultDTO[]
  categoriesById: FishingCategory[]
}
const initialState: FishingState = {
  fishingData: [],
  region: "",
  categoriesByRegion: [],
  categoryId: "",
  sliders: [],
  categoriesById: []
}

export const fishingSlice = createSlice({
  name: "fishing",
  initialState,
  reducers: {
    setFishingData(state, action: PayloadAction<FishingCity[]>) {
      state.fishingData = action.payload
    },
    setRegion(state, action: PayloadAction<FishingState>) {
      state.region = action.payload.region
    },
    setCategoryId(state, action: PayloadAction<FishingState>) {
      state.categoryId = action.payload.categoryId
    },
    setSliders(state, action: PayloadAction<FishingSlidersResultDTO[]>) {
      state.sliders = action.payload
    },
    setCategoriesById(state, action: PayloadAction<FishingCategory[]>) {
      state.categoriesById = action.payload
    }
  }
})
export const {
  setFishingData,
  setRegion,
  setCategoryId,
  setSliders,
  setCategoriesById
} = fishingSlice.actions

export default fishingSlice.reducer
