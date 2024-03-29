import React from "react";
import injectSheet from "react-jss";
import { MuiThemeProvider } from "material-ui/styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import theme from "../styles/theme";
import globals from "../styles/globals";

import { setFontSizeIncrease, setIsWideScreen } from "../state/store";

import asyncComponent from "../components/common/AsyncComponent/";
import Loading from "../components/common/Loading/";
import Navigator from "../components/Navigator/";
import ActionsBar from "../components/ActionsBar/";
import InfoBar from "../components/InfoBar/";
import InfoBox from "../components/InfoBox/";

import { isWideScreen, timeoutThrottlerHandler } from "../utils/helpers";

class indexLayout extends React.Component {
  timeouts = {};
  categories = [];

  componentDidMount() {
    this.props.setIsWideScreen(isWideScreen());
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.resizeThrottler, false);
    }
  }

  componentWillMount() {
    if (typeof localStorage !== "undefined") {
      const inLocal = +localStorage.getItem("font-size-increase");

      const inStore = this.props.fontSizeIncrease;

      if (inLocal && inLocal !== inStore && inLocal >= 1 && inLocal <= 1.5) {
        this.props.setFontSizeIncrease(inLocal);
      }
    }

    this.getCategories();
  }

  getCategories = () => {
    const { data } = this.props;
    const { posts, wpposts } = data;
    const categories = wpposts.edges.reduce((list, edge, i) => {
      const category = edge.node.categories[0].name;
      if (category && !~list.indexOf(category)) {
        return list.concat(edge.node.categories[0].name);
      } else {
        return list;
      }
    }, []);
    const wpcategories = wpposts.edges.reduce((list, edge, i) => {
      const category = edge.node.categories[0].name;
      if (category && !~list.indexOf(category)) {
        return list.concat(edge.node.categories[0].name);
      } else {
        return list;
      }
    }, []);
    this.categories = categories.concat(wpcategories);
  };

  resizeThrottler = () => {
    return timeoutThrottlerHandler(this.timeouts, "resize", 500, this.resizeHandler);
  };

  resizeHandler = () => {
    this.props.setIsWideScreen(isWideScreen());
  };

  render() {
    const { children, data } = this.props;

    // TODO: dynamic management of tabindexes for keybord navigation
    return (
      <MuiThemeProvider theme={theme}>
        <div
          style={{
            padding: "1px",
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            overflow: "hidden"
          }}
        >
          {children()}
          <Navigator wpposts={data.wpposts.edges} location={this.props.location} />
          <ActionsBar categories={this.categories} />
          <InfoBar parts={data.parts.edges} />
          <InfoBox parts={data.parts.edges} />
        </div>
      </MuiThemeProvider>
    );
  }
}

indexLayout.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.func.isRequired,
  setIsWideScreen: PropTypes.func.isRequired,
  isWideScreen: PropTypes.bool.isRequired,
  fontSizeIncrease: PropTypes.number.isRequired,
  setFontSizeIncrease: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    isWideScreen: state.isWideScreen,
    fontSizeIncrease: state.fontSizeIncrease
  };
};

const mapDispatchToProps = {
  setIsWideScreen,
  setFontSizeIncrease
};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(globals)(indexLayout));

//eslint-disable-next-line no-undef
export const query = graphql`
  query indexLayoutQuery {
    wpposts: allWordpressPost(
      sort: { fields: [date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          slug
          date(formatString: "YYYY-MM-DD")
          modified(formatString: "YYYY-MM-DD")
          title
          acf {
            subtitle
            description
          }
          tags { name }
          categories { name }
          featured_media {
            source_url
          }
          featured_media_size_src {
            thumbnail
            medium
            large
          }
        }
      }
    }
    wppages: allWordpressPage(
      sort: { fields: [date], order: DESC }
    ) {
      edges {
        node {
          slug
          date(formatString: "YYYY-MM-DD")
          modified(formatString: "YYYY-MM-DD")
          title
          acf {
            description
          }
          featured_media {
            source_url
          }
          featured_media_size_src {
            thumbnail
            medium
            large
          }
        }
      }
    }
    parts: allMarkdownRemark(filter: { id: { regex: "//parts//" } }) {
      edges {
        node {
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`;