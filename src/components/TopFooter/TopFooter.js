import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Link from "gatsby-link";

import SocialIcons from "./SocialIcons";

const styles = theme => ({
  footer: {
    position: "fixed",
    background: theme.bars.colors.background,
    bottom: 0,
    left: 0,
    width: "100%",
    height: `${theme.bars.sizes.infoBar}px`,
    zIndex: 2,
    "&::before": {
      content: `""`,
      position: "absolute",
      left: theme.base.sizes.linesMargin,
      right: theme.base.sizes.linesMargin,
      height: 0,
      top: 0,
      borderTop: `1px solid ${theme.base.colors.lines}`,
      [`@media (max-width: ${theme.mediaQueryTresholds.M}px)`]: {
        left: ".8rem",
        right: ".8rem"
      }
    },
    "& .copyright": {
      float: "left",
      color: "#555555",
      margin: "20px 0 0 30px",
      fontSize: "0.9em",
      fontWeight: 300,
      lineHeight: 1.6,
      zIndex: 3,
      [`@media (max-width: ${theme.mediaQueryTresholds.M}px)`]: {
        margin: "20px 0 0 20px",
        fontSize: "0.8em",
      }
    }
  }
});

const TopFooter = props => {
  const { classes } = props;

  return (
      <footer className={classes.footer}>
        <Link className="copyright" to="/"　title="トップへ">
          © 2018 MasakiNishi.com
        </Link>
        <SocialIcons />
      </footer>
    );
};

TopFooter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(TopFooter);