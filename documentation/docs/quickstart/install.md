---
id: install
title: Install
sidebar_position: 1
---

## Try in docker container

This will leave your current Neovim configuration untouched. Once you exit Neovim, the image is deleted.

```tsx
export default function Form() {
  // Hooks.
  const [values, setValues] = useState<IValue>();

  // Fields.
  const fieldsA: IField[] = [
    {
      type: "input",
      name: "firstname",
      attributes: {
        id: "firstname",
        placeholder: "First name",
        autocomplete: "off",
        autocorrect: "off",
        classes: [classField],
      },
      prefix: {
        tag: "div",
        classes: ["mb-6"],
      },
      rules: ["required"],
    },
    {
      type: "input",
      name: "lastname",
      attributes: {
        id: "lastname",
        placeholder: "Last name",
        autocomplete: "off",
        autocorrect: "off",
        classes: [classField],
      },
      prefix: {
        tag: "div",
        classes: ["mb-6"],
      },
      rules: ["required"],
    },
  ];

  const fieldsB: IField[] = [
    {
      type: "input",
      name: "firstname",
      attributes: {
        id: "firstname",
        placeholder: "First name",
        autocomplete: "off",
        autocorrect: "off",
        classes: [classField],
      },
      prefix: {
        tag: "div",
        classes: ["mb-6"],
      },
      rules: ["required"],
    },
    {
      type: "input",
      name: "lastname",
      attributes: {
        id: "lastname",
        placeholder: "Last names",
        autocomplete: "off",
        autocorrect: "off",
        classes: [classField],
      },
      prefix: {
        tag: "div",
        classes: ["mb-6"],
      },
      rules: ["required"],
    },
  ];

  // Handlers.
  const onSubmit = (data: IValue) => {
    setValues(data);
  };

  const onChange = (data: IValue) => {
    console.log(data);
    // setValues({ ...values, ...data });
  };

  // Forms
  const FormA = useMemo(
    () => (
      <Formly
        fields={fieldsA}
        form_name="myformA"
        onSubmit={onSubmit}
        onChange={onChange}
        btnSubmit={{
          classes: classButton,
        }}
        btnReset={{
          classes: classButton,
        }}
        buttonsAction={{
          tag: "div",
          classes: ["flex flex-row gap-2"],
        }}
        classes={classForm}
      />
    ),
    []
  );

  const FormB = useMemo(
    () => (
      <Formly
        fields={fieldsB}
        form_name="myformB"
        onSubmit={onSubmit}
        onChange={onChange}
        btnSubmit={{
          classes: classButton,
        }}
        btnReset={{
          classes: classButton,
        }}
        buttonsAction={{
          tag: "div",
          classes: ["flex flex-row gap-2"],
        }}
        classes={classForm}
      />
    ),
    []
  );

  return (
    <div className="mx-auto w-1/2">
      <pre>
        <code>{JSON.stringify(values, null, 2)}</code>
      </pre>
      <h2>Form A</h2>
      {FormA}
      <hr />
      <h2>Form B</h2>
      {FormB}
    </div>
  );
}
```

## Pre-requisites

- You should be an existing vim user or keen to learn nvim + nvchad (through these docs)
- [Neovim 0.7.2](https://github.com/neovim/neovim/releases/tag/v0.7.2)
- If neovim's very old for your OS then consider trying this [neovim version manager](https://github.com/MordechaiHadad/bob)
- [Use a Nerd Font](https://www.nerdfonts.com/) in your terminal emulator.
- Make sure to delete this folder `~/.local/share/nvim` on linux/Macos or `~\AppData\Local\nvim` and `~\AppData\Local\nvim-data` on windows

### Semi-optional

- [`ripgrep`](https://github.com/BurntSushi/ripgrep) is required for grep searching with _Telescope_

## Install

### Linux / Macos (UNIX)

```bash
git clone https://github.com/NvChad/NvChad ~/.config/nvim --depth 1 && nvim
```

### Windows

```bash
git clone https://github.com/NvChad/NvChad $HOME\AppData\Local\nvim --depth 1 && nvim
```

(Note: windows users must have [`mingw`](http://mingw-w64.org/doku.php) installed & set on path)

## Update

NvChad has an update mechanism built-in, which will pull any new updates to the git repository.

- Update nvchad by pressing `<leader> + uu`

- **Note**: by NvChad default, `<leader>` is the `<space>` key

This will open a prompt in NeoVim warning you that it is about to do a `git reset --hard` and **you will lose any customisations** you've made to NvChad outside the custom folder

## Uninstall

```
# linux/macos (unix)
rm -rf ~/.config/nvim
rm -rf ~/.local/share/nvim
rm -rf ~/.cache/nvim

# windows
rd -r ~\AppData\Local\nvim
rd -r ~\AppData\Local\nvim-data
```
