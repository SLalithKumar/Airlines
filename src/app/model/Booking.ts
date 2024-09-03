import { Time } from "@angular/common";

export class Booking{
    booking_id!: number;
    user_id!: number;
    user_name!: string;
    flight_number!: number;
    airlines_name!: String;
    source!: String;
    destination!: String;
    date_of_travel!:Date;
    departure_time!: Time;
    class_seats!: String;
    no_of_passengers!: number;
    

}