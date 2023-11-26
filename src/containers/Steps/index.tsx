import React from "react"
import Step, { IStep } from "./Step"
import "./style.scss"

interface IStepsProps {
  steps: IStep[]
}

const Steps = ({ steps }: IStepsProps) => {
  return (
    <div className="steps">
      {steps.map(step => (
        <Step key={step.step} step={step.step} content={step.content} />
      ))}
    </div>
  )
}

export default Steps
