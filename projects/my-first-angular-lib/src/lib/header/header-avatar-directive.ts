import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[headerAvatar]'
})
export class HeaderAvatarDirective {
  constructor(public templateRenf: TemplateRef<any>) {}
}
