export function asset(fileName: string): string {
  return `/assets/${encodeURIComponent(fileName)}`;
}
