---
id: styles
title: Styles
sidebar_position: 3
---

Is not depend to any libraries CSS, so you can integrate with any frameworks like bootstrap or tailwindcss.

## Bootstrap

```tsx
const fields: IField[] = [
  {
    type: "input",
    name: "email",
    attributes: {
      type: "email",
      id: "email",
      // highlight-next-line
      classes: ["form-control"],
      placeholder: "Tap your email",
    },
    rules: ["required", "email"],
    messages: {
      required: "Custom message for required rule!",
    },
  },
];

<Formly
  fields={fields}
  form_name={form_name}
  btnSubmit={{
    // highlight-next-line
    classes: ["class-btn-submit"],
    prefix: {
      tag: "div",
      // highlight-next-line
      classes: ["class-wrapper-btn-submit"],
    },
  }}
  btnReset={{
    // highlight-next-line
    classes: ["class-btn-submit"],
    prefix: {
      tag: "div",
      // highlight-next-line
      classes: ["class-wrapper-btn-reset"],
    },
  }}
  buttonsAction={{
    tag: "div",
    // highlight-next-line
    classes: ["class-wrapper-btn-actions"],
  }}
  // highlight-next-line
  classes={["class-form-a", "class-form-b"]}
/>;
```

## Tailwindcss

```tsx
const fields: IField[] = [
  {
    type: "input",
    name: "email",
    attributes: {
      type: "email",
      id: "email",
      // highlight-next-line
      classes: ["input px-4 py-3 rounded-full"],
      placeholder: "Tap your email",
    },
    rules: ["required", "email"],
    messages: {
      required: "Custom message for required rule!",
    },
  },
];
<Formly
  fields={fields}
  form_name={form_name}
  btnSubmit={{
    // highlight-next-line
    classes: ["class-btn-submit"],
    prefix: {
      tag: "div",
      // highlight-next-line
      classes: ["class-wrapper-btn-submit"],
    },
  }}
  btnReset={{
    // highlight-next-line
    classes: ["class-btn-submit"],
    prefix: {
      tag: "div",
      // highlight-next-line
      classes: ["class-wrapper-btn-reset"],
    },
  }}
  buttonsAction={{
    tag: "div",
    // highlight-next-line
    classes: ["class-wrapper-btn-actions"],
  }}
  // highlight-next-line
  classes={["class-form-a", "class-form-b"]}
/>;
```
