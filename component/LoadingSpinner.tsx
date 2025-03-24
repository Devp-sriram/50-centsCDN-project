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
      <div className="w-full h-screen flex flex-col justify-center items-center ">
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
