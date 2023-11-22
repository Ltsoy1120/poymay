export interface ClientDTO {
  surname: string
  name: string
  patronymic: string
  email: string
  phone: string
  startDate: Date
  amountDays: number
  weight: number
  address: AddressDTO
}

export interface AddressDTO {
  city: string
  region: string
  street: string
  house: string
  apartment: string
}
