import React from "react";
import { withPrefix } from "gatsby-link";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import config from "../../../content/meta/config";

const Seo = props => {
  const { data, facebook } = props;

  const isFrontmatter = data && data.frontmatter;
  const isFields = data && data.fields;
  const isData = data;
  const postTitle       = isFrontmatter ? data.frontmatter.title        : isData ? data.title : '';                     //((data || {}).frontmatter || {}).title;
  const postDescription = isFrontmatter ? data.frontmatter.description  : isData ? data.acf.description : '';           //((data || {}).frontmatter || {}).description;
  const postCover       = isFrontmatter ? data.cover                    : isData ? data.featured_media.source_url : ''; //((data || {}).frontmatter || {}).cover;
  const postSlug        = isFields      ? data.fields.slug              : isData ? config.pathPrefix + '/' + data.slug + '/' : null;    //((data || {}).fields || {}).slug;

  const publishDate = isFields       ? data.fields.prefix : isData ? data.date : '';
  const modifiedDate = isFrontmatter ? data.frontmatter.date : isData ? data.modified : '';

  const isCover = postCover && postCover.childImageSharp;
  const title         = postTitle       ? `${postTitle} - ${config.shortSiteTitle}` : config.siteTitle;
  const description   = postDescription ? postDescription                           : config.siteDescription;
  const image         = isCover         ? postCover.childImageSharp.resize.src      : postCover === '' ? config.siteImage : postCover;
  const url           = config.siteUrl + postSlug;

  const isHome = location.pathname === config.siteUrl;
  const isBlog = location.pathname === withPrefix(config.pathPrefix) || location.pathname === withPrefix(config.pathPrefix + "/");
  const isPost = location.pathname === withPrefix(postSlug);
  const isAbout = location.pathname === withPrefix("/about/") || location.pathname === withPrefix("/about");
  const isUserTerms = location.pathname === withPrefix("/user-terms/") || location.pathname === withPrefix("/user-terms");
  const isPrivacy = location.pathname === withPrefix("/privacy-policy/") || location.pathname === withPrefix("/privacy-policy");
  const isSuccess = location.pathname === withPrefix("/success/") || location.pathname === withPrefix("/success");
  const isContact = location.pathname === withPrefix("/contact/") || location.pathname === withPrefix("/contact");

  const schemaOrgJSONLD = [
      {
        "@context": "http://schema.org",
        "@type": "WebSite",
        "name": config.siteHomeTitle,
        "url": config.siteUrl,
        "description": config.siteHomeDescription,
        "publisher": {
          "@type": "Organization",
          "name": config.siteHomeTitle
        },
        "sameAs": [
          config.twitterLink,
          config.FacebookLink,
          config.InstagramLink
        ],
      }
    ];
    if (isBlog) {
      schemaOrgJSONLD.push(
        {
          "@context": "http://schema.org",
          "@type": "Blog",
          "name": config.siteTitle,
          "url": config.siteUrl + config.pathPrefix + "/",
          "description": config.siteDescription,
          "publisher": {
            "@type": "Organization",
            "name": config.siteTitle
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
                "@id": config.siteUrl + config.pathPrefix + "/",
                name: "ブログ",
              }
            }
          ]
        }
      );
    }
    if (isPost) {
      schemaOrgJSONLD.push(
        {
          "@context": "http://schema.org",
          "@type": "Blog",
          "name": config.siteTitle,
          "url": config.siteUrl + config.pathPrefix + "/",
          "description": config.siteDescription,
          "publisher": {
            "@type": "Organization",
            "name": config.siteTitle
          }
        },
        {
          "@context": "http://schema.org",
          "@type": "BlogPosting",
          "datePublished": publishDate,
          "dateModified": modifiedDate,
          "headline": title,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url
          },
          "description": description,
          "image": {
            "@type": "ImageObject",
            "url": image,
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
              "url": config.siteUrl + config.pathPrefix + "/icons/apple-icon-60x60.png",
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
                "@id": config.siteUrl + config.pathPrefix + "/",
                name: "ブログ",
              }
            },
            {
              "@type": "ListItem",
              position: 3,
              item: {
                "@id": url,
                name: title,
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
          "@type": "Blog",
          "name": config.siteTitle,
          "url": config.siteUrl + config.pathPrefix + "/",
          "description": config.siteDescription,
          "publisher": {
            "@type": "Organization",
            "name": config.siteTitle
          }
        },
        {
          "@context": "http://schema.org",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": config.siteUrl + config.pathPrefix + "/about/",
            "headline": "プロフィール" + " - " + config.shortHomeTitle
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
              "url": config.siteUrl + config.pathPrefix + "/icons/apple-icon-60x60.png",
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
                "@id": config.siteUrl + config.pathPrefix + "/",
                name: "ブログ",
              }
            },
            {
              "@type": "ListItem",
              position: 3,
              item: {
                "@id": config.siteUrl + config.pathPrefix + "/about/",
                name: "プロフィール"
              }
            }
          ]
        }
      );
    }
    if (isUserTerms) {
      schemaOrgJSONLD.push(
        {
          "@context": "http://schema.org",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": config.siteUrl + config.pathPrefix + "/user-terms/",
            "headline": "利用規約" + " - " + config.shortHomeTitle
          },
          "description": "Masaki Nishiのポートフォリオ・ブログの利用に関する規約・注意事項です。",
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
              "url": config.siteUrl + config.pathPrefix + "/icons/apple-icon-60x60.png",
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
                "@id": config.siteUrl + config.pathPrefix + "/user-terms/",
                name: "利用規約"
              }
            }
          ]
        }
      );
    }
    if (isPrivacy) {
      schemaOrgJSONLD.push(
        {
          "@context": "http://schema.org",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": config.siteUrl + config.pathPrefix + "/privacy-policy/",
            "headline": "プライバシーポリシー" + " - " + config.shortHomeTitle
          },
          "description": "Masaki Nishiのポートフォリオ・ブログのプライバシーポリシーです。",
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
              "url": config.siteUrl + config.pathPrefix + "/icons/apple-icon-60x60.png",
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
                "@id": config.siteUrl + config.pathPrefix + "/privacy-policy/",
                name: "プライバシーポリシー"
              }
            }
          ]
        }
      );
    }
    if (isContact) {
      schemaOrgJSONLD.push(
        {
          "@context": "http://schema.org",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": config.siteUrl + config.pathPrefix + "/contact/",
            "headline": "お問い合わせ"
          },
          "description": "Masaki Nishiへのお問い合わせページ。仕事のご依頼やご質問等はこちらのフォームからお願いいたします。",
          "image": {
            "@type": "ImageObject",
            "url": config.siteUrl  + config.pathPrefix + config.siteImageOgp,
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
              "url": config.siteUrl  + config.pathPrefix + "/icons/apple-icon-60x60.png",
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
                "@id": config.siteUrl + config.pathPrefix,
                name: "ホーム",
              }
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@id": config.siteUrl  + config.pathPrefix + "/contact/",
                name: "お問い合わせ",
              }
            }
          ]
        }
      );
    }

  if (isBlog) {
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
        <meta property="og:url" content={config.siteUrl + config.pathPrefix + "/"} />
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
          <title>{"プロフィール" + " - " + config.shortHomeTitle}</title>
          <meta name="description" content="Masaki Nishiのプロフィールページです。現在はサンフランシスコ・シリコンバレー地域のベイエリア周辺でソフトウェアエンジニアをしています。" />
          {/* Schema.org tags */}
          <script type="application/ld+json">
            {JSON.stringify(schemaOrgJSONLD)}
          </script>
          {/* OpenGraph tags */}
          <meta property="og:url" content={config.siteUrl + config.pathPrefix + "/about/"} />
          <meta property="og:title" content={"プロフィール" + " - " + config.shortHomeTitle} />
          <meta property="og:description" content="Masaki Nishiのプロフィールページです。現在はサンフランシスコ・シリコンバレー地域のベイエリア周辺でソフトウェアエンジニアをしています。" />
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
  } else if (isUserTerms) {
    return (
        <Helmet
          htmlAttributes={{
            lang: config.siteLanguage,
            prefix: "og: http://ogp.me/ns#"
          }}
        >
          {/* General tags */}
          <title>{"利用規約" + " - " + config.shortHomeTitle}</title>
          <meta name="description" content="Masaki Nishiのポートフォリオ・ブログの利用に関する規約・注意事項です。" />
          {/* Schema.org tags */}
          <script type="application/ld+json">
            {JSON.stringify(schemaOrgJSONLD)}
          </script>
          {/* OpenGraph tags */}
          <meta property="og:url" content={config.siteUrl + config.pathPrefix + "/user-terms/"} />
          <meta property="og:title" content={"利用規約" + " - " + config.shortHomeTitle} />
          <meta property="og:description" content="Masaki Nishiのポートフォリオ・ブログの利用に関する規約・注意事項です。" />
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
  } else if (isPrivacy) {
    return (
        <Helmet
          htmlAttributes={{
            lang: config.siteLanguage,
            prefix: "og: http://ogp.me/ns#"
          }}
        >
          {/* General tags */}
          <title>{"プライバシーポリシー" + " - " + config.shortHomeTitle}</title>
          <meta name="description" content="Masaki Nishiのポートフォリオ・ブログのプライバシーポリシーです。" />
          {/* Schema.org tags */}
          <script type="application/ld+json">
            {JSON.stringify(schemaOrgJSONLD)}
          </script>
          {/* OpenGraph tags */}
          <meta property="og:url" content={config.siteUrl + config.pathPrefix + "/privacy-policy/"} />
          <meta property="og:title" content={"プライバシーポリシー" + " - " + config.shortHomeTitle} />
          <meta property="og:description" content="Masaki Nishiのポートフォリオ・ブログのプライバシーポリシーです。" />
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
  } else if (isSuccess) {
    return (
        <Helmet
          htmlAttributes={{
            lang: config.siteLanguage,
            prefix: "og: http://ogp.me/ns#"
          }}
        >
          {/* General tags */}
          <title>お問い合わせ完了しました。</title>
          <meta name="description" content="Masaki Nishiへのお問い合わせ完了ページ。" />
          {/* Schema.org tags */}
          <script type="application/ld+json">
            {JSON.stringify(schemaOrgJSONLD)}
          </script>
          {/* OpenGraph tags */}
          <meta property="og:url" content={config.siteUrl + config.pathPrefix + "/success/"} />
          <meta property="og:title" content="お問い合わせ完了ページ" />
          <meta property="og:description" content="Masaki Nishiへのお問い合わせ完了ページ。" />
          <meta property="og:image" content={config.siteUrl + config.siteImageOgp} />
          <meta property="og:type" content="article" />
          <meta property="fb:app_id" content="0" />
          {/* robots */}
          <meta name="robots" content="noindex" />
          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summarylargeimage" />
          <meta
            name="twitter:site"
            content={config.authorTwitterAccount ? config.authorTwitterAccount : ""}
          />
        </Helmet>
      );
  } else if (isContact) {
    return (
        <Helmet
          htmlAttributes={{
            lang: config.siteLanguage,
            prefix: "og: http://ogp.me/ns#"
          }}
        >
          {/* General tags */}
          <title>お問い合わせ</title>
          <meta name="description" content="Masaki Nishiへのお問い合わせページ。仕事のご依頼やご質問等はこちらのフォームからお願いいたします。" />
          {/* Schema.org tags */}
          <script type="application/ld+json">
            {JSON.stringify(schemaOrgJSONLD)}
          </script>
          {/* OpenGraph tags */}
          <meta property="og:url" content={config.siteUrl + "/contact/"} />
          <meta property="og:title" content="お問い合わせ" />
          <meta property="og:description" content="Masaki Nishiへのお問い合わせページ。仕事のご依頼やご質問等はこちらのフォームからお願いいたします。" />
          <meta property="og:image" content={config.siteUrl + config.siteImageOgp} />
          <meta property="og:type" content="article" />
          <meta property="fb:app_id" content="0" />
          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summarylargeimage" />
          <meta
            name="twitter:site"
            content={config.authorTwitterAccount ? config.authorTwitterAccount : ""}
          />
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
          <meta property="og:image" content={image} />
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
        <title>{config.siteHomeTitle}</title>
        <meta name="description" content={description} />
        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
        {/* OpenGraph tags */}
        <meta property="og:url" content={config.siteUrl} />
        <meta property="og:title" content={config.siteHomeTitle} />
        <meta property="og:description" content={config.siteHomeDescription} />
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
  };

};

Seo.propTypes = {
  data: PropTypes.object,
  facebook: PropTypes.object.isRequired
};

export default Seo;
