import React from "react"
import "./style.scss"

interface InputProps {
  label: string
  name: string
  type?: "text" | "number" | "tel" | "date"
  disabled?: boolean
  autoFocus?: boolean
  value: string
  onChange: () => void
  width?: number
}
const Input = ({
  label,
  name,
  type,
  disabled,
  autoFocus,
  value,
  onChange,
  width
}: InputProps) => {
  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type ?? "text"}
        className="input"
        required
        disabled={disabled}
        autoFocus={autoFocus}
        value={value}
        onChange={onChange}
        style={{ width }}
      />
    </div>
  )
}

export default Input
