import "./style.scss"

interface TitleBlockProps {
  title: string
}

const TitleBlock = ({ title }: TitleBlockProps) => {
  return <h3 className="block-title">{title}</h3>
}

export default TitleBlock
