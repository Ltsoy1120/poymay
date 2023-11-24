import { FishingSlidersResultDTO } from "../../../models/fishing"
import { API_URL } from "../../../services/http.service"
import "./style.scss"

interface FishingCardProps {
  category: FishingSlidersResultDTO
  onClick: (id: number) => void
}

const FishingCard = ({ category, onClick }: FishingCardProps) => {
  const handleCardClick = () => {
    onClick(category.category.id)
  }
  return (
    <div className="fishing-card" onClick={handleCardClick}>
      <img src={`${API_URL}${category.image.url}`} alt="водоем" />
      <h3 className="fishing-card__title">{category.title}</h3>
    </div>
  )
}

export default FishingCard
