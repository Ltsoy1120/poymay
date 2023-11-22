import React, { useState } from "react"
import Input from "../../components/Input"
import TitlePage from "../../components/TitlePage"
import { ClientDTO } from "../../models/client"
import "./style.scss"

const Form = () => {
  const [state, setState] = useState<ClientDTO>({
    surname: "",
    name: "",
    patronymic: "",
    email: "",
    phone: "",
    startDate: new Date(),
    amountDays: 0,
    weight: 0,
    address: { city: "", region: "", street: "", house: "", apartment: "" }
  })
  return (
    <form className="form">
      <div className="row">
        <Input
          label="Фамилия"
          name="surname"
          autoFocus
          value={state.surname}
          onChange={() => {}}
        />
        <Input label="Имя" name="name" value={state.name} onChange={() => {}} />
        <Input
          label="Отчество"
          name="patronymic"
          value={state.patronymic}
          onChange={() => {}}
        />
      </div>
      <div className="row">
        <Input
          label="Email"
          name="email"
          value={state.email}
          onChange={() => {}}
        />
        <Input
          label="Номер телефона"
          name="phone"
          type="tel"
          value={state.phone}
          onChange={() => {}}
        />
      </div>
      <div className="row">
        <Input
          label="Дата начала"
          type="date"
          name="startDate"
          value={""}
          onChange={() => {}}
          width={230}
        />
        <Input
          label="Количество дней"
          name="amountDays"
          type="number"
          value={String(state.amountDays)}
          onChange={() => {}}
          width={230}
        />
        <Input
          label="Количество кг"
          name="weight"
          value={String(state.weight)}
          onChange={() => {}}
          width={230}
        />
      </div>
      <div className="address-title">
        <h2>Адрес проживания</h2>
        <img
          className="icon"
          src="/static/images/help-circle.svg"
          alt="help-icon"
        />
        <div className="help-content" style={{ display: "block" }}>
          Данные места жительства необходимы для внесения в журнал регистрации
          выданных путевок
        </div>
      </div>
      <div className="row">
        <Input
          label="Город"
          name="city"
          value={state.address.city}
          onChange={() => {}}
        />
        <Input
          label="Область"
          name="region"
          value={state.address.region}
          onChange={() => {}}
        />
        <Input
          label="Улица/Микрорайон"
          name="street"
          value={state.address.street}
          onChange={() => {}}
        />
      </div>
      <div className="row">
        <Input
          label="Дом"
          name="house"
          value={state.address.house}
          onChange={() => {}}
          width={230}
        />
        <Input
          label="Квартира"
          name="apartment"
          value={state.address.apartment}
          onChange={() => {}}
          width={230}
        />
      </div>
    </form>
  )
}

export default Form
