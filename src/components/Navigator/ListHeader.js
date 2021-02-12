import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import IconButton from "material-ui/IconButton";

import CloseIcon from "material-ui-icons/Close";
import ExpandLessIcon from "material-ui-icons/ExpandLess";

import config from "../../../content/meta/config";

const styles = theme => ({
  closed: {
    display: "none",
    ".is-aside.closed &, .moving-featured.closed &": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      margin: 0,
      height: `${theme.navigator.sizes.closedHeight}px`,
      padding: "0 30px 0 40px"
    },
    "& span": {
      fontSize: "1.1em",
      color: theme.navigator.colors.postsHeader,
      fontWeight: 600,
      margin: "-.2em 0 0 0",
      textTransform: "uppercase",
      "& small": {
        fontSize: ".6em",
        display: "block",
        margin: "0 0 .1em",
        fontWeight: 300,
        letterSpacing: ".2em"
      }
    }
  },
  expand: {
    color: theme.navigator.colors.postsHeader
  },
  filter: {
    position: "fixed",
    top: 0,
    zIndex: "1",
    width: "100%",
    fontSize: "1.2em",
    lineHeight: 1,
    color: theme.base.colors.accent,
    background: "#fff",
    padding: "0 1em 1em",
    fontWeight: 300,
    "& strong": {
      fontWeight: 600,
      display: "block"
    },
    "&::before": {
      content: `""`,
      position: "absolute",
      left: "32px",
      right: "32px",
      height: 0,
      bottom: 0,
      borderTop: `1px solid ${theme.base.colors.lines}`,
      ".is-aside &": {
        display: "none"
      }
    },
    "& small": {
      display: "block",
      margin: "0 0 .3em 0"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      margin: "0 0 1em 0",
      padding: "2rem 3.2rem 1.5em",
      ".is-aside &": {
        width: "87.5%",
        borderTop: `1px solid ${theme.base.colors.lines}`,
        borderBottom: `1px solid ${theme.base.colors.lines}`,
        padding: "1em 0 1em .5em",
        margin: `0 calc(-.5rem + ${theme.base.sizes.linesMargin}) 0 calc(-.5rem + ${
          theme.base.sizes.linesMargin
        })`
      }
    }
  },
  clear: {
    position: "absolute",
    top: 0,
    right: 0,
    ".is-aside &": {
      top: "20%",
      right: 0,
    },
    [`@media (max-width: 1023px)`]: {
      top: "20%",
      right: "32px",
      [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
        top: "40%",
        right: "44px"
      }
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      top: "33%",
      right: "5%"
    }
  },
  filterHome: {
    margin: `0 calc(-.5rem + ${theme.base.sizes.linesMargin}) 1em calc(-.5rem + ${
      theme.base.sizes.linesMargin
    })`,
    position: "fixed",
    transform: "translate3d(0, 0, 0)",
    top: "60px",
    left: 0,
    zIndex: "1",
    width: "100%",
    background: "#fff",
    color: theme.base.colors.accent,
    margin: 0,
    padding: "1em 0",
    borderBottom: "none",
    fontSize: "1.2em",
    lineHeight: 1,
    fontWeight: 300,
    "&::before": {
      content: `""`,
      position: "absolute",
      left: "15px",
      right: "15px",
      height: 0,
      bottom: 0,
      borderTop: `1px solid ${theme.base.colors.lines}`,
    },
    "& strong": {
      fontSize: "16px",
      fontWeight: 600,
      display: "block",
      margin: "0 0 0 1.5em"
    },
    "& small": {
      display: "block",
      margin: "0 0 .3em 1.5em"
    },
    [`@media (min-width: 426px)`]: {
      "&::before": {
        left: "32px",
        right: "32px"
      },
      "& strong": {
        marginLeft: "2.35em",
      },
      "& small": {
        margin: "0 0 .3em 2.5em"
      }
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      padding: "1em 0 1em",
      "&::before": {
        left: "44px",
        right: "44px"
      },
      "& strong": {
        marginLeft: "3.3em",
        fontSize: "1em"
      },
      "& small": {
        margin: "0 0 .3em 4.2em"
      },
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      top: 0,
      margin: "0 0 1em 0",
      padding: "2rem 3.2rem 1.5em",
      "&::before": {
        left: "32px",
        right: "32px"
      },
      "& small": {
        margin: "0 0 .3em 0"
      },
      "& strong": {
        margin: 0
      }
    }
  },
  clearHome: {
    position: "absolute",
    top: "20%",
    right: "15px",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      right: "44px"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      top: "33%",
      right: "5%"
    }
  }
});

const ListHeader = props => {
  const { classes, expandOnClick, categoryFilter, navigatorShape, navigatorPosition, removeFilter } = props;

  return (
    <header>
      {navigatorShape === "closed" && (
        <div className={classes.closed}>
          <span>ブログ記事</span>
          <IconButton
            aria-label="Expand the list"
            className={classes.expand}
            onClick={expandOnClick}
            title="ブログ記事をひらく"
          >
            <ExpandLessIcon />
          </IconButton>
        </div>
      )}
      {navigatorPosition === "is-featured" &&
        navigatorShape === "open" &&
          categoryFilter !== "すべての記事" && (
            <div className={classes.filterHome}>
              <small>カテゴリー：</small> <strong>{categoryFilter} の記事</strong>
              <IconButton
                aria-label="Remove filtering"
                className={classes.clearHome}
                onClick={removeFilter}
                title="記事カテゴリーを閉じる"
              >
                <CloseIcon />
              </IconButton>
            </div>
          )
      }
      {navigatorPosition === "is-aside" &&
        navigatorShape === "open" &&
          categoryFilter !== "すべての記事" && (
            <div className={classes.filter}>
              <small>カテゴリー：</small> <strong>{categoryFilter} の記事</strong>
              <IconButton
                aria-label="Remove filtering"
                className={classes.clear}
                onClick={removeFilter}
                title="記事カテゴリーを閉じる"
              >
                <CloseIcon />
              </IconButton>
            </div>
          )
      }
    </header>
  );
};

ListHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  expandOnClick: PropTypes.func.isRequired,
  categoryFilter: PropTypes.string.isRequired,
  navigatorShape: PropTypes.string.isRequired,
  navigatorPosition: PropTypes.string.isRequired,
  removeFilter: PropTypes.func.isRequired
};

export default injectSheet(styles)(ListHeader);
