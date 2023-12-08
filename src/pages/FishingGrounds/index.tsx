import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import TitlePage from "../../components/TitlePage"
import Documents from "../../containers/Documents"
import FishingCards from "../../containers/FishingCards"
import FishingSelect from "../../containers/FishingSelect"
import WaterGrounds from "../../containers/WaterGrounds"
import Footer from "../../layouts/Footer"
import { FishingCity } from "../../models/fishing"
import { useAppDispatch, useAppSelector } from "../../store"
import { getRegions, getSliders } from "../../store/actions/fishingActions"
import "./style.scss"

export interface IRegion {
  id: number
  name: string
}
const FishingGrounds = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const fishingData = useAppSelector(state => state.fishing.fishingData)
  const putevka = useAppSelector(state => state.fishing.putevka)

  const [regions, setRegions] = useState<IRegion[]>([])
  const [region, setRegion] = useState<IRegion>(
    regions[0] ?? {
      id: 1,
      name: "Алматинская область"
    }
  )
  const [categoryId, setСategoryId] = useState<number>(
    fishingData ? fishingData[0]?.categories[0].id : 7
  )

  useEffect(() => {
    dispatch(getRegions())
    dispatch(getSliders())
  }, [dispatch])

  useEffect(() => {
    const getRegionsArr = (fishingData: FishingCity[]): IRegion[] =>
      fishingData.map(item => ({ id: item.id, name: item.Name }))
    if (fishingData) {
      const regions: IRegion[] = getRegionsArr(fishingData)
      setRegions(regions)
    }
  }, [fishingData])

  const continueHandler = () => {
    navigate("/online-buy-fishing/client-data")
  }

  return (
    <div className="fishing-grounds">
      <TitlePage
        title="Выбор рыболовного участка"
        subTitle="Выберите область, водоём и участок"
      />
      <FishingSelect title="Область" options={regions} setRegion={setRegion} />
      <FishingCards
        region={region}
        title="Водоемы"
        categoryId={categoryId}
        setCategoryId={setСategoryId}
      />
      <WaterGrounds title="Рыболовный участок" categoryId={categoryId} />

      <Footer
        btnText="Далее"
        disabled={!putevka}
        clickHandler={continueHandler}
      />
      <Documents />
    </div>
  )
}

export default FishingGrounds
