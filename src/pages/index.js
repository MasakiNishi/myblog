import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { forceCheck } from "react-lazyload";

import { setNavigatorPosition, setNavigatorShape } from "../state/store";
import { setFontSizeIncrease } from "../state/store";
import Seo from "../components/Seo";

import Main from "../components/Main";
import Article from "../components/Main/Article";
import Content from "../components/Main/Content";

import Footer from "../components/Footer/";

import config from "../../content/meta/config";
import { ReactComponent as FacebookIcon } from "../images/svg-icons/facebook.svg";
import { ReactComponent as TwitterIcon } from "../images/svg-icons/twitter.svg";
import { ReactComponent as InstaIcon } from "../images/svg-icons/instagram.svg";

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
      "& .Twitter": {
        "& svg": {
          width: "60px",
          height: "40px",
          fill: theme.info.colors.twitterIconsHover
        }
      },
      "& .Facebook": {
        "& svg": {
          width: "60px",
          height: "40px",
          fill: theme.info.colors.facebookIconsHover
        }
      }
    }
  },
  InstaButton: {
      color: "#fff",
      borderRadius: "5px",
      position: "relative",
      display: "inline-block",
      height: "28px",
      width: "28px",
      margin: "5px 15px",
      textAlign: "center",
      fontSize: "14px",
      background: "-webkit-linear-gradient(135deg, #427eff 0%, #f13f79 70%) no-repeat",
      background: "linear-gradient(135deg, #427eff 0%, #f13f79 70%) no-repeat",
      overflow: "hidden",
      "&:before": {
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        width: "120%",
        height: "120%",
        background: "-webkit-linear-gradient(15deg, #ffdb2c, rgb(249, 118, 76) 25%, rgba(255, 77, 64, 0) 50%) no-repeat",
        background: "linear-gradient(15deg, #ffdb2c, rgb(249, 118, 76) 25%, rgba(255, 77, 64, 0) 50%) no-repeat"
      },
      "& svg": {
        fill: "#fff",
        width: "28px",
        position: "relative"
      }
    }
});

class Index extends React.Component {

  componentWillMount() {
    if (this.props.navigatorShape !== "none") {
      this.props.setNavigatorShape("none");
    }
    if (this.props.navigatorPosition !== "top") {
      this.props.setNavigatorPosition("top");
    }
  }

  render() {
    const { classes, data } = this.props;
    const facebook = (((data || {}).site || {}).siteMetadata || {}).facebook;

    const items = config.authorSocialLinks;
    const icons = {
      Twitter: TwitterIcon,
      Facebook: FacebookIcon
    };
    const instaUrl = 'https://www.instagram.com/masakinishi_com/';

    return (
        <Main>
          <Seo facebook={facebook} location={this.props.location} />
          <Article>
            <content className={classes.content}>
              <h1>Hi, I'm Masaki!</h1>
              <p>大学を2年間休学し、サンフランシスコ・シリコンバレーを含めたベイエリアでソフトウェアエンジニアとして働いていました。
              現在は帰国、復学しており経済を学びつつ、サンフランシスコの会社と東証一部上場の大手企業さんとフリーランスのリモートソフトウェアエンジニア、ウェブマーケターとして働かせていただいております。2020年4月からは新卒外資ITとなります。</p>
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
                  <a
                    href={instaUrl}
                    className={classes.InstaButton}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram"
                  >
                    <InstaIcon/ >
                  </a>
                </div>
            </content>
          </Article>
          <Footer footnote={data.footnote} />
      </Main>
    );
  }
}

Index.propTypes = {
  data: PropTypes.object.isRequired,
  navigatorPosition: PropTypes.string.isRequired,
  setNavigatorPosition: PropTypes.func.isRequired,
  setFontSizeIncrease: PropTypes.func.isRequired,
  fontSizeIncrease: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    navigatorPosition: state.navigatorPosition,
    fontSizeIncrease: state.fontSizeIncrease
  };
};

const mapDispatchToProps = {
  setNavigatorPosition,
  setNavigatorShape,
  setFontSizeIncrease
};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Index));

//eslint-disable-next-line no-undef
export const query = graphql`
  query indexQuery {
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
    footnote: markdownRemark(id: { regex: "/footnote/" }) {
      id
      html
    }
  }
`;
