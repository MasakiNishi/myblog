import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import config from "../../../content/meta/config";

import { ReactComponent as FacebookIcon } from "../../images/svg-icons/facebook.svg";
import { ReactComponent as TwitterIcon } from "../../images/svg-icons/twitter.svg";
import { ReactComponent as InstaIcon } from "../../images/svg-icons/instagram.svg";

const styles = theme => ({
  stack: {
    margin: "1em 0 1em 0",
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      display: "block",
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "100%",
      padding: "1em 2em",
      margin: 0,
      zIndex: "-1"
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
    },
    "& .Instagram": {
      "& svg": {
        fill: theme.info.colors.instaIconsHover
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
  }
});

const StackIcons = props => {
  const { classes } = props;
  const items = config.authorSocialLinks;
  const icons = {
    Twitter: TwitterIcon,
    Facebook: FacebookIcon,
    Instagram: InstaIcon
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
        <svg width="0" height="0">
          <radialGradient id="rg" r="150%" cx="30%" cy="107%">
            <stop stopColor="#fdf497" offset="0" />
            <stop stopColor="#fdf497" offset="0.05" />
            <stop stopColor="#fd5949" offset="0.45" />
            <stop stopColor="#d6249f" offset="0.6" />
            <stop stopColor="#285AEB" offset="0.9" />
          </radialGradient>
        </svg>
      </div>
    </div>
  );
};

StackIcons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(StackIcons);
