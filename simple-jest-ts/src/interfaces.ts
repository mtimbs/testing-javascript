export interface Item {
  name: string
  sku: string
  price: number
}

export interface CartItem extends Item {
  quantity: number
}

export type Cart = Array<CartItem>
