# Scaffold Palette Generation

## Overview

This document describes the practical process for generating a new Scaffold color family.

## Authoring Representation

Colors are authored in OKLCH:

```text
oklch(L C H)
```

where:

- `L` = perceptual lightness
- `C` = chroma
- `H` = hue

## Reference Gamut

Scaffold v1 uses sRGB as the reference gamut.

This does not imply identical rendering on every display. It establishes a consistent reference space for the authored palette.

## Workflow

### 1. Choose the 500 Anchor

Start with the intended family color.

```css
--color-ds-example-500: oklch(...);
```

The anchor should be chosen deliberately rather than derived from an arbitrary interpolation.

### 2. Establish 50 and 950

Choose useful light and dark endpoints.

The brightest and darkest mathematically possible colors are not necessarily good UI colors.

### 3. Generate the Light and Dark Curves

Construct the remaining shades using nonlinear L/C/H behavior.

The light and dark sides may use different curves.

### 4. Use a Generator as a Reference

Tools such as Tints.dev can be used to produce an initial palette.

For example, a source color such as:

```text
#0070F3
```

can provide a useful nonlinear reference curve.

The generated values are candidates, not automatically Scaffold values.

### 5. Check Perceptual Consistency

Inspect:

- L progression
- C progression
- H movement
- local jumps
- relationship to 500

### 6. sRGB Gamut Validation

Mathematically verify every final value against the sRGB reference gamut.

Correct values that fall outside the reference gamut.

### 7. Cross-Family Balance

Compare the new family with all existing families.

Do not force identical numerical chroma. Evaluate perceived visual strength instead.

### 8. Optical Review

Review the complete scale visually and in representative UI contexts.

### 9. Accessibility Validation

Check the semantic combinations in which the family will be used.

### 10. Finalization

After validation, move the approved values into the canonical palette definition.

## Generator Policy

Automated generators are useful for:

- exploration
- initial curves
- comparison
- discovering useful L/C/H behavior

They are not authoritative.

The final palette belongs to Scaffold.

## Naming

Use the standard eleven steps:

```text
family-50
family-100
family-200
family-300
family-400
family-500
family-600
family-700
family-800
family-900
family-950
```

Public token names use the Scaffold namespace:

```css
--color-ds-blue-500
```
