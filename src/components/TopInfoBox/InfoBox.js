import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { connect } from "react-redux";
require("core-js/fn/array/find");

import SocialIcons from "../InfoBox/SocialIcons";
import InfoMenu from "../InfoBox/InfoMenu";
import InfoHeader from "../InfoBox/InfoHeader";
import InfoText from "../InfoBox/InfoText";
import StackIcons from "../InfoBox/StackIcons";

import { featureNavigator, moveNavigatorAside } from "./../../utils/shared";
import { setNavigatorPosition, setNavigatorShape, setShowSidebar } from "../../state/store";

import TopSideMenu from "../InfoBar/TopSideMenu"
import ClickAwayListener from "material-ui/utils/ClickAwayListener";
import IconButton from "material-ui/IconButton";
import CloseIcon from "material-ui-icons/Close";

const styles = theme => ({
  infoBox: {
    color: theme.info.colors.text,
    position: "absolute",
    left: 0,
    top: 0,
    width: `${theme.info.sizes.width}px`,
    height: "100%",
    [`@media (max-width: ${theme.mediaQueryTresholds.L - 1}px)`]: {
      left: "-100%",
      "& .asideInner": {
        left: "-100%"
      },
      "&.show": {
        backgroundColor: "rgba(0,0,0,0.5)",
        width: "100%",
        left: 0,
        "& .asideInner": {
          transition: "left 0.9s",
          left: 0,
          [`@media (max-width: 475px)`]: {
            width: "80%",
          },
        },
        "& .closeMenu": {
          display: "block",
          color: "#fff",
          position: "absolute",
          top: 0,
          right: 0,
          padding: "20px 35px 100vh calc(100vw - 320px - 35px)",
          [`@media (max-width: 475px)`]: {
            padding: "20px 10% 100vh"
          }
        },
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
      width: `${theme.info.sizes.width}px`,
      height: "100%",
      background: theme.info.colors.background,
      padding: "20px 40px",
      position: "absolute",
      overflow: "scroll"
    },
    "& .closeMenu": {
      display: "none"
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
    [`@media (max-width: 375px)`]: {
      padding: "0 10% 0"
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
    const { classes, parts, pages, wppages, navigatorPosition, navigatorShape, showSidebar } = this.props;
    const info = parts.find(el => el.node.frontmatter.title === "info");

    return (
        <aside
          className={`${classes.infoBox} ${navigatorPosition ? "is-featured" : "is-featured"}
          ${navigatorShape ? navigatorShape : ""} ${showSidebar ? showSidebar : ""}`}
        >
          <IconButton
            className='closeMenu'
            onClick={this.hideOnClick}
            title="メニューを閉じる"
          >
            <CloseIcon />
          </IconButton>
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
                {pages && <InfoMenu pages={pages} wppages={wppages} linkOnClick={this.menulinkOnClick} hideOnClick={this.hideOnClick} avatarOnClick={this.avatarOnClick} />}
              </div>
                <StackIcons />
            </div>
          </div>
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
