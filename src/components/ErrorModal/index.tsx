import { GeneralErrorState } from "../../store/slices/generalErrorSlice"
import "./style.scss"

interface ErrorModalProps {
  error: GeneralErrorState
  close: () => void
}

const ErrorModal = ({ error, close }: ErrorModalProps) => {
  return (
    <div id="openModal" className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">ОШИБКА {error.status}!</h3>
            <span className="close" onClick={close}>
              ×
            </span>
          </div>
          <div className="modal-body">
            <p>{error.message}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorModal
