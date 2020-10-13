import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Menu from "material-ui-icons/Menu";
import IconButton from "material-ui/IconButton";
import ClickAwayListener from "material-ui/utils/ClickAwayListener";
import classNames from "classnames";

import { setShowSidebar } from "../../state/store";

const styles = theme => ({
  topSideMenu: {
    float: "right",
    margin: "5px 10px 0 0",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {},
    "& .sideMenu": {
      color: theme.bars.colors.icon
    }
  }
});

class TopSideMenu extends React.Component {

  render() {
    const { classes, showOnClick } = this.props;

    return (
      <div className={classes.topSideMenu}>
        <IconButton
          aria-label="More"
          aria-haspopup="true"
          onClick={showOnClick}
          className="sideMenu"
        >
          <Menu />
        </IconButton>
      </div>
    );
  }
}

TopSideMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  showOnClick: PropTypes.func.isRequired
};

export default injectSheet(styles)(TopSideMenu);