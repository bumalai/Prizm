/* eslint-disable @angular-eslint/no-input-rename */
import { Directive, forwardRef, HostListener, Input } from '@angular/core';
import { PrizmDestroyService, prizmGenerateId } from '@prizm-ui/helpers';
import { PrizmTooltipContainerComponent } from './tooltip-container.component';
import { PRIZM_TOOLTIP_OPTIONS } from './tooltip-options';
import { prizmDefaultProp, prizmRequiredSetter } from '@prizm-ui/core';
import { PolymorphContent } from '../polymorph';
import { PRIZM_HINT_OPTIONS, PrizmHintOptions } from '../hint/hint-options';
import { PrizmHintDirective } from '../hint/hint.directive';

@Directive({
  selector: '[prizmTooltip]:not(ng-container)',
  providers: [
    PrizmDestroyService,
    {
      provide: PRIZM_HINT_OPTIONS,
      useExisting: forwardRef(() => PRIZM_TOOLTIP_OPTIONS),
    },
  ],
  exportAs: 'prizmTooltip',
})
export class PrizmTooltipDirective extends PrizmHintDirective {
  @Input('prizmTooltipMode')
  @prizmDefaultProp()
  override prizmHintMode: PrizmHintOptions['mode'] = this.options.mode;

  @Input('prizmAutoReposition')
  @prizmDefaultProp()
  override prizmAutoReposition: PrizmHintOptions['autoReposition'] = this.options.autoReposition;

  @Input('prizmTooltipDirection')
  @prizmDefaultProp()
  override prizmHintDirection: PrizmHintOptions['direction'] = this.options.direction;

  @Input('prizmTooltipId')
  @prizmDefaultProp()
  override prizmHintId: string = 'hintId_' + prizmGenerateId();

  @Input('prizmTooltipShowDelay')
  @prizmDefaultProp()
  override prizmHintShowDelay: PrizmHintOptions['showDelay'] = this.options.showDelay;

  @Input('prizmTooltipHideDelay')
  @prizmDefaultProp()
  override prizmHintHideDelay: PrizmHintOptions['hideDelay'] = this.options.hideDelay;

  @Input('prizmTooltipHost')
  @prizmDefaultProp()
  override prizmHintHost: HTMLElement | null = null;

  @Input('prizmTooltip')
  @prizmRequiredSetter()
  override set prizmHint(value: PolymorphContent | null) {
    if (!value) {
      this.content = '';
      return;
    }

    this.content = value;
  }
  protected override readonly containerComponent = PrizmTooltipContainerComponent;
  protected override readonly onHoverActive = false;

  @HostListener('document:click', ['$event.target']) public onClick(target: HTMLElement): void {
    this.show$.next(this.elementRef.nativeElement.contains(target));
  }
}
