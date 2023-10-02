export interface routerlink {
    url: string;
    // id: number;
    // type: number;
}

export class Car{
    constructor(
        public name?: string,
        public model?: string,
        public licenceNumber?: string,
        public rentPrice?: number,
        public available?: boolean,
        public numberOfPassanger?: number,
        public imageDir?: string,
        public mileage ?: number,
        public fuelType?: string,
        public rating?: string,
        public transmission?: string,
        public carId?: number,
        public numberOfSuitcases?: number,
        public numberOfDoors?: number,
        public description?: string,
        public videoUrl?: string,
    ) {}
}

export class Comment{
    constructor(
        public nom ?: string,
        public tele?: string,
        public email?: string,
        public comment?: string,
        ){}
}

export  class Booking{
    constructor(
        public bookStartDate?: Date,
        public bookEndDate?: Date,
        public carId?: number,
        public customerId?: number,
        public customerEmail?: string, 
        public pickLocation?: string,
        public endLocation ?: string,
        public userName?: string, 
        public userPhone?: string,
        public bookingId?: number,
        public total?: number,
        ){}
}

export class User{
    constructor(
        public  id?: number,
        public firstName?: string,
        public lastName?: string,
        public address?: string,
        public login?: string,
        public password?:string,
        public phoneNumber?: string,
    ){}
}

export class AuthenticationRequest{
    constructor(
        public login: string,
        public password: string
        ){}
}

export class Review{
    constructor(
        public reviewId?: number,
        public comment?: string,
        public rating?: number,
        public  datePosted ?: Date,
        public carId?: number,
        public userId ?: number,
        public userName?: string,
        public userImage?: string
    ){}
}

export class Admin{
    constructor(
        public  adminId: number,
        public firstName: string,
        public lastName: string,
        public email: string,
        public phoneNumber: string,
    ){}
}

export class Wishlist{
    constructor(
        public wishlistId?: number,
        public carId?: number, 
        public userId?: number,
    ){}
}


export interface popularCars1 {
    carName: string,
    img1: string,
    img2: string,
    carModel: string,
    rating: string,
    carDetail1: string,
    carDetail2: string,
    carDetail3: string,
    carDetail4: string,
    carDetail5: string,
    carDetail6: string,
    country: string,
    price: string,
    heading: string,
    text: string,
    like: boolean,
}
export interface popularCars2 {
    carName: string,
    img1: string,
    img2: string,
    carModel: string,
    rating: string,
    carDetail1: string,
    carDetail2: string,
    carDetail3: string,
    carDetail4: string,
    carDetail5: string,
    carDetail6: string,
    country: string,
    price: string,
    heading: string,
    text: string,
    like: boolean,
}
export interface popularCars3 {
    carName: string,
    img1: string,
    img2: string,
    carModel: string,
    rating: string,
    carDetail1: string,
    carDetail2: string,
    carDetail3: string,
    carDetail4: string,
    carDetail5: string,
    carDetail6: string,
    country: string,
    price: string,
    heading: string,
    text: string,
    like: boolean,
}
export interface popularCars4 {
    carName: string,
    img1: string,
    img2: string,
    carModel: string,
    rating: string,
    carDetail1: string,
    carDetail2: string,
    carDetail3: string,
    carDetail4: string,
    carDetail5: string,
    carDetail6: string,
    country: string,
    price: string,
    heading: string,
    text: string,
    like: boolean,
}
export interface popularCars5 {
    carName: string,
    img1: string,
    img2: string,
    carModel: string,
    rating: string,
    carDetail1: string,
    carDetail2: string,
    carDetail3: string,
    carDetail4: string,
    carDetail5: string,
    carDetail6: string,
    country: string,
    price: string,
    heading: string,
    text: string,
    like: boolean,
}
export interface popularCars6 {
    carName: string,
    img1: string,
    img2: string,
    carModel: string,
    rating: string,
    carDetail1: string,
    carDetail2: string,
    carDetail3: string,
    carDetail4: string,
    carDetail5: string,
    carDetail6: string,
    country: string,
    price: string,
    heading: string,
    text: string,
    like: boolean,
}
export interface recommendedCar {
    img: string,
    text: string,
    carModel: string,
    heading: string,
    name: string,
    carDetail1: string,
    carDetail2: string,
    carDetail3: string,
    carDetail4: string,
    carDetail5: string,
    carDetail6: string,
    title: string,
}
export interface testimonial {
    img: string,
    Name: string,
    rating: string,
    para: string
}
export interface carTypes {
    img: string,
    heading: string,
    cars: string,
}
export interface listingDetails {
    img: string
}
export interface thumbnails {
    img: string
}
export interface interestedCars {
    carName: string,
    img1: string,
    img2: string,
    carModel: string,
    rating: string,
    carDetail1: string,
    carDetail2: string,
    carDetail3: string,
    carDetail4: string,
    carDetail5: string,
    carDetail6: string,
    country: string,
    price: string,
    heading: string,
    text: string,
    like: boolean,
}
export interface listingGrid {
    carName: string,
    img1: string,
    img2: string,
    carModel: string,
    rating: string,
    carDetail1: string,
    carDetail2: string,
    carDetail3: string,
    carDetail4: string,
    carDetail5: string,
    carDetail6: string,
    country: string,
    price: string,
    heading: string,
    text: string,
    like: boolean,
}
export interface header {
    tittle: string,
    showAsTab: boolean,
    separateRoute: boolean,
    routes?: string,
    hasSubRoute?: boolean,
    showSubRoute?: boolean,
    menu?: menu[],
}
export interface menu {
    menuValue: string,
    routes?: string,
    hasSubRoute: boolean,
    showSubRoute: boolean,
    subMenus?: submenu[],
}
export interface submenu {
    menuValue: string,
    routes: string,
    hasSubRoute: boolean,
    showSubRoute: boolean,
    subMenus: [],
}
export interface carousel {
    img: string,
    Name: string,
    rating: string,
    para: string
}