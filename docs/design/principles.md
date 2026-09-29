# Scaffold Design Principles

## 1. Native First

Prefer platform capabilities before introducing abstractions.

Use:

- semantic HTML
- native browser behavior
- CSS
- accessible platform primitives

Abstractions should provide meaningful value.

## 2. Composable

Components should work independently and compose naturally with other Scaffold components.

Avoid rigid APIs that force a single composition pattern.

## 3. Consistent

Shared design decisions should come from tokens and documented conventions rather than being reinvented inside individual components.

## 4. Accessible

Accessibility is part of component design from the beginning.

Consider:

- semantics
- keyboard interaction
- focus behavior
- accessible names
- screen readers
- contrast
- reduced motion

## 5. Predictable

A developer should be able to understand a component from its name, API, documentation, and behavior without studying its implementation.

## 6. Flexible, Not Arbitrary

Scaffold should support meaningful customization without turning every component into an unrestricted styling surface.

## 7. Production First

Components should be designed for real applications.

Performance, accessibility, maintainability, type safety, and API stability are first-class concerns.

## 8. Don't Reinvent Foundations

Use mature libraries for generic behavior when they provide a better-maintained foundation.

Scaffold's engineering effort should focus on:

- its design language
- its tokens
- its APIs
- its distinctive interactions
- its developer experience

## 9. Optical Quality

Mathematical consistency does not automatically create visual consistency.

Design decisions should be evaluated both mathematically and optically.

## 10. Documentation Is Part of the System

Stable design and engineering decisions should be documented so contributors can understand both what Scaffold does and why.
