import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import { ReactComponent as AlgoliaIcon } from "../../images/svg-icons/algolia-full.svg";

import config from "../../../content/meta/config";

const styles = theme => ({
  header: {
    margin: "0 0 3em",
    [`@media (max-width: ${theme.mediaQueryTresholds.M}px)`]: {
      margin: "0 0 1.5em"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
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
  mark: {
    width: "90px",
    display: "block",
    margin: "0 0 0 10px",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      width: "170px"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      width: "190px"
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

const Header = props => {
  const { classes, title, algolia, publishDate, modifiedDate, wpCover, isWorkPage, page } = props;

  const isFrontmatter = page && page.frontmatter;
  const isPage = page;

  const wpCoverMedium = isFrontmatter ? '' : isPage ? page.featured_media_size_src.medium : null;
  const wpCoverLarge = isFrontmatter ? '' : isPage ? page.featured_media_size_src.large: null;

  const isEmptyDate = modifiedDate === null;
  const isEmptyWpCover = wpCover === '';

  return (
    <header className={classes.header}>
      <h1 className={classes.title}>{title}</h1>
      { isWorkPage && (
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
      )}
      { isWorkPage &&
          <a className="gatsby-resp-image-link" href={wpCover} target="_blank">
            <source
              className="alignnone size-full"
              type="image/webp"
              alt={title}
              srcSet={`
              ${wpCoverMedium  + ".webp"} 425w,
              ${wpCoverLarge + ".webp"} 768w,
              ${wpCover + ".webp"} 1024w
              `}
              sizes="(max-width: 709px) 85vw, (max-width: 909px) 67vw, (max-width: 1362px) 62vw, 840px"
            />
            <img
              className="alignnone size-full"
              src={wpCover}
              width="1200"
              height="630"
              alt={title}
              srcSet={`
              ${wpCoverMedium} 425w,
              ${wpCoverLarge} 768w,
              ${wpCover} 1024w
              `}
              sizes="(max-width: 709px) 85vw, (max-width: 909px) 67vw, (max-width: 1362px) 62vw, 840px"
            />
          </a>
      }
      {algolia && (
        <a
          className={classes.mark}
          href="https://www.algolia.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <AlgoliaIcon />
        </a>
      )}
    </header>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  algolia: PropTypes.bool,
  publishDate: PropTypes.string.isRequired,
  modifiedDate: PropTypes.string
};

export default injectSheet(styles)(Header);
