import * as React from "react"
import { cn } from "@/lib/utils"
import { LoaderIcon } from "lucide-react"

interface LoadingSpinnerProps extends React.HTMLAttributes<SVGSVGElement> {
  message?:string,
  className?: string
}

export const LoadingSpinner = React.forwardRef<SVGSVGElement, LoadingSpinnerProps>(
  ({ className, message, ...props }, ref) => {
    return (
      <div className="flex flex-col items-center gap-2">
        <LoaderIcon
          ref={ref}
          className={cn("h-8 w-8 animate-spin", className)}
          {...props}
        />
        {message && <span className="text-sm">{message}</span>}
      </div>
    );
  }
);
