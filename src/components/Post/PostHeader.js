import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

const styles = theme => ({
  header: {
    margin: "0 0 3em",
    [`@media (max-width: ${theme.mediaQueryTresholds.M}px)`]: {
      margin: "0 0 1.5em"
    }
  },
  title: {
    color: theme.main.colors.title,
    fontSize: `${theme.main.fonts.title.size}em`,
    letterSpacing: "-0.04em",
    fontWeight: theme.main.fonts.title.weight,
    lineHeight: theme.main.fonts.title.lineHeight,
    margin: "0 0 0.4em",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      fontSize: `${theme.main.fonts.title.sizeM}em`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      fontSize: `${theme.main.fonts.title.sizeL}em`,
      letterSpacing: "-0.05em"
    }
  },
  subTitle: {
    color: theme.main.colors.subTitle,
    fontSize: `${theme.main.fonts.subTitle.size}em`,
    lineHeight: theme.main.fonts.subTitle.lineHeight,
    fontWeight: theme.main.fonts.subTitle.weight,
    margin: "1.25em 0",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      fontSize: `${theme.main.fonts.subTitle.sizeM}em`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      fontSize: `${theme.main.fonts.subTitle.sizeL}em`
    }
  },
  date: {
    fontSize: `${theme.main.fonts.meta.size}em`,
    fontWeight: theme.main.fonts.meta.weight,
    color: theme.main.colors.meta,
    "& span": {
      fontWeight: "normal"
    }
  }
});

const PostHeader = props => {
  const { classes, title, subTitle, publishDate, modifiedDate } = props;

  const isEmptyDate = modifiedDate === null;

  return (
    <header className={classes.header}>
      <h1 className={classes.title}>{title}</h1>
      <div className={classes.subTitle}>{subTitle}</div>
      <time className={classes.date} dateTime={publishDate}>
        <span>投稿日:</span> {publishDate}
      </time>
      &emsp;
      { isEmptyDate ||
      <time className={classes.date} dateTime={modifiedDate}>
        <span>更新日:</span> {modifiedDate}
      </time>
      }
    </header>
  );
};

PostHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  publishDate: PropTypes.string.isRequired,
  modifiedDate: PropTypes.string
};

export default injectSheet(styles)(PostHeader);
