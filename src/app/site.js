const defaultLandingOrigin =
  process.env.NODE_ENV === "production"
    ? "https://info.ments.app"
    : "http://localhost:3000";

export const LANDING_ORIGIN = (
  process.env.NEXT_PUBLIC_LANDING_ORIGIN || defaultLandingOrigin
).replace(/\/+$/, "");

export const WEBAPP_LOGIN_URL =
  process.env.NEXT_PUBLIC_WEBAPP_LOGIN_URL || "https://www.ments.app/login";

export const BUSINESS_APP_URL =
  process.env.NEXT_PUBLIC_BUSINESS_APP_URL || "https://business.ments.app";

export function landingUrl(path = "/") {
  if (/^https?:\/\//i.test(path)) return path;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${LANDING_ORIGIN}${normalizedPath}`;
}

export function landingAsset(path) {
  return landingUrl(path);
}
