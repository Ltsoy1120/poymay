import "./style.scss"

interface ModalProps {
  title: string
  text: string
  show: boolean
  close: () => void
  width?: number
}

const Modal = ({ title, text, show, close, width }: ModalProps) => {
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
                <p>{text}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
