import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function BentoGrid({ children, className }) {
  return (
    <div className={cn("grid w-full auto-rows-[22rem] grid-cols-3 gap-4", className)}>
      {children}
    </div>
  )
}

export function BentoCard({ name, className, background, Icon, description, href, cta, children }) {
  return (
    <div className={cn(
      "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl",
      "bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm",
      "transform-gpu transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.4)]",
      className
    )}>
      {background && <div>{background}</div>}
      {children ? (
        <div className="z-10 flex flex-col gap-1 p-6">{children}</div>
      ) : (
        <>
          <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
            {Icon && <Icon className="h-12 w-12 origin-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75" />}
            <h3 className="text-xl font-semibold text-white">{name}</h3>
            <p className="max-w-lg text-muted-foreground">{description}</p>
          </div>
          {cta && (
            <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {href ? (
                <a href={href} className="pointer-events-auto">
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                    {cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              ) : (
                <Button variant="ghost" size="sm" className="pointer-events-auto text-white hover:bg-white/10">
                  {cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          )}
        </>
      )}
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-white/[0.03]" />
    </div>
  )
}
