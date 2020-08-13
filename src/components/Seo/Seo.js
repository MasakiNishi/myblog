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

  const publishDate = ((data || {}).fields || {}).prefix;
  const modifiedDate = ((data || {}).frontmatter || {}).date;

  const title = postTitle ? postTitle : config.siteTitle;
  const description = postDescription ? postDescription : config.siteDescription;
  const url = config.siteUrl + config.pathPrefix + postSlug;

  const isHome = location.pathname === withPrefix("/");
  const isPost = location.pathname === withPrefix(config.pathPrefix + postSlug);
  const isAbout = location.pathname === withPrefix("/about/") || location.pathname === withPrefix("/about");
  const isSuccess = location.pathname === withPrefix("/success/") || location.pathname === withPrefix("/success");

  const schemaOrgJSONLD = [
      {
        "@context": "http://schema.org",
        "@type": "Blog",
        "name": config.siteTitle,
        "url": config.siteUrl,
        "description": config.siteDescription,
        "publisher": {
          "@type": "Organization",
          "name": config.siteTitle
        },
        "sameAs": [
          "https://twitter.com/masakinishi_com",
          "https://www.facebook.com/masakinishicom/",
          "https://www.instagram.com/masakinishi_com/"
        ],
      }
    ];
    if (isPost) {
      schemaOrgJSONLD.push(
        {
          "@context": "http://schema.org",
          "@type": "BlogPosting",
          "datePublished": publishDate,
          "dateModified": modifiedDate,
          "headline": postTitle,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url
          },
          "description": postDescription,
          "image": {
            "@type": "ImageObject",
            "url": config.siteUrl + postCover.childImageSharp.resize.src,
            "width": 1200,
            "height": 630
          },
          "author": {
            "@type": "Person",
            "name": config.authorName
          },
          "publisher": {
            "@type": "Organization",
            "name": config.siteTitle,
            "logo": {
              "@type": "ImageObject",
              "url": config.siteUrl + "/icons/apple-icon-60x60.png",
              "width": 60,
              "height": 60
            }
          }
        },
        {
          "@context": "http://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@id": config.siteUrl,
                name: "ホーム",
              }
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@id": url,
                name: postTitle,
              }
            }
          ]
        }
      );
    }
    if (isAbout) {
      schemaOrgJSONLD.push(
        {
          "@context": "http://schema.org",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": config.siteUrl + "/about/",
            "headline": "プロフィール"
          },
          "description": "Masaki Nishiのプロフィールページです。現在はサンフランシスコ・シリコンバレー地域のベイエリア周辺でソフトウェアエンジニアをしています。",
          "image": {
            "@type": "ImageObject",
            "url": config.siteUrl + config.siteImageOgp,
            "width": 1200,
            "height": 630
          },
          "author": {
            "@type": "Person",
            "name": config.authorName
          },
          "publisher": {
            "@type": "Organization",
            "name": config.siteTitle,
            "logo": {
              "@type": "ImageObject",
              "url": config.siteUrl + "/icons/apple-icon-60x60.png",
              "width": 60,
              "height": 60
            }
          }
        },
        {
          "@context": "http://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@id": config.siteUrl,
                name: "ホーム",
              }
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@id": config.siteUrl + "/about/",
                name: "プロフィール"
              }
            }
          ]
        }
      );
    }

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
        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
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
          <title>プロフィール</title>
          <meta name="description" content="Masaki Nishiのプロフィールページです。現在はサンフランシスコ・シリコンバレー地域のベイエリア周辺でソフトウェアエンジニアをしています。" />
          {/* Schema.org tags */}
          <script type="application/ld+json">
            {JSON.stringify(schemaOrgJSONLD)}
          </script>
          {/* OpenGraph tags */}
          <meta property="og:url" content={config.siteUrl + "/about/"} />
          <meta property="og:title" content="プロフィール" />
          <meta property="og:description" content="Masaki Nishiのプロフィールページです。現在はサンフランシスコ・シリコンバレー地域のベイエリア周辺でソフトウェアエンジニアをしています。" />
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
            lang: config.siteLanguage
          }}
        >
          <meta name="robots" content="noindex" />
          {/* General tags */}
          <title>お問い合わせ完了しました。</title>
        </Helmet>
      );
  } else if (isPost) {
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
          {/* Schema.org tags */}
          <script type="application/ld+json">
            {JSON.stringify(schemaOrgJSONLD)}
          </script>
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
        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
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
  }

};

Seo.propTypes = {
  data: PropTypes.object,
  facebook: PropTypes.object.isRequired
};

export default Seo;
