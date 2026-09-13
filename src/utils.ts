export function camelToTitle(text: string) {
  return text
    .replace(/([A-Z])/, ' $1')
    .replace(/^./, str => str.toUpperCase())
    .trim();
}