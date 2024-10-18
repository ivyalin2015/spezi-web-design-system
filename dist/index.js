"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AllergyForm: () => AllergyForm,
  Button: () => Button,
  Input: () => Input,
  Label: () => Label2,
  MedicationSelect: () => MedicationSelect,
  Select: () => Select,
  SelectContent: () => SelectContent,
  SelectGroup: () => SelectGroup,
  SelectItem: () => SelectItem,
  SelectLabel: () => SelectLabel,
  SelectScrollDownButton: () => SelectScrollDownButton,
  SelectScrollUpButton: () => SelectScrollUpButton,
  SelectSeparator: () => SelectSeparator,
  SelectTrigger: () => SelectTrigger,
  SelectValue: () => SelectValue,
  buttonVariance: () => buttonVariance,
  buttonVariants: () => buttonVariants,
  cn: () => cn,
  colorNameToTailwindVar: () => colorNameToTailwindVar,
  lightTheme: () => lightTheme,
  tailwindColors: () => tailwindColors,
  themeToCSSVariables: () => themeToCSSVariables
});
module.exports = __toCommonJS(src_exports);

// src/base_components/forms/useForm/useForm.ts
var import_zod = require("@hookform/resolvers/zod");
var import_lodash = require("lodash");
var import_react = require("react");
var import_react_hook_form = require("react-hook-form");
var FORM_ERROR_KEY = "FORM_ERROR";
var ValidationError = class extends Error {
  constructor(fieldErrors) {
    super("Form validation field when submitting");
    this.fieldErrors = fieldErrors;
  }
};
var useForm = (_a) => {
  var _b = _a, {
    formSchema
  } = _b, props = __objRest(_b, [
    "formSchema"
  ]);
  const form = (0, import_react_hook_form.useForm)(__spreadValues({
    resolver: (0, import_zod.zodResolver)(formSchema)
  }, props));
  const {
    formState: { isValid, isDirty, errors },
    setError
  } = form;
  const submitAsync = () => new Promise((resolve, reject) => {
    void form.handleSubmit(
      (data) => {
        resolve(data);
      },
      (errorFields) => {
        const error = new ValidationError(errorFields);
        reject(error);
      }
    )();
  });
  const setFormError = (0, import_react.useCallback)(
    (error, options) => {
      const errorValue = {
        message: (0, import_lodash.isObject)(error) && "message" in error && (0, import_lodash.isString)(error.message) ? error.message : (0, import_lodash.isString)(error) ? error : "Unknown error happened"
      };
      setError(
        // @ts-expect-error Form error is special key, so error here is fine
        FORM_ERROR_KEY,
        errorValue,
        options
      );
    },
    [setError]
  );
  const formError = errors[FORM_ERROR_KEY];
  const isSubmitDisabled = !isValid || !isDirty;
  return __spreadProps(__spreadValues({}, form), {
    submitAsync,
    formError,
    setFormError,
    isSubmitDisabled
  });
};

// src/components/AllergyForm.tsx
var import_zod2 = require("zod");

// src/base_components/components/Select/Select.tsx
var SelectPrimitive = __toESM(require("@radix-ui/react-select"));
var import_lucide_react = require("lucide-react");
var import_react2 = require("react");

// src/base_components/utils/className.ts
var import_clsx = require("clsx");
var cn = (...inputs) => (0, import_clsx.clsx)(inputs);

// src/base_components/components/Select/Select.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Select = SelectPrimitive.Root;
var SelectGroup = SelectPrimitive.Group;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = (0, import_react2.forwardRef)((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    SelectPrimitive.Trigger,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-surface-primary px-3 py-2 text-sm ring-offset-surface placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 [&>span]:text-left",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronDown, { className: "size-4 opacity-50" }) })
      ]
    })
  );
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = (0, import_react2.forwardRef)((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    SelectPrimitive.ScrollUpButton,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )
    }, props), {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronUp, { className: "size-4" })
    })
  );
});
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = (0, import_react2.forwardRef)((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    SelectPrimitive.ScrollDownButton,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )
    }, props), {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronDown, { className: "size-4" })
    })
  );
});
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = (0, import_react2.forwardRef)((_a, ref) => {
  var _b = _a, { className, children, position = "popper" } = _b, props = __objRest(_b, ["className", "children", "position"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    SelectPrimitive.Content,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position
    }, props), {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          SelectPrimitive.Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
            ),
            children
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
      ]
    })
  ) });
});
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = (0, import_react2.forwardRef)((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    SelectPrimitive.Label,
    __spreadValues({
      ref,
      className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)
    }, props)
  );
});
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = (0, import_react2.forwardRef)((_a, ref) => {
  var _b = _a, { className, children, itemText } = _b, props = __objRest(_b, ["className", "children", "itemText"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    SelectPrimitive.Item,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-2 top-0 flex h-full w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Check, { className: "size-4" }) }) }),
        itemText ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          children,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPrimitive.ItemText, { className: "hidden", children: itemText }) })
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPrimitive.ItemText, { children })
      ]
    })
  );
});
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = (0, import_react2.forwardRef)((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    SelectPrimitive.Separator,
    __spreadValues({
      ref,
      className: cn("-mx-1 my-1 h-px bg-muted", className)
    }, props)
  );
});
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// src/base_components/components/Button/Button.tsx
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");
var import_react4 = require("react");

// src/base_components/components/Button/ButtonPending.tsx
var import_lucide_react2 = require("lucide-react");
var import_react3 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var ButtonPending = (0, import_react3.forwardRef)(
  (_a, ref) => {
    var _b = _a, { children, isPending, className, size } = _b, props = __objRest(_b, ["children", "isPending", "className", "size"]);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      "span",
      __spreadProps(__spreadValues({
        className: cn("inline-flex-center relative", className),
        ref
      }, props), {
        children: [
          isPending && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "div",
            {
              className: "absolute -top-0.5 left-1/2 -translate-x-1/2",
              "aria-hidden": true,
              "data-testid": "ButtonPending",
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react2.Loader2, { className: "animate-spin" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "span",
            {
              className: cn(
                "inline-flex-center",
                size === "lg" ? "gap-2.5" : "gap-2",
                isPending && "invisible"
              ),
              children
            }
          )
        ]
      })
    );
  }
);
ButtonPending.displayName = "ButtonPending";

// src/base_components/components/Button/Button.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var buttonVariants = {
  variant: {
    default: "bg-primary text-primary-foreground hover:bg-primary/80",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    outlineBg: "border border-input bg-surface-primary hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/70",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    ghostPrimary: "text-primary hover:bg-primary/10",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80",
    link: "text-primary underline-offset-4 hover:underline"
  },
  size: {
    xs: "h-6 text-xs px-2 py-1 rounded-md gap-1",
    default: "h-10 px-4 py-2 rounded-md gap-2",
    sm: "h-9 rounded-md px-3 gap-2",
    lg: "h-11 rounded-md px-8 gap-2.5",
    round: "rounded-full"
  }
};
var buttonVariance = (0, import_class_variance_authority.cva)(
  "inline-flex items-center justify-center whitespace-nowrap transition-colors focus-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: buttonVariants,
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = (0, import_react4.forwardRef)(
  (_a, ref) => {
    var _b = _a, {
      className,
      variant,
      size,
      asChild,
      type = "button",
      isPending,
      children
    } = _b, props = __objRest(_b, [
      "className",
      "variant",
      "size",
      "asChild",
      "type",
      "isPending",
      "children"
    ]);
    const Comp = asChild ? import_react_slot.Slot : "button";
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      Comp,
      __spreadProps(__spreadValues({
        className: buttonVariance({ variant, size, className }),
        ref,
        type,
        "aria-label": isPending ? "Loading" : void 0
      }, props), {
        children: isPending !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ButtonPending, { size, isPending, children }) : children
      })
    );
  }
);
Button.displayName = "Button";

// src/base_components/forms/Field/Field.tsx
var import_react_hook_form2 = require("react-hook-form");

// src/base_components/components/Error/Error.tsx
var import_react5 = require("react");
var import_jsx_runtime4 = require("react/jsx-runtime");
var Error2 = (0, import_react5.forwardRef)(
  (_a, ref) => {
    var _b = _a, { children, className, checkEmpty = false } = _b, props = __objRest(_b, ["children", "className", "checkEmpty"]);
    if (checkEmpty && !children) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "p",
      __spreadProps(__spreadValues({
        className: cn(
          "mb-1 mt-1.5 min-h-5 text-xs leading-none text-destructive",
          className
        ),
        ref
      }, props), {
        children
      })
    );
  }
);
Error2.displayName = "Error";

// src/base_components/components/Label/Label.tsx
var LabelPrimitive = __toESM(require("@radix-ui/react-label"));
var import_class_variance_authority2 = require("class-variance-authority");
var import_react6 = require("react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var labelVariants = (0, import_class_variance_authority2.cva)(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
var Label2 = (0, import_react6.forwardRef)((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    LabelPrimitive.Root,
    __spreadValues({
      ref,
      className: labelVariants({ className })
    }, props)
  );
});
Label2.displayName = LabelPrimitive.Root.displayName;

// src/base_components/forms/Field/Field.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var Field = (_a) => {
  var _b = _a, {
    label,
    name,
    className,
    checkEmptyError,
    render,
    error: errorProp
  } = _b, props = __objRest(_b, [
    "label",
    "name",
    "className",
    "checkEmptyError",
    "render",
    "error"
  ]);
  const id = name;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    import_react_hook_form2.Controller,
    __spreadProps(__spreadValues({}, props), {
      name,
      render: (states) => {
        const errorId = `${id}-error`;
        const error = errorProp != null ? errorProp : states.fieldState.error;
        const fieldProps = __spreadProps(__spreadValues({}, states.field), {
          id,
          "aria-errormessage": error ? errorId : "",
          "aria-invalid": !!error
        });
        return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className, children: [
          label && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Label2, { htmlFor: id, className: "mb-2 block", children: label }),
          render(__spreadProps(__spreadValues({}, states), {
            field: fieldProps
          })),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Error2, { id: errorId, checkEmpty: checkEmptyError, children: error == null ? void 0 : error.message })
        ] });
      }
    })
  );
};

// src/components/AllergyForm.tsx
var import_es_toolkit = require("es-toolkit");

// src/components/MedicationSelect.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var MedicationSelect = (_a) => {
  var _b = _a, {
    medicationClasses
  } = _b, props = __objRest(_b, [
    "medicationClasses"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(Select, __spreadProps(__spreadValues({}, props), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SelectValue, { placeholder: "Medication" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SelectContent, { children: medicationClasses.map((medicationClass) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(SelectGroup, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SelectLabel, { children: typeof medicationClass.name === "string" ? medicationClass.name : Object.values(medicationClass.name)[0] }),
      medicationClass.medications.map((medication) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SelectItem, { value: medication.id, children: medication.name }, medication.id))
    ] }, medicationClass.id)) })
  ] }));
};

// src/models/allergy.ts
var AllergyType = /* @__PURE__ */ ((AllergyType2) => {
  AllergyType2["severeAllergy"] = "severeAllergy";
  AllergyType2["allergy"] = "allergy";
  AllergyType2["intolerance"] = "intolerance";
  AllergyType2["financial"] = "financial";
  AllergyType2["preference"] = "preference";
  return AllergyType2;
})(AllergyType || {});

// src/components/AllergyForm.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var stringifyAllergyType = (type) => (0, import_es_toolkit.startCase)(type);
var allergyFormSchema = import_zod2.z.object({
  medication: import_zod2.z.string(),
  type: import_zod2.z.nativeEnum(AllergyType)
});
var AllergyForm = ({
  allergy,
  onSubmit,
  medications
}) => {
  var _a;
  const isEdit = !!allergy;
  const form = useForm({
    formSchema: allergyFormSchema,
    defaultValues: {
      type: allergy == null ? void 0 : allergy.type,
      medication: (_a = allergy == null ? void 0 : allergy.medication) != null ? _a : void 0
    }
  });
  const handleSubmit = form.handleSubmit((data) => __async(void 0, null, function* () {
    yield onSubmit(data);
  }));
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("form", { onSubmit: handleSubmit, children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      Field,
      {
        control: form.control,
        name: "type",
        render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(Select, __spreadProps(__spreadValues({ onValueChange: field.onChange }, field), { children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(SelectValue, { placeholder: "Type" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(SelectContent, { children: Object.values(AllergyType).map((type) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(SelectItem, { value: type, children: stringifyAllergyType(type) }, type)) })
        ] }))
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      Field,
      {
        control: form.control,
        name: "medication",
        render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          MedicationSelect,
          __spreadValues({
            medicationClasses: medications,
            onValueChange: field.onChange
          }, field)
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(Button, { type: "submit", isPending: form.formState.isSubmitting, children: [
      isEdit ? "Edit" : "Create",
      " allergy"
    ] })
  ] });
};

// src/base_components/components/Input/Input.tsx
var import_react7 = require("react");
var import_jsx_runtime9 = require("react/jsx-runtime");
var Input = (0, import_react7.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className, type = "text" } = _b, props = __objRest(_b, ["className", "type"]);
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "input",
      __spreadValues({
        type,
        className: cn(
          "focus-ring flex h-10 w-full rounded-md border border-input bg-surface-primary px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref
      }, props)
    );
  }
);
Input.displayName = "Input";

// src/base_components/theme/light.ts
var lightTheme = {
  surface: "250 250 249",
  "surface-primary": "255 255 255",
  foreground: "9 4 4",
  card: "255 255 255",
  "card-foreground": "9 4 4",
  popover: "255 255 255",
  "popover-foreground": "9 4 4",
  primary: "62 176 85",
  "primary-foreground": "243 243 243",
  secondary: "242 240 240",
  "secondary-foreground": "30 15 15",
  muted: "242 240 240",
  "muted-foreground": "159 159 159",
  accent: "242 240 240",
  "accent-foreground": "30 15 15",
  border: "232 215 221",
  input: "232 215 221",
  destructive: "222 65 38",
  "destructive-foreground": "243 243 243",
  ring: "62 176 85",
  radius: "0.5rem"
};

// src/base_components/utils/tailwind.ts
var colorNameToTailwindVar = (colorName, alpha = true) => `rgb(var(--${colorName})${alpha ? "/ <alpha-value>" : ""})`;
var colorEntries = Object.keys(lightTheme).map(
  (key) => [key, colorNameToTailwindVar(key)]
);
var tailwindColors = Object.fromEntries(colorEntries);
var themeToCSSVariables = (theme) => Object.entries(theme).map(
  ([key, value]) => typeof value === "string" ? `--${key}: ${value};` : null
).filter(Boolean).join("\n");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AllergyForm,
  Button,
  Input,
  Label,
  MedicationSelect,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  buttonVariance,
  buttonVariants,
  cn,
  colorNameToTailwindVar,
  lightTheme,
  tailwindColors,
  themeToCSSVariables
});
