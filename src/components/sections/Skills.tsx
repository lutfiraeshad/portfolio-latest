import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Frontend",
    description: "Building responsive and scalable user interfaces.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
  },
  {
    title: "Backend & Database",
    description: "Architecting robust APIs and data schemas.",
    skills: ["Node.js", "Express.js", "Laravel", "MySQL", "PostgreSQL"],
  },
  {
    title: "Tools & Workflow",
    description: "Streamlining development and collaboration.",
    skills: ["Git", "Postman", "Figma"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-zinc-950/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Technical Expertise</h2>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl">
            A comprehensive overview of my technical stack, specializing in modern web technologies and scalable architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:border-zinc-700 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl text-zinc-100">{category.title}</CardTitle>
                <CardDescription className="text-zinc-400">{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-zinc-800 text-zinc-200 hover:bg-zinc-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
