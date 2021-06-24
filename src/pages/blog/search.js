import React from "react";
import PropTypes from "prop-types";
require("core-js/fn/array/find");

import Main from "../../components/Main";
import Article from "../../components/Main/Article";
import PageHeader from "../../components/Page/PageHeader";
import Search from "../../components/Search";

import Helmet from "react-helmet";
import config from "../../../content/meta/config";

const SearchPage = props => {
  const { data, facebook } = props;

  const schemaOrgJSONLD = [
    ];

    schemaOrgJSONLD.push(
      {
        "@context": "http://schema.org",
        "@type": "WebPage",
        "url": config.siteUrl + config.pathPrefix + "/search/",
        "name": "ブログ内検索" + " - " + config.shortHomeTitle,
        "description": "海外エンジニアブログのサイト内検索ページです。Masaki Nishiの過去の執筆記事を検索できます。",
        "image": {
          "@type": "ImageObject",
          "url": config.siteImageOgp,
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
              "@id": config.siteUrl + config.pathPrefix,
              name: "ブログ",
            }
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@id": config.siteUrl + config.pathPrefix + "/search/",
              name: "サイト内検索",
            }
          }
        ]
      }
    );

  return (
    <Main>
      <Helmet
        htmlAttributes={{
          lang: config.siteLanguage,
          prefix: "og: http://ogp.me/ns#"
        }}
      >
        {/* General tags */}
        <title>{"ブログ内検索" + " - " + config.shortHomeTitle}</title>
        <meta name="description" content="海外エンジニアブログのサイト内検索ページです。Masaki Nishiの過去の執筆記事を検索できます。" />
        <meta name="thumbnail" content={config.siteImageOgp} />
        <link rel="canonical" href={config.siteUrl + config.pathPrefix + "/search/"} />
        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
        {/* OpenGraph tags */}
        <meta property="og:url" content={config.siteUrl + config.pathPrefix + "/search/"} />
        <meta property="og:title" content={"ブログ内検索" + " - " + config.shortHomeTitle} />
        <meta property="og:description" content="海外エンジニアブログのサイト内検索ページです。Masaki Nishiの過去の執筆記事を検索できます。" />
        <meta property="og:image" content={config.siteImageOgp} />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="0" />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summarylargeimage" />
        <meta
          name="twitter:site"
          content={config.authorTwitterAccount ? config.authorTwitterAccount : ""}
        />
      </Helmet>
      <Article>
        <PageHeader title="ブログ内検索" />
        <Search algolia={data.site.siteMetadata.algolia} />
      </Article>
    </Main>
  );
};

SearchPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default SearchPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query algoliaQuery {
    site {
      siteMetadata {
        algolia {
          appId
          searchOnlyApiKey
          indexName
        }
      }
    }
  }
`;
