import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { InputDateMultiRelativeComponent } from './input-date-multi.component';
import {
  PolymorphModule,
  PrizmInputDateModule,
  PrizmInputDateMultiModule,
  PrizmInputDateRelativeModule,
  PrizmInputDateTimeModule,
  PrizmInputTimeModule,
} from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmInputDateMultiBaseExampleComponent } from './examples/base/input-date-multi-base-example.component';
import { PrizmInputDateMultiFourExampleComponent } from './examples/four/input-date-multi-four-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmInputDateMultiModule,
    PrizmInputDateTimeModule,
    PrizmInputDateModule,
    PrizmInputTimeModule,
    PrizmInputDateRelativeModule,
    RouterModule.forChild(prizmDocGenerateRoutes(InputDateMultiRelativeComponent)),
  ],
  declarations: [
    PrizmInputDateMultiFourExampleComponent,
    PrizmInputDateMultiBaseExampleComponent,
    InputDateMultiRelativeComponent,
  ],
  exports: [InputDateMultiRelativeComponent],
})
export class InputDateMultiModule {}
