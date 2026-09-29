# Scaffold Color Palettes

This document contains canonical Scaffold color values.

Only values that have passed the complete color methodology should be placed here.

## Base

Base colors are global endpoints and do not belong to a chromatic family.

```css
--color-ds-base-0: oklch(1 0 0);
--color-ds-base-1000: oklch(0 0 0);
```

## Neutral

```css
--color-ds-neutral-50: oklch(0.985 0 0);
--color-ds-neutral-100: oklch(0.950 0 0);
--color-ds-neutral-200: oklch(0.900 0 0);
--color-ds-neutral-300: oklch(0.835 0 0);
--color-ds-neutral-400: oklch(0.735 0 0);
--color-ds-neutral-500: oklch(0.555 0 0);
--color-ds-neutral-600: oklch(0.470 0 0);
--color-ds-neutral-700: oklch(0.385 0 0);
--color-ds-neutral-800: oklch(0.300 0 0);
--color-ds-neutral-900: oklch(0.220 0 0);
--color-ds-neutral-950: oklch(0.145 0 0);
```

## Natural Colors

Scaffold's core Natural Colors are:

- Red
- Amber
- Green
- Teal
- Blue
- Purple
- Pink

### Canonical Status

The Natural Color scales are under active validation following the nonlinear L/C/H methodology.

Do not treat experimental palette values as canonical until they are explicitly locked.

## Future Families

Planned families include:

- Orange
- Yellow
- Lime
- Emerald
- Cyan
- Sky
- Indigo
- Violet
- Fuchsia
- Rose

Additional categories may be introduced after their taxonomy and purpose are defined.

## Change Policy

Palette changes are design-system changes.

A proposed change should include:

1. reason for change
2. affected tokens
3. perceptual impact
4. gamut validation
5. accessibility impact where relevant
6. visual review
7. migration notes when consumers may be affected
