import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { DiscussionEmbed } from 'disqus-react'
require("core-js/fn/array/find");

import config from "../../../content/meta/config";

const styles = theme => ({
  postComments: {
    margin: "3em 0 0",
    padding: "3em 0 0",
    borderTop: "1px solid #ddd"
  }
});

const PostComments = props => {
  const { classes, slug, title, facebook } = props;

  const disqusConfig = {
   shortname: process.env.GATSBY_DISQUS_NAME,
   config: { identifier: slug, title },
  }

  return (
    <div id="post-comments" className={classes.postComments}>
      <DiscussionEmbed {...disqusConfig} />
    </div>
  );
};

PostComments.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  facebook: PropTypes.object.isRequired
};

export default injectSheet(styles)(PostComments);
