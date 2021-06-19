import { createMuiTheme } from "material-ui/styles";
import Color from "color";
import colors from "./colors";

const theme = createMuiTheme({
  base: {
    colors: {
      background: colors.background,
      text: colors.dark,
      link: colors.accent,
      linkHover: Color(colors.accent)
        .lighten(0.1)
        .string(),
      accent: colors.accent,
      lines: colors.superLightGray
    },
    sizes: {
      linesMargin: "20px"
    },
    fonts: {
      unstyledFamily: `Arial`,
      styledFamily: "Open Sans",
      styledFonts: "300,400,600"
    }
  },
  info: {
    colors: {
      text: colors.gray,
      background: colors.background,
      socialIcons: colors.lightGray,
      socialIconsHover: colors.accent,
      twitterIconsHover: colors.twitter,
      facebookIconsHover: colors.facebook,
      instaIconsHover: colors.instagram,
      menuLink: colors.gray,
      menuLinkHover: colors.accent
    },
    sizes: {
      width: 320,
      headerHeight: 170
    },
    fonts: {
      boxTitleSize: 1.3,
      boxTitleSizeM: 1.5,
      boxTitleSizeL: 1.7
    }
  },
  navigator: {
    colors: {
      background: colors.background,
      postsListItemLink: colors.gray,
      postsListItemLinkHover: colors.accent,
      postsHeader: colors.gray
    },
    sizes: {
      closedHeight: 80,
      postsListItemH1Font: 1.1,
      postsListItemH2Font: .9,
      fontIncraseForM: 1.15,
      fontIncraseForL: 1.3
    }
  },
  main: {
    colors: {
      background: colors.background,
      title: colors.gray,
      subTitle: colors.gray,
      meta: colors.gray,
      content: colors.dark,
      footer: colors.gray,
      contentHeading: colors.gray,
      blockquoteFrame: colors.lightGray,
      link: colors.accent,
      linkHover: colors.dark,
      fbCommentsColorscheme: "light"
    },
    sizes: {
      articleMaxWidth: "50em"
    },
    fonts: {
      title: {
        size: 1.4,
        sizeM: 2.369,
        sizeL: 2.369,
        weight: 600,
        lineHeight: 1.1
      },
      subTitle: {
        size: 1.2,
        sizeM: 1.333,
        sizeL: 1.333,
        weight: 300,
        lineHeight: 1.1
      },
      meta: {
        size: 0.9,
        weight: 600
      },
      content: {
        size: 1.0,
        sizeM: 1.15,
        sizeL: 1.1,
        lineHeight: 1.6
      },
      contentHeading: {
        h2Size: 1.4,
        h2SizeM: 1.777,
        h2SizeL: 1.777,
        h3Size: 1.2,
        h3SizeM: 1.333,
        h3SizeL: 1.333,
        weight: 600,
        lineHeight: 1.333
      },
      footer: {
        size: 1,
        lineHeight: 1.4
      }
    }
  },
  footer: {
    colors: {
      text: Color(colors.gray)
        .lighten(0.5)
        .string(),
      link: colors.accent,
      linkHover: Color(colors.accent)
        .lighten(0.2)
        .string()
    },
    fonts: {
      footnote: {
        size: 0.8,
        lineHeight: 1.4
      }
    }
  },
  bars: {
    colors: {
      background: colors.background,
      icon: colors.gray,
      text: colors.gray
    },
    sizes: {
      actionsBar: 60,
      infoBar: 60
    }
  },
  mediaQueryTresholds: {
    M: 600,
    L: 1024
  },
  palette: {
    primary: {
      main: colors.accent
    }
  },
  typography: {
    fontFamily: `Arial, sans-serif`,
    fontSize: 16
  },
  pallete: {
    action: {
      hover: "rgba(0, 0, 0, 0.01)"
    }
  }
});

export default theme;
