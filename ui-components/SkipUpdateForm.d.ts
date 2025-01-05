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
    volume?: string;
    location?: string;
    size?: string;
    name?: string;
};
export declare type SkipUpdateFormValidationValues = {
    volume?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    size?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SkipUpdateFormOverridesProps = {
    SkipUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    volume?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    size?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
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
