import { InjectionToken, ValueProvider } from '@angular/core';
import { PrizmDay } from '../@core/date-time/day';
import { PRIZM_FIRST_DAY, PRIZM_LAST_DAY } from '../@core/date-time/days.const';
import { PolymorphContent } from '../directives/polymorph/types/content';
import { PrizmContextWithImplicit } from '../types/context-with-implicit';
import { PrizmInputSize } from '../components/input/common/models/prizm-input.models';

export interface PrizmInputDateOptions {
  readonly icon: PolymorphContent<PrizmContextWithImplicit<PrizmInputSize>>;
  readonly min: PrizmDay;
  readonly max: PrizmDay;
}

export const PRIZM_INPUT_DATE_DEFAULT_OPTIONS: PrizmInputDateOptions = {
  icon: ({ $implicit }) => ($implicit === `s` ? `date-calendar-blank` : `date-calendar-blank`),
  min: PRIZM_FIRST_DAY,
  max: PRIZM_LAST_DAY,
};

export const PRIZM_INPUT_DATE_OPTIONS = new InjectionToken<PrizmInputDateOptions>(
  `[PRIZM_INPUT_DATE_OPTIONS]: Default parameters for date input component`,
  {
    factory: (): PrizmInputDateOptions => PRIZM_INPUT_DATE_DEFAULT_OPTIONS,
  }
);

export const prizmInputDateOptionsProvider: (options: Partial<PrizmInputDateOptions>) => ValueProvider = (
  options: Partial<PrizmInputDateOptions>
) => ({
  provide: PRIZM_INPUT_DATE_OPTIONS,
  useValue: { ...PRIZM_INPUT_DATE_DEFAULT_OPTIONS, ...options },
});
