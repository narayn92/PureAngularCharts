import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateTypeDirective } from '../../template-type.directive';



@NgModule({
  declarations: [TemplateTypeDirective],
  imports: [
    CommonModule
  ],
  exports: [TemplateTypeDirective]
})
export class PacCommonModule { }
