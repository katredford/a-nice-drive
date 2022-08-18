import React from "react";

export default function Card(props) {
  return (
    <section className="work-container">
      <h3>{props.title}</h3> <p>{props.date}</p>
      <img src={props.img[0]} alt=''  style={{"height" : "200px", "width" : "200px"}}/>
      <p>{props.post_text}</p>
      <img src={props.img[1]} alt=''  style={{"height" : "200px", "width" : "200px"}}/>

    </section>
  );
}
