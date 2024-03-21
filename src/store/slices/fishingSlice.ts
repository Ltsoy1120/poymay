import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { VaucherDataResultDTO } from "../../models/client"
import {
  FishingCategory,
  FishingCity,
  FishingProduct,
  FishingSlidersResultDTO,
  VaucherKaspiPayResponse
} from "../../models/fishing"

export interface FishingState {
  fishingData: FishingCity[]
  region: string
  categoriesByRegion: FishingCategory[]
  categoryId: string
  sliders: FishingSlidersResultDTO[]
  categoriesById: FishingCategory[]
  putevka: FishingProduct | null
  vaucherData: VaucherDataResultDTO | null
  vaucherKaspiPay: VaucherKaspiPayResponse | null
  step: string
}
const initialState: FishingState = {
  fishingData: [],
  region: "",
  categoriesByRegion: [],
  categoryId: "",
  sliders: [],
  categoriesById: [],
  putevka: null,
  vaucherData: null,
  vaucherKaspiPay: null,
  step: "01"
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
    },
    setStep(state, action: PayloadAction<string>) {
      state.step = action.payload
    },
    setPutevka(state, action: PayloadAction<FishingProduct>) {
      state.putevka = action.payload
    },
    setVaucherData(state, action: PayloadAction<VaucherDataResultDTO>) {
      state.vaucherData = action.payload
    },
    setVaucherKaspiPay(state, action: PayloadAction<VaucherKaspiPayResponse>) {
      state.vaucherKaspiPay = action.payload
    }
  }
})
export const {
  setFishingData,
  setRegion,
  setCategoryId,
  setSliders,
  setCategoriesById,
  setStep,
  setPutevka,
  setVaucherData,
  setVaucherKaspiPay
} = fishingSlice.actions

export default fishingSlice.reducer
