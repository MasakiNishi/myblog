import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { connect } from "react-redux";
require("core-js/fn/array/find");

import SocialIcons from "./SocialIcons";
import InfoMenu from "./InfoMenu";
import InfoHeader from "./InfoHeader";
import InfoText from "./InfoText";
import StackIcons from "./StackIcons";

import { featureNavigator, moveNavigatorAside } from "./../../utils/shared";
import { setNavigatorPosition, setNavigatorShape, setShowSidebar } from "../../state/store";

import TopSideMenu from "../InfoBar/TopSideMenu"
import ClickAwayListener from "material-ui/utils/ClickAwayListener";
import IconButton from "material-ui/IconButton";
import CloseIcon from "material-ui-icons/Close";

const styles = theme => ({
  infoBox: {
    display: "none",
    color: theme.info.colors.text,
    position: "absolute",
    left: 0,
    top: 0,
    width: `${theme.info.sizes.width}px`,
    height: "100%",
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      display: "block"
    },
    [`@media (max-width: ${theme.mediaQueryTresholds.L - 1}px)`]: {
      "&.show": {
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "block",
        "& .closeMenu": {
          display: "block",
          position: "absolute",
          top: "5px",
          right: "5px"
        }
      }
    },
    "&::after": {
      content: `""`,
      position: "absolute",
      right: 0,
      top: "20px",
      bottom: "20px",
      width: "1px",
      borderRight: `1px solid ${theme.base.colors.lines}`,
      [`@media (max-width: ${theme.mediaQueryTresholds.L - 1}px)`]: {
        border: "none"
      }
    },
    "& .asideInner": {
      width: "100%",
      height: "100%",
      background: theme.info.colors.background,
      padding: "20px 40px",
      position: "absolute",
      overflow: "scroll",
      [`@media (max-width: ${theme.mediaQueryTresholds.L - 1}px)`]: {
        width: "300px",
        maxWidth: "85%"
      }
    }
  },
  wrapper: {
    position: "absolute",
    top: `${theme.info.sizes.headerHeight}px`,
    bottom: 0,
    left: 0,
    width: "100%",
    padding: "0 40px 0",
    willChange: "opacity, bottom",
    transition: "bottom .5s 0s",
    opacity: 1,
    transitionTimingFunction: "ease",
    [`@media (max-width: ${theme.mediaQueryTresholds.L - 1}px)`]: {
      padding: "0 30px"
    },
    ".is-aside.closed &": {
      bottom: `${theme.navigator.sizes.closedHeight}px`
    },
    ".moving-featured &": {
      bottom: 0
    },
    "& .wrapperInside": {
      background: theme.info.colors.background,
      padding: "1em 0"
    },
    "& .infoBoxText": {
      fontSize: ".9em"
    },
    "& .closeMenu": {
      display: "none"
    }
  },
});

class InfoBox extends React.Component {
  avatarOnClick = featureNavigator.bind(this);
  menulinkOnClick = moveNavigatorAside.bind(this);

  expandOnClick = e => {
    this.props.setNavigatorShape("closed");
  };

  hideOnClick = e => {
    if (this.props.showSidebar || "hide") {
      this.props.setShowSidebar("hide");
    };
  }

  render() {
    const { classes, parts, pages, navigatorPosition, navigatorShape, showSidebar } = this.props;
    const info = parts.find(el => el.node.frontmatter.title === "info");

    return (
        <aside
          className={`${classes.infoBox} ${navigatorPosition ? navigatorPosition : ""} 
          ${navigatorShape ? navigatorShape : ""} ${showSidebar ? showSidebar : ""}`}
        >
          <ClickAwayListener onClickAway={this.hideOnClick}>
            <div className='asideInner'>
              {info && (
                <InfoHeader
                  info={info}
                  avatarOnClick={this.avatarOnClick}
                  expandOnClick={this.expandOnClick}
                  hideOnClick={this.hideOnClick}
                />
              )}
              <div className={classes.wrapper}>
                <div className='wrapperInside'>
                  <div className='infoBoxText'>
                    {info && <InfoText info={info} />}
                  </div>
                  <SocialIcons />
                  {pages && <InfoMenu pages={pages} linkOnClick={this.menulinkOnClick} hideOnClick={this.hideOnClick} />}
                </div>
                  <StackIcons />
              </div>
              <IconButton
                className='closeMenu'
                onClick={this.hideOnClick}
                title="メニューを閉じる"
              >
                <CloseIcon />
              </IconButton>
            </div>
          </ClickAwayListener>
        </aside>
    );
  }
}

InfoBox.propTypes = {
  classes: PropTypes.object.isRequired,
  parts: PropTypes.array.isRequired,
  pages: PropTypes.array.isRequired,
  navigatorPosition: PropTypes.string.isRequired,
  navigatorShape: PropTypes.string.isRequired,
  showSidebar: PropTypes.string.isRequired,
  isWideScreen: PropTypes.bool.isRequired,
  setNavigatorShape: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    navigatorPosition: state.navigatorPosition,
    navigatorShape: state.navigatorShape,
    showSidebar: state.showSidebar,
    isWideScreen: state.isWideScreen
  };
};

const mapDispatchToProps = {
  setNavigatorPosition,
  setNavigatorShape,
  setShowSidebar
};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(InfoBox));
