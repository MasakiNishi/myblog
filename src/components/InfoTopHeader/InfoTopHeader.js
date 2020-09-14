import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";
import Avatar from "material-ui/Avatar";
import Link from "gatsby-link";
import { connect } from "react-redux";

import { setNavigatorPosition } from "../../state/store";
import { featureNavigator, moveNavigatorAside } from "./../../utils/shared";

import config from "../../../content/meta/config";
import avatar from "../../images/jpg/avatar.jpg";
import logo from "../../../static/icons/apple-icon-60x60.png"
import TopMenu from "./TopMenu";

const styles = theme => ({
  infoTopHeader: {
    position: "absolute",
    background: theme.bars.colors.background,
    top: 0,
    left: 0,
    width: "100%",
    height: `${theme.bars.sizes.infoBar}px`,
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      height: "70px"
    }
  },
  avatarLink: {
    display: "block",
    float: "left",
    margin: "13px 0 0 30px"
  },
  avatar: {
    width: "43px",
    height: "43px"
  }
});

class infoTopHeader extends React.Component {
  homeLinkOnClick = featureNavigator.bind(this);
  pageLinkOnClick = moveNavigatorAside.bind(this);

  render() {
    const { classes, pages, wppages } = this.props;

    return (
      <aside className={classes.infoTopHeader}>
        <Link to="/" className={classes.avatarLink} onClick={this.homeLinkOnClick}>
          <img alt={config.siteTitle} src={logo} className={classes.avatar} />
        </Link>
        <TopMenu
          pages={pages} wppages={wppages}
          homeLinkOnClick={this.homeLinkOnClick}
          pageLinkOnClick={this.pageLinkOnClick}
        />
      </aside>
    );
  }
}

infoTopHeader.propTypes = {
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
)(injectSheet(styles)(infoTopHeader));