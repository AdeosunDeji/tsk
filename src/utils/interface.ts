export interface IUser {
    id?: string
    username: string
    email: string
    password: string
}

export interface CustomRequest {
  user: IUser
  file: object
  params: object
  query: object
  path: object
}

export interface ILogin {
  username: string
  password: string
}

export interface ITokenDetails {
  id: string
  data: IUser
}

export interface IOrder {
  product_name: string
  quantity: number
}


