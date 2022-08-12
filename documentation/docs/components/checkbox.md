---
id: checkbox
title: Checkbox
sidebar_position: 4
---

```tsx
const fields: IField[] = [
  {
    // highlight-start
    type: "checkbox", // required
    name: "checkA", // required
    // highlight-end
    attributes: {
      // highlight-next-line
      id: "checkA", // required
      label: "CheckboxA", // optional
      classes: ["class-checkbox"], // optional
    },
    // optional
    prefix: {
      tag: "div", // optional
      classes: ["class-wrapper"], // optional
    },
    // highlight-start
    // required
    extra: {
      items: [
        {
          name: "item1",
          value: "value1",
          title: "Value 1",
        },
        {
          name: "item2",
          value: "value2",
          title: "Value 2",
        },
      ],
    },
    // highlight-end
  },
  {
    // highlight-start
    type: "checkbox", // required
    name: "checkB", // required
    // highlight-end
    attributes: {
      // highlight-next-line
      id: "checkB", // required
      label: "CheckboxB", // optional
      classes: ["checker"], // optional
    },
    // optional
    prefix: {
      tag: "div", // optional
      classes: ["class-wrapper"], // optional
    },
    // highlight-start
    // required
    extra: {
      aligne: "inline",
      items: [
        {
          name: "item3",
          value: "value 3",
          title: "Value 3",
        },
        {
          name: "item4",
          value: "value4",
          title: "Value 4",
        },
      ],
    },
    // highlight-end
  },
];
```
