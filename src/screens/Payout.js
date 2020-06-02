import React from "react";

import "./Payout.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Payout extends React.Component 
{
    render()
    {
        return (
            <>
            <Header />
            <div id="payment">
            <div className="heading">
            <h2>Payment Details</h2>
            </div>
            <div class="row">
            <div class="col-75">
                <div class="container">
                    <div class="row">
                    <div class="col-50">
                        <h3>Billing Details</h3>
                        <label className="pay-label" for="fname"><i class="fa fa-user"></i> Full Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Esha Vats" />
                        <label className="pay-label" for="email"><i class="fa fa-envelope"></i> Email</label>
                        <input type="text" id="email" name="email" placeholder="esha@example.com" />
                        <label className="pay-label" for="pho"><i class="fa fa-address-card-o"></i> Phone Number</label>
                        <input type="text" id="pho" name="phone" placeholder="9876543210" />
                        <label className="pay-label" for="city"><i class="fa fa-institution"></i> City</label>
                        <input type="text" id="city" name="city" placeholder="Mumbai" />

                        <div class="row">
                        <div class="col-50">
                            <label className="pay-label" for="state">State</label>
                            <input type="text" id="state" name="state" placeholder="Maharashtra" />
                        </div>
                        <div class="col-50">
                            <label className="pay-label" for="zip">Zip</label>
                            <input type="text" id="zip" name="zip" placeholder="400094" />
                        </div>
                        </div>
                    </div>

                    <div class="col-50">
                        <h3>Payment</h3>
                        <label className="pay-label" for="fname">Accepted Cards</label>
                        <div class="icon-container">
                        <i class="fa fa-cc-visa" style={{color:"navy"}}></i>
                        <i class="fa fa-cc-amex" style={{color:"blue"}}></i>
                        <i class="fa fa-cc-mastercard" style={{color:"red"}}></i>
                        <i class="fa fa-cc-discover" style={{color:"orange"}}></i>
                        </div>
                        <label className="pay-label" for="cname">Name on Card</label>
                        <input type="text" id="cname" name="cardname" placeholder="John More Doe" />
                        <label className="pay-label" for="ccnum">Credit card number</label>
                        <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                        <label className="pay-label" for="expmonth">Exp Month</label>
                        <input type="text" id="expmonth" name="expmonth" placeholder="September" />
                        <div class="row">
                        <div class="col-50">
                            <label className="pay-label" for="expyear">Exp Year</label>
                            <input type="text" id="expyear" name="expyear" placeholder="2022" />
                        </div>
                        <div class="col-50">
                            <label className="pay-label" for="cvv">CVV</label>
                            <input type="text" id="cvv" name="cvv" placeholder="352" />
                        </div>
                        </div>
                    </div>

                    </div>
                    {/* <label className="pay-label">
                    <input type="checkbox" checked="" name="sameadr" required/> Confirm Details
                    </label> */}
                    <input type="submit" value="Continue to checkout" class="btn-pay" />

                </div>
            </div>
            {/* <div class="col-25">
                <div class="container">
                <h4>Cart <span class="price" style={{color:"black"}}><i class="fa fa-shopping-cart"></i> <b>4</b></span></h4>
                <p><a href="#">Product 1</a> <span class="price">$15</span></p>
                <p><a href="#">Product 2</a> <span class="price">$5</span></p>
                <p><a href="#">Product 3</a> <span class="price">$8</span></p>
                <p><a href="#">Product 4</a> <span class="price">$2</span></p>
                <hr />
                <p>Total <span class="price" style={{color: "black"}}><b>$30</b></span></p>
                </div>
            </div> */}
            </div>
            </div>
            <Footer />
            </>
        );
    }
}

export default Payout;