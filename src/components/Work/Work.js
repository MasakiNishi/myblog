import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { forceCheck } from "react-lazyload";

import { setNavigatorPosition, setNavigatorShape } from "../../state/store";

import WorkList from "./WorkList";

const styles = theme => ({
  navigator: {
    transform: "translate3d(0, 0, 0)",
    willChange: "left, top, bottom, width",
    background: theme.navigator.colors.background,
    position: "absolute",
    top: 0,
    left: `${theme.info.sizes.width}px`,
    height: "100vh",
    transitionTimingFunction: "ease",
    transition: "left .9s",
    animationName: "main-entry",
    animationDuration: ".5s",
    width: `calc(100vw - ${theme.info.sizes.width}px - ${theme.bars.sizes.actionsBar}px)`,
    [`@media (max-width: ${theme.mediaQueryTresholds.L - 1}px)`]: {
      "&.is-aside": {
        left: "-100%"
      },
      "&.is-featured": {
        left: 0
      }
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      "&.is-featured": {
        transition: "left .9s",
        width: `calc(100vw - ${theme.info.sizes.width}px - ${theme.bars.sizes.actionsBar}px)`,
        left: `${theme.info.sizes.width}px`,
        top: 0
      },
      "&.is-aside": {
        transition: "none, bottom 0.5s",
        left: 0,
        width: `${theme.info.sizes.width - 1}px`,
        zIndex: 1,
        top: "auto",
        "&.closed": {
          bottom: `calc(-100% + 100px + ${theme.navigator.sizes.closedHeight}px)`,
          height: `calc(100% - 100px)`
        },
        "&.open": {
          bottom: 0,
          height: `calc(100% - 100px)`
        },
        "&::after": {
          content: `""`,
          position: "absolute",
          top: 0,
          left: theme.base.sizes.linesMargin,
          right: theme.base.sizes.linesMargin,
          height: 0,
          borderTop: `1px solid ${theme.base.colors.lines}`
        }
      },
      "&.moving-aside": {
        transition: "left 0.9s",
        left: `calc(-100vw + ${2 * theme.info.sizes.width + 60}px)`,
        width: `calc(100vw - ${theme.info.sizes.width}px - 60px)`,
        top: 0
      },
      "&.resizing-aside": {
        transition: "none",
        width: `${theme.info.sizes.width - 1}px`,
        top: "auto",
        left: 0,
        "&.closed": {
          bottom: `calc(-100% + 100px)`,
          height: `calc(100% - 100px)`
        },
        "&.open": {
          bottom: `calc(-100% + 100px)`,
          height: `calc(100% - 100px)`
        }
      },
      "&.moving-featured": {
        transition: "bottom .3s",

        bottom: "-100%",
        top: "auto",
        left: 0,
        zIndex: 1,
        width: `${theme.info.sizes.width - 1}px`
      },
      "&.resizing-featured": {
        transition: "none",
        top: 0,
        bottom: "auto",
        left: `calc(-100vw + ${2 * theme.info.sizes.width + 60}px)`,
        width: `calc(100vw - ${theme.info.sizes.width}px - 60px)`
      }
    }
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

class Work extends React.Component {

  render() {
    const { classes, wppages, navigatorPosition, navigatorShape, locaiton } = this.props;

    return (
    　<nav>
        {this.props.wppages.length && (
          <WorkList
            wppages={wppages}
            location={this.props.location}
          />
        )}
      </nav>
    );
  }
}

Work.propTypes = {
  wppages: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  navigatorPosition: PropTypes.string.isRequired,
  navigatorShape: PropTypes.string.isRequired,
  setNavigatorPosition: PropTypes.func.isRequired,
  setNavigatorShape: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    navigatorPosition: state.navigatorPosition,
    navigatorShape: state.navigatorShape
  };
};

const mapDispatchToProps = {
  setNavigatorPosition,
  setNavigatorShape
};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Work));
