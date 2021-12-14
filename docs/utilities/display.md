---
sidebar_position: 7
---

# Display

Modify your content's visibility on different devices with the display classes.

- For simplicity, Redbrick provides only 3 display classes.
- All display classes contains responsive variants for different devices.

## Hide Content

| Class    | Use                                          |
| -------- | -------------------------------------------- |
| hidden   | Hides the content on all device widths.      |
| hidden-l | Hides the content on laptop width and below. |
| hidden-t | Hides the content on tablet width and below. |
| hidden-m | Hides the content on mobile width.           |

**For Example - **
The below class will hide the content on tablet width and below.

```html
<div class="hidden-t">Some Content</div>
```

## Inline and Block

| Inline     | Block     | Use                                             |
| ---------- | --------- | ----------------------------------------------- |
| d-inline   | d-block   | Display inline/block.                           |
| d-inline-l | d-block-l | Display inline/block on laptop width and below. |
| d-inline-t | d-block-t | Display inline/block on tablet width and below. |
| d-inline-m | d-block-m | Display inline/block on mobile width.           |

**For Example - **
The below classes will hide the content on desktop width and show the content
on tablet width and below.

```html
<div class="hidden d-block-t">Some Content</div>
```
