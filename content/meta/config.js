const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Masaki Nishi PersonalBlog", // <title>
  shortSiteTitle: "Masaki Nishi PersonalBlog", // <title> ending for posts and pages, not using now
  siteDescription: "サンフランシスコ・シリコンバレー在住の筆者がプログラミング技術を中心に、テクノロジー情報やウェブマーケティング分野、海外情報など幅広く発信しています。",
  siteUrl: "https://masakinishi.com",
  pathPrefix: "",
  siteImage: "/ogp/profile.png",
  siteImageOgp: "/ogp/profile.png",
  siteLanguage: "ja",
  // author
  authorName: "Masaki Nishi",
  authorTwitterAccount: "masakinishi_com",
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
  contactEmail: "info@masakinishi.com",
  // social
  authorSocialLinks: [
    { name: "Twitter", url: "https://twitter.com/masakinishi_com" },
    { name: "Facebook", url: "https://www.facebook.com/masakinishicom/" },
    { name: "Instagram", url: "https://www.instagram.com/masakinishi_com/" }
  ]
};
