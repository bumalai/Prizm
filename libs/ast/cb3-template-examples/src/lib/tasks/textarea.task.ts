// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  PrizmAddChildrenTemplateTask,
  PrizmAddCommentTemplateTask,
  prizmAstCreateActionBy,
  PrizmCallWithNewSourceTemplateTask,
  PrizmChangeNameTemplateTask,
  PrizmNotSupportedTemplateTask,
  PrizmRemoveAttributeTemplateTask,
  PrizmRenameTemplateTask,
  PrizmRunTasksOnNodeTemplateTask,
  PrizmSaveToCallOnDemandTemplateTask,
  PrizmTemplateTask,
} from '@prizm-ui/ast';

const newName = 'prizm-input-layout';
const newNameOfPlaceholder = [newName, 'placeholder'].join('::');
const newNameOfNgModel = [newName, 'ngModel'].join('::');
const newNameOfFormControl = [newName, 'formControl'].join('::');
const newNameOfFormControlName = [newName, 'formControlName'].join('::');
const newNameOfType = [newName, 'type'].join('::');
const newNameOfDisabled = [newName, 'disabled'].join('::');
const newNameOfMaxLength = [newName, 'maxlength'].join('::');
const newNameOfMinLength = [newName, 'minlength'].join('::');
const newNameOfRows = [newName, 'rows'].join('::');
const newNameOfCols = [newName, 'cols'].join('::');
const newNameOfAutoResize = [newName, 'autoResize'].join('::');

export const ZyfraTextareaTemplateTasks: PrizmTemplateTask[] = [
  {
    selector: 'zyfra-textarea',
    tasks: [
      prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
        name: newName,
      }),
      // TODO also set children
      prizmAstCreateActionBy(PrizmAddChildrenTemplateTask, {
        name: 'textarea',
        attrs: {
          prizmInput: null,
        },
        voidElement: false,
        children: [],
      }),
    ],
    inputs: {
      maxlength: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: newNameOfMaxLength,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'maxlength',
          }),
        }),
      ],
      minlength: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: newNameOfMinLength,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'minlength',
          }),
        }),
      ],
      rows: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: newNameOfRows,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'rows',
          }),
        }),
      ],
      autoResize: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: newNameOfAutoResize,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'autoResize',
          }),
        }),
      ],
      cols: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: newNameOfCols,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'cols',
          }),
        }),
      ],
      options: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'items',
          needFixApi: true,
        }),
      ],
      size: [
        prizmAstCreateActionBy(PrizmAddCommentTemplateTask, {
          comment: 'TODO: need to correct size format (number > enum)',
        }),
        prizmAstCreateActionBy(PrizmAddCommentTemplateTask, {
          comment: 'TODO: You also need to pass size to child ',
        }),
      ],
      formControl: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: newNameOfFormControl,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'formControl',
          }),
        }),
      ],
      disabled: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: newNameOfDisabled,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'disabled',
          }),
        }),
      ],
      type: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: newNameOfType,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'type',
          }),
        }),
      ],
      formControlName: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: newNameOfFormControlName,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'formControlName',
          }),
        }),
      ],
      ngModel: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: newNameOfNgModel,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'ngModel',
          }),
        }),
      ],
      placeholder: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: newNameOfPlaceholder,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'placeholder',
          }),
        }),
      ],
      value: [
        prizmAstCreateActionBy(PrizmRemoveAttributeTemplateTask, {}),
        prizmAstCreateActionBy(PrizmAddCommentTemplateTask, {
          comment: 'TODO: You also need to pass a value size to child ',
        }),
      ],
      step: [
        prizmAstCreateActionBy(PrizmRemoveAttributeTemplateTask, {}),
        prizmAstCreateActionBy(PrizmAddCommentTemplateTask, {
          comment: 'TODO: You also need to pass a step size to child ',
        }),
      ],
      min: [
        prizmAstCreateActionBy(PrizmRemoveAttributeTemplateTask, {}),
        prizmAstCreateActionBy(PrizmAddCommentTemplateTask, {
          comment: 'TODO: You also need to pass a min value to child ',
        }),
      ],
      max: [
        prizmAstCreateActionBy(PrizmRemoveAttributeTemplateTask, {}),
        prizmAstCreateActionBy(PrizmAddCommentTemplateTask, {
          comment: 'TODO: You also need to pass a max value to child ',
        }),
      ],
      dropdownIcon: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'icon',
          needFixApi: true,
        }),
      ],
      showClear: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'forceClear',
        }),
      ],
      tooltipPosition: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      tooltip: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      format: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      showButtons: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      buttonLayout: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      spanClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      iClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      incrementButtonClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      decrementButtonClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      incrementButtonIcon: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      decrementButtonIcon: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      locale: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      localeMatcher: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      mode: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      prefix: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      suffix: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      currency: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      currencyDisplay: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      useGrouping: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      minFractionDigits: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      maxFractionDigits: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      style: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      inputId: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      inputStyle: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      inputStyleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      tabindex: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      title: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      ariaLabel: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      ariaRequired: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      name: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      autocomplete: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
    },
    outputs: {
      onResize: [prizmAstCreateActionBy(PrizmRemoveAttributeTemplateTask, {})],
      onInput: [prizmAstCreateActionBy(PrizmRemoveAttributeTemplateTask, {})],
      onBlur: [prizmAstCreateActionBy(PrizmRemoveAttributeTemplateTask, {})],
      onFocus: [prizmAstCreateActionBy(PrizmRemoveAttributeTemplateTask, {})],
    },
    finishTasks: [
      prizmAstCreateActionBy(PrizmRunTasksOnNodeTemplateTask, {
        dontRunOnOnMain: true,
        runOnChildren: true,
        tasks: [
          {
            selector: [
              {
                type: 'byAttr',
                attrs: {
                  prizmInput: undefined,
                },
              },
            ],
            inputs: {},
            outputs: {},
            tasks: [
              prizmAstCreateActionBy(PrizmCallWithNewSourceTemplateTask, {
                id: [
                  newNameOfPlaceholder,
                  newNameOfNgModel,
                  newNameOfFormControl,
                  newNameOfFormControlName,
                  newNameOfDisabled,
                  newNameOfType,
                  newNameOfMaxLength,
                  newNameOfMinLength,
                  newNameOfRows,
                  newNameOfCols,
                  newNameOfAutoResize,
                ],
              }),
            ],
          },
        ],
      }),
    ],
  },
];
