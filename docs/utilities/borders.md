---
sidebar_position: 5
---

# Border Radius

Give border radius to all or individual corners of your content with the border radius classes.

Redbrick provides border **br** classes for all corners:

- **tl** - top-left
- **tr** - top-right
- **bl** - bottom-left
- **br** - bottom-right
- **circle** - circular

**All classes comes with 6 border radius which can be customized by the user in config.css.**

![brs](/img/demos/brs.jpg)

| Class | Border Radius |
| ----- | ------------- |
| br-1  | 0.25rem       |
| br-2  | 0.375rem      |
| br-3  | 0.5rem        |
| br-4  | 0.75rem       |
| br-5  | 1rem          |
| br-6  | 2.25rem       |

## Individual Corners

![brs2](/img/demos/brs2.jpg)

| Class    | Corner       |
| -------- | ------------ |
| br-tl-\* | Top Left     |
| br-tr-\* | Top Right    |
| br-bl-\* | Bottom Left  |
| br-br-\* | Bottom Right |

\* - 1,2,3,4,5,6

## Circular

**Circular** border radius needs same width and height to work properly.

Use it as following-

![brcircle](/img/demos/brcircle.jpg)

```html
<div class="br-circle" style="width: 130px; height: 130px;">br-circle</div>
```
