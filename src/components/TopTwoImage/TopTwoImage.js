import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Link from "gatsby-link";

const styles = theme => ({
  face: {
    width: "1024px",
    height: "700px",
    position: "relative",
    margin: "0 auto",
    [`@media (max-width: ${theme.mediaQueryTresholds.L - 1}px)`]: {
      display: "none"
    },
    "&:hover": {
      "& > .analyst": {
        width: 0,
        left: -200,
        transition: "2s",
        "& .analyst-text": {
          opacity: 0,
          transition: "1s"
        }
      }
    },
    "& h2": {
      fontWeight: "600",
      color: "#333333",
    },
    "& p": {
      fontWeight: 300,
      color: "#333333",
      lineHeight: 1.6,
      margin: "0 0 1.5em 0",
    },
    "& .analyst": {
      width: "512px",
      height: "700px",
      position: "absolute",
      top: 0,
      left: 0,
      transition: "2s",
      "& .analyst-text": {
        position: "absolute",
        top: 0,
        left: 0,
        padding: "180px 0 0 30px",
        width: "270px",
        height: "100%",
        transition: "1s",
        "&:hover": {
          "& + .analyst-img": {
            left: "200px",
            transition: "2s"
          }
        }
      },
      "& .analyst-img": {
        maxWidth: "824px",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        background: "url(https://masakinishi.imgix.net/uploads/toptwoimage.png?auto=compress%2Cformat&ixlib=php-1.2.1&q=95&s=f679e9fe5bb658a22ce57b2984646a96) 0 0 no-repeat",
        backgroundPosition: "-27.5% -707px",
        display: "block",
        opacity: 1,
        transition: "2s",
        "&:hover": {
          left: "200px",
          transition: "2s"
        },
      },
      "&:hover": {
        width: "100% !important",
        left: "0 !important",
        transition: "2s",
        "& > .analyst-text": {
          width: "370px",
          paddingLeft: "130px",
          opacity: "1 !important",
          transition: "1s"
        },
        "& + .engineer": {
          width: 0,
          right: -200,
          transition: "2s",
          "& .engineer-text": {
            opacity: 0,
            transition: "1s"
          }
        }
      }
    },
    "& .engineer": {
      width: "512px",
      height: "700px",
      position: "absolute",
      top: 0,
      right: 0,
      transition: "2s",
      "& .engineer-text": {
        position: "absolute",
        top: 0,
        right: 0,
        padding: "180px 30px 0 0",
        width: "270px",
        height: "100%",
        transition: "1s",
        "&:hover": {
          "& + .engineer-img": {
            right: "200px",
            transition: "2s"
          }
        }
      },
      "& .engineer-img": {
        maxWidth: "824px",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        right: 0,
        background: "url(https://masakinishi.imgix.net/uploads/toptwoimage.png?auto=compress%2Cformat&ixlib=php-1.2.1&q=95&s=f679e9fe5bb658a22ce57b2984646a96) 0 0 no-repeat",
        backgroundPosition: "128% 0",
        display: "block",
        opacity: 1,
        transition: "2s",
        "&:hover": {
          right: 200,
          transition: "2s"
        },
      },
      "&:hover": {
        width: "100% !important",
        transition: "2s",
        "& > .engineer-text": {
          width: "370px",
          paddingRight: "130px",
          transition: "1s"
        },
        "& + .analyst": {
          width: 0,
          right: -200,
          transition: "2s",
          "& .analyst-text": {
            opacity: 0,
            transition: "1s"
          }
        }
      }
    }
  },
  intro: {
    display: "none",
    [`@media (max-width: ${theme.mediaQueryTresholds.L - 1}px)`]: {
      maxWidth: "420px",
      margin: "120px auto 0",
      padding: "0 20px",
      display: "block"
    },
    "& h2": {
      color: "#333333",
      fontWeight: 600
    },
    "& p": {
      fontWeight: 300
    }
  }
});

const TopTwoImage = props => {
  const { classes } = props;

  return (
      <section>
        <div className={classes.face}>
          <Link className="analyst" to="#works"　title="Works">
            <div className="analyst-text">
              <h2>
                Analyst
              </h2>
              <br />
              <p>
              More Analytics design for your business strategy. Simple system architecture
              </p>
            </div>
            <div className="analyst-img" />
          </Link>
          <Link className="engineer" to="#works"　title="Works">
            <div className="engineer-text">
              <h2>
                Software Engineer
              </h2>
              <br />
              <p>
                Develop your idea and make it realize in life. HTML, CSS, JavaScript, PHP, Ruby, AWS, Databese.
              </p>
            </div>
            <div className="engineer-img" />
          </Link>
        </div>
        <div className={classes.intro}>
          <h2>
            Hi, I am Masaki Nishi,
          </h2>
          <p>
            a Software Engineer and also Analyst from Japan, currently based in San Francisco.
          </p>
        </div>
      </section>
    );
};

TopTwoImage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(TopTwoImage);