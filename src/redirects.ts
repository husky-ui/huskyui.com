// Global Redirects using astro

import type { ValidRedirectStatus } from 'astro';

// from astro.d.ts
type RedirectConfig = string | {
  status: ValidRedirectStatus;
  destination: string;
};

export const GlobalRedirects: Record<string, RedirectConfig> = {
  // "/old/path": "/new/path",    // example usage

}

export default GlobalRedirects;
