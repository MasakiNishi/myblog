import React from "react";
import { withPrefix } from "gatsby-link";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { forceCheck } from "react-lazyload";

import ListHeader from "./ListHeader";
import SpringScrollbars from "../SpringScrollbars";
import ListItem from "./ListItem";

import config from "../../../content/meta/config";

const styles = theme => ({
  posts: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "100%"
  },
  inner: {
    padding: `calc(${theme.bars.sizes.infoBar}px + 20px) 10px calc(${
      theme.bars.sizes.actionsBar
    }px + 20px) 20px`,
    marginBottom: `env(safe-area-inset-bottom, 50px)`,
    [`@media (max-width: 425px)`]: {
      padding: `calc(${theme.bars.sizes.infoBar}px + 25px) 0 calc(${
        theme.bars.sizes.actionsBar
      }px + 25px) 0`,
      marginBottom: `env(safe-area-inset-bottom, 50px)`,
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      padding: `calc(${theme.bars.sizes.infoBar}px + 35px) 35px calc(${
        theme.bars.sizes.actionsBar
      }px + 35px) 35px`,
      marginBottom: `env(safe-area-inset-bottom, 50px)`,
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      padding: 0,
      left: `${theme.info.sizes.width}px`,
      ".moving-featured &, .is-aside &": {
        padding: "1rem .5rem 1rem .5rem"
      }
    }
  },
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      padding: "3.5rem calc(1rem + 17px) calc(2rem + 17px) 2rem"
    },
    ".is-aside.closed &, .moving-featured.closed &": {
      display: "none"
    },
    ".is-aside.open &, .moving-featured.open &": {
      padding: 0
    }
  },
  Homelist: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    ".is-aside.closed &, .moving-featured.closed &": {
      display: "none"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      padding: "2rem calc(1rem + 17px) calc(2rem + 17px) 2rem"
    },
    "&.true": {
      [`@media (max-width: 1023px)`]: {
        paddingTop: "4.5rem"
      },
      [`@media (max-width: ${theme.mediaQueryTresholds.M}px)`]: {
        paddingTop: "5rem"
      },
      [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
        padding: "8.5rem calc(1rem + 17px) calc(2rem + 17px) 2rem"
      }
    },
    "& h1": {
      lineHeight: 1.3,
      fontWeight: 600,
      letterSpacing: "-0.03em",
      color: theme.navigator.colors.postsListItemLink,
      margin: "0 0 1em 1.1em",
      fontSize: `${theme.navigator.sizes.postsListItemH1Font}em`,
      [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
        fontSize: `${theme.navigator.sizes.postsListItemH1Font *
          theme.navigator.sizes.fontIncraseForM}em`
      },
      [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
        fontSize: `${theme.navigator.sizes.postsListItemH1Font *
          theme.navigator.sizes.fontIncraseForL}em`,
          margin: "0 0 1em .7em"
      }
    },
  },
});

class List extends React.Component {
  state = {
      hidden: false
    };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.categoryFilter !== this.props.categoryFilter) {
      setTimeout(forceCheck, 300);

      const categoryFilter = this.props.categoryFilter;

      if (categoryFilter === "すべての記事") {
        this.setState({ hidden: false });
      } else if (categoryFilter !== "すべての記事") {
        this.setState({ hidden: true });
      } else if (categoryFilter === "すべての記事") {
        this.setState({ hidden: false });
      }
    }
  }

  render() {
    const {
      classes,
      posts,
      wpposts,
      linkOnClick,
      expandOnClick,
      categoryFilter,
      navigatorShape,
      navigatorPosition,
      removeFilter,
      location
    } = this.props;

    const isBlog = this.props.location.pathname === withPrefix(config.pathPrefix) || this.props.location.pathname === withPrefix(config.pathPrefix + "/");
    const isAll = categoryFilter === "すべての記事";

      return (
        <div className={classes.posts}>
          <SpringScrollbars forceCheckOnScroll={true} isNavigator={true}>
            <div className={classes.inner}>
              <ListHeader
                expandOnClick={expandOnClick}
                categoryFilter={categoryFilter}
                navigatorShape={navigatorShape}
                navigatorPosition={navigatorPosition}
                removeFilter={removeFilter}
              />
                  <ul
                    className={ isBlog && `${classes.Homelist} ${this.state.hidden ? this.state.hidden : ""}` || `${classes.list}` }
                    style={ isBlog && { marginTop:0 } || { marginTop:`${this.state.hidden ? "5rem" : 0 }` } }
                  >
                    { isBlog && <h1>Blog</h1> }
                    {posts && posts.map((post, i) => ( <ListItem key={i} post={post} linkOnClick={linkOnClick} categoryFilter={categoryFilter} location={this.props.location} />))}
                    {wpposts && wpposts.map((wppost, i) => ( <ListItem key={i} post={wppost} linkOnClick={linkOnClick} categoryFilter={categoryFilter} location={this.props.location} />))}
                  </ul>
            </div>
          </SpringScrollbars>
        </div>
      );
  }
}

List.propTypes = {
  classes: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  linkOnClick: PropTypes.func.isRequired,
  expandOnClick: PropTypes.func.isRequired,
  navigatorPosition: PropTypes.string.isRequired,
  navigatorShape: PropTypes.string.isRequired,
  categoryFilter: PropTypes.string.isRequired,
  removeFilter: PropTypes.func.isRequired
};

export default injectSheet(styles)(List);
