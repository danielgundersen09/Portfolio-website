import React, { Component } from "react";
import {
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button
} from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div className="landing-grid">
        <Grid >
          <Cell col={12}>
            <div className="banner-text">
              <h1>My projects</h1>
            </div>
          </Cell>

          {/* Project 1 */}
          <Card className="cards grow" shadow={5}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(/images/boardgame-portfolio.png) center / cover"
              }}
            >
              Boardgame project
            </CardTitle>
            <CardText>
              Unfinished Game of thrones boardgame. 
            </CardText>
            <CardActions border>
              <Button
                colored
                href="https://github.com/danielgundersen09/semester-project-2"
                target="_blank"
              >
                GitHub
              </Button>
            </CardActions>
          </Card>

          {/* Project 2 */}
          <Card className="cards grow" shadow={5}> 
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "url(/images/spacex-portfolio.png) center / cover"
              }}
            >
              SpaceX project
            </CardTitle>
            <CardText>
              A SpaceX webpage i made first year in school.
            </CardText>
            <CardActions border>
              <Button
                colored
                href="https://github.com/danielgundersen09/Spacex-semester-project"
                target="_blank"
              >
                GitHub
              </Button>
            </CardActions>
          </Card>

          {/* Project 3 */}
          <Card className="cards grow" shadow={5}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "url(/images/kalkulator-preview.png) center / cover"
              }}
            >
              Calculator project
            </CardTitle>
            <CardText>
              A calculator i made in my spare time.
            </CardText>
            <CardActions border>
              <Button
                colored
                href="https://github.com/danielgundersen09/Kalkulator"
                target="_blank"
              >
                GitHub
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </div>
    );
  }
}

export default Landing;
