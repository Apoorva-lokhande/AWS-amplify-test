import React from "react";
import "./Card.css";
import {Link} from 'react-router-dom'
const Card = (props) => {

    return (
        <div class="card" id="main-card">
            <img class="card-img-top" src={props.imageSrc} alt="image-card-1" />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.text}</p>
                <a class="small-text">{props.smallText}</a> <br />
                <div className="buttons">
                <Link to="/pay">  <button  class="btn btn-danger  " id="bookme">Book Now</button></Link>
          
                </div>        
            </div>
        </div>
    );
};

export default Card;