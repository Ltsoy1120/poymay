import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { FishingCategory, FishingDTO } from "../../models/fishing"

export interface FishingState {
  fishingData: FishingDTO[]
  region: string
  categoriesByRegion: FishingCategory[]
  categoryId: string
}
const initialState: FishingState = {
  fishingData: [],
  region: "",
  categoriesByRegion: [],
  categoryId: ""
}

export const fishingSlice = createSlice({
  name: "fishing",
  initialState,
  reducers: {
    setFishingData(state, action: PayloadAction<FishingState>) {
      state.fishingData = action.payload.fishingData
    },
    setRegion(state, action: PayloadAction<FishingState>) {
      state.region = action.payload.region
    },
    setCategoryId(state, action: PayloadAction<FishingState>) {
      state.categoryId = action.payload.categoryId
    }
  }
})
export const { setFishingData, setRegion, setCategoryId } = fishingSlice.actions

export default fishingSlice.reducer
