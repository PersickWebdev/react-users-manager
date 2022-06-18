export interface IUser {
    id: number | string;
    status: string;
    personal: {
        name: string;
        lastName: string;
        age: number;
        gender: string;
        phone: string;
    },
    company: {
        name: string;
        country: string;
        industry: string;
        rating: number;
        email: string;
    }
}