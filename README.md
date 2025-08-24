
# Unit Conversion Web App

A simple, responsive web application for converting between different units of Length, Area, Weight, Data Size, Temperature, and Number Systems.

## Features
- Tabbed interface for easy navigation between converters
- Modern, accessible, and responsive UI
- Keyboard and screen reader friendly
- Works on desktop and mobile devices
- Length, Area, Weight, Data Size, Temperature, and Number System converters
- Unique input IDs for each converter to prevent cross-tab conflicts
- Input validation and improved error handling (error messages shown in red)
- Supports decimal rounding for results (customizable per converter)
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
- `Area.html` — Area converter
- `DataSize.html` — Data size converter
- `index.html` — Main dashboard with all converters
- `js/` — Contains JS files for each converter
- `Length.html` — Length converter
- `NumberSystem.html` — Number system converter
- `README.md` — Project documentation
- `Temperature.html` — Temperature converter
- `Weight.html` — Weight converter

## Accessibility & Responsiveness
- Keyboard and screen reader friendly
- Works on desktop and mobile devices

## How It Works
- All conversion logic is handled in the respective JS files in the `js/` folder
- Each converter page loads its JS and updates results live
- Tabbed navigation loads converter HTML dynamically

## Recent Improvements
- Improved error handling and validation for all converters
- Added support for Data Size and Temperature conversions

## Possible Future Enhancements
- History of recent conversions
- Favorites for commonly used conversions
- Custom units and conversion rates
- Dark mode toggle
- Localization and multi-language support
- Export/share conversion results
- Graphical visualization of conversions

## Contributing
Pull requests and suggestions are welcome!

## License
This project is open source and free to use.
