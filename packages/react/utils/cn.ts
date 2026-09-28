import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

const twMerge = extendTailwindMerge({
    extend: {
        classGroups: {
            "font-size": [
                "text-heading-72",
                "text-heading-64",
                "text-heading-56",
                "text-heading-48",
                "text-heading-40",
                "text-heading-32",
                "text-heading-24",
                "text-heading-20",
                "text-heading-18",
                "text-heading-16",
                "text-heading-14",

                "text-button-16",
                "text-button-14",
                "text-button-12",

                "text-copy-24",
                "text-copy-20",
                "text-copy-18",
                "text-copy-16",
                "text-copy-14",
                "text-copy-13",
                "text-copy-13-mono",

                "text-label-20",
                "text-label-18",
                "text-label-16",
                "text-label-14",
                "text-label-14-mono",
                "text-label-13",
                "text-label-13-mono",
                "text-label-12",
                "text-label-12-mono",
            ],
        },
    },
});

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}