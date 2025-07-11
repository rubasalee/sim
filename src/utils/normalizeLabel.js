/**
 * Normalize label to lowercase snake_case without special characters.
 * Equivalent to the Python normalize_label function.
 */
export function normalizeLabel(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

