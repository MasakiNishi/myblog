const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Masaki Nishi PersonalBlog", // <title>
  shortSiteTitle: "Masaki Nishi PersonalBlog", // <title> ending for posts and pages
  siteDescription: "Masaki Nishi is Awesome.",
  siteUrl: "https://gatsby-starter-personal-blog.greglobinski.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Masaki Nishi",
  authorTwitterAccount: "greglobinski",
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
    { name: "github", url: "https://github.com/greglobinski" },
    { name: "twitter", url: "https://twitter.com/greglobinski" },
    { name: "facebook", url: "http://facebook.com/greglobinski" }
  ]
};
