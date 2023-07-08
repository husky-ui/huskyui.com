import { AppConfig } from "@app/config";

/**
 * Get Full URL from path
 * 
 * @param path string
 * @param addTrailingSlash boolean
 * @returns string
 */
export function getFullURL(path: string, addTrailingSlash: boolean = false){
  if(!addTrailingSlash) return new URL(path, AppConfig.site);
  return new URL(path, AppConfig.site).toString().replace(/\/$|$/, '/');
}
