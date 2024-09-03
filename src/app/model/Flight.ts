import { Time } from "@angular/common";

export class Flight{
    airlines_name!: String;
    flight_number!: number;
    flight_model!: String;
    flight_type!: String;
    no_of_seats_economy_class!: number;
    no_of_seats_business_class!: number;
    source!: String;
    destination!: String;
    arrival_time!: Time;
    departure_time!: Time;
    cost_of_economy_class!: number;
    cost_of_business_class!: number;
    days!: number;
    date_of_flight!:Date;
    
}