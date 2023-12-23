import { ComponentProps, ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants";

const button = tv({
  base: [
    "flex gap-2 items-center rounded px-2 py-1 transition ease-in-out delay-150 w-full ",
  ],
  variants: {
    variant: {
      primary: "bg-gray-600 text-zinc-300 hover:bg-gray-700",
      current: "bg-purple-600 text-purple-300",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type ButtonProps = {
  icon?: ReactNode;
  variant?: string;
} & ComponentProps<"button"> &
  VariantProps<typeof button>;

export const Button = ({ children, icon, variant, ...props }: ButtonProps) => {
  return (
    <button {...props} className={button({ variant })}>
      {icon}
      {children}
    </button>
  );
};
