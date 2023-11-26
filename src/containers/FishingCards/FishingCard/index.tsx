import { classMerge } from "../../../helpers/common"
import { FishingSlidersResultDTO } from "../../../models/fishing"
import { API_URL } from "../../../services/http.service"
import "./style.scss"

interface FishingCardProps {
  category: FishingSlidersResultDTO
  categoryId: number
  onClick: (id: number) => void
}

const FishingCard = ({ category, categoryId, onClick }: FishingCardProps) => {
  const handleCardClick = () => {
    onClick(category.category.id)
  }

  return (
    <div
      className={classMerge(
        "fishing-card",
        categoryId === category.category.id ? "active" : null
      )}
      onClick={handleCardClick}
    >
      <img src={`${API_URL}${category.image.url}`} alt="водоем" />
      <h3 className="fishing-card__title">{category.title}</h3>
    </div>
  )
}

export default FishingCard
