import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

const styles = theme => ({
  main: {
    position: "absolute",
    top: 60,
    left: 0,
    right: 0,
    margin: "0 auto 60px",
    width: "100%",
    maxWidth: "1024px",
    animationName: "main-entry",
    animationDuration: ".5s",
    zIndex: "1"
  },
  "@keyframes main-entry": {
    "0%": {
      opacity: 0,
      transform: "translateY(20px)"
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)"
    }
  }
});

const Main = props => {
  const { classes, children } = props;

  return (
    <main className={classes.main}>
      {children}
    </main>
  );
};

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired
};

export default injectSheet(styles)(Main);
