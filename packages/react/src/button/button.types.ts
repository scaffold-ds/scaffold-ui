const buttonVariants = [
    "default",
    "outline",
    "tonal",
    "text",
    "elevated",
    "underline",
    "error",
    "alert",
] as const;

type ButtonVariant = (typeof buttonVariants)[number];

const buttonSizes = [
    "small",
    "medium",
    "large",
] as const;

type ButtonSize = (typeof buttonSizes)[number];

const buttonRadii = [
    "none",
    "small",
    "medium",
    "large",
    "extraLarge",
    "full",
] as const;

type ButtonRadius = (typeof buttonRadii)[number];

export {
    buttonVariants,
    buttonSizes,
    buttonRadii,
    type ButtonVariant,
    type ButtonSize,
    type ButtonRadius
}