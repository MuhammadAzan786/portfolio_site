import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// ===== Heading Component =====

const headingVariants = cva("font-heading font-bold tracking-tight", {
  variants: {
    variant: {
      h1: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
      h2: "text-3xl sm:text-4xl md:text-5xl",
      h3: "text-2xl sm:text-3xl md:text-4xl",
      h4: "text-xl sm:text-2xl md:text-3xl",
      h5: "text-lg sm:text-xl md:text-2xl",
      h6: "text-base sm:text-lg md:text-xl",
    },
    gradient: {
      true: "gradient-text",
      false: "",
    },
  },
  defaultVariants: {
    variant: "h1",
    gradient: false,
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant, gradient, as, ...props }, ref) => {
    const Comp = as || (variant as "h1" | "h2" | "h3" | "h4" | "h5" | "h6");
    return (
      <Comp
        ref={ref}
        className={cn(headingVariants({ variant, gradient, className }))}
        {...props}
      />
    );
  }
);
Heading.displayName = "Heading";

// ===== Text Component =====

const textVariants = cva("font-body", {
  variants: {
    variant: {
      body: "text-base leading-relaxed",
      lead: "text-lg sm:text-xl leading-relaxed text-muted-foreground",
      large: "text-lg font-medium",
      small: "text-sm",
      tiny: "text-xs",
      muted: "text-sm text-muted-foreground",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    variant: "body",
    weight: "normal",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div";
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant, weight, as: Comp = "p", ...props }, ref) => {
    return (
      <Comp
        ref={ref}
        className={cn(textVariants({ variant, weight, className }))}
        {...props}
      />
    );
  }
);
Text.displayName = "Text";

// ===== Blockquote Component =====

const Blockquote = React.forwardRef<
  HTMLQuoteElement,
  React.HTMLAttributes<HTMLQuoteElement>
>(({ className, ...props }, ref) => (
  <blockquote
    ref={ref}
    className={cn(
      "border-l-4 border-primary pl-4 italic text-muted-foreground",
      className
    )}
    {...props}
  />
));
Blockquote.displayName = "Blockquote";

// ===== Code Component =====

const Code = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <code
      ref={ref}
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
      {...props}
    />
  )
);
Code.displayName = "Code";

// ===== Pre Component =====

const Pre = React.forwardRef<
  HTMLPreElement,
  React.HTMLAttributes<HTMLPreElement>
>(({ className, ...props }, ref) => (
  <pre
    ref={ref}
    className={cn(
      "overflow-x-auto rounded-lg bg-muted p-4 font-mono text-sm",
      className
    )}
    {...props}
  />
));
Pre.displayName = "Pre";

// ===== List Components =====

const List = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("list-disc space-y-2 pl-6 text-base", className)}
    {...props}
  />
));
List.displayName = "List";

const OrderedList = React.forwardRef<
  HTMLOListElement,
  React.HTMLAttributes<HTMLOListElement>
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn("list-decimal space-y-2 pl-6 text-base", className)}
    {...props}
  />
));
OrderedList.displayName = "OrderedList";

const ListItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("leading-relaxed", className)} {...props} />
));
ListItem.displayName = "ListItem";

// ===== Link Component =====

const linkVariants = cva(
  "font-medium underline underline-offset-4 transition-colors",
  {
    variants: {
      variant: {
        default: "text-primary hover:text-primary/80",
        muted: "text-muted-foreground hover:text-foreground",
        destructive: "text-destructive hover:text-destructive/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(linkVariants({ variant, className }))}
        {...props}
      />
    );
  }
);
Link.displayName = "Link";

// ===== Gradient Text Component =====

const GradientText = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span ref={ref} className={cn("gradient-text", className)} {...props} />
));
GradientText.displayName = "GradientText";

export {
  Heading,
  Text,
  Blockquote,
  Code,
  Pre,
  List,
  OrderedList,
  ListItem,
  Link,
  GradientText,
  headingVariants,
  textVariants,
  linkVariants,
};
