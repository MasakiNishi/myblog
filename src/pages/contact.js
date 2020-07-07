import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Obfuscate from "react-obfuscate";

import Main from "../components/Main";
import Article from "../components/Main/Article";
import PageHeader from "../components/Page/PageHeader";
import Content from "../components/Main/Content";
import Form from "../components/ContactForm";
import config from "../../content/meta/config";

import Helmet from "react-helmet";

const styles = theme => ({});

const Contact = () => {

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
          "http://facebook.com/masakinishi",
          "https://twitter.com/masakinishi_com"
        ],
      }
    ];

    schemaOrgJSONLD.push(
      {
        "@context": "http://schema.org",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": config.siteUrl + "/contact/",
          "headline": "Contact"
        },
        "description": "Contact",
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
              "@id": config.siteUrl + "/contact/",
              name: "Contact",
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
        <title>Contact</title>
        <meta name="description" content="test" />
        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
        {/* OpenGraph tags */}
        <meta property="og:url" content={config.siteUrl + "/contact/"} />
        <meta property="og:title" content="Contact" />
        <meta property="og:description" content="testestest" />
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
      <Article>
        <PageHeader title="Contact" />
        <Content>
          Feel free to contact me by email: <Obfuscate email={config.contactEmail} /> or use the
          form below.
        </Content>
        <Form />
      </Article>
    </Main>
  );
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Contact);
