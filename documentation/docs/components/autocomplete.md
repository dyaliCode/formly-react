---
id: autocomplete
title: AutoComplete
sidebar_position: 8
---

```tsx
const fields: IField[] = [
  {
    // highlight-start
    type: "autocomplete", // required
    name: "name-field-autocomplete", // required
    // highlight-end
    attributes: {
      // highlight-next-line
      id: "id-field-autocomplete", // required
      placeholder: "Tap item to select", // optional
      autocomplete: "off", // optional
    },
    // highlight-start
    extra: {
      filter_lenght: 3, // optional and by default = 0
      loadItemes: [
        // required
        // list items with id and title attributes.
        {
          value: 1,
          title: "item 1",
        },
        {
          value: 2,
          title: "item 2",
        },
        {
          value: 3,
          title: "item 3",
        },
        {
          value: 4,
          title: "item 4",
        },
      ],
    },
    // highlight-end
  },
];
```
