import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import {
  LineShareButton,
  LineIcon,
  PocketShareButton,
  PocketIcon,
  HatebuShareButton,
  HatebuShareCount,
  HatebuIcon,
  TwitterShareButton,
  TwitterShareCount,
  TwitterIcon,
  FacebookShareButton,
  FacebookShareCount,
  FacebookIcon,
  GooglePlusShareButton,
  GooglePlusShareCount,
  GooglePlusIcon,
} from "react-share";

import config from "../../../content/meta/config";

const styles = theme => ({
  share: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "1em 0 0",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      flexDirection: "row"
    }
  },
  links: {
    display: "flex",
    flexDirection: "row",
    "& .SocialMediaShareButton": {
      margin: "0 .8em",
      cursor: "pointer",
      [`@media (max-width: ${theme.mediaQueryTresholds.M}px)`]: {
        margin: "0 .4em"
      },
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

class PostShare extends React.Component {
  render() {
    const { post, classes, slug } = this.props;
    const { excerpt, frontmatter } = post;
    const { title } = frontmatter ? frontmatter : post;

    const isFields = post && post.fields;
    const isPost = post;
    const postSlug = isFields ? post.fields.slug : isPost ? config.pathPrefix + '/' + post.slug + '/' : '/';
    const url = config.siteUrl + postSlug;

    const iconSize = 36;
    const filter = count => (count > 0 ? count : "");

    const twitterAccount = "masakinishi_com";

    return (
      <div className={classes.share}>
        <span className={classes.label}>シェア</span>
        <div className={classes.links}>
          <TwitterShareButton url={url} title={title} via={twitterAccount} related={twitterAccount} >
            <TwitterIcon round size={iconSize} />
            <TwitterShareCount url={url}>
              {count => <div className="share-count">{filter(count)}</div>}
            </TwitterShareCount>
          </TwitterShareButton>
          <FacebookShareButton
            url={url}
            quote={`${title} - ${excerpt}`}
            aria-label="Facebook share"
          >
            <FacebookIcon round size={iconSize} />
            <FacebookShareCount url={url}>
              {count => <div className="share-count">{filter(count)}</div>}
            </FacebookShareCount>
          </FacebookShareButton>
          <HatebuShareButton url={url}>
            <HatebuIcon round size={iconSize} />
            <HatebuShareCount url={url}>
              {count => <div className="share-count">{filter(count)}</div>}
            </HatebuShareCount>
          </HatebuShareButton>
          <LineShareButton url={url} title={title}>
            <LineIcon round size={iconSize} />
          </LineShareButton>
          <PocketShareButton url={url} title={title}>
            <PocketIcon round size={iconSize} />
          </PocketShareButton>
        </div>
      </div>
    );
  }
}

PostShare.propTypes = {
  post: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired
};

export default injectSheet(styles)(PostShare);
