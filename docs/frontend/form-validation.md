---
title: Form Validation
description: Client-side validation flow, server error hydration, and visibility-aware field handling.
---

# Form Validation

## How Validation Works

The dashboard disables the default browser validation flow and uses the Redot validator stack instead.

That stack is loaded in the scaffold layout through:

- `public/assets/plugins/redot-validator.js`
- `public/assets/plugins/redot-validator-rules.js`

Server-side errors are then pushed back into the page through global window state:

- `window.OldBag`
- `window.ErrorsBag`

Both are set in `resources/layouts/scaffold.blade.php`.

## Field Contract

Any field that should be validated in the browser uses the `validation` attribute.

Example:

```blade
<x-input
    name="title"
    title="Title"
    validation="required|min:3|max:100" />
```

The validator scans:

- `[validation]`
- while skipping `[disable-validation]`

Validation rules are parsed from the `validation` attribute and executed against the registered rule callbacks.

## Supported Field Detection

The validator derives field type from the element and its rules.

It can treat a field as:

- `string`
- `array`
- `numeric`
- `file`
- `date`

Type selection affects which rule callbacks run and how values are normalized.

## Label Resolution

Error labels are resolved in this order:

- `label`
- `title`
- `aria-label`
- matching `<label for="...">`

That means component titles and explicit labels automatically feed better validation messages.

## Form Targeting

The `<x-form>` component writes a hidden `_form` field.

When the page reloads with validation errors, the scaffold layout:

- reads `_form` from `window.OldBag`
- finds the matching form instance
- appends errors only inside that form
- scrolls to the first invalid field

This matters when a page contains more than one form.

## Visibility-Aware Validation

Validation is tied to the visibility plugin.

When a field is hidden through the dashboard visibility system, it can be excluded from validation by adding `disable-validation`.

This keeps conditional forms from failing on fields the user cannot currently see or edit.

## Error Rendering Behavior

The validation flow is not limited to inline messages.

It also:

- injects invalid feedback near the field
- marks tab headers when the invalid field is inside a tab pane
- cooperates with repeater fields
- uses server error bags after redirect validation failures

## Useful Attributes

These attributes affect browser-side validation behavior:

- `validation`
- `validation-type`
- `validation-<rule>-message`
- `disable-validation`
- `skip`

`skip` is consumed once, then removed by the validator before the next pass.

## Practical Rule

For dashboard forms:

- keep Laravel validation as the source of truth
- use `validation` for immediate browser feedback
- use `<x-form>` so error targeting stays scoped
- let visibility logic disable hidden fields instead of manually fighting error state
