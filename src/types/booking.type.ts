

interface IUser {
    _id: string;
    name: string;
    email: string;
    phone: string;
    role: string;
    address: string;
    __v?: number;
}

interface IFacility {
    _id: string;
    name: string;
    description: string;
    pricePerHour: number;
    location: string;
    isDeleted: boolean;
    bookingsCount:number;
    __v?: number;
}


export interface IBookings {
    _id: string;
    date: string;
    startTime: string;
    endTime: string;
    user: IUser;
    payableAmount: number;
    facility: IFacility;
    isBooked: string;
    paymentStatus: string;
    transactionId: string;
}