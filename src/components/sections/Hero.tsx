import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background pt-24 pb-32 md:pt-32 md:pb-40">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950/50 to-background"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800/50 px-3 py-1 text-sm text-zinc-300 backdrop-blur-sm mb-8 animate-in slide-in-from-bottom-4 duration-500 fade-in">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
          Available for new opportunities
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 animate-in slide-in-from-bottom-6 duration-700 fade-in">
          Translating Business Logic into <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">
            Scalable Enterprise Features
          </span>
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed animate-in slide-in-from-bottom-8 duration-700 fade-in delay-150">
          I am a Software Engineer and Frontend Specialist with a proven track record. 
          Through my 1-year enterprise internship and subsequent projects, I have successfully 
          translated complex business requirements into 15+ scalable, high-performance features.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom-10 duration-700 fade-in delay-300">
          <Link href="#projects" className={buttonVariants({ size: "lg", className: "rounded-full bg-white text-zinc-950 hover:bg-zinc-200" })}>
            View Enterprise Systems
          </Link>
          <Link href="mailto:ltfmail.2018@gmail.com" className={buttonVariants({ size: "lg", variant: "outline", className: "rounded-full border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white" })}>
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
