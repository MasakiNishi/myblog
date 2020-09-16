import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

const styles = theme => ({
  article: {
    background: theme.main.colors.background,
    maxWidth:  "50em",
    margin: "0 auto",
    padding: `2.5rem 1rem`,
    "& strong, & b": {
      letterSpacing: "-.02em"
    },
    "& a": {
      fontWeight: "normal",
      letterSpacing: "-.02em",
      textDecoration: "underline",
      transition: "0.3s",
      "&:hover": {
        color: theme.base.colors.linkHover
      }
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      padding: `3.5rem`
    }
  }
});

const Article = props => {
  const { children, classes } = props;

  return <article className={classes.article}>{children}</article>;
};

Article.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default injectSheet(styles)(Article);
