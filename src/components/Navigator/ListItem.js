import React from "react";
import Link from "gatsby-link";
import { withPrefix } from "gatsby-link";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import LazyLoad from "react-lazyload";

import { setCategoryFilter } from "../../state/store";

import config from "../../../content/meta/config";

const styles = theme => ({
  listItem: {
    margin: "0 0 .7em 0",
    transition: "height 1s",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      margin: "0 0 1.5rem 0"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      ".moving-featured &, .is-aside &": {
        margin: "0 0 0 0"
      }
    }
  },
  listLink: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    padding: ".7em 1em .7em 1em",
    color: theme.navigator.colors.postsListItemLink,
    "@media (hover: hover)": {
      "&:hover": {
        color: theme.navigator.colors.postsListItemLinkHover,
        "& .pointer": {
          borderRadius: "65% 75%"
        }
      }
    }
  },
  listItemPointer: {
    position: "relative",
    flexShrink: 0,
    overflow: "hidden",
    borderRadius: "75% 65%",
    width: "60px",
    height: "60px",
    margin: "0",
    transition: "all .5s",
    "& img": {
      width: "100%",
      height: "100%"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      marginRight: ".5em",
      width: "80px",
      height: "80px"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      marginRight: ".8em",
      width: "90px",
      height: "90px",
      transition: "all .3s",
      transitionTimingFunction: "ease",
      ".moving-featured &, .is-aside &": {
        width: "30px",
        height: "30px"
      }
    }
  },
  listItemText: {
    margin: "0 0 0 1.5em",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    [`@media (max-width: 425px)`]: {
      margin: "0 0 0 .8em"
    },
    "& h2": {
      lineHeight: 1.3,
      fontWeight: 600,
      letterSpacing: "-0.03em",
      margin: 0,
      fontSize: `${theme.navigator.sizes.postsListItemH1Font}em`,
      [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
        fontSize: `${theme.navigator.sizes.postsListItemH1Font *
          theme.navigator.sizes.fontIncraseForM}em`
      },
      [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
        fontSize: `${theme.navigator.sizes.postsListItemH1Font *
          theme.navigator.sizes.fontIncraseForL}em`,
      }
    },
    "& span": {
      ".moving-featured &, .is-aside &": {
        fontSize: "1em",
        fontWeight: 400
      }
    },
    "& .listItemDate": {
      lineHeight: 1.1,
      fontSize: "0.9em",
      fontWeight: "400",
      margin: "0 0 .5em 0",
      [`@media (max-width: ${theme.mediaQueryTresholds.M}px)`]: {
        fontSize: "0.8em"
      },
      [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
        ".moving-featured &, .is-aside &": {
          display: "none"
        }
      }
    },
    "& .listItemTitle": {
      lineHeight: 1.15,
      fontWeight: 600,
      letterSpacing: "-0.03em",
      margin: 0,
      fontSize: `${theme.navigator.sizes.postsListItemH1Font}em`,
      [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
        fontSize: `${theme.navigator.sizes.postsListItemH1Font *
          theme.navigator.sizes.fontIncraseForM}em`
      },
      [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
        fontSize: `${theme.navigator.sizes.postsListItemH1Font *
          theme.navigator.sizes.fontIncraseForL}em`,
        ".moving-featured &, .is-aside &": {
          fontSize: "1em",
          fontWeight: 400
        }
      }
    },
    "& .listItemSubTitle": {
      lineHeight: 1.2,
      display: "block",
      fontSize: `${theme.navigator.sizes.postsListItemH2Font}em`,
      fontWeight: "300",
      margin: ".3em 0 0 0",
      [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
        fontSize: `${theme.navigator.sizes.postsListItemH2Font *
          theme.navigator.sizes.fontIncraseForM}em`
      },
      [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
        fontSize: `${theme.navigator.sizes.postsListItemH2Font *
          theme.navigator.sizes.fontIncraseForL}em`,
        ".moving-featured &, .is-aside &": {
          display: "none"
        }
      }
    },
    "& h3": {
      lineHeight: 1.2,
      display: "block",
      fontSize: `${theme.navigator.sizes.postsListItemH2Font}em`,
      fontWeight: "300",
      margin: ".3em 0 0 0",
      [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
        fontSize: `${theme.navigator.sizes.postsListItemH2Font *
          theme.navigator.sizes.fontIncraseForM}em`
      },
      [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
        fontSize: `${theme.navigator.sizes.postsListItemH2Font *
          theme.navigator.sizes.fontIncraseForL}em`,
      }
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      ".moving-featured &, .is-aside &": {
        margin: "0 0 0 .5em"
      }
    }
  }
});


class ListItem extends React.Component {
  state = {
    hidden: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.categoryFilter !== this.props.categoryFilter) {
      const isFrontmatter = this.props.post.node.frontmatter;
      const category = isFrontmatter ? this.props.post.node.frontmatter.category : this.props.post.node.categories[0].name;
      const categoryFilter = this.props.categoryFilter;

      if (categoryFilter === "ALL") {
        this.setState({ hidden: false });
      } else if (category !== categoryFilter) {
        this.setState({ hidden: true });
      } else if (category === categoryFilter) {
        this.setState({ hidden: false });
      }
    }
  }

  render() {
    const { classes, post, location } = this.props;
    const isBlog = location.pathname === withPrefix(config.pathPrefix) || location.pathname === withPrefix(config.pathPrefix + "/");

    const isFrontmatter = post.node.frontmatter;
    const isFields      = post.node.fields;
    const isCover       = isFrontmatter && post.node.frontmatter.cover && post.node.frontmatter.cover.children;
    const isWPCover     = post.node.featured_media_size_src;
    const date          = isFields ? post.node.fields.prefix : post.node.date;
    const category      = isFrontmatter ? post.node.frontmatter.category  : post.node.categories[0].name;
    const slug          = isFields      ? post.node.fields.slug           : config.pathPrefix + '/' + post.node.slug + "/";
    const cover         = isCover       ? post.node.frontmatter.cover.children[0]     : null;
    const wpcover       = isWPCover     ? post.node.featured_media_size_src.thumbnail       : null;
    const title         = isFrontmatter ? post.node.frontmatter.title     : post.node.title;
    const subTitle      = isFrontmatter ? post.node.frontmatter.subTitle  : post.node.acf.subtitle;

    return (
      <li className={`${classes.listItem} ${category}`} style={{ display: `${this.state.hidden ? "none" : "block"}` }} key={slug}>
        <Link activeClassName="active" className={classes.listLink} to={slug} >
          <div className={`${classes.listItemPointer} pointer`}>
            {cover && (<LazyLoad height={60} overflow={true} throttle={300} once={true} offset={100}>
              <picture>
                <source type="image/webp" srcSet={cover.resolutions.srcSetWebp} />
                <source srcSet={cover.resolutions.srcSet} />
                <img src={cover.resolutions.src} alt={title} />
              </picture>
            </LazyLoad>)}
            {wpcover && (<LazyLoad height={60} overflow={true} throttle={300} once={true} offset={100}>
              <picture>
                <source type="image/webp" srcSet={wpcover + ".webp"} />
                <source srcSet={wpcover} />
                <img src={wpcover} alt={title} />
              </picture>
            </LazyLoad>)}
            {/*<Img sizes={post.node.frontmatter.cover.children[0].sizes} />*/}
          </div>
          {isBlog &&
            <div className={classes.listItemText}>
              <span className={'listItemDate'}>{date}</span>
              <h2>{title}</h2>
              {subTitle && (<h3>{subTitle}</h3>)}
            </div>
          }
          {isBlog ||
            <div className={classes.listItemText}>
              <span className={'listItemDate'}>{date}</span>
              <span className={'listItemTitle'}>{title}</span>
              {subTitle && (<span className={'listItemSubTitle'}>{subTitle}</span>)}
            </div>
          }
        </Link>
      </li>
    );
  }
}

ListItem.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  categoryFilter: PropTypes.string.isRequired
};

export default injectSheet(styles)(ListItem);
