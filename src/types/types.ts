export interface Coffe {
  id: string
  name: string
  price: number
  description: string
  imageUrl: string
  tag: string[]
}

export interface CoffeCart extends Coffe {
  quantity: number
}
