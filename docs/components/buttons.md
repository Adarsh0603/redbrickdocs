---
sidebar_position: 1
---

# Buttons

Redbrick comes with easy-to-use and completely customizable button utility.

## How to use

- Just add **btn** class to any html tag to give a basic structure.
- Use any background, text, border or shadow classes to create fully customized buttons.

![buttons](/img/demos/buttons.png)

```html
<div class="fl-row">
  <a class="btn bg-primary tc-white sh-5 br-3">Button</a>
  <a class="btn bg-black tc-white br-1">Button</a>
  <a class="btn bg-light sh-3 tc-black br-tl-3 ">Button</a>
  <a class="btn bg-primary tc-white br-tr-5">Button</a>
  <a class="btn bg-link tc-white sh-1 br-circle">Button</a>
  <a class="btn bg-primary tc-white br-tl-3 br-br-3">Button</a>
  <a class="btn bg-success tc-white br-tr-3 br-bl-3">Button</a>
</div>
```

You can create more such combinations according to your need.

## Outline Buttons

- All redbrick colors have their outline buttons.
- Outline buttons' text is fixed as the outline's color.
- More customizations will be added soon.

![outline buttons](/img/demos/buttonsol.png)

```html
<div class="fl-row">
  <a class="btn btn-ol-primary br-1">Button</a>
  <a class="btn btn-ol-secondary br-1">Button</a>
  <a class="btn btn-ol-link br-tl-3 ">Button</a>
  <a class="btn btn-ol-success br-tr-5">Button</a>
  <a class="btn btn-ol-dark sh-1 br-circle">Button</a>
  <a class="btn btn-ol-info br-tl-3 br-br-3">Button</a>
  <a class="btn btn-ol-warning  br-tr-3 br-bl-3">Button</a>
</div>
```

**Change in colors in the config.css will also change the outline colors.**
