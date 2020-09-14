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
    margin: "5px 0 0",
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
        title="トップページへ戻る"
        data-shape="closed"
      >
        ホーム
      </Link>
      <Link
        to="/blog/"
        onClick={e => {
          hideOnClick();
          avatarOnClick();
        }}
        className={classes.link}
        title="ブログトップへ戻る"
        data-shape="closed"
      >
        ブログ
      </Link>
      {pages.map(({ node }) => {
        const { fields, frontmatter } = node;
        return (
          <Link
            key={fields.slug}
            to={fields.slug}
            onClick={e => {
              hideOnClick();
              linkOnClick();
            }}
            className={classes.link}
            data-shape="closed"
          >
            {frontmatter.menuTitle ? frontmatter.menuTitle : frontmatter.title}
          </Link>
        );
      })}
      {wppages.map(({ node }) => {
        const { title, slug } = node;
        return (
          <Link 
            key={slug}
            to={'/blog/' + slug + '/'}
            onClick={e => {
              hideOnClick();
              linkOnClick();
            }}
            className={classes.link}
            data-shape="closed"
          >
            {title}
          </Link>
        );
      })}
      <Link
        to="/contact/"
        onClick={e => {
          hideOnClick();
          linkOnClick();
        }}
        className={classes.link}
        data-shape="closed"
      >
        お問い合わせ
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
