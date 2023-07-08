import { defineConfig } from 'astro/config';

import { AppConfig } from './src/config';
import { GlobalRedirects } from './src/redirects';

// Official Astro Integrations
// import mdx from '@astrojs/mdx';
// import sitemap from '@astrojs/sitemap';
// import partytown from '@astrojs/partytown';
// import prefetch from '@astrojs/prefetch';

// Other Astro Integrations
import compress from "astro-compress";

// https://astro.build/config
/** @type {import('astro').AstroUserConfig} */

// console.log("+++++++++++++++++++++++")
// console.log(AppConfig)
// console.log("+++++++++++++++++++++++")

export default defineConfig({
    root: ".",
    
    site: AppConfig.site.toString(),
    base: AppConfig.path,
    
    srcDir: "./src",
    publicDir: "./static",
    
    output: "static",
    outDir: './dist',
    trailingSlash: "ignore",
    // compressHTML: true,
    
    
    integrations: [
        // Other
        compress({
            path: "./dist",
            exclude: [
                ".*xml",
                ".*txt",
                ".*json",
          ],
          files: false,
          svg: false,
          css: false,
          img: false,
          html: {        
              preserveLineBreaks: true,
              removeAttributeQuotes: false,
            },
            logger: 1,
        }),
    ],
    
    
    // Redirects (experimental) | new in 2.6 | 
    redirects: GlobalRedirects,
    
    // Experimental flags
    experimental: {
        assets: true, // Built-in Image Support @astro v2.1
        
        redirects: true, // enable redirects creation
    },
    
    // Astro Build Config
    build: {
      assets: ".astro",
      client: "assets",
      format: 'directory',
  
      // inline css | new in 2.6 | https://docs.astro.build/en/reference/configuration-reference/#buildinlinestylesheets
      inlineStylesheets: "auto",
    },
});
