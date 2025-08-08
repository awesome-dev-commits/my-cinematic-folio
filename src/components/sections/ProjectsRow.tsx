import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export type ProjectItem = {
  image: string;
  title: string;
  description: string;
  href?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
};

type ProjectsRowProps = {
  id?: string;
  title: string;
  items: ProjectItem[];
  className?: string;
};

const ProjectsRow = ({ id, title, items, className }: ProjectsRowProps) => {
  return (
    <section id={id} className={cn("container py-8 md:py-12", className)} aria-labelledby={`row-${title}`}>
      <h2 id={`row-${title}`} className="text-xl md:text-2xl font-semibold mb-4 story-link">
        {title}
      </h2>
      <div className="relative">
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent>
            {items.map((item, idx) => (
              <CarouselItem key={idx} className="basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <a href={item.href || "#"} target={item.target} rel={item.target === "_blank" ? "noopener noreferrer" : undefined} className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg overflow-hidden">
                  <figure className="relative rounded-lg overflow-hidden bg-card">
                    <img
                      src={item.image}
                      alt={`${item.title} project poster`}
                      loading="lazy"
                      className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <figcaption className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </figure>
                  <div className="mt-3">
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectsRow;
