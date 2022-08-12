---
id: input
title: Input
sidebar_position: 1
---

:::info

the property attributes:
type by default is a text and you can change it to password | email | number | range | tel

:::

#### Text

```tsx
const fields: IField[] = [
  {
    // highlight-start
    type: "input", // required
    name: "nameText", // required
    // highlight-end
    value: "", // optional
    attributes: {
      // highlight-start
      type: "text", // default = text, or password, email, number, tel, optional
      id: "idText", // required
      // highlight-end
      classes: ["class-field"], // optional
      label: "Label", // optional
      placeholder: "Placeholder", // optional
      autoComplete: false, // optional
      autoCorrect: false, // optional
      disabled: false, // optional
      readonly: false, // optional
    },
    // optional
    prefix: {
      tag: "div", // optional
      classes: ["class-wrapper"], // optional
    },
  },
];
```

#### Password

```tsx
const fields: IField[] = [
  {
    // highlight-start
    type: "input", // required
    name: "namePassword", // required
    // highlight-end
    value: "", // optional
    attributes: {
      // highlight-start
      type: "password",
      id: "idPassword", // required
      // highlight-end
      classes: ["class-field"], // optional
      label: "Label", // optional
      placeholder: "Placeholder", // optional
      autoComplete: false, // optional
      autoCorrect: false, // optional
      disabled: false, // optional
      readonly: false, // optional
    },
    // optional
    prefix: {
      tag: "div", // optional
      classes: ["class-wrapper"], // optional
    },
  },
];
```

#### Email

```tsx
const fields: IField[] = [
  {
    // highlight-start
    type: "input", // required
    name: "nameEmail", // required
    // highlight-end
    value: "", // optional
    attributes: {
      // highlight-start
      type: "email",
      id: "idEmail", // required
      // highlight-end
      classes: ["class-field"], // optional
      label: "Label", // optional
      placeholder: "Placeholder", // optional
      autoComplete: false, // optional
      autoCorrect: false, // optional
      disabled: false, // optional
      readonly: false, // optional
    },
    // optional
    prefix: {
      tag: "div", // optional
      classes: ["class-wrapper"], // optional
    },
    rules: ["email"], // optional
  },
];
```

#### Number

```tsx
const fields: IField[] = [
  {
    // highlight-start
    type: "input", // required
    name: "nameNumber", // required
    // highlight-end
    value: "", // optional
    attributes: {
      // highlight-start
      type: "number",
      id: "idNumber", // required
      // highlight-end
      classes: ["class-field"], // optional
      label: "Label", // optional
      placeholder: "Placeholder", // optional
      autoComplete: false, // optional
      autoCorrect: false, // optional
      disabled: false, // optional
      readonly: false, // optional
    },
    // optional
    prefix: {
      tag: "div", // optional
      classes: ["class-wrapper"], // optional
    },
  },
];
```

#### Range

```tsx
const fields: IField[] = [
  {
    // highlight-next-line
    type: "input", // required
    // highlight-next-line
    name: "nameRange", // required
    value: "", // optional
    attributes: {
      // highlight-start
      type: "range",
      id: "idRange", // required
      // highlight-end
      classes: ["class-field"], // optional
      label: "Label", // optional
      placeholder: "Placeholder", // optional
      autoComplete: false, // optional
      autoCorrect: false, // optional
      disabled: false, // optional
      readonly: false, // optional
      // highlight-start
      min: 0, // required
      max: 100, // required
      step: 10, // required
      // highlight-end
    },
    // optional
    prefix: {
      tag: "div", // optional
      classes: ["class-wrapper"], // optional
    },
  },
];
```
