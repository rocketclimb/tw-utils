export const sanitize = (classes: string): string =>
  classes.trim().replace(/\s{2,}/g, " ");
