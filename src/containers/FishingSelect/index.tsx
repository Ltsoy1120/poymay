import React from "react"
import Select from "../../components/Select"
import TitleBlock from "../../components/TitleBlock"
import "./style.scss"

interface FishingSelectProps {
  options: string[]
  title: string
  setRegion: React.Dispatch<React.SetStateAction<string>>
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
