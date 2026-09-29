# Scaffold Engineering Conventions

## Code Quality

Prefer code that is:

- explicit
- typed
- composable
- maintainable
- easy to review

Avoid unnecessary abstraction.

## Public APIs

Public APIs must be intentional.

Do not expose internal implementation details unless they are part of the documented contract.

## Naming

Use descriptive names and follow the conventions established by each package.

Token names should remain predictable and stable.

## Styling

Scaffold owns its visual styling.

Use the project's established styling architecture rather than introducing component-specific styling systems without a documented reason.

## Accessibility

Interactive components should account for:

- semantic elements
- keyboard interaction
- focus management
- accessible names
- disabled and unavailable states
- reduced-motion preferences where relevant
- contrast

## Dependencies

Before adding a dependency, consider:

- whether the platform already provides the capability
- maintenance status
- bundle impact
- accessibility
- type support
- API stability
- whether it duplicates existing Scaffold infrastructure

## Documentation

Document decisions that are not obvious from the implementation.

If a convention is likely to be repeated across the project, document it rather than relying on tribal knowledge.

## Testing

Test behavior rather than implementation details wherever practical.

Important component states should be covered, including:

- default
- hover
- focus
- active
- disabled
- loading
- invalid/error
- responsive behavior where applicable
