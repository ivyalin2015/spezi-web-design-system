import * as react_jsx_runtime from 'react/jsx-runtime';
import { z } from 'zod';
import * as react from 'react';
import { ComponentProps, ButtonHTMLAttributes, InputHTMLAttributes } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';
import * as LabelPrimitive from '@radix-ui/react-label';
import { ClassValue } from 'clsx';

declare enum AllergyType {
    severeAllergy = "severeAllergy",
    allergy = "allergy",
    intolerance = "intolerance",
    financial = "financial",
    preference = "preference"
}
interface Allergy {
    type: AllergyType;
    medication: string | null | undefined;
}

interface Drug {
    id: string;
    medicationId: string;
    medicationClassId: string | undefined;
    name: string;
    ingredients: Array<{
        name: string;
        strength: number;
        unit: string;
    }>;
}
interface Medication {
    id: string;
    name: string;
    medicationClassId: string | undefined;
    dosage: {
        frequencyPerDay: number;
        quantity: number;
    };
    drugs: Drug[];
}

declare const allergyFormSchema: z.ZodObject<{
    medication: z.ZodString;
    type: z.ZodNativeEnum<typeof AllergyType>;
}, "strip", z.ZodTypeAny, {
    type: AllergyType;
    medication: string;
}, {
    type: AllergyType;
    medication: string;
}>;
type AllergyFormSchema = z.infer<typeof allergyFormSchema>;
interface AllergyFormProps {
    allergy?: Allergy;
    medications: {
        id: string;
        name: string | Record<string, string>;
        medications: Medication[];
    }[];
    onSubmit: (data: AllergyFormSchema) => Promise<void>;
}
declare const AllergyForm: ({ allergy, onSubmit, medications, }: AllergyFormProps) => react_jsx_runtime.JSX.Element;

declare const Select: react.FC<SelectPrimitive.SelectProps>;
declare const SelectGroup: react.ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & react.RefAttributes<HTMLDivElement>>;
declare const SelectValue: react.ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & react.RefAttributes<HTMLSpanElement>>;
declare const SelectTrigger: react.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectTriggerProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
declare const SelectScrollUpButton: react.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollUpButtonProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const SelectScrollDownButton: react.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollDownButtonProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const SelectContent: react.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const SelectLabel: react.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectLabelProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const SelectItem: react.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & react.RefAttributes<HTMLDivElement>, "ref"> & {
    itemText?: string | undefined;
} & react.RefAttributes<HTMLDivElement>>;
declare const SelectSeparator: react.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectSeparatorProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;

interface MedicationSelectProps extends ComponentProps<typeof Select> {
    medicationClasses: {
        id: string;
        name: string | Record<string, string>;
        medications: Medication[];
    }[];
}
declare const MedicationSelect: ({ medicationClasses, ...props }: MedicationSelectProps) => react_jsx_runtime.JSX.Element;

declare const buttonVariants: {
    variant: {
        default: string;
        outline: string;
        outlineBg: string;
        secondary: string;
        ghost: string;
        ghostPrimary: string;
        destructive: string;
        link: string;
    };
    size: {
        xs: string;
        default: string;
        sm: string;
        lg: string;
        round: string;
    };
};
declare const buttonVariance: (props?: ({
    variant?: "link" | "default" | "outline" | "outlineBg" | "secondary" | "ghost" | "ghostPrimary" | "destructive" | null | undefined;
    size?: "default" | "xs" | "sm" | "lg" | "round" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariance> {
    asChild?: boolean;
    isPending?: boolean;
}
declare const Button: react.ForwardRefExoticComponent<ButtonProps & react.RefAttributes<HTMLButtonElement>>;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}
declare const Input: react.ForwardRefExoticComponent<InputProps & react.RefAttributes<HTMLInputElement>>;

declare const Label: react.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & react.RefAttributes<HTMLLabelElement>, "ref"> & VariantProps<(props?: class_variance_authority_dist_types.ClassProp | undefined) => string> & react.RefAttributes<HTMLLabelElement>>;

declare const cn: (...inputs: ClassValue[]) => string;

declare const colorNameToTailwindVar: (colorName: string, alpha?: boolean) => string;
/**
 * Tailwind's theme colors
 * Uses light theme to get keys, but these are just CSS variable references
 * */
declare const tailwindColors: {
    [k: string]: string;
};
/**
 * Converts theme object to CSS variables
 * @example themeToCSSVariables({ black: '0 0 0' }) => `--black: 0 0 0;`
 * */
declare const themeToCSSVariables: (theme: Record<string, unknown>) => string;

/**
 * Color in `r g b` 8bit format
 * @example 255 255 255
 * */
type RGBColor = string;
/**
 * CSS size unit
 * @example 0.5rem
 * */
type Size = string;
/**
 * Interface of theme variables used by design-system
 * */
interface Theme {
    [key: string]: string;
    surface: RGBColor;
    'surface-primary': RGBColor;
    foreground: RGBColor;
    card: RGBColor;
    'card-foreground': RGBColor;
    popover: RGBColor;
    'popover-foreground': RGBColor;
    primary: RGBColor;
    'primary-foreground': RGBColor;
    secondary: RGBColor;
    'secondary-foreground': RGBColor;
    muted: RGBColor;
    'muted-foreground': RGBColor;
    accent: RGBColor;
    'accent-foreground': RGBColor;
    border: RGBColor;
    input: RGBColor;
    destructive: RGBColor;
    'destructive-foreground': RGBColor;
    ring: RGBColor;
    radius: Size;
}

/**
 * Default implementation of light theme
 * */
declare const lightTheme: Theme;

export { AllergyForm, Button, type ButtonProps, Input, type InputProps, Label, MedicationSelect, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, type Theme, buttonVariance, buttonVariants, cn, colorNameToTailwindVar, lightTheme, tailwindColors, themeToCSSVariables };
