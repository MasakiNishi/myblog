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
    "& .articleHeader": {
      margin: "0 0 0.5em 0.5em",
      fontFamily: 'Open Sans',
      [`@media (max-width: ${theme.mediaQueryTresholds.L}px)`]: {
        fontSize: "1.6em",
        [`@media (max-width: ${theme.mediaQueryTresholds.M}px)`]: {
          fontSize: "1.4em",
          margin: "0 0 0 0.5em"
        }
      }
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      padding: "2rem calc(1rem + 17px) calc(2rem + 17px) 2rem"
    },
    "&.true": {
      [`@media (max-width: 1023px)`]: {
        paddingTop: "6rem"
      },
      [`@media (max-width: ${theme.mediaQueryTresholds.M}px)`]: {
        paddingTop: "5rem"
      },
      [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
        padding: "8.5rem calc(1rem + 17px) calc(2rem + 17px) 2rem"
      }
    }
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
      linkOnClick,
      expandOnClick,
      categoryFilter,
      navigatorShape,
      removeFilter
    } = this.props;

    const isHome = location.pathname === withPrefix("/");
    const isAll = categoryFilter === "すべての記事";

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
                  <ul
                    className={ isHome && `${classes.Homelist} ${this.state.hidden ? this.state.hidden : ""}` || `${classes.list}` }
                    style={ isHome && { marginTop:0 } || { marginTop:`${this.state.hidden ? "5rem" : 0 }` } }
                  >
                    { isHome && isAll && <h1 className='articleHeader'>Articles</h1> }
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
