import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Obfuscate from "react-obfuscate";

import Main from "../components/TopMain";
import Article from "../components/TopMain/Article";
import PageHeader from "../components/TopPage/PageHeader";
import Content from "../components/Main/Content";
import config from "../../content/meta/config";

import Helmet from "react-helmet";

const styles = theme => ({
});

const Contact = ({classes}) => {

  const schemaOrgJSONLD = [
      {
        "@context": "http://schema.org",
        "@type": "Blog",
        "name": config.siteTitle,
        "url": config.siteUrl + config.pathPrefix,
        "description": config.siteDescription,
        "publisher": {
          "@type": "Organization",
          "name": config.siteTitle
        },
        "sameAs": [
          config.twitterLink,
          config.FacebookLink,
          config.InstagramLink
        ],
      }
    ];

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

  return (
    <Main>
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
        <meta property="og:url" content={config.siteUrl + config.pathPrefix + "/contact/"} />
        <meta property="og:title" content="お問い合わせ" />
        <meta property="og:description" content="Masaki Nishiへのお問い合わせページ。仕事のご依頼やご質問等はこちらのフォームからお願いいたします。" />
        <meta property="og:image" content={config.siteUrl + config.pathPrefix + config.siteImageOgp} />
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
        <PageHeader title="プライバシーポリシー" />
        <Content>
          <p><a href="/">masakinishi.com</a>（以下、当サイト）では、「個人情報保護方針(プライバシーポリシー)」を定め個人情報の適切な管理・保護に努めることを表明します。</p>

          <p>以下の個人情報保護の基本方針は、当サイト及び管轄のメールアドレス経由で入手した個人情報に対して適用されます。</p>

          <h2>個人情報</h2>
          <p>個人情報とは、当サイトの運営者、ユーザーなど、個人に関する情報であり、当該情報に含まれる特定の個人を識別することができるものを指します。</p>

          <h3>当サイトが扱う個人情報</h3>
          <p>当サイトが保護する対象の個人情報は以下の範囲と定めます。</p>

          <ol>
            <li>お問い合わせページより送信していただいた個人情報</li>
            <li>当サイト管轄のメールアドレスに送信していただいた個人情報</li>
          </ol>

          <h3>個人情報の利用目的</h3>
          <p>当サイトが取得した個人情報は、以下の目的のために利用いたします。</p>

          <ol>
            <li>サービスの提供、ご案内、更新、変更のため</li>
            <li>マーケティング、調査及び分析のため</li>
          </ol>

          <h3>個人情報の管理</h3>
          <p>当サイトは収集した個人情報を、厳重に管理し、「個人情報の保護に関する法律」を遵守します。</p>

          <h3>個人情報の開示</h3>
          <p>当サイトは司法当局等からの要請がある場合を除き、本人の同意なしに第三者に個人情報を提供しません。</p>

          <h2>本プライバシーポリシーについて</h2>
          <p>当サイトは以上のポリシーを必要に応じて予告なく改訂する場合があることをご了承ください。</p>

          <p>個人情報保護方針に関する<a href="/contact/">お問い合わせ</a>は以上のページよりご連絡ください。</p>
        </Content>
      </Article>
    </Main>
  );
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Contact);
