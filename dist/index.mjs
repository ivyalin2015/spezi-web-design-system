var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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

// src/base_components/forms/useForm/useForm.ts
import { zodResolver } from "@hookform/resolvers/zod";
import { isObject, isString } from "lodash";
import { useCallback } from "react";
import {
  useForm as useFormHook
} from "react-hook-form";
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
  const form = useFormHook(__spreadValues({
    resolver: zodResolver(formSchema)
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
  const setFormError = useCallback(
    (error, options) => {
      const errorValue = {
        message: isObject(error) && "message" in error && isString(error.message) ? error.message : isString(error) ? error : "Unknown error happened"
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
import { z } from "zod";

// src/base_components/components/Select/Select.tsx
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import {
  forwardRef
} from "react";

// src/base_components/utils/className.ts
import { clsx } from "clsx";
var cn = (...inputs) => clsx(inputs);

// src/base_components/components/Select/Select.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var Select = SelectPrimitive.Root;
var SelectGroup = SelectPrimitive.Group;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxs(
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
        /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDown, { className: "size-4 opacity-50" }) })
      ]
    })
  );
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    SelectPrimitive.ScrollUpButton,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsx(ChevronUp, { className: "size-4" })
    })
  );
});
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    SelectPrimitive.ScrollDownButton,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsx(ChevronDown, { className: "size-4" })
    })
  );
});
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = forwardRef((_a, ref) => {
  var _b = _a, { className, children, position = "popper" } = _b, props = __objRest(_b, ["className", "children", "position"]);
  return /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
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
        /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsx(
          SelectPrimitive.Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
            ),
            children
          }
        ),
        /* @__PURE__ */ jsx(SelectScrollDownButton, {})
      ]
    })
  ) });
});
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    SelectPrimitive.Label,
    __spreadValues({
      ref,
      className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)
    }, props)
  );
});
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = forwardRef((_a, ref) => {
  var _b = _a, { className, children, itemText } = _b, props = __objRest(_b, ["className", "children", "itemText"]);
  return /* @__PURE__ */ jsxs(
    SelectPrimitive.Item,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsx("span", { className: "absolute left-2 top-0 flex h-full w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "size-4" }) }) }),
        itemText ? /* @__PURE__ */ jsxs(Fragment, { children: [
          children,
          /* @__PURE__ */ jsx("div", { className: "hidden", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { className: "hidden", children: itemText }) })
        ] }) : /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
      ]
    })
  );
});
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    SelectPrimitive.Separator,
    __spreadValues({
      ref,
      className: cn("-mx-1 my-1 h-px bg-muted", className)
    }, props)
  );
});
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// src/base_components/components/Button/Button.tsx
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { forwardRef as forwardRef3 } from "react";

// src/base_components/components/Button/ButtonPending.tsx
import { Loader2 } from "lucide-react";
import { forwardRef as forwardRef2 } from "react";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var ButtonPending = forwardRef2(
  (_a, ref) => {
    var _b = _a, { children, isPending, className, size } = _b, props = __objRest(_b, ["children", "isPending", "className", "size"]);
    return /* @__PURE__ */ jsxs2(
      "span",
      __spreadProps(__spreadValues({
        className: cn("inline-flex-center relative", className),
        ref
      }, props), {
        children: [
          isPending && /* @__PURE__ */ jsx2(
            "div",
            {
              className: "absolute -top-0.5 left-1/2 -translate-x-1/2",
              "aria-hidden": true,
              "data-testid": "ButtonPending",
              children: /* @__PURE__ */ jsx2(Loader2, { className: "animate-spin" })
            }
          ),
          /* @__PURE__ */ jsx2(
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
import { jsx as jsx3 } from "react/jsx-runtime";
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
var buttonVariance = cva(
  "inline-flex items-center justify-center whitespace-nowrap transition-colors focus-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: buttonVariants,
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = forwardRef3(
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
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx3(
      Comp,
      __spreadProps(__spreadValues({
        className: buttonVariance({ variant, size, className }),
        ref,
        type,
        "aria-label": isPending ? "Loading" : void 0
      }, props), {
        children: isPending !== void 0 ? /* @__PURE__ */ jsx3(ButtonPending, { size, isPending, children }) : children
      })
    );
  }
);
Button.displayName = "Button";

// src/base_components/forms/Field/Field.tsx
import {
  Controller
} from "react-hook-form";

// src/base_components/components/Error/Error.tsx
import { forwardRef as forwardRef4 } from "react";
import { jsx as jsx4 } from "react/jsx-runtime";
var Error2 = forwardRef4(
  (_a, ref) => {
    var _b = _a, { children, className, checkEmpty = false } = _b, props = __objRest(_b, ["children", "className", "checkEmpty"]);
    if (checkEmpty && !children) return null;
    return /* @__PURE__ */ jsx4(
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
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva as cva2 } from "class-variance-authority";
import {
  forwardRef as forwardRef5
} from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
var labelVariants = cva2(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
var Label2 = forwardRef5((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx5(
    LabelPrimitive.Root,
    __spreadValues({
      ref,
      className: labelVariants({ className })
    }, props)
  );
});
Label2.displayName = LabelPrimitive.Root.displayName;

// src/base_components/forms/Field/Field.tsx
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx6(
    Controller,
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
        return /* @__PURE__ */ jsxs3("div", { className, children: [
          label && /* @__PURE__ */ jsx6(Label2, { htmlFor: id, className: "mb-2 block", children: label }),
          render(__spreadProps(__spreadValues({}, states), {
            field: fieldProps
          })),
          /* @__PURE__ */ jsx6(Error2, { id: errorId, checkEmpty: checkEmptyError, children: error == null ? void 0 : error.message })
        ] });
      }
    })
  );
};

// src/components/AllergyForm.tsx
import { startCase } from "es-toolkit";

// src/components/MedicationSelect.tsx
import { jsx as jsx7, jsxs as jsxs4 } from "react/jsx-runtime";
var MedicationSelect = (_a) => {
  var _b = _a, {
    medicationClasses
  } = _b, props = __objRest(_b, [
    "medicationClasses"
  ]);
  return /* @__PURE__ */ jsxs4(Select, __spreadProps(__spreadValues({}, props), { children: [
    /* @__PURE__ */ jsx7(SelectTrigger, { children: /* @__PURE__ */ jsx7(SelectValue, { placeholder: "Medication" }) }),
    /* @__PURE__ */ jsx7(SelectContent, { children: medicationClasses.map((medicationClass) => /* @__PURE__ */ jsxs4(SelectGroup, { children: [
      /* @__PURE__ */ jsx7(SelectLabel, { children: typeof medicationClass.name === "string" ? medicationClass.name : Object.values(medicationClass.name)[0] }),
      medicationClass.medications.map((medication) => /* @__PURE__ */ jsx7(SelectItem, { value: medication.id, children: medication.name }, medication.id))
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
import { jsx as jsx8, jsxs as jsxs5 } from "react/jsx-runtime";
var stringifyAllergyType = (type) => startCase(type);
var allergyFormSchema = z.object({
  medication: z.string(),
  type: z.nativeEnum(AllergyType)
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
  return /* @__PURE__ */ jsxs5("form", { onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsx8(
      Field,
      {
        control: form.control,
        name: "type",
        render: ({ field }) => /* @__PURE__ */ jsxs5(Select, __spreadProps(__spreadValues({ onValueChange: field.onChange }, field), { children: [
          /* @__PURE__ */ jsx8(SelectTrigger, { children: /* @__PURE__ */ jsx8(SelectValue, { placeholder: "Type" }) }),
          /* @__PURE__ */ jsx8(SelectContent, { children: Object.values(AllergyType).map((type) => /* @__PURE__ */ jsx8(SelectItem, { value: type, children: stringifyAllergyType(type) }, type)) })
        ] }))
      }
    ),
    /* @__PURE__ */ jsx8(
      Field,
      {
        control: form.control,
        name: "medication",
        render: ({ field }) => /* @__PURE__ */ jsx8(
          MedicationSelect,
          __spreadValues({
            medicationClasses: medications,
            onValueChange: field.onChange
          }, field)
        )
      }
    ),
    /* @__PURE__ */ jsxs5(Button, { type: "submit", isPending: form.formState.isSubmitting, children: [
      isEdit ? "Edit" : "Create",
      " allergy"
    ] })
  ] });
};

// src/base_components/components/Input/Input.tsx
import { forwardRef as forwardRef6 } from "react";
import { jsx as jsx9 } from "react/jsx-runtime";
var Input = forwardRef6(
  (_a, ref) => {
    var _b = _a, { className, type = "text" } = _b, props = __objRest(_b, ["className", "type"]);
    return /* @__PURE__ */ jsx9(
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
export {
  AllergyForm,
  Button,
  Input,
  Label2 as Label,
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
};
