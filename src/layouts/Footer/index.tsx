import Button from "../../components/Button"
import "./style.scss"

interface FooterProps {
  type?: "submit" | "button"
  btnText: string
  clickHandler?: () => void
  disabled?: boolean
}

const Footer = ({ type, btnText, clickHandler, disabled }: FooterProps) => {
  return (
    <div className="footer">
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

export default Footer
