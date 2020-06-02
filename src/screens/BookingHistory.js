import React from "react";
import FlatList from 'flatlist-react';

import "./BookingHistory.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

class BookingHistory extends React.Component 
{
    events = [
        {eventName: 'Arctic Hall', date: "12/5/2020", time: "5:30PM", info: {price: 240}},
        {eventName: 'Comic Con', date: "12/5/2020", time: "5:30PM", info: {price: 180}},
        {eventName: 'PUBG Battleship', date: "12/5/2020", time: "5:30PM", info: {price: 340}},
        {eventName: 'Nordic Game 2020', date: "12/5/2020", time: "5:30PM", info: {price: 220}},
        {eventName: 'Augmented World Expo', date: "12/5/2020", time: "5:30PM", info:{price: 230}},
        {eventName: 'Game Connection Asia', date: "12/5/2020", time: "5:30PM", info: {price: 390}},
        {eventName: 'Pocket Gamer Connects', date: "12/5/2020", time: "5:30PM", info: {price: 320}},
        {eventName: 'Arctic Hall', date: "12/5/2020", time: "5:30PM", info: {price: 240}},
        {eventName: 'Comic Con', date: "12/5/2020", time: "5:30PM", info: {price: 180}}
    ];

    renderEvent = (event, idx) => {
        return (

                <tr key={idx}>
                    <td>{event.eventName}</td>
                    <td>{event.date}</td>
                    <td>{event.time}</td>
                    <td>₹ {event.info.price}</td>
                </tr>
        );
    };

    render()
    {
        const booking = "BOOKING HISTORY"

        return (
            <>
            <Header leftElement="BOOKING HISTORY" />
            <div id="booking-history">
            <center>
            <table id="events">
                <tr>
                    <th>Event Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Price</th>
                </tr>                
                <FlatList
                list={this.events}
                renderItem={this.renderEvent}/>
            </table>
            </center>
            </div>

            </>
        );
    }

}

export default BookingHistory;