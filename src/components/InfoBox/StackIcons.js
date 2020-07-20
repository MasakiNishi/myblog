import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import { ReactComponent as ReactIcon } from "../../images/svg-icons/react.svg";
import { ReactComponent as GraphqlIcon } from "../../images/svg-icons/graphql.svg";
import { ReactComponent as JssIcon } from "../../images/svg-icons/jss.svg";
import { ReactComponent as MaterialUiIcon } from "../../images/svg-icons/material-ui.svg";
import { ReactComponent as ReduxIcon } from "../../images/svg-icons/redux.svg";
import { ReactComponent as GatsbyIcon } from "../../images/svg-icons/gatsby.svg";
import { ReactComponent as WebpackIcon } from "../../images/svg-icons/webpack.svg";
import { ReactComponent as BabelIcon } from "../../images/svg-icons/babel.svg";
import { ReactComponent as NetlifyIcon } from "../../images/svg-icons/netlify.svg";
import { ReactComponent as AwsIcon } from "../../images/svg-icons/aws.svg";
import { ReactComponent as Css3Icon } from "../../images/svg-icons/css3.svg";
import { ReactComponent as HerokuIcon } from "../../images/svg-icons/heroku.svg";
import { ReactComponent as Html5Icon } from "../../images/svg-icons/html5.svg";
import { ReactComponent as JavascriptIcon } from "../../images/svg-icons/javascript.svg";
import { ReactComponent as NodejsIcon } from "../../images/svg-icons/Nodejs.svg";
import { ReactComponent as NumpyIcon } from "../../images/svg-icons/numpy.svg";
import { ReactComponent as PhpIcon } from "../../images/svg-icons/php.svg";
import { ReactComponent as PythonIcon } from "../../images/svg-icons/python.svg";
import { ReactComponent as RubyIcon } from "../../images/svg-icons/ruby.svg";
import { ReactComponent as RubyonrailsIcon } from "../../images/svg-icons/rubyonrails.svg";
import { ReactComponent as SassIcon } from "../../images/svg-icons/sass.svg";
import { ReactComponent as SwiftIcon } from "../../images/svg-icons/swift.svg";
import { ReactComponent as WordpressIcon } from "../../images/svg-icons/wordpress.svg";

const styles = theme => ({
  stack: {
    display: "none",
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      display: "block",
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "100%",
      padding: "1em 2em",
      zIndex: "-1"
    }
  },
  box: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  link: {
    display: "inline-block",
    padding: "8px"
  },
  svg: {
    width: "22px",
    height: "22px"
  },
  header: {
    textAlign: "center",
    fontSize: ".85em",
    letterSpacing: ".3em",
    width: "100%",
    margin: "0 0 .8em 0",
    fontWeight: 300
  }
});

const StackIcons = props => {
  const { classes } = props;

  const items = [
    { name: "html5", url: "https://www.w3.org/html/", comp: Html5Icon },
    { name: "css3", url: "https://www.w3.org/Style/CSS/Overview.en.html", comp: Css3Icon },
    { name: "javascript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", comp: JavascriptIcon },
    // { name: "sass", url: "https://sass-lang.com/", comp: SassIcon },
    // { name: "gatsby", url: "https://www.gatsbyjs.org/", comp: GatsbyIcon },
    { name: "react", url: "https://reactjs.org/", comp: ReactIcon },
    { name: "nodejs", url: "http://cssinjs.org/", comp: NodejsIcon },
    { name: "graphql", url: "http://graphql.org/", comp: GraphqlIcon },
    // { name: "material-ui", url: "https://material-ui-next.com/", comp: MaterialUiIcon },
    { name: "redux", url: "https://redux.js.org/", comp: ReduxIcon },
    { name: "webpack", url: "https://webpack.js.org/", comp: WebpackIcon },
    { name: "babel", url: "https://babeljs.io/", comp: BabelIcon },
    { name: "php", url: "http://php.net/", comp: PhpIcon },
    { name: "wordpress", url: "https://wordpress.org/", comp: WordpressIcon },
    { name: "ruby", url: "https://www.ruby-lang.org/en/", comp: RubyIcon },
    { name: "rubyonrails", url: "https://rubyonrails.org/", comp: RubyonrailsIcon },
    { name: "python", url: "https://www.python.org/", comp: PythonIcon },
    { name: "numpy", url: "http://www.numpy.org/", comp: NumpyIcon },
    { name: "swift", url: "https://swift.org/", comp: SwiftIcon },
    { name: "aws", url: "https://aws.amazon.com/", comp: AwsIcon },
    { name: "heroku", url: "https://www.heroku.com/home", comp: HerokuIcon },
    // { name: "netlify", url: "https://www.netlify.com/", comp: NetlifyIcon },
  ];

  return (
    <div className={classes.stack}>
      <div className={classes.header}>My Skills:</div>
      <div className={classes.box}>
        {items.map(item => {
          const Icon = item.comp;
          return (
            <a
              href={item.url}
              key={item.name}
              className={classes.link}
              target="_blank"
              rel="noopener noreferrer"
              title={item.name}
            >
              <Icon className={classes.svg} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

StackIcons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(StackIcons);
