import { forwardRef, type ButtonHTMLAttributes } from "react";

type ButtonPrimitiveProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonPrimitive = forwardRef<HTMLButtonElement, ButtonPrimitiveProps>((props, ref) => {
    return (
        <button ref={ref} {...props} />
    );
});

ButtonPrimitive.displayName = "Button";

export { ButtonPrimitive, type ButtonPrimitiveProps }