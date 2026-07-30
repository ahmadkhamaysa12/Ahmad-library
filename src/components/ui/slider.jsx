import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef(
  (
    {
      className,  
      defaultValue,
      value,
      min = 0,
      max = 100,
      ...props
    },
    ref
  ) => {
    const { i18n } = useTranslation();

    return (
      <SliderPrimitive.Root
        ref={ref}
        dir={i18n.dir()}
        defaultValue={defaultValue}
        value={value}
        min={min}
        max={max}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          className
        )}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-muted">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>

        {(value ?? defaultValue ?? [min]).map((_, index) => (
          <SliderPrimitive.Thumb
            key={index}
            className="block h-5 w-5 rounded-full border-2 border-background bg-primary shadow transition hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50"
          />
        ))}
      </SliderPrimitive.Root>
    );
  }
);

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };