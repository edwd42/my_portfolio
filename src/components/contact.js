import React, { Component } from "react";
import { Cell, Grid, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Edward Dupre</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Hi, my name is Edward Dupre. I am a software developer and have
              been studying computer science at CareerDevs Computer Science
              University in Providence, RI. Please visit the links at right to
              learn more about me.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent className="list-item-content">
                    <i className="fa fa-phone" aria-hidden="true" />
                    (401) 497-6933
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent className="list-item-content">
                    <i className="fa fa-envelope-open-o" aria-hidden="true" />

                    <a href="mailto:edward.dupre@edwd42.com">
                      edward.dupre@edwd42.com
                    </a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent className="list-item-content">
                    <i className="fa fa-twitter" aria-hidden="true" />
                    <a
                      href="https://twitter.com/edwd42"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter: @edwd42
                    </a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent className="list-item-content">
                    <i className="fa fa-github" aria-hidden="true" />
                    <a
                      href="https://github.com/edwd42"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://github.com/edwd42
                    </a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent className="list-item-content">
                    <i className="fa fa-linkedin" aria-hidden="true" />
                    <a
                      href="www.linkedin.com/edwd42"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.linkedin.com/edwd42
                    </a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent className="list-item-content">
                    <i className="fa fa-globe" aria-hidden="true" />
                    <a
                      href="https://edwd42.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Web: https://edwd42.com
                    </a>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
