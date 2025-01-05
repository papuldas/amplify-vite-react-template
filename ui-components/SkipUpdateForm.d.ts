import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Skip } from "./graphql/types";
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
export declare type SkipUpdateFormInputValues = {
    name?: string;
    location?: string;
    volume?: string;
    size?: string;
};
export declare type SkipUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    volume?: ValidationFunction<string>;
    size?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SkipUpdateFormOverridesProps = {
    SkipUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    volume?: PrimitiveOverrideProps<TextFieldProps>;
    size?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SkipUpdateFormProps = React.PropsWithChildren<{
    overrides?: SkipUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    skip?: Skip;
    onSubmit?: (fields: SkipUpdateFormInputValues) => SkipUpdateFormInputValues;
    onSuccess?: (fields: SkipUpdateFormInputValues) => void;
    onError?: (fields: SkipUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SkipUpdateFormInputValues) => SkipUpdateFormInputValues;
    onValidate?: SkipUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SkipUpdateForm(props: SkipUpdateFormProps): React.ReactElement;
