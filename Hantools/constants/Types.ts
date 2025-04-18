export type Customer = {
    id: number,
    name: string,
    phone: number,
    city: string,
    district: string,
    address?: string,
    taxNumber?: number,
    taxOffice?: string,
    billingAddress?: string
}

export type ModalType = 'see' | 'add' | 'edit';

export type Dealer = {
    id: number,
    first_name: string,
    last_name: string,
    username: string,
    phone: number
}

export type Order = {
    id: number,
    date: string,
    seller: string,
    payment_method: string,
    products: string,
    cost: number,
    status: string,
}
