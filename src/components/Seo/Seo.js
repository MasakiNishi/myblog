import React from "react";
import { withPrefix } from "gatsby-link";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import config from "../../../content/meta/config";

const Seo = props => {
  const { data, facebook } = props;
  const postTitle = ((data || {}).frontmatter || {}).title;
  const postDescription = ((data || {}).frontmatter || {}).description;
  const postCover = ((data || {}).frontmatter || {}).cover;
  const postSlug = ((data || {}).fields || {}).slug;

  const title = postTitle ? postTitle : config.siteTitle;
  const description = postDescription ? postDescription : config.siteDescription;
  const url = config.siteUrl + config.pathPrefix + postSlug;

  const isHome = location.pathname === withPrefix("/");
  const isAbout = location.pathname === withPrefix("/about/");
  const isSuccess = location.pathname === withPrefix("/success/");

  const isAbout2 = location.pathname === withPrefix("/about");
  const isSuccess2 = location.pathname === withPrefix("/success");

  if (isHome) {
    return (
      <Helmet
        htmlAttributes={{
          lang: config.siteLanguage,
          prefix: "og: http://ogp.me/ns#"
        }}
      >
        {/* General tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* OpenGraph tags */}
        <meta property="og:url" content={config.siteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={config.siteUrl + config.siteImageOgp} />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content={facebook.appId} />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summarylargeimage" />
        <meta
          name="twitter:site"
          content={config.authorTwitterAccount ? config.authorTwitterAccount : ""}
        />
      </Helmet>
    );
  } else if (isAbout) {
    return (
        <Helmet
          htmlAttributes={{
            lang: config.siteLanguage,
            prefix: "og: http://ogp.me/ns#"
          }}
        >
          {/* General tags */}
          <title>About</title>
          <meta name="description" content="test" />
          {/* OpenGraph tags */}
          <meta property="og:url" content={config.siteUrl + "/about/"} />
          <meta property="og:title" content="About" />
          <meta property="og:description" content="testestest" />
          <meta property="og:image" content={config.siteUrl + config.siteImageOgp} />
          <meta property="og:type" content="article" />
          <meta property="fb:app_id" content={facebook.appId} />
          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summarylargeimage" />
          <meta
            name="twitter:site"
            content={config.authorTwitterAccount ? config.authorTwitterAccount : ""}
          />
        </Helmet>
      );
  } else if (isAbout2) {
    return (
        <Helmet
          htmlAttributes={{
            lang: config.siteLanguage,
            prefix: "og: http://ogp.me/ns#"
          }}
        >
          {/* General tags */}
          <title>About</title>
          <meta name="description" content="test" />
          {/* OpenGraph tags */}
          <meta property="og:url" content={config.siteUrl + "/about/"} />
          <meta property="og:title" content="About" />
          <meta property="og:description" content="testestest" />
          <meta property="og:image" content={config.siteUrl + config.siteImageOgp} />
          <meta property="og:type" content="article" />
          <meta property="fb:app_id" content={facebook.appId} />
          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summarylargeimage" />
          <meta
            name="twitter:site"
            content={config.authorTwitterAccount ? config.authorTwitterAccount : ""}
          />
        </Helmet>
      );
  } else if (isSuccess) {
    return (
        <Helmet
          htmlAttributes={{
            lang: config.siteLanguage,
            prefix: "og: http://ogp.me/ns#"
          }}
        >
          {/* General tags */}
          <title>Success</title>
          <meta name="description" content="tes" />
          {/* OpenGraph tags */}
          <meta property="og:url" content={config.siteUrl + "/success/"} />
          <meta property="og:title" content="Success" />
          <meta property="og:description" content="testestes" />
          <meta property="og:image" content={config.siteUrl + config.siteImageOgp} />
          <meta property="og:type" content="article" />
          <meta property="fb:app_id" content={facebook.appId} />
          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summarylargeimage" />
          <meta
            name="twitter:site"
            content={config.authorTwitterAccount ? config.authorTwitterAccount : ""}
          />
        </Helmet>
      );
  } else if (isSuccess2) {
    return (
        <Helmet
          htmlAttributes={{
            lang: config.siteLanguage,
            prefix: "og: http://ogp.me/ns#"
          }}
        >
          {/* General tags */}
          <title>Success</title>
          <meta name="description" content="tes" />
          {/* OpenGraph tags */}
          <meta property="og:url" content={config.siteUrl + "/success/"} />
          <meta property="og:title" content="Success" />
          <meta property="og:description" content="testestes" />
          <meta property="og:image" content={config.siteUrl + config.siteImageOgp} />
          <meta property="og:type" content="article" />
          <meta property="fb:app_id" content={facebook.appId} />
          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summarylargeimage" />
          <meta
            name="twitter:site"
            content={config.authorTwitterAccount ? config.authorTwitterAccount : ""}
          />
        </Helmet>
      );
  } else {
    return (
        <Helmet
          htmlAttributes={{
            lang: config.siteLanguage,
            prefix: "og: http://ogp.me/ns#"
          }}
        >
          {/* General tags */}
          <title>{title}</title>
          <meta name="description" content={description} />
          {/* OpenGraph tags */}
          <meta property="og:url" content={url} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={config.siteUrl + postCover.childImageSharp.resize.src} />
          <meta property="og:type" content="article" />
          <meta property="fb:app_id" content={facebook.appId} />
          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summarylargeimage" />
          <meta
            name="twitter:site"
            content={config.authorTwitterAccount ? config.authorTwitterAccount : ""}
          />
        </Helmet>
      );
  };

};

Seo.propTypes = {
  data: PropTypes.object,
  facebook: PropTypes.object.isRequired
};

export default Seo;
