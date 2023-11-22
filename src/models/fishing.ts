export interface FishingDTO {
  id: number
  Name: string
  published_at: string
  created_at: string
  updated_at: string
  Coordinates: FishingCordinates | null
  categories: FishingCategory[]
}

export interface FishingCategory {
  id: number
  name: string
  slug: string
  city: number
  description: string | null
  created_at: string
  updated_at: string
  cordinate: FishingCordinate[]
}

export interface FishingCordinates {
  id: number
  lat: string
  lng: string
}
export interface FishingCordinate {
  id: number
  lat: string
  lng: string
  country: string | null
}
