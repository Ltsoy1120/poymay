import React, { ChangeEvent } from "react"
import { classMerge } from "../../helpers/common"
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
  className?: string
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
  width,
  className
}: InputProps) => {
  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type ?? "text"}
        className={classMerge("input", className)}
        placeholder={placeholder}
        required
        disabled={disabled}
        autoFocus={autoFocus}
        value={value}
        onChange={onChange}
        style={{ width }}
        min={type === "date" ? new Date().toISOString().split("T")[0] : 0}
      />
    </div>
  )
}

export default Input
