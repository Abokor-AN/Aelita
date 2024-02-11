import { cn } from "@/lib/utils";

const data = [];

const ExternalSidebar = ({ className, ...props }) => {
  return (
    <div
      className={cn("flex flex-col border bg-background p-1", className)}
      {...props}
    />
  );
};

export { ExternalSidebar };
