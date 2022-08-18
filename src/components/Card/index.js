import React from "react";

export default function Card(props) {
  return (
    <section className="work-container">
      <h3>{props.title}</h3> <p>{props.date}</p>
      <img src={`../images/${props.img[0]}`} />
      <p>{props.post_text}</p>
      <img src={`url(${props.img[1]})`} />

    </section>
  );
}
