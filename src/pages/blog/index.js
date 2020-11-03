import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { setNavigatorPosition, setNavigatorShape } from "../../state/store";
import { featureNavigator } from "../../utils/shared";
import Seo from "../../components/Seo";

class Blog extends React.Component {
  featureNavigator = featureNavigator.bind(this);

  componentWillMount() {
    if (this.props.navigatorPosition !== "is-featured") {
      this.props.setNavigatorPosition("is-featured");
    }
    if (this.props.navigatorShape !== "open") {
      this.props.setNavigatorShape("open");
    }
  }

  render() {
    const { data } = this.props;
    const facebook = (((data || {}).site || {}).siteMetadata || {}).facebook;

    return (
      <div>
        <Seo facebook={facebook} />
      </div>
    );
  }
}

Blog.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Blog);

//eslint-disable-next-line no-undef
export const query = graphql`
  query blogQuery {
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
  }
`;
