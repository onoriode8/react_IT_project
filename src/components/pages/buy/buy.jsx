import Card from "../../UI/card/card";

import firstHouse from "../../../assests/first_house.webp"
import secondHouse from '../../../assests/second_house.webp'
import thirdHouse from "../../../assests/third_house.webp";
import fourthHouse from "../../../assests/fourth_house.webp";
import fifthHouse from "../../../assests/fifth_house.webp"
import sixthHouse from "../../../assests/sixth_house.webp";
import seventhHouse from "../../../assests/seventh_house.webp";
import eighthHouse from "../../../assests/eighthHouse.webp";
import ninethHouse from "../../../assests/nineth_house.webp";
import tenthHouse from "../../../assests/tenth_house.webp";


import "./buy.css";

const buyHouse = () => (
    <div className="buy_house_wrapper">
        <div>
            <h1>Real Estate Homes for Sale!</h1>
        </div>
        <div className="card_wraper">
            <Card image={firstHouse} price="270,000" apartmentSize="3 beds 2 baths 1387" address="121 FAIRMONT, San Antonio, TX 78204"/>
            <Card image={secondHouse}  price="479,900" apartmentSize="4 beds 3 baths  2,136" address="1104 W MISTLETOE AVE, San Antonio, TX 78201"/>
            <Card image={thirdHouse}  price="250,000" apartmentSize="3 beds 2 baths 1,788" address="4427 JAMESTOWN DR, San Antonio, TX 78220"/>
            <Card image={fourthHouse} price="255,000" apartmentSize="3 beds 2 baths 1,535" address="4834 Dahlia Terrace, San Antonio, TX 78218" />
            <Card image={fifthHouse} price="169,000" apartmentSize="4 beds 2 baths 1,260" address="8603 STANDING ROCK ST, San Antonio, TX 78242" />
            <Card image={sixthHouse} price="398,777" apartmentSize="4 beds 5 baths 3,328" address="257 Ceremonial Ridge, San Antonio, TX 78260" />
            <Card image={seventhHouse} price="359,900" apartmentSize="5 beds 3 baths 2,990" address="1402 Avant Ave, San Antonio, TX 78210" />
            <Card image={eighthHouse} price="340,000" apartmentSize="5 beds 3 baths 2,539" address="15465 Bobwhite Quail, San Antonio, TX 78253" />
            <Card image={ninethHouse} price="689,900" apartmentSize="5 beds 3 baths 3,087" address="1726 LARKSPUR DR, San Antonio, TX 78213" />
            <Card image={tenthHouse} price="175,000" apartmentSize="3 beds 2 baths 1,222" address="435 ADA ST, San Antonio, TX 78223" />
        </div>
    </div>
);

export default buyHouse;