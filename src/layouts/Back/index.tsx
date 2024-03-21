import React from "react"
import { useNavigate } from "react-router-dom"
import "./style.scss"

const Back = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className="back" onClick={handleBack}>
      <svg
        className="back__svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.5 5L8.5 12L15.5 19"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span>Назад</span>
    </div>
  )
}

export default Back
