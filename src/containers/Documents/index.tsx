import React from "react"
import "./style.scss"

const Documents = () => {
  return (
    <div className="documents">
      <a href="/static/oferta.pdf">Договор оферты</a>
      <a href="/static/policy.pdf">Политика конфиденциальности</a>
      <a href="/static/online-payments.pdf">Онлайн-платежи</a>
    </div>
  )
}

export default Documents
