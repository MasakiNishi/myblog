import React from "react";
import { withPrefix } from "gatsby-link";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import config from "../../../content/meta/config";

const Seo = props => {
  const { data, page, facebook } = props;

  const isFrontmatter = data && data.frontmatter;
  const isFields = data && data.fields;
  const isData = data;
  const postTitle       = isFrontmatter ? data.frontmatter.title        : isData ? data.title : '';                     //((data || {}).frontmatter || {}).title;
  const postDescription = isFrontmatter ? data.frontmatter.description  : isData ? data.acf.description : '';           //((data || {}).frontmatter || {}).description;
  const postCover       = isFrontmatter ? data.cover                    : isData ? data.featured_media.source_url : ''; //((data || {}).frontmatter || {}).cover;
  const postSlug        = isFields      ? data.fields.slug              : isData ? config.pathPrefix + '/' + data.slug + '/' : null;    //((data || {}).fields || {}).slug;

  const isPage = page;
  const pageTitle       = isPage ? page.title : '';                     //((data || {}).frontmatter || {}).title;
  const pageDescription = isPage ? page.acf.description : '';           //((data || {}).frontmatter || {}).description;
  const pageCover       = isPage ? page.featured_media.source_url : ''; //((data || {}).frontmatter || {}).cover;
  const pageSlug    = isPage ? '/work/' + page.slug + '/' : null;

  const publishDate = isFields       ? data.fields.prefix : isData ? data.date : '';
  const modifiedDate = isFrontmatter ? data.frontmatter.date : isData ? data.modified : '';

  const pagePublishDate = isPage ? page.date : '';
  const pageModifiedDate = isPage ? page.modified : '';

  const isCover = postCover && postCover.childImageSharp;
  const title         = postTitle       ? `${postTitle} - ${config.shortSiteTitle}` : config.siteTitle;
  const description   = postDescription ? postDescription                           : config.siteDescription;
  const image         = isCover         ? postCover.childImageSharp.resize.src      : postCover === '' ? config.siteImage : postCover;
  const url           = config.siteUrl + postSlug;

  const isPageCover = pageCover && pageCover.childImageSharp;
  const workTitle         = pageTitle       ? `${pageTitle} - ${config.shortSiteTitle}` : config.siteTitle;
  const workDescription   = pageDescription ? pageDescription                           : config.siteDescription;
  const workImage         = isPageCover         ? pageCover.childImageSharp.resize.src      : pageCover === '' ? config.siteImage : pageCover;
  const workUrl       = config.siteUrl + pageSlug;

  const isHome = location.pathname === withPrefix("/");
  const isBlog = location.pathname === withPrefix(config.pathPrefix) || location.pathname === withPrefix(config.pathPrefix + "/");
  const isPost = location.pathname === withPrefix(postSlug);
  const isWork = location.pathname === withPrefix("/work/") || location.pathname === withPrefix("/work");
  const isWorkPage = location.pathname === withPrefix(pageSlug);
  const isAbout = location.pathname === withPrefix("/about/") || location.pathname === withPrefix("/about");
  const isUserTerms = location.pathname === withPrefix("/user-terms/") || location.pathname === withPrefix("/user-terms");
  const isPrivacy = location.pathname === withPrefix("/privacy-policy/") || location.pathname === withPrefix("/privacy-policy");
  const isSuccess = location.pathname === withPrefix("/success/") || location.pathname === withPrefix("/success");
  const isContact = location.pathname === withPrefix("/contact/") || location.pathname === withPrefix("/contact");

  const schemaOrgJSONLD = [
    ];
    if (isHome) {
      schemaOrgJSONLD.push(
        {
          "@context": "http://schema.org",
          "@type": "WebSite",
          "name": config.siteHomeTitle,
          "url": config.siteUrl,
          "description": config.siteHomeDescription,
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
            "name": config.shortSiteTitle,
            "url": config.siteUrl,
            "logo": {
              "@type": "ImageObject",
              "url": config.siteUrl + "/icons/apple-icon-60x60.png",
              "width": 60,
              "height": 60
            },
          },
          "sameAs": [
            config.twitterLink,
            config.FacebookLink,
            config.InstagramLink
          ]
        }
      );
    }
    if (isBlog) {
      schemaOrgJSONLD.push(
        {
          "@context": "http://schema.org",
          "@type": "Blog",
          "name": config.siteTitle,
          "url": config.siteUrl + config.pathPrefix + "/",
          "description": config.siteDescription,
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
            "name": config.shortSiteTitle,
            "url": config.siteUrl,
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
          "itemListElement": [
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
            "name": config.shortSiteTitle,
            "url": config.siteUrl,
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
    if (isWork) {
      schemaOrgJSONLD.push(
        {
          "@context": "http://schema.org",
          "@type": "WebPage",
          "name": "過去のお仕事" + " - " + config.shortHomeTitle,
          "url": config.siteUrl + "/" + "work" + "/",
          "description": "サンフランシスコ・シリコンバレー在住のソフトウェアエンジニア、Masaki Nishiの過去のお仕事です。",
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
            "name": config.shortSiteTitle,
            "url": config.siteUrl,
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
                "@id": config.siteUrl + "/" + "work" + "/",
                name: "ワーク",
              }
            }
          ]
        }
      );
    }
    if (isWorkPage) {
      schemaOrgJSONLD.push(
        {"@context": "http://schema.org",
          "@type": "WebPage",
          "datePublished": pagePublishDate,
          "dateModified": pageModifiedDate,
          "name": workTitle,
          "url": workUrl,
          "description": workDescription,
          "image": {
            "@type": "ImageObject",
            "url": workImage,
            "width": 1200,
            "height": 630
          },
          "author": {
            "@type": "Person",
            "name": config.authorName
          },
          "publisher": {
            "@type": "Organization",
            "name": config.shortSiteTitle,
            "url": config.siteUrl,
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
                "@id": config.siteUrl + "/" + "work" + "/",
                name: "ワーク",
              }
            },
            {
              "@type": "ListItem",
              position: 3,
              item: {
                "@id": workUrl,
                name: workTitle,
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
          "@type": "WebPage",
          "url": config.siteUrl + "/about/",
          "name": "プロフィール" + " - " + config.shortHomeTitle,
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
            "name": config.shortSiteTitle,
            "url": config.siteUrl,
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
    if (isUserTerms) {
      schemaOrgJSONLD.push(
        {
          "@context": "http://schema.org",
          "@type": "WebPage",
          "url": config.siteUrl + "/user-terms/",
          "name": "利用規約" + " - " + config.shortHomeTitle,
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
            "name": config.shortSiteTitle,
            "url": config.siteUrl,
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
                "@id": config.siteUrl + "/user-terms/",
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
          "@type": "WebPage",
          "url": config.siteUrl + "/privacy-policy/",
          "name": "プライバシーポリシー" + " - " + config.shortHomeTitle,
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
            "name": config.shortSiteTitle,
            "url": config.siteUrl,
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
                "@id": config.siteUrl + "/privacy-policy/",
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
          "@type": "WebPage",
          "name": "お問い合わせ",
          "url": config.siteUrl + "/contact/",
          "description": "Masaki Nishiへのお問い合わせページ。仕事のご依頼やご質問等はこちらのフォームからお願いいたします。",
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
            "name": config.shortSiteTitle,
            "url": config.siteUrl,
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
                "@id": config.siteUrl  + "/contact/",
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
        <meta name="thumbnail" content={config.siteUrl + config.siteImageOgp} />
        <link rel="canonical" href={config.siteUrl + config.pathPrefix + "/"} />
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
        <meta name="thumbnail" content={image} />
        <link rel="canonical" href={url} />
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
  } else if (isWork) {
    return (
      <Helmet
        htmlAttributes={{
          lang: config.siteLanguage,
          prefix: "og: http://ogp.me/ns#"
        }}
      >
        {/* General tags */}
        <title>{"過去のお仕事" + " - " + config.shortHomeTitle}</title>
        <meta name="description" content="サンフランシスコ・シリコンバレー在住のソフトウェアエンジニア、Masaki Nishiの過去のお仕事です。" />
        <meta name="thumbnail" content={config.siteUrl + config.siteImageOgp} />
        <link rel="canonical" href={config.siteUrl + "/work/"} />
        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
        {/* OpenGraph tags */}
        <meta property="og:url" content={config.siteUrl + "/work/"} />
        <meta property="og:title" content={"過去のお仕事" + " - " + config.shortHomeTitle} />
        <meta property="og:description" content="サンフランシスコ・シリコンバレー在住のソフトウェアエンジニア、Masaki Nishiの過去のお仕事です。" />
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
  } else if (isWorkPage) {
    return (
      <Helmet
        htmlAttributes={{
          lang: config.siteLanguage,
          prefix: "og: http://ogp.me/ns#"
        }}
      >
        {/* General tags */}
        <title>{workTitle}</title>
        <meta name="description" content={workDescription} />
        <meta name="thumbnail" content={workImage} />
        <link rel="canonical" href={workUrl} />
        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
        {/* OpenGraph tags */}
        <meta property="og:url" content={workUrl} />
        <meta property="og:title" content={workTitle} />
        <meta property="og:description" content={workDescription} />
        <meta property="og:image" content={workImage} />
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
          <meta name="thumbnail" content={config.siteUrl + config.siteImageOgp} />
          <link rel="canonical" href={config.siteUrl + "/about/"} />
          {/* Schema.org tags */}
          <script type="application/ld+json">
            {JSON.stringify(schemaOrgJSONLD)}
          </script>
          {/* OpenGraph tags */}
          <meta property="og:url" content={config.siteUrl + "/about/"} />
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
          <meta name="thumbnail" content={config.siteUrl + config.siteImageOgp} />
          <link rel="canonical" href={config.siteUrl + "/user-terms/"} />
          {/* Schema.org tags */}
          <script type="application/ld+json">
            {JSON.stringify(schemaOrgJSONLD)}
          </script>
          {/* OpenGraph tags */}
          <meta property="og:url" content={config.siteUrl + "/user-terms/"} />
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
          <meta name="thumbnail" content={config.siteUrl + config.siteImageOgp} />
          <link rel="canonical" href={config.siteUrl + "/privacy-policy/"} />
          {/* Schema.org tags */}
          <script type="application/ld+json">
            {JSON.stringify(schemaOrgJSONLD)}
          </script>
          {/* OpenGraph tags */}
          <meta property="og:url" content={config.siteUrl + "/privacy-policy/"} />
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
          <meta name="thumbnail" content={config.siteUrl + config.siteImageOgp} />
          <link rel="canonical" href={config.siteUrl + "/success/"} />
          {/* Schema.org tags */}
          <script type="application/ld+json">
            {JSON.stringify(schemaOrgJSONLD)}
          </script>
          {/* OpenGraph tags */}
          <meta property="og:url" content={config.siteUrl + "/success/"} />
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
          <meta name="thumbnail" content={config.siteUrl + config.siteImageOgp} />
          <link rel="canonical" href={config.siteUrl + "/contact/"} />
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
        <meta name="description" content={config.siteHomeDescription} />
        <meta name="thumbnail" content={config.siteUrl + config.siteImageOgp} />
        <link rel="canonical" href={config.siteUrl} />
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
  page: PropTypes.object,
  facebook: PropTypes.object.isRequired
};

export default Seo;
