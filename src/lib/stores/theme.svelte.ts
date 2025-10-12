/**
 * Theme store using Svelte 5 runes
 * Manages theme state (light, dark, system) with localStorage persistence
 */

class ThemeState {
	theme = $state('system');
	resolvedTheme = $state('dark');

	constructor() {
		// Initialize theme from localStorage or default to system
		if (typeof window !== 'undefined') {
			const stored = localStorage.getItem('theme');
			if (stored === 'light' || stored === 'dark' || stored === 'system') {
				this.theme = stored;
			}
			this.updateResolvedTheme();
			this.applyTheme();
			this.watchSystemTheme();
		}
	}

	/**
	 * Set the theme and persist to localStorage
	 * @param {string} newTheme - The theme to set ('light', 'dark', or 'system')
	 */
	// @ts-expect-error - Using runes prevents TypeScript annotations
	setTheme(newTheme) {
		this.theme = newTheme;
		if (typeof window !== 'undefined') {
			localStorage.setItem('theme', newTheme);
			this.updateResolvedTheme();
			this.applyTheme();
		}
	}

	/**
	 * Update the resolved theme based on current theme and system preference
	 */
	updateResolvedTheme() {
		if (this.theme === 'system') {
			this.resolvedTheme = this.getSystemTheme();
		} else {
			this.resolvedTheme = this.theme;
		}
	}

	/**
	 * Get system theme preference
	 */
	getSystemTheme() {
		if (typeof window === 'undefined') return 'dark';
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}

	/**
	 * Apply theme to document
	 */
	applyTheme() {
		if (typeof window === 'undefined') return;
		
		const root = document.documentElement;
		root.classList.remove('light', 'dark');
		root.classList.add(this.resolvedTheme);
	}

	/**
	 * Watch for system theme changes
	 */
	watchSystemTheme() {
		if (typeof window === 'undefined') return;

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handler = () => {
			if (this.theme === 'system') {
				this.updateResolvedTheme();
				this.applyTheme();
			}
		};

		// Modern browsers
		if (mediaQuery.addEventListener) {
			mediaQuery.addEventListener('change', handler);
		} else {
			// Fallback for older browsers
			mediaQuery.addListener(handler);
		}
	}

	/**
	 * Toggle between light and dark (skips system)
	 */
	toggle() {
		const newTheme = this.resolvedTheme === 'dark' ? 'light' : 'dark';
		this.setTheme(newTheme);
	}
}

// Export singleton instance
export const themeState = new ThemeState();
