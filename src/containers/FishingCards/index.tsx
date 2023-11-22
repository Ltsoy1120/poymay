import React, { useEffect, useState } from "react"
import TitleBlock from "../../components/TitleBlock"
import { fishingData } from "../../data"
import { FishingCategory } from "../../models/fishing"
import FishingCard from "./FishingCard"
import "./style.scss"

interface FishingCardsProps {
  region: string
  title: string
}
const FishingCards = ({ region, title }: FishingCardsProps) => {
  const [categoriesByRegion, setCategoriesByRegion] = useState<
    FishingCategory[]
  >([])

  const getCategoriesByRegion = (region: string): FishingCategory[] => {
    const foundRegion = fishingData.find(item => item.Name === region)

    if (foundRegion) {
      return foundRegion.categories
    }
    return []
  }

  console.log("categoriesByRegion", categoriesByRegion)

  useEffect(() => {
    const categories = getCategoriesByRegion(region)
    setCategoriesByRegion(categories)
  }, [region])

  return (
    <div className="block">
      <TitleBlock title={title} />
      <div className="fishing-cards">
        {categoriesByRegion.map(category => (
          <FishingCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  )
}

export default FishingCards
