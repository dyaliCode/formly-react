---
id: styles
title: Styles
sidebar_position: 3
---

Is not depend to any libraries CSS, so you can integrate with any frameworks like bootstrap or tailwindcss.

## Bootstrap

```typescript
const fields: IField[] = [
  {
    type: "input",
    name: "email",
    attributes: {
      type: "email",
      id: "email",
      classes: ["form-control"], // classes name for bootstrap
      placeholder: "Tap your email",
    },
    rules: ["required", "email"],
    messages: {
      required: "Custom message for required rule!",
    },
  },
];
```

## Tailwindcss

```typescript
const fields: IField[] = [
  {
    type: "input",
    name: "email",
    attributes: {
      type: "email",
      id: "email",
      classes: ["input px-4 py-3 rounded-full"], // classes name for bootstrap
      placeholder: "Tap your email",
    },
    rules: ["required", "email"],
    messages: {
      required: "Custom message for required rule!",
    },
  },
];
```
