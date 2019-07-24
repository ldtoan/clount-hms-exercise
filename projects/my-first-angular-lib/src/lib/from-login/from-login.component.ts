import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-form-login',
  templateUrl: './from-login.component.html',
  styleUrls: ['./from-login.component.scss']
})
export class FromLoginComponent{
  private modalElementId = 'loginModal';
  @Output() messageEvent = new EventEmitter<string>();

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit = () => {
    const element: Element = document.getElementById(this.modalElementId);
    element.setAttribute("aria-hidden", "true");
    element.removeAttribute("aria-modal");
    element.classList.remove("show");

    this.messageEvent.emit(this.loginForm.value);
  }

  handleSignIn = () => {
    const element: Element = document.getElementById(this.modalElementId);
    element.removeAttribute("aria-hidden");
    element.setAttribute("aria-modal", "true");
    element.classList.add("show");
  }
}
