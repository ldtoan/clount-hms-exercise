import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[headerLogo]'
})
export class HeaderLogoDirective {
  constructor(public templateRenf: TemplateRef<any>) {}
}
