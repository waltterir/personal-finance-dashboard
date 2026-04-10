export function safeJsonParse<T>(json: string | null, fallback: T): T {
  if (!json) return fallback;

  try {
    return JSON.parse(json) as T;
  } catch {
    return fallback;
  }
}

export function safeJsonStringify<T>(data: T): string {
  try {
    return JSON.stringify(data);
  } catch {
    return "null";
  }
}
