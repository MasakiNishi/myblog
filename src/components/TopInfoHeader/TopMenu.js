import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { MenuItem, MenuList } from "material-ui/Menu";
import MoreVertIcon from "material-ui-icons/MoreVert";
import IconButton from "material-ui/IconButton";
import { Manager, Target, Popper } from "react-popper";
import ClickAwayListener from "material-ui/utils/ClickAwayListener";
import Grow from "material-ui/transitions/Grow";
import Paper from "material-ui/Paper";
import classNames from "classnames";

const styles = theme => ({
  topMenu: {
    float: "right",
    margin: "5px 10px 0 0",
    "& ul": {
      borderBottom: "1px solid #dedede"
    },
    [`@media (max-width: ${theme.mediaQueryTresholds.M}px)`]: {
      margin: "5px 5px 0 0"
    }
  },
  open: {
    color: theme.bars.colors.icon
  },
  popperClose: {
    pointerEvents: "none"
  }
});

class TopMenu extends React.Component {
  state = {
    anchorEl: null,
    open: false
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleClose = () => {
    if (!this.state.open) {
      return;
    }

    this.timeout = setTimeout(() => {
      this.setState({ open: false });
    });
  };

  render() {
    const { classes, pages, wppages } = this.props;
    const { anchorEl, open } = this.state;

    return (
      <nav className={classes.topMenu}>
        <Manager>
          <Target>
            <IconButton
              aria-label="More"
              aria-owns={anchorEl ? "long-menu" : null}
              aria-haspopup="true"
              onClick={this.handleClick}
              className={classes.open}
            >
              <MoreVertIcon />
            </IconButton>
          </Target>
          <Popper
            placement="bottom-end"
            eventsEnabled={open}
            className={classNames({ [classes.popperClose]: !open })}
          >
            <ClickAwayListener onClickAway={this.handleClose}>
              <Grow in={open} id="menu-list" style={{ transformOrigin: "0 0 0" }}>
                <Paper>
                  <MenuList role="menu">
                    <a href="/" style={{ display: "block" }}>
                      <MenuItem
                        onClick={e => {
                          this.handleClose();
                        }}
                      >
                        ホーム
                      </MenuItem>
                    </a>
                     <a href="/blog/" style={{ display: "block" }}>
                      <MenuItem
                        onClick={e => {
                          this.handleClose();
                        }}
                      >
                        ブログ
                      </MenuItem>
                    </a>
                    {pages.map(({ node }) => {
                      const { fields, frontmatter } = node;

                      return (
                        <a key={fields.slug} href={fields.slug} style={{ display: "block" }}>
                          <MenuItem
                            onClick={e => {
                              this.props.pageLinkOnClick(e);
                              this.handleClose();
                            }}
                          >
                            {frontmatter.menuTitle ? frontmatter.menuTitle : frontmatter.title}
                          </MenuItem>
                        </a>
                      );
                    })}
                    {wppages.map(({ node }) => {
                      const { title, slug } = node;
                      return (
                        <a key={slug} href={"/blog/" + slug + "/"} style={{ display: "block" }}>
                          <MenuItem onClick={e => { this.props.pageLinkOnClick(e); this.handleClose(); }}>
                            {title}
                          </MenuItem>
                        </a>
                      );
                    })}
                    <a href="/contact/" style={{ display: "block" }}>
                      <MenuItem
                        onClick={e => {
                          this.props.pageLinkOnClick(e);
                          this.handleClose();
                        }}
                      >
                        お問い合わせ
                      </MenuItem>
                    </a>
                  </MenuList>
                </Paper>
              </Grow>
            </ClickAwayListener>
          </Popper>
        </Manager>
      </nav>
    );
  }
}

TopMenu.propTypes = {
  pages: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  pageLinkOnClick: PropTypes.func.isRequired,
  homeLinkOnClick: PropTypes.func.isRequired
};

export default injectSheet(styles)(TopMenu);