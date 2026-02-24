"use client";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Magnetic from "./Magnetic";

const buttonVariants = cva(
  "group flex w-full items-center justify-center gap-3 rounded-sm px-12 py-5 font-black transition-all duration-300 sm:w-auto",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-b from-amber-400 to-amber-600 text-slate-950 shadow-[0_10px_40px_rgba(180,140,40,0.2)] hover:shadow-[0_15px_50px_rgba(180,140,40,0.4)]",
        secondary:
          "relative overflow-hidden border border-slate-800 bg-white/5 text-white hover:border-amber-500/50",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    const Comp = "button";
    return (
      <Magnetic>
        <Comp
          className={cn(buttonVariants({ variant, className }))}
          ref={ref}
          {...props}
        />
      </Magnetic>
    );
  },
);
Button.displayName = "Button";

export { Button };
