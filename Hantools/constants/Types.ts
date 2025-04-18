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
