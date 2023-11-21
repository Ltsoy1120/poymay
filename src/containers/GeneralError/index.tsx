import ErrorModal from "../../components/ErrorModal"
import { useAppDispatch, useAppSelector } from "../../store"
import { setErrorMessage } from "../../store/slices/generalErrorSlice"

const GeneralError = () => {
  const error = useAppSelector(state => state.generalError)

  const dispatch = useAppDispatch()
  const closeHandler = () => {
    dispatch(
      setErrorMessage({
        status: null,
        message: ""
      })
    )
  }

  return (
    <>{error.message && <ErrorModal close={closeHandler} error={error} />}</>
  )
}

export default GeneralError
