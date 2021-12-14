---
sidebar_position: 1
---

# Form Utilities

Redbrick comes with simple and modular form utility class.

## How to use

- Just add **input** class to any input type to give a basic structure.
- Use any background, text, border or shadow classes to create fully customized input fields.
- Form field's size can be changed with text-size classes.

## Example 1

<img src="/img/demos/form1.png" width="500"/>

```html
<form class="w-3 p-3 card bg-white">
  <label for="name">Name</label>
  <input type="text" id="name" class="input br-2" placeholder="Enter Name" />

  <label for="email">Email</label>
  <input type="email" id="email" class="input br-2" placeholder="Enter Email" />
  <label for="phone">Phone</label>
  <input
    type="number"
    id="phone"
    class="input br-2"
    placeholder="Enter Phone"
  />
  <div class="ta-right">
    <button class="btn br-2" type="submit">Submit</button>
  </div>
</form>
```

## Example 2

<img src="/img/demos/form2.png" width="500"/>

```html
<form class="w-3 p-3 card bg-white">
  <label for="name">Username/Email</label>
  <input type="text" id="name" class="input br-2" placeholder="Username" />

  <label for="password">Password</label>
  <input
    type="password"
    id="password"
    class="input br-2"
    placeholder="Password"
  />
  <div>
    <button class="btn bg-link tc-white br-2 w-full" type="submit">
      Login
    </button>
  </div>
  <div class="ta-center mt-1">
    <a href="#" class=" ta-right tc-link ts-1 tw-2">Forgot Password?</a>
  </div>
</form>
```

## Example 3

<img src="/img/demos/form3.png" width="500"/>

```html
<form class="w-3 p-3 card bg-white">
  <div class="fl-row">
    <div>
      <label for="name">First Name</label>
      <input
        type="text"
        id="name"
        class="input sh-1"
        placeholder="First Name"
      />
    </div>
    <div>
      <label for="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        class="input sh-1"
        placeholder="Last Name"
      />
    </div>
  </div>
  <div class="fl-row">
    <div>
      <label for="age">Age</label>
      <input type="number" id="age" class="input sh-1" placeholder="Age" />
    </div>
    <div class="w-full">
      <label for="gender">Gender</label>
      <select class="input sh-1" name="gender" id="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>
  </div>

  <label for="email">Email</label>
  <input type="email" id="email" class="input sh-1" placeholder="Email" />
  <label for="phone">Phone</label>
  <input type="number" id="phone" class="input sh-1" placeholder="Phone No." />

  <label for="desc">Description</label>
  <textarea
    id="desc"
    class="input sh-1"
    rows="3"
    placeholder="More about you.."
  ></textarea>

  <input type="checkbox" id="accept" name="accept" />
  <label for="accept">
    I accept the <a href="#" class="tc-link">Terms and Conditions.</a></label
  ><br />
  <br />
  <div>
    <button class="btn bg-danger tc-white br-2 w-full" type="submit">
      Create Account
    </button>
  </div>

  <div class="ta-center mt-2 ts-1">
    <p>
      Already have an account?
      <a href="#" class=" ta-right tc-link ts-1 tw-2">Log In</a>
    </p>
  </div>
</form>
```
