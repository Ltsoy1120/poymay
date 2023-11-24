import React from "react"
import { IRegion } from "../../pages/FishingGrounds"
import "./style.scss"

interface SelectProps {
  options: IRegion[]
  setRegion: React.Dispatch<React.SetStateAction<IRegion>>
}
const Select: React.FC<SelectProps> = ({ options, setRegion }) => {
  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptionId = e.target.value
    const selectedOption = options.find(
      option => option.id === Number(selectedOptionId)
    )
    if (selectedOption) {
      setRegion({ id: selectedOption.id, name: selectedOption.name })
    }
  }

  return (
    <div className="custom-select-container">
      <select
        className="custom-select"
        style={{ backgroundImage: "url('/static/images/selector.svg')" }}
        onChange={selectHandler}
      >
        {options.map(option => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}
export default Select
