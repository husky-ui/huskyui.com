import type { APIRoute } from 'astro';

import { AppConfig } from "@app/config";

// TODO: Manifest JSON
export const get: APIRoute = (_) => {
  return {
    body: JSON.stringify({
      name: AppConfig.name,
      short_name: AppConfig.defaults.title,
      background_color: "#00367110",
      start_url: "/",
      display: "browser",
      lang: "en",
      icons: [
        {
          src: "https://" + AppConfig.site.hostname +  "/favicon.png",
          type: "image/png",
        },
      ],
    })
  };
}
