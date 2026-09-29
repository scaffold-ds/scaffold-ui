# Scaffold Architecture

## Purpose

Scaffold is a production-grade design system built around shared design tokens, accessible behavioral primitives, and framework-specific components.

The architecture separates visual foundations, behavior, and framework implementations so each layer has a clear responsibility.

## Architecture

```text
Scaffold
├── Tokens
│   ├── Color
│   ├── Typography
│   ├── Spacing
│   ├── Radius
│   ├── Shadow
│   └── Motion
│
├── Primitives
│   └── Behavioral / headless foundations
│
├── React
│   └── Styled React components
│
└── Apps
    ├── Documentation Website
    └── Playground
```

## Principles

- Tokens define the visual language.
- Primitives provide reusable behavior and accessibility.
- Framework packages provide framework-specific APIs.
- Scaffold owns the visual styling and design language.
- Mature libraries should be preferred for generic foundational behavior.
- Public APIs should be predictable, composable, typed, and stable.
- Implementation details should not accidentally become public APIs.

## Current Foundational Choices

- **Base UI** for behavioral primitives where appropriate.
- **Shiki** for syntax highlighting.
- Custom implementations for distinctive Scaffold behavior or presentation.

## Package API

The intended React consumer experience is:

```tsx
import { Button } from "@scaffold-ds/react";
```

```css
@import "@scaffold-ds/react/styles.css";
```

Package boundaries should remain explicit so consumers can depend on stable public APIs rather than internal source paths.
