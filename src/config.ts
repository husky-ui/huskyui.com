export type SocialUsernames = {
  twitter?: string;
  github?: string;
  mastadon: {
    host?: string;
    username?: string;
  };
  // youtube?: string;
  // facebook?: string;
  // instagram?: string;
  // linkedIn?: string;
}

export const SocialUsernames: SocialUsernames = {
  twitter: "huskyui_design",
  github: "husky-ui",
  mastadon: {
    host: "fosstodon.org",
    username: "huskyui",
  },
}

export type SocialLinks = {
  github?: string;
  mastadon?: string;
  twitter?: string;
  youtube?: string;
  facebook?: string;
  instagram?: string;
  linkedIn?: string;
}

export const SocialLinks: SocialLinks = {
  twitter: "https://twitter.com/" + SocialUsernames.twitter,
  github: "https://github.com/" + SocialUsernames.github,
  mastadon: "https://" + SocialUsernames.mastadon.host + "/@" + SocialUsernames.mastadon.username,
  // youtube: "https://youtube.com/" + SocialUsernames.youtube,
  // facebook: "https://facebook.com/" + SocialUsernames.facebook,
  // instagram: "https://instagram.com/" + SocialUsernames.instagram,
  // linkedIn: "https://linkedin.com/company/" + SocialUsernames.linkedIn,
}

export type AppConfig = {
  name: string;
  site: URL;
  path: string;
  titleSeperator: '|' | '-';
  defaults: {
    title: string;
    desc: string;
    seoImage?: string;
    seoImageAlt?: string;
    lang: string;
  },
}

export const AppConfig: AppConfig = {
  name: "HuskyUI",
  site: new URL("", "https://huskyui.com"),
  path: "/",
  titleSeperator: '|',

  defaults: {
    title: "HuskyUI",
    desc: "An open-source design system by Acknology Co.",
    seoImage: "https://huskyui.com/banner.png",
    seoImageAlt: "HuskyUI.com site header image",
    lang: "en-US",
  },
}

export default AppConfig;
