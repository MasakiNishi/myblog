import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Obfuscate from "react-obfuscate";

import Main from "../components/Main";
import Article from "../components/Main/Article";
import PageHeader from "../components/Page/PageHeader";
import Content from "../components/Main/Content";
import config from "../../content/meta/config";

import Helmet from "react-helmet";

const styles = theme => ({
  content: {
    "& .gatsby-resp-image-link": {
      margin: "2em -1rem",
      border: "none",
      display: "block",
      [`@media (min-width: 426px)`]: {
        margin: "2em -1.5rem",
      },
      [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
        margin: "2.5em -3.5rem"
      }
    },
    "& .box": {
      padding: "2em 1em",
      border: "1px dashed #ddd",
      marginBottom: "1.5em",
      [`@media (max-width: ${theme.mediaQueryTresholds.M}px)`]: {
        padding: "1.5em 1em"
      },
      "& p": {
          margin: "0 0 0 0"
      },
      "& ul": {
        margin: "0 0 0 0",
        "& li": {
          margin: "0 0 1em 0",
          "&:last-child": {
            margin: "0 0 0 0"
          }
        }
      }
    }
  }
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
        <PageHeader title="プロフィール" />
        <Content>
          <a className="gatsby-resp-image-link" href="https://masakinishi.imgix.net/uploads/about.png?auto=compress%2Cformat&q=95&s=487ea2ec125572b5b7140da6f1b54f70" target="_blank" rel="noopener noreferrer">
            <img style={{width: "100%"}} alt="Masaki Nishiのプロフィール" title="Masaki Nishiのプロフィール"
              src="https://masakinishi.imgix.net/uploads/about.png?auto=compress%2Cformat&q=95&s=487ea2ec125572b5b7140da6f1b54f70"
              srcSet="https://masakinishi.imgix.net/uploads/about.png?auto=compress%2Cformat&&q=95&w=300&s=487ea2ec125572b5b7140da6f1b54f70 300w, https://masakinishi.imgix.net/uploads/about.png?auto=compress%2Cformat&&q=95&w=600&s=487ea2ec125572b5b7140da6f1b54f70 600w, https://masakinishi.imgix.net/uploads/about.png?auto=compress%2Cformat&&q=95&w=1200&s=487ea2ec125572b5b7140da6f1b54f70 1200w"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </a>

          <h2>軽い自己紹介</h2>

          <p>北海道出身の22歳大学4年生。スノーボードと犬が好き。</p>

          <p>大学3年次の後期に東南アジア、インド、中国を放浪しつつソフトウェアエンジニアとしてフリーランスを経験し、ソーシャルシェアリングサービス系の開発やウェブメディアの運営・バイアウト、SEOコンサルティングを経験しました。並行して大学の講義をリモートで受講していたので、3年次を修了しました。</p>


          <p>その後、1年間休学しサンフランシスコ・シリコンバレーを拠点に<a href="http://btrax.com/jp/" target="_blank" rel="noopener noreferrer">btrax</a>でソフトウェアエンジニアインターンとして働き始めました。現在は休学2年目になり、継続してお仕事をしています。</p>

          <p>btraxでは、マーケティング50%（主にSEO）、デベロップメント50%くらいのタスクです。SEOに関してはバチクソ詳しいです。</p>

          <h2>僕が提供できるコンテンツの価値</h2>

          <p>僕自身は、大学生からプログラミングの独学を始め、英語に至ってはサンフランシスコでインターンをする半年前に中学レベルの参考書から勉強をし直したという急激なキャリアチェンジを経験しているので、「今からじゃ遅いかな？」と考えている人に有益な情報を提供できます。</p>

          <p>また、もともとビジネス・テクノロジーに興味があり、現在はサンフランシスコ・シリコンバレー地域のベイエリアで1年以上働いているので、スタートアップ情報や、投資情報、最新テクノロジーに詳しいです。</p>

          <p>このブログやSNSでは、上記の情報だけでなく、海外で働きたい人、英語やプログラミングの初学者に向けて有益な情報を発信しています。SNSではブログで書かないこともつぶやいてるので興味あるかたはフォローしてください！今後の活動の励みになります。</p>

          <div className="box">

          <ul>
            <li><a href="https://twitter.com/masakinishi_com/" target="_blank" rel="noopener noreferrer">Masaki Nishi＠エンジニア (@masakinishi_com) | Twitter</a></li>
            <li><a href="https://www.facebook.com/masakinishicom/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/masakinishi_com/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>

          </div>

          <h3>過去のbtraxブログでの代表執筆記事</h3>

          <div className="box">

          <ul>
            <li><a href="https://blog.btrax.com/jp/retail-store-startup/" target="_blank" rel="noopener noreferrer">小売業界の敵はAmazonではない? これからの小売が知っておくべき課題</a> | 524 shares | <a href="https://newspicks.com/news/3072396" target="_blank" rel="noopener noreferrer">811 picks</a></li>
            <li><a href="https://blog.btrax.com/jp/bikeshare-in-sanfrancisco/" target="_blank" rel="noopener noreferrer">シェアサイクル事業問題から見るサンフランシスコ市の意思決定の早さ</a> | 238 shares</li>
            <li><a href="https://blog.btrax.com/jp/millennials-characteristics/" target="_blank" rel="noopener noreferrer">95年生まれが思う日本とアメリカのミレニアル世代の特徴と消費行動</a> | 171 shares</li>
            <li><a href="https://blog.btrax.com/jp/millennials-mindset-startup/" target="_blank" rel="noopener noreferrer">ミレニアル世代のマインドセットを捉えて成功したスタートアップ事例</a> | 138 shares</li>
            <li><a href="https://blog.btrax.com/jp/ai-history/" target="_blank" rel="noopener noreferrer">人工知能(AI)のできることとは？歴史から学ぶ現状と未来予測</a> | 169 shares</li>
            <li><a href="https://blog.btrax.com/jp/affected-by-blockchain/" target="_blank" rel="noopener noreferrer">ブロックチェーン技術の仕組みが大きな影響を与える15の業界</a> | 401 shares</li>
          </ul>

          </div>

          <h2>近い将来の予定</h2>

          <p>これからの予定ですが、2020年に日本の大学を卒業後、ドイツで新卒フリーランスとして移住し、ドイツのミュンヘンにある大学で修士号ではなく、第2学士号を取得する予定です。</p>

          <p>お仕事の依頼やご質問等は<a href="/contact/">お問い合わせ</a>からお願いいたします。</p>
        </Content>
      </Article>
    </Main>
  );
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Contact);
