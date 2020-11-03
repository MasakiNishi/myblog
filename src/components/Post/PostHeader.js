import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

const styles = theme => ({
  header: {
    margin: "0 0 3em",
    [`@media (max-width: ${theme.mediaQueryTresholds.M}px)`]: {
      margin: "0 0 1.5em"
    },
    "& .gatsby-resp-image-link": {
      margin: "2em -1rem",
      border: "none",
      display: "block",
      [`@media (min-width: 426px)`]: {
        margin: "2em -1.5rem",
      },
      [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
        margin: "2.5em -3.5rem"
      }
    },
    "& .size-large, & .size-full": {
      width: '100%',
      height: '100%'
    }
  },
  title: {
    color: theme.main.colors.title,
    fontSize: `${theme.main.fonts.title.size}em`,
    letterSpacing: "-0.04em",
    fontWeight: theme.main.fonts.title.weight,
    lineHeight: "1.2",
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
    lineHeight: "1",
    fontWeight: theme.main.fonts.subTitle.weight,
    margin: "1.25em 0",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      fontSize: `${theme.main.fonts.subTitle.sizeM}em`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      fontSize: `${theme.main.fonts.subTitle.sizeL}em`
    }
  },
  dateList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    "& li": {
      display: "inline-block",
      "&:first-child": {
        margin: "0 0 .2em 0"
      }
    }
  },
  date: {
    fontSize: `${theme.main.fonts.meta.size}em`,
    fontWeight: "400",
    color: theme.main.colors.meta,
    "& span": {
      fontWeight: "normal"
    }
  }
});

const PostHeader = props => {
  const { classes, title, subTitle, publishDate, modifiedDate, wpCover } = props;

  const isEmptyDate = modifiedDate === null;

  const isEmptyWpCover = wpCover === '';

  return (
    <header className={classes.header}>
      <h1 className={classes.title}>{title}</h1>
      <div className={classes.subTitle}>{subTitle}</div>
      <ul className={classes.dateList}>
        <li>
          <time className={classes.date} dateTime={publishDate}>
            <span>投稿日:</span> {publishDate}
          </time>
        </li>
      &emsp;
        { isEmptyDate ||
        <li>
          <time className={classes.date} dateTime={modifiedDate}>
            <span>更新日:</span> {modifiedDate}
          </time>
        </li>
        }
      </ul>
      { isEmptyWpCover ||
        <a className="gatsby-resp-image-link" href={wpCover} target="_blank">
          <img
            className="alignnone size-full wp-image"
            src={wpCover}
            width="1200"
            height="630"
            alt={title}
            srcSet={`
            ${wpCover + "&w=300"} 300w,
            ${wpCover + "&w=768"} 768w,
            ${wpCover + "&w=1024"} 1024w
            `}
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </a>
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
