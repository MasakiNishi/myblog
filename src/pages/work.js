import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { setNavigatorPosition, setNavigatorShape } from "../state/store";
import Seo from "../components/Seo";
import Work from "../components/Work";

class workPage extends React.Component {

  componentWillMount() {
    if (this.props.navigatorPosition !== "none") {
      this.props.setNavigatorPosition("none");
    }
  }

  render() {
    const { data } = this.props;
    const facebook = (((data || {}).site || {}).siteMetadata || {}).facebook;

    return (
      <nav>
        <Seo facebook={facebook} />
        <Work wppages={data.wppages.edges} />
      </nav>
    );
  }
}

workPage.propTypes = {
  data: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    pages: state.pages,
    navigatorPosition: state.navigatorPosition
  };
};

const mapDispatchToProps = {
  setNavigatorPosition
};

export default connect(mapStateToProps, mapDispatchToProps)(workPage);

//eslint-disable-next-line no-undef
export const query = graphql`
  query workQuery {
    wppages: allWordpressPage(
      sort: { fields: [date], order: DESC }
    ) {
      edges {
        node {
          slug
          date(formatString: "YYYY-MM-DD")
          modified(formatString: "YYYY-MM-DD")
          title
          featured_media {
            source_url
          }
        }
      }
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

