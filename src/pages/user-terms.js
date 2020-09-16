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
        <PageHeader title="利用規約" />
        <Content>
          <p><a href="/">masakinishi.com</a>（以下、当サイト）は、2018月5月17日にドメインを取得し、2018年9月1日からコンテンツを発信し、運営を始めました。</p>

          <p>以下の各事項をご了承の上、当サイトをご利用ください。</p>

          <h2>リンクについて</h2>
          <p>当サイトへのリンクを規制することは原則ありません。但し、以下のサイトについてのリンクは禁止させていただきます。</p>

          <ol>
            <li>当サイトを誹謗中傷するサイトからのリンク</li>
            <li>公序良俗に反するサイトまたは関連するサイトからのリンク</li>
            <li>違法なコンテンツや活動に関与したサイトからのリンク</li>
            <li>その他当サイトが不適切と判断するリンク</li>
          </ol>

          <h3>当サイトから外部サイトへのリンクについて</h3>
          <p>当サイトからのリンク先サイトから発生するあらゆる問題に対して当サイトは一切の責任を負いません。当サイトはユーザー様への便宜のためにリンクを提供いたしますが、当サイトが推薦していることを意味するものではありません。</p>

          <h2>著作権について</h2>
          <p>当サイト上の文章、画像、映像、音楽、音声、その他の著作物は当ブログおよび運営者、関連会社、第三者有する著作権、特許権、商標権その他の権利により保護されております。許可なしに、本サービスを通じて入手するいかなる情報、ソフトウェア、製品またはサービスに対しても、変更、複写、頒布、上映、複製、出版、許諾、二次的著作物の作成、譲渡あるいは販売などを行うことはできません。</p>

          <h2>プライバシーおよび個人情報の保護</h2>
          <p>当サイトのご利用は、ユーザー様ご自身の責任によるものとします。当サイトから入手された情報、データ類により発生した、いかなる問題、損害に関しても一切の責任を負いません。</p>

          <h2>クッキー(cookie)について</h2>
          <p>当サイトは、ウェブページのアクセス解析サービスであるGoogle Analyticsを利用しています。そのため、一部ページにおいてサービスにより提供されるクッキーを使用しています。クッキーに関する情報、収集される情報についての詳細は、Google Analyticsのプライバシーポリシーをご確認ください。</p>

          <h2>本利用規約について</h2>
          <p>当サイトは以上の利用規約を必要に応じて予告なく改訂する場合があることをご了承ください。</p>

          <p>利用規約に関する<a href="/contact/">お問い合わせ</a>は以上のページよりご連絡ください。</p>
        </Content>
      </Article>
    </Main>
  );
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Contact);
