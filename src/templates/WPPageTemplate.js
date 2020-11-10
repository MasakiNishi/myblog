import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setNavigatorPosition, setNavigatorShape } from "../state/store";
import { moveNavigatorAside } from "../utils/shared";
import Main from "../components/Main/";
import Page from "../components/Page/";
import Footer from "../components/Footer/";
import Seo from "../components/Seo";

class WPPageTemplate extends React.Component {

  componentWillMount() {
    if (this.props.navigatorShape !== "none") {
      this.props.setNavigatorShape("none");
    }
  }

  render() {
    const { data } = this.props;
    const facebook = (((data || {}).site || {}).siteMetadata || {}).facebook;

    return (
      <Main>
        <Page page={data.page} location={this.props.location} />
        <Footer footnote={data.footnote} />
        <Seo page={data.page} facebook={facebook} location={this.props.location} />
      </Main>
    );
  }
}

WPPageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(WPPageTemplate);

//eslint-disable-next-line no-undef
export const query = graphql`
  query WPPage($slug: String!) {
    page: wordpressPage(slug: { eq: $slug }) {
      id
      excerpt
      content
      slug
      title
      acf {
        subtitle
        description
      }
      date(formatString: "YYYY-MM-DD")
      modified(formatString: "YYYY-MM-DD")
      featured_media {
        source_url
      }
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
