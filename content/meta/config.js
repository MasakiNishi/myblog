const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Masaki Nishi PersonalBlog", // <title>
  shortSiteTitle: "Masaki Nishi PersonalBlog", // <title> ending for posts and pages
  siteDescription: "Masaki Nishi is Awesome.",
  siteUrl: "http://localhost:8000",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteImageOgp: "/ogp/profile.png",
  siteLanguage: "en",
  // author
  authorName: "Masaki Nishi",
  authorTwitterAccount: "@masakinishi_com",
  // info
  infoTitle: "Masaki Nishi",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "Masaki Nishi PersonalBlog",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "john@doe.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/MasakiNishi" },
    { name: "twitter", url: "https://twitter.com/masakinishi_com" },
    { name: "facebook", url: "http://facebook.com/masakinishi" }
  ]
};
