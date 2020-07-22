import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import config from "../../../content/meta/config";

import { ReactComponent as FacebookIcon } from "../../images/svg-icons/facebook.svg";
import { ReactComponent as TwitterIcon } from "../../images/svg-icons/twitter.svg";
import { ReactComponent as InstaIcon } from "../../images/svg-icons/instagram.svg";

const styles = theme => ({
  social: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& .Twitter": {
      "&:hover": {
        "& svg": {
          fill: theme.info.colors.twitterIconsHover
        }
      }
    },
    "& .Facebook": {
      "&:hover": {
        "& svg": {
          fill: theme.info.colors.facebookIconsHover
        }
      }
    },
    "& .Instagram": {
      "&:hover": {
        "& svg": {
          fill: theme.info.colors.instaIconsHover
        }
      }
    }
  },
  link: {
    display: "inline-block",
    padding: "5px",
  },
  svg: {
    width: "40px",
    height: "40px",
    fill: theme.info.colors.socialIcons,
    transition: "all .5s"
  }
});

const Socialcons = props => {
  const { classes } = props;
  const items = config.authorSocialLinks;
  const icons = {
    Twitter: TwitterIcon,
    Facebook: FacebookIcon,
    Instagram: InstaIcon
  };

  return (
    <div className={classes.social}>
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
  );
};

Socialcons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Socialcons);
