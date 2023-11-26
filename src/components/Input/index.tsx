import React, { ChangeEvent } from "react"
import "./style.scss"

interface InputProps {
  label: string
  name: string
  type?: "text" | "number" | "tel" | "date"
  placeholder?: string
  disabled?: boolean
  autoFocus?: boolean
  value: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  width?: number
}
const Input = ({
  label,
  name,
  type,
  placeholder,
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
        placeholder={placeholder}
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
