import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Certifications</h2>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl">
            Continuous learning and validation of my technical skills.
          </p>
        </div>

        <div className="max-w-3xl">
          <Card className="bg-zinc-900/40 border-zinc-800 flex flex-col sm:flex-row items-center sm:items-stretch overflow-hidden group hover:border-zinc-700 transition-colors">
            <div className="p-8 sm:w-1/3 flex items-center justify-center bg-zinc-900/80">
              {/* Using an SVG placeholder for the Microsoft Badge */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-24 h-24 text-blue-500 group-hover:scale-105 transition-transform duration-300"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <CardContent className="p-6 sm:p-8 flex flex-col justify-center sm:w-2/3">
              <Badge className="w-fit mb-4 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20">
                Microsoft Certified
              </Badge>
              <h3 className="text-2xl font-bold text-white mb-2">
                Azure AI Fundamentals
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Demonstrated foundational knowledge of machine learning (ML) and artificial intelligence (AI) concepts and related Microsoft Azure services.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
