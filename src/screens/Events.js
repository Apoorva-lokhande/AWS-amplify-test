import React from "react";

import "./Events.css";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { Link, Redirect } from "react-router-dom"
const Events = () => {

    const account = (
        <ul class="nav navbar-nav navbar-right">
        <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#"><i class="fas fa-user"></i> Hello, Esha<span class="caret"></span></a>
        <ul class="dropdown-menu">
            <li><a href="#"><Link to="/profile">Account Info</Link></a></li>
            <li><a href="#"><Link to="/bookinghistory">History</Link></a></li>
            <li><a href="#"><i class="fas fa-sign-out-alt"></i><Link to="/login"> LogOut</Link></a></li>
        </ul>
        </li>
    </ul>
  );

    return (
        <>
        <div id="events-div">
            <Header
            rightElement={account}
            leftElement= "TOURNAMENTS"
            />
            {/* <marquee behavior="scroll" direction="left" scrollamount="15">
                <img className="marquee-img" src="images/pubg3.jpg" alt="Natural" />
                <img className="marquee-img" src="images/gff.jpg" alt="Natural" />
                <img className="marquee-img" src="images/coc.jpg" alt="Natural" />
                <img className="marquee-img" src="images/cod.jpg" alt="Natural" />
                <img className="marquee-img" src="images/gta.jpg" alt="Natural" />
                <img className="marquee-img" src="images/fifa.jpg" alt="Natural" />
            </marquee> */}

            <div className="carousel slide events-carousel" id="carouselExampleIndicators" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img class="d-block w-100" src="images/gff.jpg" alt="First slide" />
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="images/fifa.jpg" alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="images/coc.jpg" alt="Third slide" />
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="images/cod.jpg" alt="Fourth slide" />
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="images/gta.jpg" alt="Fifth slide" />
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="images/pubg3.jpg" alt="Sixth slide" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                </div>

            <div class="form-row event-row">
                <div class="col">
                <p className="search-label">EVENT SEARCH: </p>
                </div>
                <div class="col">
                <select class="custom-select" id="nameSelect">
                    <option selected>Name</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                </div>
                <div class="col">
                <select class="custom-select" id="gameSelect">
                    <option selected>Game</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                </div>
                <div class="col">
                <select class="custom-select" id="typeSelect">
                    <option selected>Type</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                </div>
                <div class="col">
                <select class="custom-select" id="modeSelect">
                    <option selected>Mode</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                </div>
                <div class="col">
                <button
                class="btn btn-outline-danger search" >
                Search
                </button>
                </div>
            </div>

            <h1 className="events-heading"><span className="heading-white">DAILY</span> TOURNAMENTS</h1>
            <hr className="rule heading-white" />
            <p className="tour-para">Join, play and win. Happy gaming!</p>
            <div className="events-container" style={{ marginBottom: "5%" }}>
                <Card
                    imageSrc="images/event6.jpg"
                    title="Arctic Game Week"
                    text="Mumbai, India"
                    smallText="12/05/2020"
                    button="Book Now"
                />

                <Card
                    imageSrc="images/event5.jpg"
                    title="Game Conference"
                    text="Delhi, India"
                    smallText="22/05/2020"
                    button="Book Now"
                />

                <Card
                    imageSrc="images/event1.jpeg"
                    title="Dreamhack"
                    text="Pune, India"
                    smallText="1/07/2020"
                    button="Book Now"
                />

                <Card
                    imageSrc="images/event4.jpg"
                    title="Arctic Game Week"
                    text="Mumbai, India"
                    smallText="12/05/2020"
                    button="Book Now"
                />

                <Card
                    imageSrc="images/event2.jpg"
                    title="Arctic Game Week"
                    text="Mumbai, India"
                    smallText="12/05/2020"
                    button="Book Now"
                />

                <Card
                    imageSrc="images/event7.jpg"
                    title="Arctic Game Week"
                    text="Mumbai, India"
                    smallText="12/05/2020"
                    button="Book Now"
                />
            </div>
            <h1 className="events-heading "><span className="heading-white">EVENTS</span> RECOMMENDED FOR YOU</h1>
            <div className="events-container events-margin-btm">
                <Card
                    imageSrc="images/event6.jpg"
                    title="Arctic Game Week"
                    text="Mumbai, India"
                    smallText="12/05/2020"
                    button="Book Now"
                />

                <Card
                    imageSrc="images/event5.jpg"
                    title="Arctic Game Week"
                    text="Mumbai, India"
                    smallText="12/05/2020"
                    button="Book Now"
                />

                <Card
                    imageSrc="images/event1.jpeg"
                    title="Arctic Game Week"
                    text="Mumbai, India"
                    smallText="12/05/2020"
                    button="Book Now"
                />

                <Card
                    imageSrc="images/event4.jpg"
                    title="Arctic Game Week"
                    text="Mumbai, India"
                    smallText="12/05/2020"
                    button="Book Now"
                />

                <Card
                    imageSrc="images/event2.jpg"
                    title="Arctic Game Week"
                    text="Mumbai, India"
                    smallText="12/05/2020"
                    button="Book Now"
                />

                <Card
                    imageSrc="images/event7.jpg"
                    title="Arctic Game Week"
                    text="Mumbai, India"
                    smallText="12/05/2020"
                    button="Book Now"
                />
            </div>
        </div>
        </>
    );
};

export default Events;
