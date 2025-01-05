import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SkipCreateFormInputValues = {
    name?: string;
    location?: string;
    volume?: string;
    size?: string;
};
export declare type SkipCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    volume?: ValidationFunction<string>;
    size?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SkipCreateFormOverridesProps = {
    SkipCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    volume?: PrimitiveOverrideProps<TextFieldProps>;
    size?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SkipCreateFormProps = React.PropsWithChildren<{
    overrides?: SkipCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SkipCreateFormInputValues) => SkipCreateFormInputValues;
    onSuccess?: (fields: SkipCreateFormInputValues) => void;
    onError?: (fields: SkipCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SkipCreateFormInputValues) => SkipCreateFormInputValues;
    onValidate?: SkipCreateFormValidationValues;
} & React.CSSProperties>;
export default function SkipCreateForm(props: SkipCreateFormProps): React.ReactElement;
