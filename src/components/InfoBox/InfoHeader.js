import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Link from "gatsby-link";
import IconButton from "material-ui/IconButton";

import ExpandMoreIcon from "material-ui-icons/ExpandMore";

import avatar from "../../images/jpg/avatar.jpg";
import config from "../../../content/meta/config";

const styles = theme => ({
  header: {
    lineHeight: 1,
    position: "relative"
  },
  avatarLink: {
    display: "none",
    willChange: "left, top",
    position: "absolute",
    top: "10px",
    left: "50%",
    marginLeft: "-30px",
    transition: "all .5s",
    transitionTimingFunction: "ease",
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      display: "block"
    },
    ".navigator-in-transition-from.navigator-is-opened &": {
      left: "50%"
    },
    ".is-aside.open &": {
      [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
        left: "8%",
        top: "0"
      }
    }
  },
  hideLink: {
    display: "none",
    willChange: "left, top",
    position: "absolute",
    top: "10px",
    left: "50%",
    marginLeft: "-30px",
    transition: "all .5s",
    transitionTimingFunction: "ease",
    [`@media (max-width: ${theme.mediaQueryTresholds.L - 1}px)`]: {
      display: "block"
    },
    ".navigator-in-transition-from.navigator-is-opened &": {
      left: "50%"
    }
  },
  avatar: {
    width: "60px",
    height: "60px",
    borderRadius: "65% 75%",
    border: "1px solid #ddd",
    transition: "all .3s",
    transitionTimingFunction: "ease",
    display: "inline-block",
    overflow: "hidden",
    "& img": {
      maxWidth: "100%"
    },
    "@media (hover: hover)": {
      "&:hover": {
        borderRadius: "75% 65%"
      }
    }
  },
  title: {
    willChange: "transform, left, top",
    fontSize: `${theme.info.fonts.boxTitleSizeL}em`,
    fontWeight: "300",
    color: "#555555",
    margin: 0,
    transitionTimingFunction: "ease",
    fontFamily: "Open Sans",
    position: "absolute",
    top: "5rem",
    textAlign: "center",
    left: "50%",
    transform: "translate(-50%)",
    transition: "all .5s",
    "& small": {
      display: "block",
      fontSize: ".6em",
      marginTop: ".3em"
    },
    ".is-aside.open &": {
      [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
        left: "260%",
        top: `${1.9 - theme.info.fonts.boxTitleSizeL}em`,
        textAlign: "left"
      }
    }
  },
  expand: {
    position: "absolute",
    top: "30px",
    right: "-25px",
    display: "none",
    color: theme.info.colors.text,
    ".is-aside.open &": {
      [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
        display: "block"
      }
    }
  }
});

const InfoHeader = props => {
  const { classes, avatarOnClick, expandOnClick, hideOnClick} = props;

  return (
    <header className={classes.header}>
      <Link className={classes.avatarLink} to="/" onClick={avatarOnClick} title="トップページへ戻る">
        <div className={classes.avatar}>
          <img src={avatar} alt="" />
        </div>
        <div className={classes.title}>
        {config.infoTitle.replace(/ /g, "\u00a0")}
        <small> {config.infoTitleNote}</small>
        </div>
      </Link>
      <Link className={classes.hideLink} to="/" onClick={hideOnClick} title="トップページへ戻る">
        <div className={classes.avatar}>
          <img src={avatar} alt="" />
        </div>
        <div className={classes.title}>
        {config.infoTitle.replace(/ /g, "\u00a0")}
        <small> {config.infoTitleNote}</small>
        </div>
      </Link>
      <IconButton
        aria-label="Expand the box"
        className={classes.expand}
        onClick={expandOnClick}
        title="記事リストを閉じる"
      >
        <ExpandMoreIcon />
      </IconButton>
    </header>
  );
};

InfoHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  avatarOnClick: PropTypes.func.isRequired,
  expandOnClick: PropTypes.func.isRequired,
  hideOnClick: PropTypes.func.isRequired
};

export default injectSheet(styles)(InfoHeader);
