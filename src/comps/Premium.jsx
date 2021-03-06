import React from "react";
import '../assets/premium.scss';
import { FaFistRaised } from 'react-icons/fa'

function Premium() {
    return (
      <div className="wrapper">
          <div className="basic">
            <Card
            title="Rookie Package"
            price="Free"
            description="Only 10 swips per day!"
            />
        </div>
        <div className="street">
        <Card
          title="Street Warrior"
          price="20$ per month"
          description="Unlimited swipes! More users will be able to see your events"
        />
        </div>
  
      <div className="champion">
        <Card
          title="Champion Package"
          price="50$ per month"
          description="Unlimited swipes! Your events always show on the top of the list. We will pay your bond if the police catches you!"
        />
        </div>
      </div>
    );
  }
  
  function Card(props) {
    return (
      <div className="card">
        <div className="card__body">
        <h2 className="card__title">{props.title}</h2>
          <div className="title-price">
          <FaFistRaised className="premium-icon"/>
          <h6 className="price">{props.price}</h6>
          </div>
          <p className="card__description">{props.description}</p>
        </div>
        <button className="card__btn">Continue</button>
      </div>
    );
  }

  export default Premium