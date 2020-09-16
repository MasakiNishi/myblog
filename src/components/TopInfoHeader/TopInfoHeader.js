import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";
import Avatar from "material-ui/Avatar";
import Link from "gatsby-link";
import { connect } from "react-redux";

import { setNavigatorPosition } from "../../state/store";
import { featureNavigator, moveNavigatorAside } from "./../../utils/shared";

import config from "../../../content/meta/config";
import TopMenu from "./TopMenu";

const styles = theme => ({
  TopInfoHeader: {
    position: "fixed",
    background: theme.bars.colors.background,
    top: 0,
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
      bottom: 0,
      borderTop: `1px solid ${theme.base.colors.lines}`,
      [`@media (max-width: ${theme.mediaQueryTresholds.M}px)`]: {
        left: ".8rem",
        right: ".8rem"
      }
    }
  },
  title: {
    float: "left",
    margin: "13px 0 0 30px",
    fontSize: "1.17em",
    fontWeight: "300",
    fontFamily: "Open Sans",
    color: theme.bars.colors.text,
    [`@media (max-width: ${theme.mediaQueryTresholds.M}px)`]: {
      margin: "13px 0 0 20px"
    },
    "& small": {
      display: "block",
      fontSize: ".65em",
      margin: "2px 0 0 2px"
    }
  }
});

class TopInfoHeader extends React.Component {
  homeLinkOnClick = featureNavigator.bind(this);
  pageLinkOnClick = moveNavigatorAside.bind(this);

  render() {
    const { classes, pages, wppages } = this.props;

    return (
      <header className={classes.TopInfoHeader}>
         <Link to="/"　title="ブログトップへ戻る">
          <h1 className={classes.title}>
            {config.infoTitle}
            <small>Software Engineer</small>
          </h1>
        </Link>
        <TopMenu
          pages={pages} wppages={wppages}
          homeLinkOnClick={this.homeLinkOnClick}
          pageLinkOnClick={this.pageLinkOnClick}
        />
      </header>
    );
  }
}

TopInfoHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  pages: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    navigatorPosition: state.navigatorPosition,
    navigatorShape: state.navigatorShape
  };
};

const mapDispatchToProps = {
  setNavigatorPosition
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectSheet(styles)(TopInfoHeader));