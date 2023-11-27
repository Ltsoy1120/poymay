import { classMerge } from "../../../helpers/common"
import { useAppSelector } from "../../../store"
import "./style.scss"

export interface IStep {
  step: string
  content: string
}

const Step = ({ step, content }: IStep) => {
  const savedStep = useAppSelector(state => state.fishing.step)
  return (
    <div className="step-wrap">
      <div
        className={classMerge(
          "step",
          savedStep === step ? "active" : savedStep > step ? "doneStep" : ""
        )}
      >
        <span className="step__step">
          {savedStep > step ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z"
                fill="white"
              />
            </svg>
          ) : (
            step
          )}
        </span>
        <p className="step__content">{content}</p>
      </div>
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
