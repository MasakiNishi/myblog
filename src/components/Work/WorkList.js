import React from "react";
import { withPrefix } from "gatsby-link";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { forceCheck } from "react-lazyload";

import SpringScrollbars from "../SpringScrollbars";
import WorkListItem from "./WorkListItem";

import config from "../../../content/meta/config";

const styles = theme => ({
  postsList: {
    transform: "translate3d(0, 0, 0)",
    willChange: "left, top, bottom, width",
    background: theme.navigator.colors.background,
    position: "absolute",
    top: 0,
    left: 0,
    height: "100vh",
    transitionTimingFunction: "ease",
    transition: "left .9s",
    animationName: "main-entry",
    animationDuration: ".5s",
    width: "100%",
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      width: `calc(100vw - ${theme.info.sizes.width}px - ${theme.bars.sizes.actionsBar}px)`,
      left: `${theme.info.sizes.width}px`
    }
  },
  inner: {
    padding: `calc(${theme.bars.sizes.infoBar}px + 1.3rem) 1.3rem calc(${
      theme.bars.sizes.actionsBar
    }px + 1.3rem) 1.3rem`,
    [`@media (max-width: 425px)`]: {
      padding: `calc(${theme.bars.sizes.infoBar}px + 1.3rem) 0 calc(${
      theme.bars.sizes.actionsBar
    }px + 1.3rem) 0`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      padding: `calc(${theme.bars.sizes.infoBar}px + 2rem) 2rem calc(${
        theme.bars.sizes.actionsBar
      }px + 2rem) 2rem`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      padding: 0,
      left: `${theme.info.sizes.width}px`,
      ".moving-featured &, .is-aside &": {
        padding: "1rem .5rem 1rem .5rem"
      }
    }
  },
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      padding: "3.5rem calc(1rem + 17px) calc(2rem + 17px) 2rem"
    },
    ".is-aside.closed &, .moving-featured.closed &": {
      display: "none"
    },
    ".is-aside.open &, .moving-featured.open &": {
      padding: 0
    }
  },
  Homelist: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    ".is-aside.closed &, .moving-featured.closed &": {
      display: "none"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      padding: "2rem calc(1rem + 17px) calc(2rem + 17px) 2rem"
    },
    "&.true": {
      [`@media (max-width: 1023px)`]: {
        paddingTop: "6rem"
      },
      [`@media (max-width: ${theme.mediaQueryTresholds.M}px)`]: {
        paddingTop: "5rem"
      },
      [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
        padding: "8.5rem calc(1rem + 17px) calc(2rem + 17px) 2rem"
      }
    }
  },
});

class WorkList extends React.Component {
  state = {
      hidden: false
    };

  render() {
    const {
      classes,
      wppages
    } = this.props;

    const isHome = location.pathname === withPrefix("/work") || location.pathname === withPrefix("/work/");

      return (
        <div className={classes.postsList}>
          <SpringScrollbars forceCheckOnScroll={true} isNavigator={true}>
            <div className={classes.inner}>
                  <ul
                    className={ isHome && `${classes.Homelist} ${this.state.hidden ? this.state.hidden : ""}` || `${classes.list}` }
                    style={ isHome && { marginTop:0 } || { marginTop:`${this.state.hidden ? "5rem" : 0 }` } }
                  >
                    {wppages && wppages.map((wppage, i) => ( <WorkListItem key={i} wppages={wppage}  />))}
                  </ul>
            </div>
          </SpringScrollbars>
        </div>
      );
  }
}

WorkList.propTypes = {
  classes: PropTypes.object.isRequired,
  wppages: PropTypes.array.isRequired
};

export default injectSheet(styles)(WorkList);
