export const useSlugify = (text: string) => {
  return text.toString().toLowerCase()
    .replace(/[^\w\-]+/g, '')       // Remove all non-word characters
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}
