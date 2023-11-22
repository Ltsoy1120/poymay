import React from "react"
import { NavLink } from "react-router-dom"
import "./style.scss"

export interface IStep {
  step: string
  content: string
  path: string
}

const Step = ({ step, content, path }: IStep) => {
  return (
    <div className="step-wrap">
      <NavLink
        to={path}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        <div className="step">
          <span className="step__step">{step}</span>
          <p className="step__content">{content}</p>
        </div>
      </NavLink>
      {(step === "01" || step === "02") && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="72"
          viewBox="0 0 20 72"
          fill="none"
        >
          <g clipPath="url(#clip0_571_116)">
            <path
              d="M1 -2L19.1818 35.8L1 73.6"
              stroke="#D1D5DB"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_571_116">
              <rect width="20" height="72" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
    </div>
  )
}

export default Step
