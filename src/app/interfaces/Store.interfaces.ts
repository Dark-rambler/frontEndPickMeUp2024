export interface StoreInterface {
    id?: number;
    name: string;
    description: string;
    address: string;
    phone: string;
    email?: string;
    image: string;
    like: boolean;
    type: string;
}