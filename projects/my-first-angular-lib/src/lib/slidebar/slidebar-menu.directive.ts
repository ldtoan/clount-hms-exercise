import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[slideBarMenu]'
})
export class SlidebarMenuDirective {
  constructor(public templateRenf: TemplateRef<any>) {}
}
