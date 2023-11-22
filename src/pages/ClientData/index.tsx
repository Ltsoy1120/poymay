import React from "react"
import Button from "../../components/Button"
import TitlePage from "../../components/TitlePage"
import Form from "../../containers/Form"
import Steps from "../../containers/Steps"
import { steps } from "../../data"

const ClientData = () => {
  return (
    <div className="wrapper">
      <Steps steps={steps} />
      <div className="main">
        <TitlePage
          title="Заполнение персональных данных"
          subTitle="Введите данные о себе"
        />
        <Form />
        <div className="main__footer">
          <Button>Далее</Button>
        </div>
      </div>
    </div>
  )
}

export default ClientData
