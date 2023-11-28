import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import TitlePage from "../../components/TitlePage"
import Form from "../../containers/Form"
import { useAppDispatch, useAppSelector } from "../../store"
import { setStep } from "../../store/slices/fishingSlice"

const ClientData = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const putevka = useAppSelector(state => state.fishing.putevka)

  useEffect(() => {
    if (!putevka) {
      navigate("/online-buy-fishing/fishing-grounds")
      return
    }

    dispatch(setStep("02"))
  }, [dispatch, navigate, putevka])

  return (
    <div className="main">
      <TitlePage
        title="Заполнение персональных данных"
        subTitle="Введите данные о себе"
      />
      <Form />
    </div>
  )
}

export default ClientData
