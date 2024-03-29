import React from "react";
import PropTypes from "prop-types";
import Main from "../components/Main/";
import { connect } from "react-redux";
require("core-js/fn/array/find");
require("prismjs/themes/prism-okaidia.css");

import { setNavigatorPosition, setNavigatorShape } from "../state/store";
import { moveNavigatorAside } from "../utils/shared";
import Post from "../components/Post/";
import Footer from "../components/Footer/";
import Seo from "../components/Seo";

class WPPostTemplate extends React.Component {
  moveNavigatorAside = moveNavigatorAside.bind(this);

  componentDidMount() {
    if (this.props.navigatorPosition === "is-featured") {
      this.moveNavigatorAside();
    }
  }

  render() {
    const { data, pathContext } = this.props;
    const facebook = (((data || {}).site || {}).siteMetadata || {}).facebook;

    return (
      <Main>
        <Post post={data.post} slug={pathContext.slug} author={data.author} facebook={facebook} />
        <Footer footnote={data.footnote} />
        <Seo data={data.post} facebook={facebook} location={this.props.location} />
      </Main>
    );
  }
}

WPPostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pathContext: PropTypes.object.isRequired,
  navigatorPosition: PropTypes.string.isRequired,
  setNavigatorPosition: PropTypes.func.isRequired,
  isWideScreen: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    navigatorPosition: state.navigatorPosition,
    isWideScreen: state.isWideScreen
  };
};

const mapDispatchToProps = {
  setNavigatorPosition,
  setNavigatorShape
};

export default connect(mapStateToProps, mapDispatchToProps)(WPPostTemplate);

//eslint-disable-next-line no-undef
export const query = graphql`
  query WPPost($slug: String!) {
    post: wordpressPost(slug: { eq: $slug }) {
      id
      excerpt
      content
      slug
      title
      acf {
        subtitle
        description
      }
      tags { name }
      date(formatString: "YYYY-MM-DD")
      modified(formatString: "YYYY-MM-DD")
      featured_media {
        source_url
      }
      featured_media_size_src {
        thumbnail
        medium
        large
      }
    }
    author: markdownRemark(id: { regex: "/author/" }) {
      id
      html
    }
    footnote: markdownRemark(id: { regex: "/footnote/" }) {
      id
      html
    }
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
  }
`;
