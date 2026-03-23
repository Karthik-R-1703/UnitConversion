# Project Guidelines

## Architecture

This is a pure client-side unit conversion web app (no backend, no build tools, no frameworks). Each converter has a paired HTML page and JS module under `js/`. The main entry point is `index.html`, which provides a tabbed interface loading each converter as a fragment.

See `docs/ARCHITECTURE.md` for full architecture details, conversion formulas, and design tokens.

## Code Style

- Vanilla JavaScript only — no external libraries or frameworks
- All CSS is inline within each HTML file's `<style>` tags (no external stylesheet)
- Use CSS custom properties (variables) for all colors — dark mode is default, light mode via `[data-theme="light"]`
- Font: `'Fira Code', 'SF Mono', 'Fira Mono', 'Roboto Mono', monospace` (loaded from Google Fonts)
- Design follows the portfolio site at https://karthik-r-1703.github.io/Karthik-R-1703/ — same color palette, border-based elevation (no box-shadows), lowercase headings
- Color palette: `--bg: #000`, `--bg-card: #0a0a0a`, `--border: #181818`, `--accent: #4ade80` (dark); `--bg: #f5f5f5`, `--bg-card: #fff`, `--accent: #16a34a` (light)
- Error color: `--error: #ef4444` (dark) / `#d00` (light)
- Use `toFixed()` for decimal rounding, never `Math.round()` for display values

## Conventions

### Naming

- JS functions: `{Type}_Conversion()`, `{Type}_FromUnit_Base_ConversionFactor()`, `{Type}_Base_ToUnit_ConversionFactor()`
- HTML IDs: `input{Type}Unit` (input), `unit{Type}` (select), `output_{unit}` (result), `errorMsg` (error display)
- File mapping: `{Type}.html` ↔ `js/{type}.js` (e.g., `Length.html` ↔ `js/length.js`)

### Conversion Pattern

All numeric converters use a two-step conversion through a base unit:
1. Source unit → base unit (multiply by from-factor)
2. Base unit → target unit (multiply by to-factor)

Base units: meter (length), m² (area), kg (weight), Byte (data size), Celsius (temperature).

Exception: Temperature uses direct formulas; Number System uses `parseInt`/`toString` with radix.

### Input Validation

- Validate inputs before any conversion
- Check for empty, NaN, and negative values (negative allowed only for Temperature)
- Validate rounding value is 0–10
- Display errors in `#errorMsg` with red text (`#d00`)
- Show `"-"` for all result fields when invalid

### Accessibility

- Add `aria-label` on all form controls
- Use `aria-live="polite"` on error message containers
- Maintain focus outlines on interactive elements
- Add unit definitions to `unitInfo.js` for any new units

## Adding a New Converter

See `docs/CONTRIBUTING.md` for the step-by-step guide.

## Build and Test

No build step. Serve locally with:
```
python -m http.server 8080
```
Open `http://localhost:8080/index.html`. Individual HTML pages can be opened directly for isolated testing.
