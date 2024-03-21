import Button from "../Button"
import "./style.scss"

interface ModalProps {
  title: string
  text?: string
  isChoiceOfPayment?: boolean
  clickHandlerQR?: () => void
  clickHandlerCard?: () => void
  show: boolean
  close: () => void
  width?: number
}

const Modal = ({
  title,
  text,
  isChoiceOfPayment,
  clickHandlerQR,
  clickHandlerCard,
  show,
  close,
  width
}: ModalProps) => {
  return (
    <>
      {show && (
        <div id="openModal" className="modal">
          <div className="modal-dialog">
            <div className="modal-content" style={{ width }}>
              <div className="modal-header">
                <h3 className="modal-title">{title}</h3>
                <span className="close" onClick={close}>
                  ×
                </span>
              </div>
              <div className="modal-body">
                {text && <p>{text}</p>}
                {isChoiceOfPayment && (
                  <div className="btns-group">
                    <Button onClick={clickHandlerQR}>QR</Button>
                    <Button onClick={clickHandlerCard}>Картой</Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
