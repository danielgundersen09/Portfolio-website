import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class About extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell style={{ marginTop: "100px" }} className="aboutme-col" col={7}>
            <h1 style={{ borderBottom: "3px solid white" }}>About me</h1>
            <p>
            I'm a 24 year old man from Fredrikstad who has been doing front end coding for 3 years.
            I`m proficient in javascript html and CSS, with react as the preferred javascript framework.
            My colleagues describe me as someone who isn't afraid to take a challenge head on.
            I have a general studies background and a course in management. 
            On my spare time i like to hang out with friends and also play videogames. 
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
