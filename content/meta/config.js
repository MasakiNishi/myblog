const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Masaki Nishi PersonalBlog", // <title>
  shortSiteTitle: "Masaki Nishi PersonalBlog", // <title> ending for posts and pages
  siteDescription: "Masaki Nishi is Awesome.",
  siteUrl: "http://localhost:8000",
  pathPrefix: "",
  siteImage: "/ogp/profile.png",
  siteImageOgp: "/ogp/profile.png",
  siteLanguage: "ja",
  // author
  authorName: "Masaki Nishi",
  authorTwitterAccount: "@masakinishi_com",
  // info
  infoTitle: "Masaki Nishi",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "Masaki Nishi PersonalBlog",
  manifestShortName: "Masa's Blog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "n24mfs@gmail.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/MasakiNishi" },
    { name: "twitter", url: "https://twitter.com/masakinishi_com" },
    { name: "facebook", url: "https://www.facebook.com/profile.php?id=100011427868153" }
  ]
};
