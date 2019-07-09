import React from "react";

const About = props => {
  return (
    <div>
      <h1 className="display-4">About page</h1>
      <p>Eita {props.match.params.id}</p>
    </div>
  );
};

export default About;
