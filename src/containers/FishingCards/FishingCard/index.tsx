import { FishingCategory } from "../../../models/fishing"
import "./style.scss"

interface FishingCardProps {
  category: FishingCategory
}

const FishingCard = ({ category }: FishingCardProps) => {
  return (
    <div className="fishing-card">
      <img src="" alt="" />
      <h3 className="fishing-card__title">{category.name}</h3>
    </div>
  )
}

export default FishingCard
