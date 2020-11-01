import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { setNavigatorPosition, setNavigatorShape } from "../state/store";
import Seo from "../components/Seo";

import Article from "../components/Main/Article";
import TopPage from "../components/TopPage/";

class Index extends React.Component {

  componentWillMount() {
    if (this.props.navigatorPosition !== "none") {
      this.props.setNavigatorPosition("none");
    }
  }

  render() {
    const { data } = this.props;
    const facebook = (((data || {}).site || {}).siteMetadata || {}).facebook;

    return (
      <div>
        <Seo facebook={facebook} />
        <TopPage />
      </div>
    );
  }
}

Index.propTypes = {
  data: PropTypes.object.isRequired,
  navigatorPosition: PropTypes.string.isRequired,
  setNavigatorPosition: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    navigatorPosition: state.navigatorPosition
  };
};

const mapDispatchToProps = {
  setNavigatorPosition,
  setNavigatorShape
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);

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
  }
`;
