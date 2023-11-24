import { useEffect, useState } from "react"
import TitleBlock from "../../components/TitleBlock"
import { FishingSlidersResultDTO } from "../../models/fishing"
import { IRegion } from "../../pages/FishingGrounds"
import { useAppDispatch, useAppSelector } from "../../store"
import { getCategoriesById } from "../../store/actions/fishingActions"
import FishingCard from "./FishingCard"
import "./style.scss"

interface FishingCardsProps {
  region: IRegion
  title: string
  setCategoryId: React.Dispatch<React.SetStateAction<number>>
}
const FishingCards = ({ region, title, setCategoryId }: FishingCardsProps) => {
  const dispatch = useAppDispatch()
  const fishingSliders = useAppSelector(state => state.fishing.sliders)

  const [categoriesByRegion, setCategoriesByRegion] = useState<
    FishingSlidersResultDTO[]
  >([])

  useEffect(() => {
    const getCategoriesByRegion = (
      region: IRegion
    ): FishingSlidersResultDTO[] => {
      const foundCategories = fishingSliders.filter(
        item => item.category.city === region.id
      )
      return foundCategories
    }
    const categories = getCategoriesByRegion(region)
    setCategoriesByRegion(categories)
    setCategoryId(categories[0]?.category.id)
  }, [region, fishingSliders, setCategoriesByRegion, setCategoryId])

  const handleClick = (id: number) => {
    setCategoryId(id)
    dispatch(getCategoriesById(id))
  }

  return (
    <div className="block">
      <TitleBlock title={title} />
      <div className="fishing-cards">
        {categoriesByRegion.map(category => (
          <FishingCard
            key={category.id}
            category={category}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  )
}

export default FishingCards
