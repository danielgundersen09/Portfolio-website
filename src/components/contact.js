import React from "react";
import { Grid, Cell } from "react-mdl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'


export default function Contact() {
  

  return (
    <div className="contact-grid" style={{ width:"90%", margin: 'auto', textAlign:"center"}}>
    <Grid>
      <Cell col={12}>
          <h1 >
            Contact me
          </h1>
        </Cell>

      <Cell col={4}  tablet={12} phone={12}  className="contact-cell">
      <h2><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></h2>
        <h4>daniel-gundersen@hotmail.com</h4>
      </Cell>

      <Cell col={4} tablet={12} phone={12}  className="contact-cell">
      <h2><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></h2>
      
        <h4>+47 90916996</h4>
      </Cell>

      <Cell col={4} tablet={12} phone={12} className="contact-cell">
      <h2><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></h2>
        <h4>linkedin.com/danielgundersen</h4>
      </Cell>




    </Grid>
    </div>
  );
}
