import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
require("core-js/fn/array/find");

import asyncComponent from "../common/AsyncComponent/";
import PostAuthor from "./PostAuthor";
// import PostComments from "./PostComments";

import youtubeBanner from "../../images/jpg/youtubeblogbanner.png";
import Link from "gatsby-link";

const styles = theme => ({
  footer: {
    color: theme.main.colors.footer,
    fontSize: `${theme.main.fonts.footer.size}em`,
    lineHeight: theme.main.fonts.footer.lineHeight,
    "& p": {
      margin: 0
    }
  },
  gatsbyRespImageLink: {
    margin: "2em -1rem",
    border: "none",
    display: "block",
    [`@media (min-width: 426px)`]: {
      margin: "2em -1.5rem",
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      margin: "2.5em -3.5rem"
    }
  },
  youtubeBanner: {
    width: "100%"
  },
});

const PostShare = asyncComponent(() =>
  import("./PostShare")
    .then(module => {
      return module;
    })
    .catch(error => {})
);

const PostFollow = asyncComponent(() =>
  import("./PostFollow")
    .then(module => {
      return module;
    })
    .catch(error => {})
);

const PostFooter = ({ classes, author, post, slug, facebook }) => {
  return (
    <footer className={classes.footer}>
      {/* <a href="https://www.youtube.com/@ni_5h1"　target="_blank" rel="noopener" className={classes.gatsbyRespImageLink} title="Youtubeチャンネル">
          <img alt="Youtubeチャンネル" src={youtubeBanner} className={classes.youtubeBanner} />
      </a> */}
      <PostShare post={post} slug={slug} />
      <PostFollow post={post} slug={slug} facebook={facebook} />
      <PostAuthor author={author} />
      {/* <PostComments /> */}
    </footer>
  );
};

PostFooter.propTypes = {
  classes: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired
};

export default injectSheet(styles)(PostFooter);
