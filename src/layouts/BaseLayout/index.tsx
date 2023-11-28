import React from "react"
import { Outlet, useLocation } from "react-router-dom"
import Steps from "../../containers/Steps"
import { steps } from "../../data"
import Back from "../Back"
import "./style.scss"

const BaseLayout: React.FC = () => {
  const pathName = useLocation().pathname
  return (
    <div className="wrapper">
      <Steps steps={steps} />
      {pathName !== "/online-buy-fishing/fishing-grounds" && <Back />}
      <main className="main">
        <Outlet />
      </main>
    </div>
  )
}

export default BaseLayout
