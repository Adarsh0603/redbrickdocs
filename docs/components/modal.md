---
sidebar_position: 4
---

# Modal

Redbrick provides easy-to-use fullscreen modal.

## How to use

- You can directly plug in the modal along with the redbrick.js file.
- Toggle the **is-modal-active** class on the modal to show or hide the modal.
- You can also add **open-modal** class to any html tag to make it open the modal.

```html
<button class="btn bg-link tc-white sh-2 br-3 open-modal ">Open</button>
```

![navbar](/img/demos/modal.jpg)

```html
<div class="modal-bg is-modal-active">
  <div class="modal-content ">
    <div class="close ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="#D9D9DB"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <p class="ts-2">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum quidem a,
      sunt porro, autem libero atque nobis facilis temporibus assumenda dolores
      eos quaerat accusantium ea minus. Harum at delectus autem? Reprehenderit,
      temporibus natus obcaecati unde eum officia architecto aliquam eveniet
      commodi qui, officiis eos consectetur repellat ipsam nisi repudiandae
      deleniti?
    </p>
  </div>
</div>
```

**Important Note-** redbrick.js file must be attached for the close and open-modal classes to work or you can add custom js.
