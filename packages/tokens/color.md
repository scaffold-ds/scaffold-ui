```
Scaffold's Color System
│
├── Base
│   ├── 0       Pure White
│   └── 1000    Pure Black
│
├── Neutral
│   └── 50–950
│
├── Natural Colors
│   ├── Red
│   ├── Yellow
│   ├── Green
│   ├── Teal
│   ├── Blue
│   ├── Purple
│   └── Pink
│
├── Spectrum / Extended Colors
│   ├── Orange
│   ├── Amber
│   ├── Lime
│   ├── Emerald
│   ├── Cyan
│   ├── Sky
│   ├── Indigo
│   ├── Violet
│   ├── Fuchsia
│   └── Rose
│
└── Material / Earth / Atmospheric Colors
    ├── Olive
    ├── Mauve
    ├── Mist
    ├── Taupe
    ├── Stone
    ├── Zinc
    ├── Slate
    ├── Iron
    ├── Gray
    ├── Gold
    ├── Silver
    ├── Platinum
    ├── Butter
    └── Fossil
```

```
Scaffold's Color Methodology

500 Anchor
    │
┌──────────┴──────────┐
│                     │
Light Curve            Dark Curve
│                     │
L / C / H                 L / C / H
nonlinear                 nonlinear
│                     │
50                    950
│                     │
└──────────┬──────────┘
    ↓
sRGB gamut check
    ↓
Cross-family balancing
    ↓
Optical review
    ↓
LOCK
```

@theme {
  --color-red-50: oklch(0.958 0.016 12.9);
  --color-red-100: oklch(0.917 0.034 15.63);
  --color-red-200: oklch(0.839 0.071 16.52);
  --color-red-300: oklch(0.751 0.117 18.22);
  --color-red-400: oklch(0.684 0.156 20.2);
  --color-red-500: oklch(0.626 0.193 23.03);
  --color-red-600: oklch(0.554 0.211 26.57);
  --color-red-700: oklch(0.446 0.167 26.38);
  --color-red-800: oklch(0.343 0.125 25.64);
  --color-red-900: oklch(0.223 0.073 24.18);
  --color-red-950: oklch(0.154 0.044 20.1);
}

@theme {
  --color-amber-50: oklch(0.981 0.019 83.04);
  --color-amber-100: oklch(0.957 0.043 83.21);
  --color-amber-200: oklch(0.921 0.08 83.2);
  --color-amber-300: oklch(0.881 0.117 81.38);
  --color-amber-400: oklch(0.85 0.144 79.66);
  --color-amber-500: oklch(0.817 0.164 75.83);
  --color-amber-600: oklch(0.746 0.161 70.84);
  --color-amber-700: oklch(0.596 0.128 71.83);
  --color-amber-800: oklch(0.452 0.096 73.69);
  --color-amber-900: oklch(0.278 0.058 77.51);
  --color-amber-950: oklch(0.2 0.041 83.2);
}

@theme {
  --color-green-50: oklch(0.966 0.015 151.64);
  --color-green-100: oklch(0.927 0.034 152);
  --color-green-200: oklch(0.864 0.066 150.32);
  --color-green-300: oklch(0.795 0.103 149.2);
  --color-green-400: oklch(0.727 0.136 148.34);
  --color-green-500: oklch(0.651 0.147 147.39);
  --color-green-600: oklch(0.552 0.122 147.4);
  --color-green-700: oklch(0.455 0.098 147.62);
  --color-green-800: oklch(0.349 0.071 147.78);
  --color-green-900: oklch(0.223 0.038 148.14);
  --color-green-950: oklch(0.169 0.024 147.06);
}

@theme {
  --color-teal-50: oklch(0.972 0.026 187.95);
  --color-teal-100: oklch(0.941 0.054 187.71);
  --color-teal-200: oklch(0.893 0.101 186.17);
  --color-teal-300: oklch(0.858 0.131 184.09);
  --color-teal-400: oklch(0.818 0.144 181.83);
  --color-teal-500: oklch(0.649 0.114 181.95);
  --color-teal-600: oklch(0.555 0.096 182.74);
  --color-teal-700: oklch(0.456 0.078 182.87);
  --color-teal-800: oklch(0.336 0.056 184.02);
  --color-teal-900: oklch(0.221 0.034 185.21);
  --color-teal-950: oklch(0.166 0.025 185.45);
}

@theme {
  --color-blue-50: oklch(0.953 0.023 252.17);
  --color-blue-100: oklch(0.91 0.045 251.4);
  --color-blue-200: oklch(0.81 0.097 253.12);
  --color-blue-300: oklch(0.727 0.144 253.5);
  --color-blue-400: oklch(0.645 0.192 255.46);
  --color-blue-500: oklch(0.573 0.214 258.24);
  --color-blue-600: oklch(0.486 0.18 257.99);
  --color-blue-700: oklch(0.402 0.145 257.39);
  --color-blue-800: oklch(0.304 0.103 255.86);
  --color-blue-900: oklch(0.208 0.062 251.99);
  --color-blue-950: oklch(0.15 0.038 245.85);
}

@theme {
  --color-purple-50: oklch(0.952 0.019 309.89);
  --color-purple-100: oklch(0.912 0.035 309.8);
  --color-purple-200: oklch(0.825 0.07 308.91);
  --color-purple-300: oklch(0.726 0.111 308.29);
  --color-purple-400: oklch(0.638 0.149 307.43);
  --color-purple-500: oklch(0.556 0.183 305.87);
  --color-purple-600: oklch(0.466 0.175 304.84);
  --color-purple-700: oklch(0.38 0.137 305.14);
  --color-purple-800: oklch(0.298 0.102 305.67);
  --color-purple-900: oklch(0.201 0.056 306.78);
  --color-purple-950: oklch(0.141 0.031 308.71);
}

@theme {
  --color-pink-50: oklch(0.96 0.019 352.75);
  --color-pink-100: oklch(0.919 0.04 352.23);
  --color-pink-200: oklch(0.833 0.087 353.11);
  --color-pink-300: oklch(0.76 0.132 355.14);
  --color-pink-400: oklch(0.687 0.178 357.54);
  --color-pink-500: oklch(0.634 0.213 1.28);
  --color-pink-600: oklch(0.564 0.216 5.64);
  --color-pink-700: oklch(0.461 0.175 5.06);
  --color-pink-800: oklch(0.343 0.127 4.11);
  --color-pink-900: oklch(0.227 0.079 0.97);
  --color-pink-950: oklch(0.155 0.049 355.5);
}

@theme {
  --color-neutral-50: oklch(0.97 0 0);
  --color-neutral-100: oklch(0.931 0 0);
  --color-neutral-200: oklch(0.861 0 0);
  --color-neutral-300: oklch(0.798 0 0);
  --color-neutral-400: oklch(0.725 0 0);
  --color-neutral-500: oklch(0.65 0 0);
  --color-neutral-600: oklch(0.556 0 0);
  --color-neutral-700: oklch(0.457 0 0);
  --color-neutral-800: oklch(0.341 0 0);
  --color-neutral-900: oklch(0.226 0 0);
  --color-neutral-950: oklch(0.168 0 0);
}