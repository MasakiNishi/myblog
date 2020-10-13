import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import IconButton from "material-ui/IconButton";

import Link from "gatsby-link";
import { connect } from "react-redux";
import screenfull from "screenfull";

import HomeIcon from "material-ui-icons/Home";
import SearchIcon from "material-ui-icons/Search";
import ArrowUpwardIcon from "material-ui-icons/ArrowUpward";
import FullscreenIcon from "material-ui-icons/Fullscreen";
import FullscreenExitIcon from "material-ui-icons/FullscreenExit";

import {
  setNavigatorPosition,
  setNavigatorShape,
  setScrollToTop,
  setFontSizeIncrease
} from "../../state/store";
import { featureNavigator, moveNavigatorAside } from "./../../utils/shared";
import FontSetter from "../ActionsBar/FontSetter";

const styles = theme => ({
  actionsBar: {
    position: "absolute",
    background: theme.bars.colors.background,
    left: 0,
    //top: `calc(100vh - ${theme.bars.sizes.actionsBar}px)`,
    bottom: 0,
    display: "flex",
    flexDirection: "row",
    padding: `0 ${theme.base.sizes.linesMargin}`,
    justifyContent: "space-between",
    height: `${theme.bars.sizes.actionsBar}px`,
    width: "100%",
    "&::before": {
      content: `""`,
      position: "absolute",
      left: theme.base.sizes.linesMargin,
      right: theme.base.sizes.linesMargin,
      height: 0,
      top: 0,
      borderTop: `1px solid ${theme.base.colors.lines}`,
      [`@media (max-width: 425px)`]: {
        left: 0,
        right: 0
      }
    },
    [`@media (max-width: 425px)`]: {
      padding: "0 .8rem"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      padding: `0 calc(${theme.base.sizes.linesMargin} * 1.5)`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      flexDirection: "column",
      top: 0,
      right: 0,
      left: "auto",
      height: "100%",
      padding: `${theme.base.sizes.linesMargin} 0`,
      width: `${theme.bars.sizes.actionsBar}px`,
      "&::before": {
        top: theme.base.sizes.linesMargin,
        bottom: theme.base.sizes.linesMargin,
        left: 0,
        right: "auto",
        width: 0,
        height: "auto",
        borderLeft: `1px solid ${theme.base.colors.lines}`
      }
    }
  },
  group: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      flexDirection: "column"
    }
  },
  button: {
    color: theme.bars.colors.icon,
    "&.smartPhone": {
      [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
        display: "none",
      }
    },
    "&.deskTop": {
      [`@media (max-width: 1023px)`]: {
        display: "none"
      }
    }
  }
});

class ActionsBar extends React.Component {
  state = {
    fullscreen: false
  };

  componentDidMount() {
    if (screenfull.enabled) {
      screenfull.on("change", () => {
        this.setState({
          fullscreen: screenfull.isFullscreen
        });
      });
    }
  }

  homeOnClick = featureNavigator.bind(this);
  searchOnClick = moveNavigatorAside.bind(this);

  fullscreenOnClick = () => {
    if (screenfull.enabled) {
      screenfull.toggle();
    }
  };

  arrowUpOnClick = () => {
    this.props.setScrollToTop(true);
  };

  fontSetterOnClick = val => {
    this.props.setFontSizeIncrease(val);

    if (typeof localStorage !== "undefined") {
      localStorage.setItem("font-size-increase", val);
    }
  };

  render() {
    const { classes, navigatorPosition, navigatorShape, isWideScreen, categories } = this.props;

    return (
      <div className={classes.actionsBar}>
        <div className={classes.group}>
          <IconButton
            aria-label="ブログトップへ戻る"
            title="ブログトップへ戻る"
            component={Link}
            to="/blog/"
            className={`${classes.button} smartPhone`}
          >
            <HomeIcon />
          </IconButton>
          <IconButton
            aria-label="ブログトップへ戻る"
            title="ブログトップへ戻る"
            component={Link}
            to="/blog/"
            className={`${classes.button} deskTop`}
          >
            <HomeIcon />
          </IconButton>
        </div>
        <div className={classes.group}>
          {navigatorPosition === "is-aside" && <FontSetter increaseFont={this.fontSetterOnClick} />}
          <IconButton aria-label="Back to top" onClick={this.arrowUpOnClick} title="スクロールトップ">
            <ArrowUpwardIcon className={classes.button} />
          </IconButton>
        </div>
      </div>
    );
  }
}

ActionsBar.propTypes = {
  classes: PropTypes.object.isRequired,
  navigatorPosition: PropTypes.string.isRequired,
  navigatorShape: PropTypes.string.isRequired,
  isWideScreen: PropTypes.bool.isRequired,
  setScrollToTop: PropTypes.func.isRequired,
  setFontSizeIncrease: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    navigatorPosition: state.navigatorPosition,
    navigatorShape: state.navigatorShape,
    isWideScreen: state.isWideScreen
  };
};

const mapDispatchToProps = {
  setNavigatorPosition,
  setNavigatorShape,
  setScrollToTop,
  setFontSizeIncrease
};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(ActionsBar));
