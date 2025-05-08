// Get the base path for static assets in /public (not needed in dev mode)
export const getBasePublicPath = () => {
  if (process.env.PAGES_BASE_PATH) {
    return process.env.PAGES_BASE_PATH;
  }

  return "";
};
