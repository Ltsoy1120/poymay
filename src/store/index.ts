import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import generalErrorReducer from "./slices/generalErrorSlice"
import fishingSlice from "./slices/fishingSlice"

const rootReducer = combineReducers({
  generalError: generalErrorReducer,
  fishing: fishingSlice
})

function setupStore() {
  return configureStore({
    reducer: rootReducer
  })
}

export const store = setupStore()

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
