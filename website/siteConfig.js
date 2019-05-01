/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'The Hatchery',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
		//image: '/img/undraw_open_source.svg',
		image: 'img/hatching.png',
		//infoLink: 'https://github.com/aragoncoop/coop-dao-docs/issues',
    pinned: true,
  },
];

const siteConfig = {
  title: 'The Coop', // Title for your website.
  tagline: 'A place for everything related to the Aragon Cooperative',

  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',
	// FOR TESTING AND BUILDING LOCALLY
	url: 'https://your-docusaurus-test-site.com', // Your website URL
	baseUrl: '/', // Base URL for your project 
	// FOR PUBLISHING TO GITHUB PAGES
	//url: 'https://aragoncoop.github.io', // Your website URL
	//baseUrl: '/coop-dao-docs/', // Base URL for your project 

  // Used for publishing and more
  projectName: 'coop-dao-docs',
  organizationName: 'aragoncoop',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
		{doc: 'framework/intro', label: 'Docs'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/favicon.ico',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#00DBCD',
    secondaryColor: '#00B4E6',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
	copyright: `Released under the Hive Commons License ${new Date().getFullYear()}`,
	//copyright: `Released under the [Hive Commons License](https://github.com/1Hive/HCL) ${new Date().getFullYear()}`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
