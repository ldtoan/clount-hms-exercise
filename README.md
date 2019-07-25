# Cloud HMS Exercise

This project uses the third party library named my-first-angular-lib-toanle. There are 4 components in that library: Component Header, Component Left Sidebar,  Component Footer and Component Login.

## Component Header
This component allows user to pass a list of menu items, logo, user avatar corresponding to properties below:
  - menu: string [].
  - logo: string. // the logo url.
  - avatar: string. // the avatar url.

## Component Left Sidebar
This component is an one level depth menu stayed in left position. It allows user to pass a list of menu items. The property name is menu and its type is an array of string.

## Component Footer
This component is a footer as its name and is a static content component.

## Component Login
- First note for this component is that it is the Reactive Form. So, in order to use this component, we need to import ReactiveFormsModule from the @angular/forms package and add it to your NgModule's imports array.

- This component includes 2 parts:
  + Login button: When user click on the button, login dialog will be popped up.
  + Login form: It allows user to enter username and password to login to the application. After login successfully, it will eimit an event named messageEvent and include username and password that user entered.
