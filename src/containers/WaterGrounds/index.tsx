import { useEffect, useState } from "react"
import TitleBlock from "../../components/TitleBlock"
import { FishingProduct } from "../../models/fishing"
import { useAppDispatch, useAppSelector } from "../../store"
import WaterGround from "./WaterGround"
import { getCategoriesById } from "../../store/actions/fishingActions"
import "./style.scss"
import { setPutevka } from "../../store/slices/fishingSlice"

interface WaterGroundsProps {
  title: string
  categoryId: number
}

const WaterGrounds = ({ title, categoryId }: WaterGroundsProps) => {
  const dispatch = useAppDispatch()
  const categoriesById = useAppSelector(state => state.fishing.categoriesById)

  const [waterGrounds, setWaterGrounds] = useState<FishingProduct[]>([])

  useEffect(() => {
    categoryId && dispatch(getCategoriesById(categoryId))
  }, [dispatch, categoryId])

  useEffect(() => {
    const getWaterGroundsByCategory = (
      categoryId: number
    ): FishingProduct[] | undefined => {
      const foundCategory = categoriesById.find(
        category => category.id === categoryId
      )
      if (foundCategory) {
        const publishProducts = foundCategory.products?.filter(
          product => product.status === "published"
        )
        return publishProducts ? publishProducts : undefined
      }
    }
    const waterGrounds = getWaterGroundsByCategory(categoryId)
    if (waterGrounds) {
      setWaterGrounds(waterGrounds)
    }
  }, [categoriesById, categoryId])

  const handleClick = (putevka: FishingProduct) => {
    dispatch(setPutevka(putevka))
  }

  return (
    <div className="block">
      <TitleBlock title={title} />
      <div className="waterGrounds">
        {waterGrounds.map(waterGround => (
          <WaterGround
            key={waterGround.id}
            waterGround={waterGround}
            onClick={() => handleClick(waterGround)}
          />
        ))}
      </div>
    </div>
  )
}

export default WaterGrounds
