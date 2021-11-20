import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
// import FacebookProvider, { Like } from 'react-facebook';
import { Follow } from 'react-twitter-widgets';
import config from "../../../content/meta/config";

import { ReactComponent as InstaIcon } from "../../images/svg-icons/instagram.svg";

const styles = theme => ({
  share: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2em 0 0",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      flexDirection: "row"
    }
  },
  links: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "320px",
    flexWrap: "wrap",
    justifyContent: "center",
    "& .SocialMediaShareButton": {
      margin: "0 .8em",
      cursor: "pointer"
    }
  },
  followbutton: {
    margin: "0 .5rem .5rem .5rem",
    [`@media (max-width: ${theme.mediaQueryTresholds.M}px)`]: {
      margin: "0 .25rem .5rem .25rem",
    },
    "& .instaButton": {
      color: "#fff",
      borderRadius: "3px",
      position: "relative",
      display: "inline-block",
      height: "28px",
      width: "90px",
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
        width: "100%",
        height: "100%",
        background: "-webkit-linear-gradient(15deg, #ffdb2c, rgb(249, 118, 76) 25%, rgba(255, 77, 64, 0) 50%) no-repeat",
        background: "linear-gradient(15deg, #ffdb2c, rgb(249, 118, 76) 25%, rgba(255, 77, 64, 0) 50%) no-repeat"
      },
      "& svg": {
        fill: "#fff",
        width: "28px",
        position: "relative"
      },
      "& span": {
        display: "inline-block",
        position: "relative",
        fontWeight: "normal",
        paddingRight: "5px",
        top: "-8px",
      },
      "&:hover": {
          color: "#fff"
      }
    }
  },
  label: {
    fontSize: "1.2em",
    margin: "0 1em 1em",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      margin: "0 1em"
    }
  }
});

class PostFollow extends React.Component {
  componentDidMount() {
    if (typeof twttr !== 'undefined' && typeof twttr.widgets !== 'undefined') {
      twttr.widgets.load()
    }
  }
  render() {
    const { post, classes, slug, facebook } = this.props;
    const { excerpt, frontmatter } = post;
    const url = config.siteUrl + config.pathPrefix + "/rss.xml";
    const twitterAccount = config.authorTwitterAccount;
    const feedlyfollowurl = 'https://feedly.com/i/subscription/feed%2F' + url;
    const iconSize = 36;
    const filter = count => (count > 0 ? count : "");

    return (
      <div className={classes.share}>
        <span className={classes.label}>フォロー</span>
        <div className={classes.links}>
          <div className={classes.followbutton}>
            <Follow
              username={twitterAccount}
              options={{size:"large"}}
            />
          </div>
          {/* <div className={classes.followbutton}>
            <FacebookProvider appId={facebook}>
              <Like href={config.facebookLink} colorScheme="dark" layout="button_count" size="large"/>
            </FacebookProvider>
          </div> */}
          <div className={classes.followbutton}>
            <a
              href={config.instagramLink}
              className="instaButton"
              target="_blank"
              rel="noopener noreferrer"
              title="インスタをフォローする"
            >
              <InstaIcon/ > <span>Follow</span>
            </a>
          </div>
          <div className={classes.followbutton}>
            <a
              href={feedlyfollowurl}
              target="_blank"
              rel="noopener noreferrer"
              title="Feedlyで購読する"
            >
              <img
                id='feedlyFollow'
                src='https://s3.feedly.com/img/follows/feedly-follow-rectangle-flat-medium_2x.png'
                alt='feedlyで購読'
                width='71'
                height='28' />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

PostFollow.propTypes = {
  post: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired
};

export default injectSheet(styles)(PostFollow);