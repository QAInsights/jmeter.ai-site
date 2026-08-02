type GtagParams = Record<string, unknown>;

/**
 * Fire a GA4 custom event. Safe everywhere: no-ops when gtag is unavailable
 * (dev, ad-blockers, prerendered HTML) so it never throws or pollutes logs.
 */
export function trackEvent(name: string, params: GtagParams = {}) {
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  w.gtag?.("event", name, params);
}
