import { DiscoveryFormData } from '../types/discovery';

export function encodeDiscoverySession(data: DiscoveryFormData): string {
  try {
    const jsonStr = JSON.stringify(data);
    // Base64 encoding with full UTF-8 support
    const encoded = btoa(encodeURIComponent(jsonStr).replace(/%([0-9A-F]{2})/g, (_, p1) => {
      return String.fromCharCode(parseInt(p1, 16));
    }));
    return encodeURIComponent(encoded);
  } catch (e) {
    console.error('Failed to encode discovery session:', e);
    return '';
  }
}

export function decodeDiscoverySession(encodedStr: string): DiscoveryFormData | null {
  try {
    let cleanStr = encodedStr.trim();
    if (cleanStr.startsWith('?session=')) {
      cleanStr = cleanStr.substring(9);
    } else if (cleanStr.startsWith('session=')) {
      cleanStr = cleanStr.substring(8);
    }

    let raw = cleanStr;
    try {
      raw = decodeURIComponent(cleanStr);
    } catch {
      raw = cleanStr;
    }

    const decoded = decodeURIComponent(Array.prototype.map.call(atob(raw), (c: string) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    const parsed = JSON.parse(decoded);
    if (parsed && parsed.s01_client && parsed.s02_goals && parsed.s03_structure) {
      return parsed as DiscoveryFormData;
    }
    return null;
  } catch (e) {
    console.error('Failed to decode discovery session:', e);
    return null;
  }
}
