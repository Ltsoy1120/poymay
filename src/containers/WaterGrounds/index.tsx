import { useEffect, useState } from "react"
import TitleBlock from "../../components/TitleBlock"
import { FishingProduct } from "../../models/fishing"
import { useAppDispatch, useAppSelector } from "../../store"
import WaterGround from "./WaterGround"
import { getCategoriesById } from "../../store/actions/fishingActions"
import "./style.scss"

interface WaterGroundsProps {
  title: string
  categoryId: number
}

const WaterGrounds = ({ title, categoryId }: WaterGroundsProps) => {
  const dispatch = useAppDispatch()
  const categoriesById = useAppSelector(state => state.fishing.categoriesById)

  const [waterGrounds, setWaterGrounds] = useState<FishingProduct[]>([])

  useEffect(() => {
    dispatch(getCategoriesById(categoryId))
  }, [dispatch, categoryId])

  useEffect(() => {
    const getWaterGroundsByCategory = (
      categoryId: number
    ): FishingProduct[] | undefined => {
      const foundCategory = categoriesById.find(
        category => category.id === categoryId
      )
      return foundCategory ? foundCategory.products : undefined
    }
    const waterGrounds = getWaterGroundsByCategory(categoryId)
    if (waterGrounds) {
      setWaterGrounds(waterGrounds)
    }
  }, [categoriesById, categoryId])

  return (
    <div className="block">
      <TitleBlock title={title} />
      <div className="waterGrounds">
        {waterGrounds.map(waterGround => (
          <WaterGround key={waterGround.id} waterGround={waterGround} />
        ))}
      </div>
    </div>
  )
}

export default WaterGrounds
