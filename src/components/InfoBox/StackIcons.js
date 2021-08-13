import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import config from "../../../content/meta/config";

import { ReactComponent as FacebookIcon } from "../../images/svg-icons/facebook.svg";
import { ReactComponent as TwitterIcon } from "../../images/svg-icons/twitter.svg";
import { ReactComponent as YoutubeIcon } from "../../images/svg-icons/youtube.svg";
import { ReactComponent as InstaIcon } from "../../images/svg-icons/instagram.svg";

const styles = theme => ({
  stack: {
    display: "block",
    margin: "1em 0 1em 0",
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "100%",
      padding: "1em 2em",
      margin: 0
    },
    "& .Twitter": {
      "& svg": {
        fill: theme.info.colors.twitterIconsHover
      }
    },
    "& .Facebook": {
      "& svg": {
        fill: theme.info.colors.facebookIconsHover
      }
    }
  },
  box: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  link: {
    display: "inline-block",
    padding: "8px"
  },
  svg: {
    width: "30px",
    height: "30px"
  },
  header: {
    textAlign: "center",
    fontSize: ".95em",
    letterSpacing: ".3em",
    width: "100%",
    margin: "0 0 .5em 0",
    fontWeight: 300
  },
  InstaButton: {
    color: "#fff",
    borderRadius: "5px",
    position: "relative",
    display: "inline-block",
    height: "23px",
    width: "23px",
    margin: "12px",
    textAlign: "center",
    fontSize: "14px",
    background: "-webkit-linear-gradient(135deg, #427eff 0%, #f13f79 70%) no-repeat",
    background: "linear-gradient(135deg, #427eff 0%, #f13f79 70%) no-repeat",
    overflow: "hidden",
    "&:before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "120%",
      height: "120%",
      background: "-webkit-linear-gradient(15deg, #ffdb2c, rgb(249, 118, 76) 25%, rgba(255, 77, 64, 0) 50%) no-repeat",
      background: "linear-gradient(15deg, #ffdb2c, rgb(249, 118, 76) 25%, rgba(255, 77, 64, 0) 50%) no-repeat"
    },
    "& svg": {
      fill: "#fff",
      width: "23px",
      position: "relative"
    }
  }
});

const StackIcons = props => {
  const { classes } = props;
  const items = config.authorSocialLinks;
  const icons = {
    Twitter: TwitterIcon,
    Facebook: FacebookIcon,
    Youtube: YoutubeIcon
  };

  return (
    <div className={classes.stack}>
      <div className={classes.header}>Follow Me:</div>
      <div className={classes.box}>
        {items.map(item => {
          const Icon = icons[item.name];
          return (
            <a
              href={item.url}
              key={item.name}
              className={`${classes.link} ${item.name}`}
              target="_blank"
              rel="noopener noreferrer"
              title={item.name}
            >
              <Icon className={classes.svg} />
            </a>
          );
        })}
        <a
          href={config.instagramLink}
          className={classes.InstaButton}
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <InstaIcon/ >
        </a>
      </div>
    </div>
  );
};

StackIcons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(StackIcons);
