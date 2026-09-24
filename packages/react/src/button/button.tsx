import { Button as ButtonPrimitive, type ButtonProps as ButtonPrimitiveProps } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ReactNode } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "../../utils/cn";

const buttonVariants = cva(
    [
        // Base
        "group/button",
        "inline-flex shrink-0 items-center justify-center",
        "border border-transparent",
        "bg-clip-padding",
        "whitespace-nowrap",
        "font-inherit",
        "leading-none",
        "select-none",
        "outline-none",
        "cursor-pointer",
        "transition-all duration-200 ease-in-out",

        // Focus
        "focus-visible:outline-2",
        "focus-visible:outline-[var(--scaffold-focus-ring)]",
        "focus-visible:outline-offset-2",

        // Disabled
        "disabled:pointer-events-none",
        "disabled:cursor-default",
        "disabled:opacity-50",

        // Child icons
        "[&_svg]:pointer-events-none",
        "[&_svg]:shrink-0",
    ].join(" "),
    {
        variants: {
            variant: {
                default: [
                    "bg-primary text-primary-foreground",
                    "hover:bg-primary/90",
                    "active:bg-primary/90",
                ],

                outline: [
                    "border-border",
                    "bg-surface text-surface-foreground",
                    "hover:bg-muted",
                    "active:bg-muted",
                    "[&_svg]:text-muted-foreground",
                ],

                tonal: [
                    "bg-muted text-foreground",
                    "hover:bg-muted",
                    "active:bg-muted",
                ],

                text: [
                    "bg-transparent text-foreground",
                    "hover:bg-muted",
                    "active:bg-muted",
                ],

                elevated: [
                    "bg-surface text-surface-foreground",
                    "shadow-extra-small",
                    "hover:bg-muted",
                    "active:bg-muted",
                ],

                underline: [
                    "bg-transparent text-foreground",
                    "underline-offset-4",
                    "hover:underline",
                    "active:underline",
                ],

                error: [
                    "bg-error text-error-foreground",
                    "hover:bg-error/80",
                    "active:bg-error/80",
                ],

                warning: [
                    "bg-warning text-warning-foreground",
                    "hover:bg-warning/80",
                    "active:bg-warning/80",
                ],
            },

            size: {
                small: [
                    "h-8",
                    "gap-1.5",
                    "px-3",
                    "text-[var(--type-ds-button-12-size)]",
                    "font-[var(--type-ds-button-12-weight)]",
                    "leading-[var(--type-ds-button-12-line-height)]",
                    "[&_svg]:size-[var(--type-ds-button-12-size)]",
                ],

                medium: [
                    "h-9",
                    "gap-2",
                    "px-4.5",
                    "text-[var(--type-ds-button-14-size)]",
                    "font-[var(--type-ds-button-14-weight)]",
                    "leading-[var(--type-ds-button-14-line-height)]",
                    "[&_svg]:size-[var(--type-ds-button-14-size)]",
                ],

                large: [
                    "h-10",
                    "gap-3",
                    "px-5",
                    "text-[var(--type-ds-button-16-size)]",
                    "font-[var(--type-ds-button-16-weight)]",
                    "leading-[var(--type-ds-button-16-line-height)]",
                    "[&_svg]:size-[var(--type-ds-button-16-size)]",
                ],
            },

            radius: {
                none: "rounded-[var(--radius-ds-none)]",
                small: "rounded-[var(--radius-ds-small)]",
                medium: "rounded-[var(--radius-ds-medium)]",
                large: "rounded-[var(--radius-ds-large)]",
                extraLarge: "rounded-[var(--radius-ds-extraLarge)]",
                full: "rounded-[var(--radius-ds-full)]",
            },

            icon: {
                true: "px-0",
                false: null,
            },

            fullWidth: {
                true: "w-full",
                false: null,
            },

            loading: {
                true: "cursor-wait",
                false: null,
            },
        },

        compoundVariants: [
            {
                icon: true,
                size: "small",
                class: "w-8",
            },
            {
                icon: true,
                size: "medium",
                class: "w-9",
            },
            {
                icon: true,
                size: "large",
                class: "w-10",
            },
        ],

        defaultVariants: {
            variant: "default",
            size: "medium",
            radius: "full",
            icon: false,
            fullWidth: false,
            loading: false,
        },
    },
);

interface ButtonProps extends Omit<ButtonPrimitiveProps, "children" | "className">, VariantProps<typeof buttonVariants> {
    loadingText?: ReactNode;
    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
    children?: ReactNode;
    className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant,
            size,
            radius,
            icon,
            fullWidth,
            loading,
            loadingText = "Loading...",
            leadingIcon,
            trailingIcon,
            disabled,
            children,
            ...props
        },
        ref,
    ) => {
        const isDisabled = Boolean(disabled || loading);

        return (
            <ButtonPrimitive
                ref={ref}
                data-slot="button"
                data-icon={icon ? "" : undefined}
                className={cn(
                    buttonVariants({
                        variant,
                        size,
                        radius,
                        icon,
                        fullWidth,
                        loading,
                    }),
                    className,
                )}
                disabled={isDisabled}
                aria-busy={loading || undefined}
                {...props}
            >
                {icon ? (
                    loading ? (
                        <Loader2
                            className="size-[1em] animate-spin"
                            aria-hidden="true"
                        />
                    ) : (
                        children
                    )
                ) : loading ? (
                    <>
                        <Loader2
                            className="size-[1em] animate-spin"
                            aria-hidden="true"
                        />

                        <span>{loadingText ?? children}</span>
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

export { Button, buttonVariants };
export type { ButtonProps };