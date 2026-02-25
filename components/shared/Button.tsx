"use client";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Magnetic from "./Magnetic";

const buttonVariants = cva(
  "group relative flex w-full items-center justify-center gap-4 border transition-all duration-300 sm:w-auto",
  {
    variants: {
      variant: {
        primary:
          "bg-accent border-accent px-10 py-5 text-[11px] font-black tracking-[0.3em] text-slate-950 uppercase hover:border-white hover:bg-white hover:shadow-[0_0_40px_rgba(180,140,40,0.4)]",
        secondary:
          "hover:border-accent hover:text-accent border-slate-800 bg-slate-900/50 bg-transparent px-10 py-5 text-[11px] font-black tracking-[0.3em] text-white uppercase backdrop-blur-md",
        outline:
          "hover:border-accent/40 border-slate-700/50 bg-transparent px-8 py-4 text-[10px] font-bold tracking-[0.4em] text-slate-400 uppercase hover:text-white",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    const Comp = "button";
    return (
      <Magnetic>
        <Comp className={cn(buttonVariants({ variant, className }))} ref={ref} {...props} />
      </Magnetic>
    );
  },
);
Button.displayName = "Button";

export { Button };
