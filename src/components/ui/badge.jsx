import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'group/badge inline-flex h-7 w-fit shrink-0 items-center justify-center gap-1 rounded-full border border-transparent px-3 py-1 text-sm font-semibold whitespace-nowrap transition-colors focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 aria-invalid:border-destructive dark:aria-invalid:border-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-4',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground',

        secondary:
          'bg-secondary text-secondary-foreground',

        secondarySoft:
          'bg-secondary/15 text-secondary',

        books:
          'h-5 min-w-5 rounded-full border-0 bg-[#294A35] px-1 text-[10px] font-bold text-[#E6B94D]',

        destructive:
          'bg-destructive/10 text-destructive',

        outline:
          'border-border text-foreground',

        ghost:
          'hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50',

        link:
          'text-primary underline-offset-4 hover:underline',
      },
    },

    defaultVariants: {
      variant: 'default',
    },
  }
);

function Badge({ className, variant = 'default', render, ...props }) {
  return useRender({
    defaultTagName: 'span',
    props: mergeProps(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: 'badge',
      variant,
    },
  });
}

export { Badge, badgeVariants };