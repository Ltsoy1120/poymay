import Button from "../Button"
import "./style.scss"

interface FooterProps {
  type?: "submit" | "button"
  btnText: string
  clickHandler?: () => void
  disabled?: boolean
}

const PageFooter = ({ type, btnText, clickHandler, disabled }: FooterProps) => {
  return (
    <div className="page-footer">
      <Button
        disabled={disabled}
        onClick={clickHandler}
        type={type ? type : "button"}
      >
        {btnText}
      </Button>
    </div>
  )
}

export default PageFooter
