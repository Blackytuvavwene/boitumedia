# Theme System Implementation

## Overview
A comprehensive dark/light/system theme switcher implemented using Svelte 5 runes for optimal reactivity.

## Features
- ✅ **Three theme modes**: Light, Dark, and System (follows OS preference)
- ✅ **Persistent storage**: Theme preference saved to localStorage
- ✅ **No flash on load**: Script in app.html prevents FOUC (Flash of Unstyled Content)
- ✅ **System theme watching**: Automatically updates when OS theme changes
- ✅ **Reactive UI**: Uses Svelte 5 runes ($state, $derived) for better reactivity
- ✅ **Accessible dropdown**: Built with Melt UI for keyboard navigation and screen readers

## Files Created/Modified

### New Files
1. **`src/lib/stores/theme.svelte.ts`** - Theme state management using Svelte 5 runes
2. **`src/lib/components/ThemeToggle.svelte`** - Theme switcher dropdown component
3. **`src/lib/types/theme.ts`** - TypeScript type definitions for theme

### Modified Files
1. **`src/lib/components/navbar/Navbar.svelte`** - Added ThemeToggle component
2. **`src/routes/+layout.svelte`** - Initialized theme state
3. **`src/app.html`** - Added inline script to prevent FOUC

## Usage

### In Components
```svelte
<script>
	import { themeState } from '$lib/stores/theme.svelte';
	
	// Access current theme
	console.log(themeState.theme); // 'light' | 'dark' | 'system'
	
	// Access resolved theme (what's actually applied)
	console.log(themeState.resolvedTheme); // 'light' | 'dark'
	
	// Change theme
	themeState.setTheme('dark');
	
	// Toggle theme (between light and dark)
	themeState.toggle();
</script>
```

### Adding ThemeToggle to Any Component
```svelte
<script>
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
</script>

<ThemeToggle />
```

## How It Works

### 1. Theme Store (`theme.svelte.ts`)
- Uses Svelte 5 runes (`$state`) for reactive state management
- Automatically loads theme from localStorage on initialization
- Watches for system theme changes when mode is set to 'system'
- Applies theme by adding 'light' or 'dark' class to `<html>` element

### 2. CSS Variables (`app.css`)
- Already contains complete dark/light theme definitions
- Uses CSS custom properties for all colors
- `.dark` class applies dark theme colors
- Default (no class or `.light` class) applies light theme colors

### 3. FOUC Prevention (`app.html`)
- Inline script runs before page renders
- Checks localStorage and system preference
- Immediately applies correct class to `<html>` element
- Ensures no flash between theme loads

### 4. ThemeToggle Component
- Dropdown menu with three options (Light, Dark, System)
- Shows current selection with checkmark
- Icon changes based on resolved theme (Sun for light, Moon for dark)
- Built with Melt UI for accessibility

## Theme Values
All theme CSS variables are defined in `src/app.css`:
- Background colors
- Foreground/text colors
- Primary, secondary, accent colors
- Border, input, and UI element colors
- Sidebar colors
- Chart colors

## Browser Support
- Modern browsers with CSS custom properties support
- localStorage support required for persistence
- Falls back to 'dark' theme if localStorage unavailable
- `matchMedia` API for system theme detection

## Future Enhancements
- Add theme transition animations
- Add more theme presets (e.g., high contrast, colorblind modes)
- Add theme customization panel
- Sync theme across browser tabs using BroadcastChannel API
