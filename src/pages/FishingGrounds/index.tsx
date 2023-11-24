import { useEffect, useState } from "react"
import Button from "../../components/Button"
import TitlePage from "../../components/TitlePage"
import FishingCards from "../../containers/FishingCards"
import FishingSelect from "../../containers/FishingSelect"
import Steps from "../../containers/Steps"
import WaterGrounds from "../../containers/WaterGrounds"
import { steps } from "../../data"
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
  // const pathName = useLocation().pathname
  const fishingData = useAppSelector(state => state.fishing.fishingData)

  const [regions, setRegions] = useState<IRegion[]>([])
  const [region, setRegion] = useState<IRegion>({
    id: 1,
    name: "Алматинская область"
  })
  const [categoryId, setСategoryId] = useState<number>(7)
  console.log("categoryId", categoryId)
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

  return (
    <div className="wrapper">
      <Steps steps={steps} />
      <div className="main">
        <TitlePage
          title="Выбор рыболовного участка"
          subTitle="Выберите область, водоём и участок"
        />
        <FishingSelect
          title="Область"
          options={regions}
          setRegion={setRegion}
        />
        <FishingCards
          region={region}
          title="Водоемы"
          setCategoryId={setСategoryId}
        />
        <WaterGrounds title="Рыболовный участок" categoryId={categoryId} />
        <div className="main__footer">
          <Button>Далее</Button>
        </div>
      </div>
    </div>
  )
}

export default FishingGrounds
