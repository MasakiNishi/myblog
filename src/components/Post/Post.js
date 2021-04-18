import React from "react";
import PropTypes from "prop-types";

import Article from "../Main/Article";
import PostHeader from "./PostHeader";
import Content from "../Main/Content";
import PostFooter from "./PostFooter";

const Post = props => {
  const { post, author, slug, facebook } = props;
  const isFrontmatter = post && post.frontmatter;
  const isFields = post && post.fields;
  const isHtml = post && post.html;
  const isHtmlAst = post && post.htmlAst;
  const frontmatter =   isFrontmatter ? post.frontmatter : post;//(post || {}).frontmatter;
  const title =         isFrontmatter ? post.frontmatter.title : post.title;//((post || {}).frontmatter || {}).title;
  const subTitle =      isFrontmatter ? post.frontmatter.subTitle : post.acf.subtitle;//((post || {}).frontmatter || {}).subTitle;
  const date =          isFields      ? post.fields.prefix : post.date;//((post || {}).fields || {}).prefix;
  const html =          isHtml        ? post.html : post.content;//(post || {}).html;
  const htmlAst =       isHtmlAst     ? post.htmlAst : post.content;//(post || {}).htmlAst;

  const isPost = post;
  const wpCover = isFrontmatter ? '' : isPost ? post.featured_media.source_url : '';

  const publishDate = isFields       ? post.fields.prefix : post.date;
  const modifiedDate = isFrontmatter ? post.frontmatter.date : post.modified;

  return (
    <Article>
      <PostHeader title={title} subTitle={subTitle} publishDate={publishDate} modifiedDate={modifiedDate} post={post} />
      <Content html={html} />
      <PostFooter author={author} post={post} slug={slug} facebook={facebook} />
    </Article>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Post;
