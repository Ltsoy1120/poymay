import { Routes, Route } from "react-router-dom"
import GeneralError from "./containers/GeneralError"
import ClientData from "./pages/ClientData"
import FishingGrounds from "./pages/FishingGrounds"
import Payment from "./pages/Payment"
import "./assets/scss/base.scss"

function App() {
  return (
    <div className="App">
      <GeneralError />
      <Routes>
        <Route path="/online-buy-fishing">
          <Route index element={<FishingGrounds />} />
          <Route path="fishing-grounds" element={<FishingGrounds />} />
          <Route path="client-data" element={<ClientData />} />
          <Route path="payment" element={<Payment />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
