import React from "react"
import Select from "../../components/Select"
import TitleBlock from "../../components/TitleBlock"
import { IRegion } from "../../pages/FishingGrounds"

interface FishingSelectProps {
  options: IRegion[]
  title: string
  setRegion: React.Dispatch<React.SetStateAction<IRegion>>
}
const FishingSelect: React.FC<FishingSelectProps> = ({
  options,
  title,
  setRegion
}) => {
  return (
    <div className="block">
      <TitleBlock title={title} />
      <Select options={options} setRegion={setRegion} />
    </div>
  )
}
export default FishingSelect
