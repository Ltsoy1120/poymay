import { AppDispatch } from ".."
import { fishingService } from "../../services/fishing.service"

export const getRegions = () => {
  return async (dispatch: AppDispatch) => {
    try {
      // dispatch(authFetching())
      const resp = await fishingService.getRegions()
      console.log("partialRegistration", resp.data)
      if (resp.data) {
        // dispatch(setPartialRegistrationData(payload))
        return resp.data
      }
    } catch (error) {}
  }
}
