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