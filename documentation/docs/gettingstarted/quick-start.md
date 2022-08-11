---
id: quickstart
title: Quick Start
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction

With FormlyJS you can generate a dynamic forms with custom rules and styles for web application's react, solid and svelte.

:::info Advantages

<ul>
<li>⚡ Generate dynamic and reactive forms.</li>
<li> 🙂 Easy to extend with custom field type and validation.</li>
</ul>
:::

<!-- ## Pre-requisites

- You should be an existing vim user or keen to learn nvim + nvchad (through these docs)
- [Neovim 0.7.2](https://github.com/neovim/neovim/releases/tag/v0.7.2)
- If neovim's very old for your OS then consider trying this [neovim version manager](https://github.com/MordechaiHadad/bob)
- [Use a Nerd Font](https://www.nerdfonts.com/) in your terminal emulator.
- Make sure to delete this folder `~/.local/share/nvim` on linux/Macos or `~\AppData\Local\nvim` and `~\AppData\Local\nvim-data` on windows -->

## Install

````mdx-code-block
<Tabs>
  <TabItem value="react" label="React">

  ```bash
  npm install formly-react
  ```

  </TabItem>

  <TabItem value="solid" label="Solid">

  ```tsx
  soon.
  ```

  </TabItem>

  <TabItem value="svelte" label="Svelte">

  ```tsx
  soon.
  ```

  </TabItem>
</Tabs>
````

## Usage

````mdx-code-block
<Tabs>
  <TabItem value="react" label="React">

  ```tsx
  import * as React from 'react';
  import { Formly, IField, IValue } from "formly-react";

  const Usage: React.FC = () => {
    // * Unique form name.
    const form_name = "formly_usage";

    // * Fields.
    const fields: IField[] = [
      {
        type: "input",
        name: "firstname",
        attributes: {
          id: "firstname",
          placeholder: "First name",
          autocomplete: "off",
          autocorrect: "off",
          classes: ["form-control"],
        },
        prefix: {
          tag: "div",
          classes: ["form-group"],
        },
        rules: ["required", "min:6"],
      },
      {
        type: "input",
        name: "lastname",
        attributes: {
          id: "lastname",
          placeholder: "Last name",
          autocomplete: "off",
          autocorrect: "off",
          classes: ["form-control"],
        },
        prefix: {
          tag: "div",
          classes: ["form-group"],
        },
        rules: ["required", "min:6"],
      },
    ];

    // * Handler on change.
    const onChange = (data: IValue) => {
      console.log("onChange", data);
    };

    // * Handler on submit.
    const onSubmit = (data: IValue) => {
      console.log("onSubmit", data);
    };

    return (
      <Formly
        fields={fields}
        form_name={form_name}
        onChange={onChange}
        onSubmit={onSubmit}
        btnSubmit={{
          text: "Send",
          classes: ['class-btn-submit'],
          prefix: {
            tag: "div",
            classes: ["class-wrapper-btn-submit"],
          },
        }}
        btnReset={{
          text: "Cancel",
          classes: ['class-btn-reset'],
          prefix: {
            tag: "div",
            classes: ["class-wrapper-btn-reset"],
          },
        }}
        buttonsAction={{
          tag: "div",
          classes: ["class-wrapper-btn-actions"],
        }}
        classes={["class-form-a", "class-form-b"]}
      />
    );
  };

  export default Usage;
  ```

  </TabItem>

  <TabItem value="solid" label="Solid">

  ```tsx
  soon.
  ```

  </TabItem>

  <TabItem value="svelte" label="Svelte">

  ```tsx
  soon.
  ```

  </TabItem>
</Tabs>
````

## Result

- [Here](https://replit.com/@dyaliCode/Formly-React-Usage?v=1)
