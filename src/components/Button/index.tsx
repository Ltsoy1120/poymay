import React from "react"
import "./style.scss"

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined
  mr?: number
  mt?: number
  width?: number
  ref?: any
  disabled?: boolean
  onClick?: (event: React.FormEvent<HTMLButtonElement>) => void
  color?: string
  backgroundColor?: string
  children: React.ReactNode
}
const Button: React.FC<ButtonProps> = ({
  type,
  mr,
  mt,
  width,
  ref,
  disabled,
  onClick,
  color,
  backgroundColor,
  children
}) => {
  return (
    <button
      style={{ marginRight: mr, marginTop: mt, width, color, backgroundColor }}
      className="button"
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
export default Button
