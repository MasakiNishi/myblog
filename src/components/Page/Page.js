import React from "react";
import PropTypes from "prop-types";
import { withPrefix } from "gatsby-link";

import Article from "../Main/Article";
import PageHeader from "./PageHeader";
import Content from "../Main/Content";

const Page = props => {
  const { page } = props;
  const isFrontmatter = page && page.frontmatter;
  const isFields = page && page.fields;
  const isHtml        = page && page.html;
  const frontmatter   = isFrontmatter ? page.frontmatter  : page;
  const html          = isHtml        ? page.html         : page.content;//(page || {}).html;

  const isPage = page;
  const wpCover = isFrontmatter ? '' : isPage ? page.featured_media.source_url : '';

  const publishDate = isFields       ? page.fields.prefix : page.date;
  const modifiedDate = isFrontmatter ? page.frontmatter.date : page.modified;

  const pageSlug    = isPage ? '/work/' + page.slug + '/' : null;
  const isWorkPage = location.pathname === withPrefix(pageSlug);

  return (
    <Article>
      <PageHeader publishDate={publishDate} modifiedDate={modifiedDate} wpCover={wpCover} isWorkPage={isWorkPage} {...frontmatter} />
      <Content html={html} />
    </Article>
  );
};

Page.propTypes = {
  page: PropTypes.object.isRequired
};

export default Page;
