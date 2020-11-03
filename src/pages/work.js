import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { setNavigatorPosition, setNavigatorShape } from "../state/store";
import Seo from "../components/Seo";
import Work from "../components/Work";

class workPage extends React.Component {

  componentWillMount() {
    if (this.props.navigatorShape !== "none") {
      this.props.setNavigatorShape("none");
    }
    if (this.props.navigatorPosition !== "work") {
      this.props.setNavigatorPosition("work");
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
  data: PropTypes.object.isRequired,
  navigatorPosition: PropTypes.string.isRequired,
  setNavigatorPosition: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    pages: state.pages,
    navigatorPosition: state.navigatorPosition
  };
};

const mapDispatchToProps = {
  setNavigatorPosition,
  setNavigatorShape
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
          acf {
            subtitle
            description
          }
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

