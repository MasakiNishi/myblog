import React from "react";
import PropTypes from "prop-types";

import Article from "../Main/Article";
import PageHeader from "./PageHeader";
import Content from "../Main/Content";

const Page = props => {
  const { page } = props;
  const isFrontmatter = page && page.frontmatter;
  const isHtml        = page && page.html;
  const frontmatter   = isFrontmatter ? page.frontmatter  : page;
  const html          = isHtml        ? page.html         : page.content;//(page || {}).html;

  return (
    <Article>
      <PageHeader {...frontmatter} />
      <Content html={html} />
    </Article>
  );
};

Page.propTypes = {
  page: PropTypes.object.isRequired
};

export default Page;
