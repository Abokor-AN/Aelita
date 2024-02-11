import { cn } from "@/lib/utils";

const ResponsiveDivLayout = ({ className, children, ...props }) => {
  return (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  );
};

export { ResponsiveDivLayout };
