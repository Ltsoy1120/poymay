export interface ClientDTO {
  first_name: string
  last_name: string
  patronymic: string
  email: string
  phone: string
  stateNumber?: string
  DateFrom: string
  days: number
  kg: number
  Address: string
  putevka: number
}

export interface AddressDTO {
  city: string
  region: string
  street: string
  house: string
  apartment: string
}

export interface CreateVaucherResultDTO {
  message: string
  data: VaucherDataResultDTO
}

export interface VaucherDataResultDTO {
  id: number
  price: number
}
