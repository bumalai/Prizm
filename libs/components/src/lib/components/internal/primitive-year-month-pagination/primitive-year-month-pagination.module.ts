import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmMonthPipeModule } from '../../../pipes/month';
import { PrizmPrimitiveYearMonthPaginationComponent } from './primitive-year-month-pagination.component';
import { PrizmPrimitiveSpinButtonModule } from '../primitive-spin-button';
import { PrizmLinkModule } from '../../link/link.module';
import { PrizmFocusableModule } from '../../../directives/focusable/focusable.module';
import { PrizmIconModule } from '../../icon/icon.module';

@NgModule({
  imports: [
    CommonModule,
    PrizmFocusableModule,
    PrizmPrimitiveSpinButtonModule,
    PrizmLinkModule,
    PrizmIconModule,
    PrizmMonthPipeModule,
  ],
  declarations: [PrizmPrimitiveYearMonthPaginationComponent],
  exports: [PrizmPrimitiveYearMonthPaginationComponent],
})
export class PrizmPrimitiveYearMonthPaginationModule {}
