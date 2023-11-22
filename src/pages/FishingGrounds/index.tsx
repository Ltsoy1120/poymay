import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Button from "../../components/Button"
import TitlePage from "../../components/TitlePage"
import FishingCards from "../../containers/FishingCards"
import FishingSelect from "../../containers/FishingSelect"
import Steps from "../../containers/Steps"
import { fishingData, steps } from "../../data"
import { FishingDTO } from "../../models/fishing"
import { useAppDispatch } from "../../store"
import { getRegions } from "../../store/actions/fishingActions"
import "./style.scss"

const FishingGrounds = () => {
  const dispatch = useAppDispatch()
  const pathName = useLocation().pathname
  console.log("pathName", pathName)
  const [region, setRegion] = useState("Алматинская область")
  console.log("region", region)

  const getRegionsArr = (fishingData: FishingDTO[]): string[] =>
    fishingData.map(item => item.Name)

  const regions: string[] = getRegionsArr(fishingData)

  useEffect(() => {
    dispatch(getRegions())
  }, [])

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
        <FishingCards region={region} title="Водоемы" />
        <div className="main__footer">
          <Button>Далее</Button>
        </div>
      </div>
    </div>
  )
}

export default FishingGrounds
