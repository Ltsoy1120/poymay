import { Routes, Route } from "react-router-dom"
import GeneralError from "./containers/GeneralError"
import BaseLayout from "./layouts/BaseLayout"
import ClientData from "./pages/ClientData"
import FishingGrounds from "./pages/FishingGrounds"
import Payment from "./pages/Payment"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import "./assets/scss/base.scss"

function App() {
  return (
    <div className="App">
      <GeneralError />
      <Routes>
        <Route path="/online-buy-fishing">
          <Route element={<BaseLayout />}>
            <Route index element={<FishingGrounds />} />
            <Route path="fishing-grounds" element={<FishingGrounds />} />
            <Route path="client-data" element={<ClientData />} />
            <Route path="payment" element={<Payment />} />
          </Route>
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
