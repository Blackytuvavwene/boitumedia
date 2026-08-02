import type { Theme } from '$lib/types/theme';

class ThemeState {
	theme: Theme = $state('light');
	resolvedTheme: 'light' | 'dark' = $state('light');

	constructor() {
		if (typeof window !== 'undefined') {
			const stored = localStorage.getItem('theme');
			if (stored === 'light' || stored === 'dark') {
				this.theme = stored;
			} else {
				this.theme = 'light';
			}
			this.updateResolvedTheme();
			this.applyTheme();
		}
	}

	setTheme(newTheme: Theme) {
		this.theme = newTheme;
		if (typeof window !== 'undefined') {
			localStorage.setItem('theme', newTheme);
			this.updateResolvedTheme();
			this.applyTheme();
		}
	}

	updateResolvedTheme() {
		if (this.theme === 'system') {
			this.resolvedTheme = this.getSystemTheme();
		} else {
			this.resolvedTheme = this.theme;
		}
	}

	getSystemTheme(): 'light' | 'dark' {
		if (typeof window === 'undefined') return 'light';
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}

	applyTheme() {
		if (typeof window === 'undefined') return;

		const root = document.documentElement;
		root.classList.remove('light', 'dark');
		root.classList.add(this.resolvedTheme);
	}

	toggle() {
		const newTheme = this.resolvedTheme === 'dark' ? 'light' : 'dark';
		this.setTheme(newTheme);
	}
}

export const themeState = new ThemeState();
