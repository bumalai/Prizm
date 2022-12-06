import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { IconComponent } from './icon.component';
import { PrizmIconSvgBaseExampleComponent } from './examples/base/icon-base-example.component';
import { PrizmIconModule } from '@prizm-ui/components';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PrizmIconModule,
    RouterModule.forChild(generateRoutes(IconComponent)),
  ],
  declarations: [
    PrizmIconSvgBaseExampleComponent,
    IconComponent
  ],
  exports: [IconComponent],
})
export class IconModule {}
