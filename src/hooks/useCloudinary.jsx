import { useMemo } from "react";

export function useOptimizedImage(url, width = 400) {
  const optimizedUrl = useMemo(() => {
    if (!url) return "";
    return `https://res.cloudinary.com/dixepglqi/image/fetch/w_${width},q_auto,f_auto/${encodeURIComponent(
      url
    )}`;
  }, [url, width]);

  return optimizedUrl;
}
