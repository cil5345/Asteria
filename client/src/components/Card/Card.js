import React from "react";
import "./Card.css";

function Card(props) {
    return (
        <section className="card">

    <h4 className="card-title"><strong>{props.title}</strong></h4>
    
 

</section >
        );
    }
export default Card;