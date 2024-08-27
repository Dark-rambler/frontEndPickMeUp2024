export interface StoreInterface {
    id?: number;
    name: string;
    description: string;
    address: string;
    phone: string;
    email?: string;
    imageUrl: string;
    like: boolean;
    type: string;
    website?: string;
    schedule?: string;
}

export interface productInterface {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    like: boolean;
    category: string;
    quantity: number;
    storeId: number;
}
