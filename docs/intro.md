---
sidebar_position: 1
---

# Getting Started With Redbrick

Get started with Redbrick CSS with any one of the following steps.

## Use the CDN links

Add the below links in the head of your html file:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/redbrick-css@1.0.4/css/config.css"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/redbrick-css@1.0.4/css/redbrick.min.css"
/>
```

## Download the files (With Configuration)

You can also download the given css and js files and can easily modify the css theme for your project.

[redbrickv1.0.4.zip](https://github.com/Adarsh0603/redbrick/files/7709642/redbrickv1.0.4.zip)

or Download Individual files

[config.css](https://github.com/Adarsh0603/redbrick/releases/download/v1.0.4/config.css) | [redbrick.css](https://github.com/Adarsh0603/redbrick/releases/download/v1.0.4/redbrick.css) | [redbrick.js](https://github.com/Adarsh0603/redbrick/releases/download/v1.0.4/redbrick.js)

Usage

```html
<head>
  <!-- Change the directory as per your project structure -->
  <link rel="stylesheet" href="/css/config.css" />
  <link rel="stylesheet" href="/css/redbrick.css" />
</head>

<body>
  .
  .
  <script src="/redbrick.js"></script>
</body>
</html>
```

## Use the starter template

Quickly get started with the Starter Template. Just copy/paste the below html in a file and start using redbrick css.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Your Site Title Here</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/redbrick-css@1.0.4/css/config.css"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/redbrick-css@1.0.4/css/redbrick.min.css"
    />
  </head>

  <body>
    <div class="fl-center fl-col h-screen">
      <p class="ts-4">
        Ready to go with <br />
        <strong>Redbrick 🚀</strong>
      </p>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/redbrick-css@1.0.4/redbrick.min.js"></script>
  </body>
</html>
```

## Or use npm

```shell
npm i redbrick-css
```

Link to css and js files:

```html
.
.
</head>
<link rel="stylesheet" href="/node_modules/redbrick-css/css/config.css" />
<link rel="stylesheet" href="/node_modules/redbrick-css/css/redbrick.css" />
</head>
.
.
<body>
  .
  .
  <script src="/node_modules/redbrick-css/redbrick.js"></script>
</body>
```
