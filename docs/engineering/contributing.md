# Contributing to Scaffold

## Before Contributing

Read the relevant project documentation before modifying shared foundations.

At minimum:

- `docs/architecture/overview.md`
- `docs/design/principles.md`
- relevant engineering conventions
- relevant design methodology

## General Expectations

Contributions should prioritize:

- correctness
- accessibility
- type safety
- maintainability
- performance
- consistency
- clear APIs
- documentation

## Components

When adding a component:

1. determine whether an existing primitive can provide its behavior
2. define the public API
3. implement semantics and accessibility
4. implement Scaffold styling
5. implement interaction states
6. test the component
7. document usage

## Dependencies

Prefer established libraries for generic infrastructure when they provide clear value.

Do not introduce a dependency merely to avoid a small amount of local implementation.

## Design Changes

Changes to tokens and visual foundations should be documented and reviewed before becoming canonical.

## Pull Requests

A pull request should explain:

- what changed
- why it changed
- affected packages
- relevant design decisions
- testing performed
- screenshots or visual evidence when appropriate

Keep unrelated changes out of the same pull request.
