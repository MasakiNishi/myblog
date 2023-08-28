import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { connect } from "react-redux";

import { setFontSizeIncrease } from "../../state/store";

const styles = theme => ({
  content: {
    color: theme.main.colors.content,
    fontSize: props => `calc(${theme.main.fonts.content.size}em * ${props.fontSizeIncrease})`,
    lineHeight: theme.main.fonts.content.lineHeight,
    "& a": {
      color: theme.base.colors.link
    },
    "& .gatsby-highlight": {
      margin: "2em 0"
    },
    "& .gatsby-resp-iframe-wrapper": {
      margin: "2em 0"
    },
    "& code:not(pre)": {
      textShadow: "none",
      padding: ".1em .3em .2em",
      borderRadius: ".1em"
    },
    "& .language-text": {
      background: "#eee",
      color: "#333"
    },
    "& .gatsby-resp-image-link": {
      margin: "2em -1rem",
      border: "none",
      display: "block",
      [`@media (min-width: 426px)`]: {
        margin: "2em -1.5rem",
      },
      [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
        margin: "2.5em -3.5rem"
      }
    },
    "& .box": {
      padding: "2em 1em",
      border: "3px double #ddd",
      marginBottom: "1.5em",
      [`@media (max-width: ${theme.mediaQueryTresholds.M}px)`]: {
        padding: "1.5em 1em"
      },
      "& p": {
          margin: "0 0 1.5em 0",
        "&:last-child": {
          margin: "0 0 0 0"
        }
      },
      "& ul": {
        margin: "0 0 0 0",
        "& li": {
          margin: "0 0 1em 0",
          "&:last-child": {
            margin: "0 0 0 0"
          }
        }
      }
    },
    "& h2, & h3": {
      color: theme.main.colors.contentHeading,
      fontWeight: theme.main.fonts.contentHeading.weight,
      lineHeight: theme.main.fonts.contentHeading.lineHeight,
      margin: "2em 0 1em",
      letterSpacing: "-0.02em"
    },
    "& h2": {
      fontSize: `${theme.main.fonts.contentHeading.h2Size}em`,
      [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
        fontSize: `${theme.main.fonts.contentHeading.h2SizeM}em`
      },
      [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
        fontSize: `${theme.main.fonts.contentHeading.h2SizeL}em`
      }
    },
    "& h3": {
      fontSize: `${theme.main.fonts.contentHeading.h3Size}em`,
      [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
        fontSize: `${theme.main.fonts.contentHeading.h3SizeM}em`
      },
      [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
        fontSize: `${theme.main.fonts.contentHeading.h3SizeL}em`
      }
    },
    "& p": {
      margin: "0 0 1.5em 0",
      fontWeight: 400
    },
    "& ul": {
      padding: "0 0 0 1.3em",
      [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
        padding: "0 0 0 2em"
      }
    },
    "& li": {
      margin: "0 0 .5em 0",
      "& p": {
        margin: "0 0 0 0"
      },
      "&:last-child": {
        margin: "0 0 0 0"
      }
    },
    "& blockquote": {
      border: `5px solid ${theme.main.colors.blockquoteFrame}`,
      fontStyle: "italic",
      margin: "2.5em 0",
      padding: "1em 1.1em 1em 1.3em",
      position: "relative",
      "& li": {
        "& p": {
          margin: 0
        }
      },
      "& p": {
        margin: "0 0 1.5em 0",
        "&:last-child": {
          margin: 0
        }
      },
      "&::before, &::after": {
        background: theme.main.colors.background,
        content: `""`,
        height: "5px",
        left: "50%",
        marginLeft: "-47%",
        position: "absolute",
        top: "-5px",
        width: "94%"
      },
      "&::after": {
        top: "auto",
        bottom: "-5px"
      }
    },
    "& table": {
      width: "100%",
      height: "auto",
      textAlign: "center",
      border: "1px solid #dedede",
      margin: "0 0 1.5em 0",
      borderSpacing: "0",
      borderCollapse: "collapse",
      "& thead": {
        backgroundColor: "#f9fafb"
      },
      "& th, & td": {
        border: "1px solid #dedede"
      }
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      fontSize: `${theme.main.fonts.content.sizeM}em`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      fontSize: `${theme.main.fonts.content.sizeL}em`
    },
    "& .size-large, & .size-full": {
      width: '100%',
      height: '100%'
    },
    "& iframe": {
      width: '100%'
    }
  }
});

const Content = props => {
  const { classes, html, children } = props;

  if (html) {
    return <div className={classes.content} dangerouslySetInnerHTML={{ __html: html }} />;
  } else {
    return <div className={classes.content}>{children}</div>;
  }
};

Content.propTypes = {
  classes: PropTypes.object.isRequired,
  html: PropTypes.string,
  children: PropTypes.node,
  setFontSizeIncrease: PropTypes.func.isRequired,
  fontSizeIncrease: PropTypes.number.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    fontSizeIncrease: state.fontSizeIncrease
  };
};

const mapDispatchToProps = {
  setFontSizeIncrease
};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Content));
