export const test = {
  required: [
    {
      $validators: {},
      $asyncValidators: {},
      $parsers: [],
      $formatters: [null],
      $viewChangeListeners: [],
      $untouched: false,
      $touched: true,
      $pristine: true,
      $dirty: false,
      $valid: false,
      $invalid: true,
      $error: {
        required: true
      },
      $$success: {},
      $name: "name",
      $options: null
    },
    {
      $validators: {},
      $asyncValidators: {},
      $parsers: [],
      $formatters: [null],
      $viewChangeListeners: [],
      $untouched: false,
      $touched: true,
      $pristine: true,
      $dirty: false,
      $valid: false,
      $invalid: true,
      $error: {
        required: true
      },
      $$success: {},
      $name: "ccNumber",
      $options: null
    }
  ],
  minlength: [
    {
      $viewValue: "1",
      $$rawModelValue: "1",
      $validators: {},
      $asyncValidators: {},
      $parsers: [],
      $formatters: [null],
      $viewChangeListeners: [],
      $untouched: false,
      $touched: true,
      $pristine: false,
      $dirty: true,
      $valid: false,
      $invalid: true,
      $error: {
        minlength: true
      },
      $$success: {
        maxlength: true,
        parse: true,
        required: true
      },
      $name: "cvc",
      $options: null,
      $$lastCommittedViewValue: "1"
    }
  ],
  "future-date": [
    {
      $viewValue: "01 / 2009",
      $modelValue: "012009",
      $$rawModelValue: "012009",
      $validators: {},
      $asyncValidators: {},
      $parsers: [null],
      $formatters: [null, null],
      $viewChangeListeners: [],
      $untouched: false,
      $touched: true,
      $pristine: false,
      $dirty: true,
      $valid: false,
      $invalid: true,
      $error: {
        "future-date": true
      },
      $$success: {
        mask: true,
        parse: true,
        required: true
      },
      $name: "expiry",
      $options: null,
      $$lastCommittedViewValue: "01 / 2009"
    }
  ]
};
