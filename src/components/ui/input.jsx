import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "w-full rounded-lg border transition-colors outline-none",
  {
    variants: {
      size: {
        sm: "h-8 px-2 text-sm",
        md: "h-10 px-3 text-base",
        lg: "h-12 px-4 text-lg",
      },
      variant: {
        default: "bg-search placeholder:text-search-foreground rounded-lg",
        filled: "border-transparent bg-muted",
        outline: "border-2 border-primary",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

function Input({ className, size, variant, ...props }) {
  return (
    <InputPrimitive
      className={cn(inputVariants({ size, variant }), className)}
      {...props}
    />
  );
}

export { Input };