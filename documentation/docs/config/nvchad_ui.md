---
id: nvchad_ui
title: UI plugins
---

### Statusline & tabufline 

- We use our own [plugin](https://github.com/NvChad/ui) for statusline & tabufline and it has some options
- Default config : ( you must know that every plugin's default config is just a table kinda)

```lua
{
  statusline = {
      separator_style = "default", -- default/round/block/arrow

     -- or 
     -- custom separators
     -- separator_style = {
     --    left = " ",
     --    right = "",
     --  },

      overriden_modules = nil,
   },

   -- lazyload it when there are 1+ buffers
   tabufline = {
      enabled = true,
      lazyload = true,
      overriden_modules = nil,
   },
}
```
#### Override statusline modules 

- Add this in your plugin overrides section

```lua
["NvChad/ui"] = {
   statusline = {
       separator_style = "round",
       overriden_modules = function()
           return require "custom.abc"
       end,
   },
},
```

```lua
-- custom/abc.lua must return a table

local st_modules = require "nvchad_ui.statusline.modules"

return {
   mode = function()
      return st_modules.mode() .. " bruh "
   end,
}
```
- First check the list of modules in [our statusline modules file](https://github.com/NvChad/ui/blob/main/lua/nvchad_ui/statusline/modules.lua)
- In the above code, you can see that I wanted to print "bruh" next to the mode module in the statusline.
- The above code just overrides the default mode module in our statusline so you can just do ```return ""```, this basically returns an empty string in the mode module which can also be thought as disabling mode module.
- But most of the time you want to add highlights to the text you added so you would have to add highlight group to the text like :  

```lua
"#BruhHl%" .. " bruh "

-- so the highlight group here is BruhHl
```

#### Tabufline

- Add this in your plugin overrides section
- This example is for overriding the modules in tabufline
```lua
["NvChad/ui"] = {
   tabufline = {
      lazyload = false, -- to show tabufline by default
       overriden_modules = function()
           return require "custom.xyz"
       end,
   },
},
```

```lua
-- custom/xyz.lua be like 
-- must return a table!

local tabufline_modules = require "nvchad_ui.tabufline.modules"

return {
    buttons = function()
       return tabufline_modules.buttons() .. " my button "
   end,
}
```
- First check the list of modules in [our tabufline modules file](https://github.com/NvChad/ui/blob/main/lua/nvchad_ui/tabufline/modules.lua)
- In the above code, I just added a button to the tabufline's button list
- The above code just overrides the default buttons module in our tabufline so you can just do ```return ""```, this basically returns an empty string in the buttons module which can also disable buttons module.
