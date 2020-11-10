import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Obfuscate from "react-obfuscate";

import Main from "../components/Main";
import Article from "../components/Main/Article";
import PageHeader from "../components/Page/PageHeader";
import Content from "../components/Main/Content";
import Form from "../components/ContactForm";
import config from "../../content/meta/config";


import { connect } from "react-redux";
import Seo from "../components/Seo";
import { setNavigatorPosition, setNavigatorShape } from "../state/store";

class contactPage extends React.Component {

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
        <Article>
          <Seo facebook={facebook} location={this.props.location} />
          <PageHeader title="お問い合わせ" />
          <Content>
            下記フォームか、Eメール: <Obfuscate email={config.contactEmail} /> にお気軽にお問い合わせください。個人情報の取り扱い等は<a href="/user-terms/">利用規約</a>、<a href="/privacy-policy/">プライバシーポリシー</a>をご参照ください。
          </Content>
          <Form />
        </Article>
      </Main>
    );
  }
}

contactPage.propTypes = {
  data: PropTypes.object.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(contactPage);

//eslint-disable-next-line no-undef
export const query = graphql`
  query contactQuery {
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
  }
`;
