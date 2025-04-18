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
    city?: string,
    district?: string,
    address?: string,
    taxNumber?: number,
    taxOffice?: string,
    billingAddress?: string
}

export type Item = {
    id: number,
    code: string,
    name: string,
    stock: boolean,
    buying_price: number,
    consignment: number,
    selling_price: number,
    tl_price: number,
    payment_types: string[]
}

export type Report = {
    id: number,
    dealer: string,
    action: string,
    product: string,
    amount: number
    customer: string,
    date: string
}

export type Admin = {
    id: number,
    first_name: string,
    last_name: string,
    username: string,
}

export type StorageWorker = {
    id: number,
    first_name: string,
    last_name: string,
    username: string,
    clearance: string
}