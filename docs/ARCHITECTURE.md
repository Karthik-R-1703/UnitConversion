# Architecture

## Overview

The Unit Conversion Web App is a client-side-only application built with vanilla HTML5, CSS3, and JavaScript. It provides real-time unit conversions across six categories via a tabbed single-page interface. No backend, build tools, or external libraries are required.

## Project Structure

```
UnitConversion/
├── index.html              # Main dashboard — tabbed interface loading all converters
├── Area.html               # Area converter (standalone + embedded fragment)
├── DataSize.html           # Data size converter
├── Length.html              # Length converter
├── NumberSystem.html        # Number system converter
├── Temperature.html         # Temperature converter
├── Weight.html              # Weight converter
├── js/
│   ├── area.js             # Area conversion logic
│   ├── datasize.js         # Data size conversion logic
│   ├── length.js           # Length conversion logic
│   ├── numbersystem.js     # Number system conversion logic
│   ├── temperature.js      # Temperature conversion logic
│   ├── weight.js           # Weight conversion logic
│   └── unitInfo.js         # Shared tooltip/info system for unit definitions
├── docs/                   # Project documentation
├── .github/
│   └── copilot-instructions.md  # GitHub Copilot project instructions
├── .gitignore              # Git ignore rules
├── README.md               # Project overview and usage
└── ToDo.txt                # Feature backlog
```

## Design Patterns

### Two-Step Conversion via Base Unit

All numeric converters (Length, Area, Weight, Data Size, Temperature) follow the same two-step conversion pattern:

1. Convert the input value **from the source unit to a base unit**
2. Convert **from the base unit to the target unit**

| Category    | Base Unit     |
|-------------|---------------|
| Length      | Meter (m)     |
| Area        | Square meter (m²) |
| Weight      | Kilogram (kg) |
| Data Size   | Byte (B)      |
| Temperature | Celsius (°C)  |

Each JS module exposes three functions following a consistent naming pattern:

- `{Type}_Conversion(fromUnit, toUnit, fromValue, roundingValue)` — main entry point
- `{Type}_FromUnit_Base_ConversionFactor()` — returns factor map (source unit → base)
- `{Type}_Base_ToUnit_ConversionFactor()` — returns factor map (base → target unit)

**Exception**: Temperature uses direct formulas instead of multiplication factors, and Number System uses `parseInt()`/`toString()` for base conversions.

### Live Conversion

All converters update results in real-time using `oninput` and `onchange` event handlers on input fields and select elements. No form submission is required.

### Input Validation

Every converter validates inputs before performing conversions:

- Checks for empty, non-numeric, or negative values (except Temperature, which allows negatives)
- Validates rounding parameter (0–10 decimal places)
- Displays error messages via a dedicated `#errorMsg` element with `aria-live="polite"`
- Shows `"-"` for all result fields when input is invalid

### Modular HTML Fragments

`index.html` loads each converter's HTML file as a tab fragment. Each converter HTML page also works standalone for isolated testing or direct access.

## Naming Conventions

### HTML IDs

| Purpose    | Pattern                   | Example           |
|------------|---------------------------|-------------------|
| Input      | `input{Type}Unit`         | `inputLengthUnit` |
| Unit select| `unit{Type}`              | `unitLength`      |
| Result     | `output_{unit}`           | `output_mm`       |
| Error      | `errorMsg`                | `errorMsg`        |
| Rounding   | `roundingLength`, etc.    | `roundingLength`  |

### JavaScript Functions

| Purpose               | Pattern                                    |
|-----------------------|--------------------------------------------|
| Main conversion       | `{Type}_Conversion()`                      |
| From-to-base factors  | `{Type}_FromUnit_Base_ConversionFactor()`  |
| Base-to-target factors| `{Type}_Base_ToUnit_ConversionFactor()`    |

## Styling

All CSS is embedded inline within each HTML file's `<style>` tags (no external stylesheet). The design follows the [karthik r portfolio](https://karthik-r-1703.github.io/Karthik-R-1703/) design system.

### CSS Custom Properties

All colors use CSS custom properties. Dark mode is the default; light mode activates via `[data-theme="light"]`.

**Dark mode (default):**

| Variable         | Value       |
|------------------|-------------|
| `--bg`           | `#000`      |
| `--bg-card`      | `#0a0a0a`   |
| `--border`       | `#181818`   |
| `--border-hover` | `#333`      |
| `--text`         | `#fff`      |
| `--text-muted`   | `#888`      |
| `--text-dim`     | `#666`      |
| `--accent`       | `#4ade80`   |
| `--error`        | `#ef4444`   |

**Light mode (`[data-theme="light"]`):**

| Variable         | Value       |
|------------------|-------------|
| `--bg`           | `#f5f5f5`   |
| `--bg-card`      | `#fff`      |
| `--border`       | `#ddd`      |
| `--border-hover` | `#bbb`      |
| `--text`         | `#111`      |
| `--text-muted`   | `#555`      |
| `--text-dim`     | `#777`      |
| `--accent`       | `#16a34a`   |
| `--error`        | `#d00`      |

### Design Principles

- **Typography**: `'Fira Code', 'SF Mono', 'Fira Mono', 'Roboto Mono', monospace` (loaded from Google Fonts). Headings are lowercase with tight letter-spacing
- **Elevation**: Border-based (`1px solid var(--border)`) — no box-shadows
- **Border radius**: `10px` (cards/containers), `6px` (inputs, buttons)
- **Transitions**: `0.2s` for border-color and color changes
- **Focus states**: `outline: 2px solid var(--accent)` with `2px` offset

### Theme Toggle

The `index.html` nav bar includes a ☾/☀ toggle button. Theme preference is persisted in `localStorage` and applied via `data-theme` attribute on `<html>`. Converter pages inherit the theme when embedded as tab fragments; standalone pages default to dark mode.

**Responsive breakpoint**: 640px (adjusts padding, font sizes, tab layout, and tooltip positioning for mobile).

## Accessibility

- ARIA labels on all form controls (`aria-label`)
- Live regions for error feedback (`aria-live="polite"`)
- Focus outlines using accent color (`outline: 2px solid var(--accent)`)
- Semantic HTML (`<main>`, `<form>`, heading hierarchy)
- Unit info tooltips use `role="status"` for screen reader announcements
- `prefers-reduced-motion` media query disables animations
- Tab panels linked to tab buttons via `aria-labelledby`

## External Dependencies

- **Google Fonts**: Fira Code font family (loaded via `<link>` in `index.html`)
- **Google Analytics** (`gtag.js`): Loaded in `index.html` for usage tracking only
- No JavaScript libraries or frameworks

## Conversion Formulas

### Length (base: meter)

| Unit | To meters          | From meters        |
|------|--------------------|--------------------|
| mm   | × 0.001            | × 1000             |
| cm   | × 0.01             | × 100              |
| m    | × 1                | × 1                |
| km   | × 1000             | × 0.001            |
| in   | × 0.0254           | ÷ 0.0254           |
| ft   | ÷ 3.2808           | × 3.2808           |
| yd   | ÷ 1.0936           | × 1.0936           |
| mi   | ÷ 0.00062137       | × 0.00062137       |

### Area (base: m²)

| Unit | To m²              | From m²            |
|------|--------------------|--------------------|
| mm²  | × 0.000001         | × 1000000          |
| cm²  | × 0.0001           | × 10000            |
| m²   | × 1                | × 1                |
| km²  | × 1000000          | × 0.000001         |
| in²  | × 0.00064516       | ÷ 0.00064516       |
| ft²  | × 0.092903         | ÷ 0.092903         |
| yd²  | × 0.836127         | ÷ 0.836127         |
| mi²  | × 2589988.11       | ÷ 2589988.11       |

### Weight (base: kg)

| Unit | To kg              | From kg            |
|------|--------------------|--------------------|
| mg   | × 0.000001         | × 1000000          |
| g    | × 0.001            | × 1000             |
| kg   | × 1                | × 1                |
| t    | × 1000             | × 0.001            |
| lb   | ÷ 2.205            | × 2.205            |
| oz   | ÷ 35.274           | × 35.274           |

### Temperature (via Celsius)

- C → F: `C × 9/5 + 32`
- C → K: `C + 273.15`
- F → C: `(F − 32) × 5/9`
- K → C: `K − 273.15`

### Data Size (binary, base: Byte)

| Unit | Bytes              |
|------|--------------------|
| B    | 1                  |
| KB   | 1024               |
| MB   | 1024²              |
| GB   | 1024³              |
| TB   | 1024⁴              |
| PB   | 1024⁵              |
| EB   | 1024⁶              |

### Number System

Uses `parseInt(value, sourceRadix)` to convert to decimal, then `number.toString(targetRadix)` to convert to the target base. Supports binary (2), octal (8), decimal (10), and hexadecimal (16).
