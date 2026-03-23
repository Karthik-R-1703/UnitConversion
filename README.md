
# Unit Conversion Web App

A simple, responsive web application for converting between different units of Length, Area, Weight, Data Size, Temperature, and Number Systems.

## Features
- Dark mode by default with light mode toggle (synced via `localStorage`)
- Design matches [karthik r portfolio](https://karthik-r-1703.github.io/Karthik-R-1703/) — same color palette, typography, and border-based elevation
- Tabbed interface for easy navigation between converters
- Length, Area, Weight, Data Size, Temperature, and Number System converters
- Real-time conversion as you type
- Input validation with descriptive error messages
- Customizable decimal rounding (0–10 places)
- Unit info tooltips on all selects
- Keyboard and screen reader friendly (ARIA labels, live regions, focus outlines)
- Responsive layout (640px mobile breakpoint)
- No backend required (pure HTML, CSS, JS)

## Usage
1. Start a local server (recommended: `python -m http.server 8080` in the project directory).
2. Open `index.html` in your browser via `http://localhost:8080/index.html`.
3. Use the converters:
   - **Area**: Convert between mm², cm², m², km², in², ft², yd², mi²
   - **Data Size**: Convert between B, KB, MB, GB, TB, PB, EB
   - **Length**: Convert between mm, cm, m, km, in, ft, yd, mi
   - **Number System**: Convert between binary, octal, decimal, hexadecimal
   - **Temperature**: Convert between Celsius, Fahrenheit, Kelvin
   - **Weight**: Convert between mg, g, kg, t, lb, oz
4. Enter a value, select units, and set decimal places for rounding.

## File Structure

```
UnitConversion/
├── index.html              # Main dashboard — tabbed interface
├── Area.html               # Area converter
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
│   └── unitInfo.js         # Shared unit tooltip/info system
├── docs/
│   ├── ARCHITECTURE.md     # Full architecture, design tokens, and conversion formulas
│   └── CONTRIBUTING.md     # Guide for adding new converters
├── .github/
│   └── copilot-instructions.md  # GitHub Copilot project instructions
├── README.md
└── ToDo.txt                # Feature backlog
```

## How It Works

All converters follow a **two-step conversion pattern** through a base unit:

1. Source unit → base unit (multiply by from-factor)
2. Base unit → target units (multiply by to-factor)

| Category    | Base Unit  | Method |
|-------------|------------|--------|
| Length      | meter      | Factor multiplication |
| Area        | m²         | Factor multiplication |
| Weight      | kilogram   | Factor multiplication |
| Data Size   | Byte       | Binary (1024-based) factor multiplication |
| Temperature | Celsius    | Direct formulas (not factors) |
| Number System | Decimal  | `parseInt`/`toString` with radix |

Each converter page loads its JS module and updates all results live via `oninput`/`onchange` events.

For full architecture details, see [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

## Design

The UI follows the [karthik r portfolio](https://karthik-r-1703.github.io/Karthik-R-1703/) design system:

- **Font**: Fira Code monospace (Google Fonts)
- **Dark mode** (default): `#000` background, `#0a0a0a` cards, `#4ade80` accent
- **Light mode**: `#f5f5f5` background, `#fff` cards, `#16a34a` accent
- **Elevation**: Border-based (no box-shadows)
- **Headings**: Lowercase with tight letter-spacing

## Accessibility

- ARIA labels on all form controls
- Live regions (`aria-live="polite"`) for error messages
- Focus outlines using accent color
- `prefers-reduced-motion` support
- Unit info tooltips with `role="status"` for screen readers

## Documentation

| Document | Description |
|----------|-------------|
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | Full architecture, conversion formulas, design tokens, naming conventions |
| [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md) | Step-by-step guide for adding new converters |
| [.github/copilot-instructions.md](.github/copilot-instructions.md) | GitHub Copilot project instructions |
| [ToDo.txt](ToDo.txt) | Feature backlog (15 enhancement ideas) |

## Recent Improvements

- Dark/light theme toggle matching portfolio site design
- Fira Code monospace font, CSS custom properties for all colors
- Sticky nav bar with portfolio back-link
- Improved error handling and validation for all converters
- Unit info tooltips system (`unitInfo.js`)
- Data Size converter uses exponent-based math (avoids IEEE 754 precision loss)
- Number System converter delegates to shared JS module

## Possible Future Enhancements

See [ToDo.txt](ToDo.txt) for the full list. Highlights include:

- History of recent conversions
- Favorites for commonly used conversions
- Localization and multi-language support
- Export/share conversion results

## Contributing

See [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md) for the contributor guide and conventions.

Pull requests and suggestions are welcome!

## License

This project is open source and free to use.
