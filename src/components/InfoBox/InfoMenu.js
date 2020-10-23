import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Link from "gatsby-link";

const styles = theme => ({
  infoMenu: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    listStyle: "none",
    margin: "1em 0 0",
    width: "100%"
  },
  link: {
    padding: ".5em",
    fontSize: ".95em",
    fontWeight: 300,
    fontTransform: "lowercase",
    color: theme.info.colors.menuLink,
    "&:hover": {
      color: theme.info.colors.menuLinkHover
    }
  }
});

const InfoMenu = props => {
  const { classes, pages, wppages, avatarOnClick, linkOnClick, hideOnClick } = props;

  return (
    <nav className={classes.infoMenu}>
      <Link
        to="/"
        onClick={e => {
          hideOnClick();
          avatarOnClick();
        }}
        className={classes.link}
        title="トップページ"
        data-shape="closed"
      >
        top
      </Link>
      <Link
        to="/blog/"
        onClick={e => {
          hideOnClick();
          avatarOnClick();
        }}
        className={classes.link}
        title="ブログトップ"
        data-shape="closed"
      >
        blog
      </Link>
      <Link
        to="/work/"
        onClick={e => {
          hideOnClick();
          avatarOnClick();
        }}
        className={classes.link}
        title="ワークページ"
        data-shape="closed"
      >
        work
      </Link>
      <Link
        to="/about/"
        onClick={e => {
          hideOnClick();
          linkOnClick();
        }}
        className={classes.link}
        title="プロフィール"
        data-shape="closed"
      >
        about
      </Link>
      <Link
        to="/contact/"
        onClick={e => {
          hideOnClick();
          linkOnClick();
        }}
        className={classes.link}
        title="お問い合わせ"
        data-shape="closed"
      >
        contact
      </Link>
    </nav>
  );
};

InfoMenu.propTypes = {
  pages: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  avatarOnClick: PropTypes.func.isRequired,
  linkOnClick: PropTypes.func.isRequired,
  hideOnClick: PropTypes.func.isRequired
};

export default injectSheet(styles)(InfoMenu);
