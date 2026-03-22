// Unit info tooltip helper
(function () {
  const info = {
    // Length
    mm: 'Millimeter — 1/1000 of a meter (0.001 m).',
    cm: 'Centimeter — 1/100 of a meter (0.01 m).',
    m: 'Meter — base unit of length in the SI system.',
    km: 'Kilometer — 1000 meters.',
    in: 'Inch — 1 inch is 0.0254 meters.',
    ft: 'Foot — 12 inches.',
    yd: 'Yard — 3 feet.',
    mi: 'Mile — 1609.344 meters (approx).',
    // Area
    'mm^2': 'Square millimeter — area of a square 1 mm on a side.',
    'cm^2': 'Square centimeter — area of a square 1 cm on a side.',
    'm^2': 'Square meter — SI unit of area.',
    'km^2': 'Square kilometer — 1,000,000 m².',
    'in^2': 'Square inch.',
    'ft^2': 'Square foot.',
    'yd^2': 'Square yard.',
    'mi^2': 'Square mile.',
    // Weight
    mg: 'Milligram — 1/1000 of a gram.',
    g: 'Gram — base metric unit of mass (0.001 kg).',
    kg: 'Kilogram — base SI unit of mass.',
    t: 'Tonne (metric ton) — 1000 kilograms.',
    lb: 'Pound — 0.45359237 kilograms.',
    oz: 'Ounce — 1/16 of a pound.',
    // Data size
    B: 'Byte — 8 bits.',
    KB: 'Kilobyte — 1000 bytes (decimal) or 1024 bytes (binary).',
    MB: 'Megabyte — 1,000,000 bytes (decimal) or 1024² bytes (binary).',
    GB: 'Gigabyte — 10^9 bytes (decimal) or 1024³ bytes (binary).',
    TB: 'Terabyte — 10^12 bytes (decimal) or 1024⁴ bytes (binary).',
    PB: 'Petabyte.',
    EB: 'Exabyte.',
    // Temperature
    C: 'Celsius — metric temperature scale (°C).',
    F: 'Fahrenheit — temperature scale (°F).',
    K: 'Kelvin — absolute temperature scale, used in science.',
    // Number system
    binary: 'Binary — base-2 numeric system (0 and 1).',
    octal: 'Octal — base-8 numeric system (0–7).',
    decimal: 'Decimal — base-10 numeric system (0–9).',
    hexadecimal: 'Hexadecimal — base-16 numeric system (0–9, A–F).'
  };

  function createInfoButton(selectEl) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'unit-info-btn';
    btn.setAttribute('aria-label', 'Show unit info');
    btn.textContent = 'ⓘ';
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const sel = selectEl.value;
      const txt = info[sel] || 'No information available for this unit.';
      showTooltipForElement(selectEl, txt);
    });
    return btn;
  }

  function showTooltipForElement(el, text) {
    removeTooltip();
    const rect = el.getBoundingClientRect();
    const tip = document.createElement('div');
    tip.className = 'unit-tooltip';
    tip.textContent = text;
    tip.style.position = 'fixed';
    tip.style.left = (rect.right + 8) + 'px';
    tip.style.top = (rect.top) + 'px';
    tip.setAttribute('role', 'status');
    tip.addEventListener('click', removeTooltip);
    document.body.appendChild(tip);
    // auto-remove after 6s
    setTimeout(removeTooltip, 6000);
  }

  function removeTooltip() {
    const existing = document.querySelectorAll('.unit-tooltip');
    existing.forEach(n => n.parentNode && n.parentNode.removeChild(n));
  }

  function attachUnitInfoToSelects(root = document) {
    // target selects whose id starts with 'unit' and the number system select
    const allSelects = Array.from(root.querySelectorAll('select'));
    const selects = allSelects.filter(sel => {
      if (!sel.id) return false;
      return sel.id.toLowerCase().startsWith('unit') || sel.id === 'numberSystem';
    });
    selects.forEach(sel => {
      // avoid duplicate buttons
      if (sel.nextElementSibling && sel.nextElementSibling.classList && sel.nextElementSibling.classList.contains('unit-info-btn')) return;
      const btn = createInfoButton(sel);
      sel.parentNode && sel.parentNode.insertBefore(btn, sel.nextSibling);
    });
  }

  // Expose globally
  window.UnitInfo = { attachUnitInfoToSelects, showTooltipForElement };
  // Auto-attach on DOMContentLoaded for converter fragments loaded into tabs
  window.addEventListener('DOMContentLoaded', () => attachUnitInfoToSelects(document));
})();
