import { readable } from 'svelte/store';

/**
 * Custom SSR-safe media query store compatible with Svelte store syntax.
 * @param query CSS media query string (e.g. '(prefers-reduced-motion: reduce)')
 */
export function useMediaQuery(query: string) {
	return readable(false, (set) => {
		if (typeof window === 'undefined') return;
		const mediaQuery = window.matchMedia(query);
		set(mediaQuery.matches);
		const handler = (e: MediaQueryListEvent) => set(e.matches);
		mediaQuery.addEventListener('change', handler);
		return () => mediaQuery.removeEventListener('change', handler);
	});
}
