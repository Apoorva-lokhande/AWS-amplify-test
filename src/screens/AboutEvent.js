import React from "react";

import "./AboutEvent.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

class AboutEvent extends React.Component 
{
    login = (
        <span class="navbar-text">
        <button  
        class="btn btn-outline-danger btn-block button" >
        <a href="">Login</a>
        </button>
        </span>
    );

    render()
    {

        const timer = () => {
            // Set the date we're counting down to
            var countDownDate = new Date("July 5, 2020 15:37:25").getTime();

            // Update the count down every 1 second
            var x = setInterval(function() {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("timer").innerHTML = "EXPIRED";
            }
            else 
            {
                // Display the result in the element with id="demo"
                document.getElementById("days").innerHTML = days + "d ";
                document.getElementById("hours").innerHTML = hours + "h ";
                document.getElementById("minutes").innerHTML = minutes + "m ";
                document.getElementById("seconds").innerHTML = seconds + "s ";
            }
            }, 1000)
        }

        timer();

        return (
            <>
                <Header rightElement={this.login} />
                <div id="about-main">
                <div className="about-event">
                    <div className="about-heading">
                    <img className="event-logo" src="./images/event-logo.jpg" alt="logo-img" /><br />
                    <h1 className="head">Registration Closes in</h1><br />
                    <h2 id="timer">
                        <p id="days"></p>
                        <p id="hours"></p>
                        <p id="minutes"></p>
                        <p id="seconds"></p>
                    </h2><br />
                    <h1 className="join">Join Now</h1>
                    </div>
                </div>

                <div className="main-content">
                    <div className="content">
                    
                    <div class="btn-group" id="button_" role="group" aria-label="Basic example">
                    <button class="btn btn-secondary about-button register-now-btn" type="button" data-toggle="collapse" data-target="#multiCollapseExample1" aria-expanded="false" aria-controls="multiCollapseExample1">Register Now</button>
                    <button class="btn btn-secondary about-button" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Description</button>
                    <button class="btn btn-secondary about-button" type="button" data-toggle="collapse" data-target="#multiCollapseExample3" aria-expanded="false" aria-controls="multiCollapseExample3">Rules</button>
                    <button class="btn btn-secondary about-button" type="button" data-toggle="collapse" data-target="#multiCollapseExample4" aria-expanded="false" aria-controls="multiCollapseExample4">Schedule</button>
                    <button class="btn btn-secondary about-button" type="button" data-toggle="collapse" data-target="#multiCollapseExample5" aria-expanded="false" aria-controls="multiCollapseExample5">Teams</button>
                    {/* <button class="btn btn-secondary about-button" type="button" data-toggle="collapse" data-target="#multiCollapseExample6" aria-expanded="false" aria-controls="multiCollapseExample6">Watch Now</button> */}
                    </div>
                    <div class="row">
                    <div class="col">
                        <div class="collapse" id="multiCollapseExample1">
                        <div class="card card-body card-collapse">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                        </div>
                        <div class="collapse" id="multiCollapseExample2">
                        <div class="card card-body card-collapse">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                        </div>
                        <div class="collapse" id="multiCollapseExample3">
                        <div class="card card-body card-collapse">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                        </div>
                        <div class="collapse" id="multiCollapseExample4">
                        <div class="card card-body card-collapse">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                        </div>
                        <div class="collapse" id="multiCollapseExample5">
                        <div class="card card-body card-collapse">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                        </div>
                        {/* <div class="collapse" id="multiCollapseExample6">
                        <div class="card card-body card-collapse">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                        </div> */}
                    </div>
                    {/* <div class="col">
                        
                    </div>
                    </div> */}


                    <div className="about-content">
                        <div className="row">
                            <div className="column">
                            <lable id="aboutname">About</lable>
                            <h2 className="about-heading2">Know more about the event</h2>
                            <p className="about-para">A waking call for all the R6S lovers out there for the upcoming serious of gaming tournament.Since r6s is one of the top online gamers on the table we are hosting Our first Rainbow 6 Seige tournament on_____.A perfect platform for showcasing your team's gravity in the gaming realm.______________________.For more details about the gameplay check the rule and instruction attached.Also feel free to contact us for any queries.
                            Be ready,sit tight and bring up your art of gaming to the world</p>
                            </div>
                            <div className="column">
                                <div className="right">
                                <h2 className="register-heading">Registration Open</h2>
                                <p className="seats">232/250</p>
                                <button  
                                id="registerto" >
                               Register to the tournament
                                </button> 
                                </div>                       
                            </div>
                        </div>

                        <div className="prize pool">
                        <lable  id="prizepoolname">Prize Pool</lable>
                        <h2 className="about-heading2 shift">How much will you win?</h2>

                            <div class="row2">
                                <div class="column2">
                                    <div class="card mb-3 about-card" >
                                    <div class="card-header ch">Header</div>
                                    <div class="card-body text-danger">
                                        <h5 class="card-title cti">Danger card title</h5>
                                        <p class="card-text ct">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    </div>
                                </div>
                                <div class="column2">
                                    <div class="card mb-3 about-card" >
                                    <div class="card-header ch">Header</div>
                                    <div class="card-body text-danger">
                                        <h5 class="card-title cti">Danger card title</h5>
                                        <p class="card-text ct">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    </div>
                                </div>
                                <div class="column2">
                                    <div class="card mb-3 about-card" >
                                    <div class="card-header ch">Header</div>
                                    <div class="card-body text-danger">
                                        <h5 class="card-title cti">Danger card title</h5>
                                        <p class="card-text ct">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="startTime">
                            <h1 className="head shift">Event Start Time</h1>
                            <h2 className="about-heading2 shift">Time to take out the consoles!</h2>
                            <div className="eventTime">
                            <h2 class="time">July 5, 2020 15:37:25</h2>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                {/* <Footer /> */}
            </>
        );
    }
}

export default AboutEvent;