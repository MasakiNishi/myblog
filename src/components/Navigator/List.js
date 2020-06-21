import React from "react";
import { withPrefix } from "gatsby-link";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { forceCheck } from "react-lazyload";

import ListHeader from "./ListHeader";
import SpringScrollbars from "../SpringScrollbars";
import ListItem from "./ListItem";

const styles = theme => ({
  posts: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "100%"
  },
  inner: {
    padding: `calc(${theme.bars.sizes.infoBar}px + 1.3rem) 1.3rem calc(${
      theme.bars.sizes.actionsBar
    }px + 1.3rem) 1.3rem`,
  "& h1": {
    margin: "0.67em 0px 0.67em 15px",
  },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      padding: `calc(${theme.bars.sizes.infoBar}px + 2rem) 2rem calc(${
        theme.bars.sizes.actionsBar
      }px + 2rem) 2rem`
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
    ".is-aside.closed &, .moving-featured.closed &": {
      display: "none"
    }
  },
  HomelistAll: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    ".is-aside.closed &, .moving-featured.closed &": {
      display: "none"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      padding: "2rem calc(1rem + 17px) calc(2rem + 17px) 2rem"
    }
  },
  HomeList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    ".is-aside.closed &, .moving-featured.closed &": {
      display: "none"
    },
    [`@media (max-width: 1023px)`]: {
      paddingTop: "80px"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      padding: "130px calc(1rem + 17px) calc(2rem + 17px) 2rem"
    }
  }
});

class List extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.categoryFilter !== this.props.categoryFilter) {
      setTimeout(forceCheck, 300);
    }
  }

  render() {
    const {
      classes,
      posts,
      linkOnClick,
      expandOnClick,
      categoryFilter,
      navigatorShape,
      removeFilter
    } = this.props;

    const isHome = location.pathname === withPrefix("/");

    if (isHome) {
      return (
        <div className={classes.posts}>
          <SpringScrollbars forceCheckOnScroll={true} isNavigator={true}>
            <div className={classes.inner}>
              <ListHeader
                expandOnClick={expandOnClick}
                categoryFilter={categoryFilter}
                navigatorShape={navigatorShape}
                removeFilter={removeFilter}
              />
              {categoryFilter === "all posts" && (
                <ul className={classes.HomelistAll}>
                  {posts &&
                    posts.map((post, i) => (
                      <ListItem
                        key={i}
                        post={post}
                        linkOnClick={linkOnClick}
                        categoryFilter={categoryFilter}
                      />
                    ))}
                </ul>
              )}
              {navigatorShape === "open" &&
                categoryFilter !== "all posts" && (
                <ul className={classes.HomeList}>
                  {posts &&
                    posts.map((post, i) => (
                      <ListItem
                        key={i}
                        post={post}
                        linkOnClick={linkOnClick}
                        categoryFilter={categoryFilter}
                      />
                    ))}
                </ul>
              )}
            </div>
          </SpringScrollbars>
        </div>
      );
    } else {
      return (
        <div className={classes.posts}>
          <SpringScrollbars forceCheckOnScroll={true} isNavigator={true}>
            <div className={classes.inner}>
              <ListHeader
                expandOnClick={expandOnClick}
                categoryFilter={categoryFilter}
                navigatorShape={navigatorShape}
                removeFilter={removeFilter}
              />
              {categoryFilter === "all posts" && (
                <ul className={classes.list}>
                  {posts &&
                    posts.map((post, i) => (
                      <ListItem
                        key={i}
                        post={post}
                        linkOnClick={linkOnClick}
                        categoryFilter={categoryFilter}
                      />
                    ))}
                </ul>
              )}
              {navigatorShape === "open" &&
                categoryFilter !== "all posts" && (
                <ul className={classes.list} style={{marginTop: "80px"}}>
                  {posts &&
                    posts.map((post, i) => (
                      <ListItem
                        key={i}
                        post={post}
                        linkOnClick={linkOnClick}
                        categoryFilter={categoryFilter}
                      />
                    ))}
                </ul>
              )}
            </div>
          </SpringScrollbars>
        </div>
      );
    };
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
