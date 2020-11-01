import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { forceCheck } from "react-lazyload";

import Main from "../Main";
import Article from "../Main/Article";
import Content from "../Main/Content";

import config from "../../../content/meta/config";
import { ReactComponent as FacebookIcon } from "../../images/svg-icons/facebook.svg";
import { ReactComponent as TwitterIcon } from "../../images/svg-icons/twitter.svg";
import { ReactComponent as InstaIcon } from "../../images/svg-icons/instagram.svg";

const styles = theme => ({
  content: {
    color: theme.main.colors.content,
    fontSize: props => `calc(${theme.main.fonts.content.size}em * ${props.fontSizeIncrease})`,
    lineHeight: theme.main.fonts.content.lineHeight,
    "& a": {
      color: theme.base.colors.link
    },
    "& h1": {
      color: theme.main.colors.title,
      fontSize: `${theme.main.fonts.title.sizeM}em`,
      letterSpacing: "-0.04em",
      fontWeight: theme.main.fonts.title.weight,
      lineHeight: "1.2",
      margin: "0 0 0.4em",
      [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
        fontSize: `${theme.main.fonts.title.sizeM}em`
      },
      [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
        fontSize: `${theme.main.fonts.title.sizeL}em`,
        letterSpacing: "-0.05em"
      }
    },
    "& h2, & h3": {
      color: theme.main.colors.contentHeading,
      fontWeight: theme.main.fonts.contentHeading.weight,
      lineHeight: theme.main.fonts.contentHeading.lineHeight,
      margin: "2em 0 1em",
      letterSpacing: "-0.02em"
    },
    "& h2": {
      fontSize: `${theme.main.fonts.contentHeading.h2SizeM}em`,
      [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
        fontSize: `${theme.main.fonts.contentHeading.h2SizeM}em`
      },
      [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
        fontSize: `${theme.main.fonts.contentHeading.h2SizeL}em`
      }
    },
    "& h3": {
      fontSize: `${theme.main.fonts.contentHeading.h3SizeM}em`,
      [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
        fontSize: `${theme.main.fonts.contentHeading.h3SizeM}em`
      },
      [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
        fontSize: `${theme.main.fonts.contentHeading.h3SizeL}em`
      }
    },
    "& p": {
      margin: "0 0 1.5em 0",
      fontWeight: 400
    },
    "& ul": {
      padding: "0 0 0 1.3em",
      [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
        padding: "0 0 0 2em"
      }
    },
    "& li": {
      margin: "0 0 .5em 0",
      "& p": {
        margin: "0 0 0 0"
      },
      "&:last-child": {
        margin: "0 0 0 0"
      }
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      fontSize: `${theme.main.fonts.content.sizeM}em`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      fontSize: `${theme.main.fonts.content.sizeL}em`
    },
    "& div": {
      display: "flex",
      justifyContent: "left",
      flexWrap: "wrap",
      margin: "0 0 4em 0",
      [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
        margin: "0"
      },
      "& .link": {
        display: "inline-block",
        padding: "8px"
      },
      "& svg": {
        width: "60px",
        height: "40px"
      },
      "& .Twitter": {
        "& svg": {
          fill: theme.info.colors.twitterIconsHover
        }
      },
      "& .Facebook": {
        "& svg": {
          fill: theme.info.colors.facebookIconsHover
        }
      },
      "& .Instagram": {
        "& svg": {
          fill: theme.info.colors.instaIconsHover
        }
      }
    }
  }
});

class Navigator extends React.Component {

  render() {
    const { classes } = this.props;

    const items = config.authorSocialLinks;
    const icons = {
      Twitter: TwitterIcon,
      Facebook: FacebookIcon,
      Instagram: InstaIcon
    };

    return (
      <Main>
        <Article>
          <content className={classes.content}>
            <h1>Hi, I'm Masaki!</h1>
            <p>大学を2年間休学し、サンフランシスコ・シリコンバレーを含めたベイエリアでソフトウェアエンジニアとして働いていました。
            現在は帰国、復学しており経済を学びつつ、サンフランシスコの会社と東証一部上場の大手企業さんでフリーランスのリモートソフトウェアエンジニア、ウェブマーケターとして働いています。</p>
            <p>個人ワークではSEO特化のメディア構築してライターさんを雇って運営しています。最近はJAMStackの概念にはまっており、このブログ兼ポートフォリオを作りました。</p>
            <h2>Know me more?</h2>
            <ul>
              <li><a href="/about/">詳細プロフィール</a></li>
              <li><a href="/blog/">ブログ</a></li>
              <li><a href="/work/">お仕事</a></li>
            </ul>
            <h2>Get in touch!</h2>
              <div>
                {items.map(item => {
                  const Icon = icons[item.name];
                  return (
                    <a
                      href={item.url}
                      key={item.name}
                      className={`${classes.link} ${item.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={item.name}
                    >
                      <Icon className={classes.svg} />
                    </a>
                  );
                })}
                <svg width="0" height="0">
                  <radialGradient id="rg" r="150%" cx="30%" cy="107%">
                    <stop stopColor="#fdf497" offset="0" />
                    <stop stopColor="#fdf497" offset="0.05" />
                    <stop stopColor="#fd5949" offset="0.45" />
                    <stop stopColor="#d6249f" offset="0.6" />
                    <stop stopColor="#285AEB" offset="0.9" />
                  </radialGradient>
                </svg>
              </div>
          </content>
        </Article>
      </Main>
    );
  }
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(Navigator);
