import React from "react";

import "./UserDetails.css";
import { Switch,Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

class UserDetails extends React.Component
{
    render()
    {
        return (
            <div id="user-details">
            <Header />
            <div class="wrapper">
                <div class="left">
                    <img src="https://i.imgur.com/cMy8V5j.png" alt="user" />
        <h4>{localStorage.getItem('name')}</h4>
                </div>
                <div class="rightUser">
                    <div class="info">
                        <h3>Account Details</h3>
                        <div class="info_data">
                            <div class="data">
                                <h4>Email</h4>
        <p>{localStorage.getItem('email')}</p>
                            </div>
                            <div class="data">
                            <h4>Phone</h4>
        <p>{localStorage.getItem('phone')}</p>
                        </div>
                        <div class="data">
                            <h4>State</h4>
                                <p>Maharashtra</p>
                        </div>
                        <div class="data">
                            <h4>City</h4>
                                <p>Mumbai</p>
                        </div>
                        </div>
                    </div>

                    <div class="history">
                        <h3>Booking History</h3>
                        <div class="history_data">
                        <button
                                className="btn btn-danger booking-btn" >
                                <a href=""><Link to="/bookinghistory">Booking History</Link></a>
                                </button>
                        </div>
                    </div>

                    {/* <div class="social_media">
                        <ul>
                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                    </ul>
                </div> */}
                </div>
            </div>
        </div>
        );
    }
}

export default UserDetails;
