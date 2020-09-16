import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Link from "gatsby-link";

const styles = theme => ({
  works: {
    width: "100%",
    height: "100%",
    margin: "0 auto",
    "& h3": {
      color: "#333333",
      fontWeight: 600,
      fontSize: "1.5em",
      textAlign: "center",
      width: "150px",
      margin: "60px auto",
      padding: "15px 0 0",
      borderTop: `1px solid #555555`,
      [`@media (max-width: ${theme.mediaQueryTresholds.L - 1}px)`]: {
        padding: "10px 0 0",
        fontSize: "1.2em",
        fontWeight: 300,
        border: "none"
      }
    }
  }
});

const WorksList = props => {
  const { classes } = props;

  return (
      <section id="works" className={classes.works}>
        <h3>Works</h3>
          <ul>
            <li className="btrax">
              <Link className={classes.link} to="/btrax/"　title="btrax">

              </Link>
            </li>
            <li className="freshtrax">
              <Link className={classes.link} to="/freshtrax/"　title="freshtrax">

              </Link>
            </li>
          </ul>
      </section>
    );
};

WorksList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(WorksList);