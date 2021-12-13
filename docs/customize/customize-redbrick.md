---
sidebar_position: 1
---

# Customize Redbrick

Redbrick uses **css root variables** to make it completely customizable.

- You can access and tweak any root variable in the **config.css** that you downloaded.
- The **config.css** file should be linked **"above"** the **redbrick.css** file for the configuration to work.

html file

```html
. .
<head>
  <link rel="stylesheet" href="./css/config.css" />
  <link rel="stylesheet" href="./css/redbrick.css" />
</head>
. .
```

### config.css

Any of the following variables can be changed to modify the redbrick theme according to you.

```css
:root {
  /* colors */

  --color-primary: #007bff;
  --color-secondary: #6c757d;
  --color-success: #28a745;
  --color-danger: #dc3545;
  --color-warning: #ffc107;
  --color-info: #17a2b8;
  --color-link: #3273dc;
  --color-light: #f8f9fa;
  --color-dark: #343a40;
  --color-white: #fff;
  --color-black: #000;
  --color-disabled: #6c757d;

  /* text size */

  --size-1: 0.75rem;
  --size-2: 1.25rem;
  --size-3: 1.75rem;
  --size-4: 2.25rem;
  --size-5: 2.75rem;
  --size-6: 3.25rem;

  /* spacing */

  --pdmr-0: 0rem;
  --pdmr-1: 0.25rem;
  --pdmr-2: 0.75rem;
  --pdmr-3: 1.5rem;
  --pdmr-4: 2rem;
  --pdmr-5: 2.75rem;
  --pdmr-6: 3.25rem;

  /* Width */
  --wd-1: 50%;
  --wd-2: 60%;
  --wd-3: 70%;
  --wd-4: 80%;
  --wd-5: 90%;
  --wd-6: 100%;

  /* Borders */
  --br-1: 0.25rem;
  --br-2: 0.375rem;
  --br-3: 0.5rem;
  --br-4: 0.75rem;
  --br-5: 1rem;
  --br-6: 2.25rem;

  /* shadows */
  --shadow-1: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-2: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-3: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-4: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-5: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-6: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
```
