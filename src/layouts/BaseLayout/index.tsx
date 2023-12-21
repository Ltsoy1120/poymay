import React from "react"
import { Outlet, useLocation } from "react-router-dom"
import Steps from "../../containers/Steps"
import { steps } from "../../data"
import Back from "../Back"
import Footer from "../Footer"
import "./style.scss"

const BaseLayout: React.FC = () => {
  const pathName = useLocation().pathname
  return (
    <div className="wrapper">
      <Steps steps={steps} />
      {(pathName === "/online-buy-fishing/client-data" ||
        pathName === "/online-buy-fishing/payment") && <Back />}
      <main className="main">
        <Outlet />
      </main>
      {pathName !== "/online-buy-fishing/payment" && <Footer />}
    </div>
  )
}

export default BaseLayout
