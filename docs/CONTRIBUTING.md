# Contributing

## Getting Started

1. Clone the repository
2. Start a local server:
   ```bash
   python -m http.server 8080
   ```
3. Open `http://localhost:8080/index.html` in your browser

No build step or dependency installation is required.

## Adding a New Converter

Follow these steps to add a new unit converter (e.g., Speed):

### 1. Create the JavaScript module

Create `js/speed.js` following the existing pattern:

```javascript
function Speed_Conversion(fromUnit, toUnit, fromValue, roundingValue) { ... }
function Speed_FromUnit_Base_ConversionFactor() { ... }
function Speed_Base_ToUnit_ConversionFactor() { ... }
```

- Pick a base unit (e.g., meters per second)
- Define conversion factors to/from the base unit
- Include input validation (empty, NaN, negative values)
- Use `toFixed(roundingValue)` for decimal rounding

### 2. Create the HTML page

Create `Speed.html` using any existing converter HTML as a template:

- Copy the full `<style>` block with CSS custom properties (`:root` dark vars + `[data-theme="light"]` overrides)
- Use unique IDs: `inputSpeedUnit`, `unitSpeed`, `roundingSpeed`
- Add `output_{unit}` elements for each result
- Include `oninput` and `onchange` handlers calling `Speed_Conversion()`
- Add an `errorMsg` element with `aria-live="polite"`
- Use `var(--bg)`, `var(--bg-card)`, `var(--border)`, `var(--text)`, `var(--error)` etc. for all colors — never hardcode hex values

### 3. Register in index.html

- Add a tab button in the tab bar
- Add a tab content section that loads `Speed.html`
- Include `<script src="js/speed.js"></script>`

### 4. Add unit definitions

In `js/unitInfo.js`, add entries to the `unitDefinitions` object for each new unit so tooltip info buttons work.

## Code Conventions

- **Functions**: `{Type}_Conversion()`, `{Type}_FromUnit_Base_ConversionFactor()`, `{Type}_Base_ToUnit_ConversionFactor()`
- **HTML IDs**: `input{Type}Unit`, `unit{Type}`, `output_{unit}`, `errorMsg`
- **Styling**: Inline CSS in `<style>` tags; all colors via CSS custom properties (`var(--bg)`, `var(--text)`, etc.); dark mode default, light mode via `[data-theme="light"]`
- **Font**: `'Fira Code'` monospace stack (inherited from parent in tab mode)
- **Validation**: Always validate inputs before conversion; show errors in `#errorMsg`
- **Accessibility**: Add `aria-label` to all form controls, use `aria-live="polite"` for error messages, use `var(--accent)` for focus outlines

## Testing

Open individual converter HTML files directly in a browser for isolated testing. Use `index.html` for integrated testing with the tabbed interface.

## Feature Backlog

See `ToDo.txt` for planned enhancements.
