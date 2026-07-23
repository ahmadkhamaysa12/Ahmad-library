import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

export default function QuantitySelector({
  value,
  onIncrease,
  onDecrease,
  disabled = false,
}) {
  return (
    <div className="flex h-10 w-fit items-center rounded-md border border-border bg-background">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="h-full w-10 rounded-r-none"
        onClick={onDecrease}
        disabled={disabled}
      >
        <Minus className="size-4" />
      </Button>

      <span className="flex min-w-12 items-center justify-center text-sm font-medium">
        {value}
      </span>

      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="h-full w-10 rounded-l-none"
        onClick={onIncrease}
        disabled={disabled}
      >
        <Plus className="size-4" />
      </Button>
    </div>
  );
}