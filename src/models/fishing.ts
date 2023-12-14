export interface FishingCity {
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
  city: number | FishingCity
  description: string | null
  created_at: string
  updated_at: string
  cordinate: FishingCordinate[]
  products?: FishingProduct[]
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

export interface FishingProduct {
  id: number
  title: string
  description: string
  price: number
  slug: string
  status: string
  quantitysales: string
  companyprice: string
  address: string
  kg: string
  period: string
  type: string
  City: number
  banperiod: BanPeriod
  publicId: string
  // number:null
  // polygon:16
  // client_address:null
  // first_name:null
  // last_name:null
  // patronymic:null
  // created_at:"2022-04-18T03:05:13.377Z"
  // updated_at:"2023-07-07T16:31:58.752Z"
  // isReserve:false
  // Custom_field:[]
  // Cordinate:null
}

export interface BanPeriod {
  id: number
  start: string
  end: string
}

export interface FishingImage {
  id: number
  url: string
}

export interface FishingSlidersResultDTO {
  id: number
  category: FishingCategory
  content: string
  image: FishingImage
  description: string
  maintitle: string
  slug: string
  subtitle: string
  title: string
  published_at: string
  created_at: string
  updated_at: string
}
