import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import TitlePage from "../../components/TitlePage"
import PageFooter from "../../components/PageFooter"
import { useAppDispatch, useAppSelector } from "../../store"
import { setStep } from "../../store/slices/fishingSlice"
import Modal from "../../components/Modal"
import { createVauchersKaspiPay } from "../../store/actions/fishingActions"
import "./style.scss"

const Payment = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const vaucherData = useAppSelector(state => state.fishing.vaucherData)
  const putevka = useAppSelector(state => state.fishing.putevka)
  const [show, setShow] = useState<boolean>(false)

  useEffect(() => {
    if (!vaucherData) {
      navigate("/online-buy-fishing/client-data")
      return
    }
    dispatch(setStep("03"))
  }, [dispatch, navigate, vaucherData])

  const handleQRClick = async () => {
    const result =
      vaucherData &&
      (await dispatch(
        createVauchersKaspiPay({ InvoiceId: vaucherData?.id, WithQR: true })
      ))
    if (result) {
      window.location.href = result.redirectUrl
    }
  }

  let language = "ru-RU"
  const cp = window.cp

  function cardPay() {
    var widget = new cp.CloudPayments({
      language: language
    })
    widget.pay(
      "auth", // или "charge"
      {
        //options
        publicId: putevka?.publicId, //id из личного кабинета
        description: "Покупка путевки", //назначение
        amount: vaucherData?.price, //сумма
        currency: "KZT", //валюта
        // accountId: "user@example.com", //идентификатор плательщика (необязательно)
        invoiceId: vaucherData?.id, //номер заказа  (необязательно)
        skin: "mini", //дизайн виджета (необязательно)
        autoClose: 3
      },
      {
        onSuccess: async function (options: any) {
          // success
          console.log("options", options)
          navigate(`/online-buy-fishing/payment-success/${vaucherData?.id}`)
        },
        onFail: function (reason: any, options: any) {
          // fail
          console.log("reason", reason)
          console.log("options", options)

          //действие при неуспешной оплате
        },
        onComplete: function (paymentResult: any, options: any) {
          //Вызывается как только виджет получает от api.cloudpayments ответ с результатом транзакции.
          //например вызов вашей аналитики Facebook Pixel
          console.log("paymentResult", paymentResult)
          console.log("options", options)
        }
      }
    )
  }

  // const getVoucherPdf = async () => {
  //   // const pdf = vaucherData && (await fishingService.getVoucherPdf(6498))
  //   // console.log("pdf", pdf)
  //   navigate(`/online-buy-fishing/payment-success/${vaucherData?.id}`)
  // }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const { href } = e.currentTarget
    window.open(href, "_blank")
  }

  return (
    <div className="payment">
      <TitlePage
        title="Подтверждение данных"
        subTitle="Подтвердите данные и перейдите к оплате"
      />
      <div className="agreement">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <rect
            x="0.5"
            y="0.5"
            width="15"
            height="15"
            rx="3.5"
            fill="#4F46E5"
          />
          <rect
            x="0.5"
            y="0.5"
            width="15"
            height="15"
            rx="3.5"
            stroke="#4F46E5"
          />
          <path
            d="M12.2074 4.79279C12.3949 4.98031 12.5002 5.23462 12.5002 5.49979C12.5002 5.76495 12.3949 6.01926 12.2074 6.20679L7.20741 11.2068C7.01988 11.3943 6.76557 11.4996 6.50041 11.4996C6.23524 11.4996 5.98094 11.3943 5.79341 11.2068L3.79341 9.20679C3.61125 9.01818 3.51045 8.76558 3.51273 8.50339C3.51501 8.24119 3.62018 7.99038 3.80559 7.80497C3.991 7.61956 4.24181 7.51439 4.50401 7.51211C4.7662 7.50983 5.0188 7.61063 5.20741 7.79279L6.50041 9.08579L10.7934 4.79279C10.9809 4.60532 11.2352 4.5 11.5004 4.5C11.7656 4.5 12.0199 4.60532 12.2074 4.79279Z"
            fill="white"
          />
        </svg>
        <p>
          Продолжая, вы подтверждаете, что прочитали, поняли и согласны с
          условиями{" "}
          <a
            href="https://poymay.kz/api/uploads/document_262854c5e9.pdf"
            className="link"
            onClick={handleLinkClick}
          >
            Договора оферты
          </a>
        </p>
      </div>
      <PageFooter
        btnText="Перейти к оплате"
        // clickHandler={getVoucherPdf}
        clickHandler={() => {
          setShow(true)
        }}
      />
      <Modal
        title="Выберите способ оплаты"
        isChoiceOfPayment
        clickHandlerQR={handleQRClick}
        clickHandlerCard={cardPay}
        // clickHandlerCard={getVoucherPdf}
        show={show}
        close={() => {
          setShow(false)
        }}
        width={400}
      />
    </div>
  )
}

export default Payment
