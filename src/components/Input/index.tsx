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
        min={type === "date" ? new Date().toISOString().split("T")[0] : 0}
      />
      {error && <span>{error.message}</span>}
    </div>
  )
}

export default Input
