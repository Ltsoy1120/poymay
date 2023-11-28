import React from "react"
import { Outlet } from "react-router-dom"
import Steps from "../../containers/Steps"
import { steps } from "../../data"
import "./style.scss"

const BaseLayout: React.FC = () => {
  return (
    <div className="wrapper">
      <Steps steps={steps} />
      <main className="main">
        <Outlet />
      </main>
    </div>
  )
}

export default BaseLayout
