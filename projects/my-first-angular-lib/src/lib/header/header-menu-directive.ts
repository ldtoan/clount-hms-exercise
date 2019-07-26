import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[headerMenu]'
})
export class HeaderMenuDirective {
  constructor(public templateRenf: TemplateRef<any>) {}
}
