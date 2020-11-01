import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";
import Avatar from "material-ui/Avatar";
import Link from "gatsby-link";
import { connect } from "react-redux";

import { setNavigatorPosition, setShowSidebar } from "../../state/store";
import { featureNavigator, moveNavigatorAside } from "./../../utils/shared";

import config from "../../../content/meta/config";
import avatar from "../../images/jpg/avatar.jpg";
import TopSideMenu from "./TopSideMenu";

const styles = theme => ({
  infoBar: {
    position: "absolute",
    background: theme.bars.colors.background,
    top: 0,
    left: 0,
    width: "100%",
    height: `${theme.bars.sizes.infoBar}px`,
    "&::before": {
      content: `""`,
      position: "absolute",
      left: theme.base.sizes.linesMargin,
      right: theme.base.sizes.linesMargin,
      height: 0,
      bottom: 0,
      borderTop: `1px solid ${theme.base.colors.lines}`,
      [`@media (max-width: 425px)`]: {
        left: 0,
        right: 0
      }
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      display: "none"
    },
    "&.show": {
      "& .sideMenu": {
        display: "none"
      }
    }
  },
  title: {
    float: "left",
    margin: "13px 0 0 15px",
    fontSize: "1.17em",
    fontWeight: "300",
    fontFamily: "Open Sans",
    color: theme.bars.colors.text,
    "& small": {
      display: "block",
      fontSize: ".55em",
      margin: "2px 0 0 0"
    }
  },
  avatar: {
    width: "36px",
    display: "block",
    float: "left",
    margin: "13px 0 0 30px",
    borderRadius: "65% 75%",
    border: "1px solid #ddd",
    height: "36px",
    [`@media (max-width: 425px)`]: {
      margin: "13px 0 0 20px"
    }
  }
});

class InfoBar extends React.Component {
  homeLinkOnClick = featureNavigator.bind(this);
  pageLinkOnClick = moveNavigatorAside.bind(this);

  showOnClick = e => {
    if (this.props.showSidebar || "show") {
      this.props.setShowSidebar("show");
    };
  };

  render() {
    const { classes, showOnClick, showSidebar } = this.props;

    return (
      <aside className={`${classes.infoBar} ${showSidebar ? showSidebar : ""}`}>
        <Link to="/"　title="トップページ">
          <Avatar alt={config.infoTitle} src={avatar} className={classes.avatar} />
          <div className={classes.title}>
            {config.infoTitle}
            <small> {config.infoTitleNote}</small>
          </div>
        </Link>
        <TopSideMenu
          showOnClick={this.showOnClick}
          title="メニュー"
        />
      </aside>
    );
  }
}

InfoBar.propTypes = {
  classes: PropTypes.object.isRequired,
  showSidebar: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    navigatorPosition: state.navigatorPosition,
    navigatorShape: state.navigatorShape,
    showSidebar: state.showSidebar
  };
};

const mapDispatchToProps = {
  setNavigatorPosition,
  setShowSidebar
};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(InfoBar));
