import { ChangeEvent, useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import Input from "../../components/Input"
import Modal from "../../components/Modal"
import { AddressDTO, ClientDTO } from "../../models/client"
import { useAppDispatch, useAppSelector } from "../../store"
import { createVauchers } from "../../store/actions/fishingActions"
import "./style.scss"

const Form = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const putevka = useAppSelector(state => state.fishing.putevka)
  const [show, setShow] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [address, setAddress] = useState<AddressDTO>({
    city: "",
    region: "",
    street: "",
    house: "",
    apartment: ""
  })

  const [state, setState] = useState<ClientDTO>({
    last_name: "",
    first_name: "",
    patronymic: "",
    email: "",
    phone: "",
    DateFrom: "",
    days: putevka?.type === "seasonal" ? Number(putevka.period) : 0,
    kg: putevka?.type === "seasonal" ? Number(putevka.kg) : 0,
    Address: "",
    putevka: putevka ? putevka.id : 0
  })

  const [isButtonDisabled, setIsButtonDisabled] = useState(true)

  // Функция для проверки всех полей state на наличие пустых значений
  const checkFieldsNotEmpty = useCallback(() => {
    for (const key in state) {
      if (Object.prototype.hasOwnProperty.call(state, key)) {
        const fieldValue = state[key as keyof ClientDTO]
        if (fieldValue === "" || fieldValue === 0) {
          setIsButtonDisabled(true)
          return
        }
      }
    }
    for (const key in address) {
      if (Object.prototype.hasOwnProperty.call(address, key)) {
        const fieldValue = address[key as keyof AddressDTO]
        if (fieldValue === "") {
          setIsButtonDisabled(true)
          return
        }
      }
    }
    setIsButtonDisabled(false)
  }, [state, address]) // Зависимость от state

  useEffect(() => {
    // Вызываем функцию checkFieldsNotEmpty внутри useEffect
    checkFieldsNotEmpty()
  }, [checkFieldsNotEmpty]) // Зависимость от checkFieldsNotEmpty

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setError(false)
    if (
      name === "DateFrom" &&
      putevka &&
      value > putevka?.banperiod.start &&
      value < putevka?.banperiod.end
    ) {
      setError(true)
      setShow(true)
    }
    if (
      name === "city" ||
      name === "region" ||
      name === "street" ||
      name === "house" ||
      name === "apartment"
    ) {
      setAddress(prevState => ({
        ...prevState,
        [name]: value
      }))

      setState(prevState => ({
        ...prevState,
        Address: Object.values({
          ...address,
          [name]: value
        })
          .filter(Boolean)
          .join(", ")
      }))
    } else {
      setState(prevState => ({
        ...prevState,
        [name]: value
      }))
    }
  }

  const updateStateDays = (newDaysValue: number) => {
    setState(prevState => ({
      ...prevState,
      days: newDaysValue,
      kg: newDaysValue * Number(putevka?.kg) // Обновляем state.kg, умножая значение state.days на 3
    }))
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("state", state)
    const result = await dispatch(createVauchers(state))
    if (result) {
      navigate("/online-buy-fishing/payment")
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <Modal
        title="Упс, что-то пошло не так"
        text={`Вы выбрали время внутри периода запрета улова ("${putevka?.banperiod.start}" - "${putevka?.banperiod.end}")}`}
        show={show}
        close={() => {
          setShow(false)
        }}
        width={400}
      />
      <div className="form">
        <div className="row">
          <Input
            label="Фамилия"
            name="last_name"
            autoFocus
            value={state.last_name}
            onChange={handleChange}
          />
          <Input
            label="Имя"
            name="first_name"
            value={state.first_name}
            onChange={handleChange}
          />
          <Input
            label="Отчество"
            name="patronymic"
            value={state.patronymic}
            onChange={handleChange}
          />
        </div>
        <div className="row">
          <Input
            label="Email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
          <Input
            label="Номер телефона"
            name="phone"
            type="tel"
            value={state.phone}
            onChange={handleChange}
          />
        </div>
        <div className="row">
          <Input
            label="Дата начала"
            type="date"
            name="DateFrom"
            value={state.DateFrom}
            onChange={handleChange}
            width={230}
            className={error ? "error" : ""}
          />
          <Input
            label="Количество дней"
            name="days"
            type="number"
            disabled={putevka?.type === "seasonal"}
            value={String(state.days)}
            onChange={e => updateStateDays(Number(e.target.value))}
            width={230}
          />
          <Input
            label="Количество кг"
            name="kg"
            value={String(state.kg)}
            disabled
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
            value={address.city}
            onChange={handleChange}
          />
          <Input
            label="Область"
            name="region"
            value={address.region}
            onChange={handleChange}
          />
          <Input
            label="Улица/Микрорайон"
            name="street"
            value={address.street}
            onChange={handleChange}
          />
        </div>
        <div className="row">
          <Input
            label="Дом"
            name="house"
            value={address.house}
            onChange={handleChange}
            width={230}
          />
          <Input
            label="Квартира"
            name="apartment"
            value={address.apartment}
            onChange={handleChange}
            width={230}
          />
        </div>
      </div>
      <div className="footer">
        <Button disabled={error || isButtonDisabled} type="submit">
          Далее
        </Button>
      </div>
    </form>
  )
}

export default Form
