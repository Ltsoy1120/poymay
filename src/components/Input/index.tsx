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
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  className?: string
  width?: number
  required?: boolean
  error?: { name: string; message: string } | null
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
  className,
  width,
  required,
  error
}: InputProps) => {
  const today = new Date()
  const maxDate = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate()
  )
    .toISOString()
    .split("T")[0]

  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type ?? "text"}
        className={classMerge("input", error ? "error" : "")}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        autoFocus={autoFocus}
        value={value}
        onChange={onChange}
        style={{ width }}
        min={type === "date" ? today.toISOString().split("T")[0] : undefined}
        max={type === "date" ? maxDate : undefined}
      />
      {error && <span>{error.message}</span>}
    </div>
  )
}

export default Input
