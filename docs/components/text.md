---
sidebar_position: 1
---

# Text

Modify your text's size, weight and alignment with the typography classes.

## Text Size

- Redbrick text sizes are completely responsive.
- Just use any of the given size classes and they will adapt according to
  screen width.

![textsizes](/img/demos/textsizes.jpg)

| Class | Font-Size |
| ----- | --------- |
| ts-1  | 0.75rem   |
| ts-2  | 1.25rem   |
| ts-3  | 1.75rem   |
| ts-4  | 2.25rem   |
| ts-5  | 2.75rem   |
| ts-6  | 3.25rem   |

**You can also customize the text size variables in the config.css**

## Text Align

- Align text with the following classes.
- Different align according to device .

| Class      | Laptop       | Tablet       | Mobile       |
| ---------- | ------------ | ------------ | ------------ |
| ta-center  | ta-center-l  | ta-center-t  | ta-center-m  |
| ta-left    | ta-left-l    | ta-left-t    | ta-left-m    |
| ta-right   | ta-right-l   | ta-right-t   | ta-right-m   |
| ta-justify | ta-justify-l | ta-justify-t | ta-justify-m |

**For Example** - The below classes will align the text in center on desktop and
will align text in left for tablets and mobiles.

```html
<p class="ta-center ta-left-t">Align text</p>
```

## Font Weight

- Redbrick uses **Roboto** as the custom font.
- You can use 4 font weights.

| Class | Font-Weight |
| ----- | ----------- |
| tw-1  | 200         |
| tw-2  | 400         |
| tw-3  | 600         |
| tw-4  | 800         |

## Text Transform

| Class     | Use                       |
| --------- | ------------------------- |
| t-capital | Capitalizes first letter. |
| t-lower   | Lowercase Text            |
| t-upper   | Uppercase Text            |
| t-italic  | Italic Text               |
