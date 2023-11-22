import React from "react"
import "./style.scss"

interface SelectProps {
  options: string[]
  setRegion: React.Dispatch<React.SetStateAction<string>>
}
const Select: React.FC<SelectProps> = ({ options, setRegion }) => {
  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRegion(e.target.value)
  }
  return (
    <div className="custom-select-container">
      <select
        className="custom-select"
        style={{ backgroundImage: "url('/static/images/selector.svg')" }}
        onChange={selectHandler}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
export default Select
