import { forwardRef, type ReactNode } from "react";
import { Loader2 } from "lucide-react";
import "./button.css";
import { ButtonPrimitive, ButtonPrimitiveProps } from "@scaffold-ds/primitives";
import type { ButtonVariant, ButtonSize, ButtonRadius } from "./button.types";

interface ButtonProps extends Omit<ButtonPrimitiveProps, "children" | "className"> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    radius?: ButtonRadius;
    icon?: boolean;
    loading?: boolean;
    loadingText?: ReactNode;
    fullWidth?: boolean;
    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
    children?: ReactNode;
    className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant = "default",
            size = "medium",
            radius = "full",
            icon = false,
            loading = false,
            loadingText = "Loading...",
            fullWidth = false,
            leadingIcon,
            trailingIcon,
            disabled,
            children,
            ...props
        },
        ref,
    ) => {
        const isDisabled = disabled || loading;

        return (
            <ButtonPrimitive
                ref={ref}
                className={className}
                data-variant={variant}
                data-size={size}
                data-radius={radius}
                data-icon={icon ? "" : undefined}
                data-wide={fullWidth ? "" : undefined}
                data-loading={loading ? "" : undefined}
                disabled={isDisabled}
                aria-busy={loading || undefined}
                {...props}
            >
                {icon ? (
                    loading ? (
                        <Loader2
                            className="button-spinner"
                            aria-hidden="true"
                        />
                    ) : (
                        children
                    )
                ) : loading ? (
                    <>
                        <Loader2
                            className="button-spinner"
                            aria-hidden="true"
                        />

                        <span
                            className={
                                !loadingText
                                    ? "button-loading-content"
                                    : undefined
                            }
                        >
                            {loadingText ?? children}
                        </span>
                    </>
                ) : (
                    <>
                        {leadingIcon}
                        {children}
                        {trailingIcon}
                    </>
                )}
            </ButtonPrimitive>
        );
    },
);

Button.displayName = "Button";

export { Button, type ButtonProps }