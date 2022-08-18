import React from "react";
// import "../../assets/index.css";
// import "../../assets/responsive.css";
import source from "./post.json";
import Card from "../Card";

function Post() {
  const cards = source.map(data => {
    return (
      <Card
        key={data.id}
        {...data}
      />
  );
    
  })
  return (
    <div className="work-container">
      {cards}
    </div>
  )
  
}

export default Post;