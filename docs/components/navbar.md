---
sidebar_position: 3
---

# Navbar

Redbrick provides completely responsive and modular navbar.

## How to use

- You can directly plug in the navbar along with the redbrick.js file.
- You can change the order of the **divs** inside the navbar according to your need.
- **Change background and text classes to customize the navbar as you like.**

![navbar](/img/demos/navbar.png)

Responsive

<img src="/img/demos/navbar2.png" widht="200"/>

<img src="/img/demos/navbar3.png" width="300"/>

```html
<nav class="navbar bg-link"> <!-- Change Background Here -->
<!-- Change Order of the below divs to get desired alignment -->
<!-- Nav Items -->
    <div class="nav-items tc-white"> <!-- Change Text Color Here-->
        <a class="nav-item " href="#">
            Home
        </a>
        <a class="nav-item href=" #">
            About
        </a><a class="nav-item" href="#">
            Contact
        </a>
    </div>

<!-- Burger Icon -->
    <div class="burger" onclick="openNav()">
        <div class="bar1 bg-white"></div>
        <div class="bar2 bg-white"></div>
        <div class="bar3 bg-white"></div>
    </div>

<!-- Site Logo -->
    <div class="logo">
        <img id="logo" src="https://i.ibb.co/BfM4BqD/redbricklogo.png" alt="redbricklogo">
    </div>


</nav>
```

**Important Note-** redbrick.js file must be attached for the responsive navbar to work or you can write custom js.
