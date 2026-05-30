import Image from "next/image";
import { MdOutlineEmail } from "react-icons/md";

export default function AboutPage() {
  return (
    <main className="max-w-250 mx-auto px-8 md:px-16 py-20">
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">

        {/* Profile photo */}
        <div className="w-full md:w-1/3 shrink-0 flex justify-center md:block">
          <div className="relative w-64 md:w-full aspect-square overflow-hidden rounded-full bg-secondary/10 border-2 border-primary/50">
            <Image
              src="/me.jpg"
              alt="Jesslyn Chiunardy"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="flex flex-col gap-6 md:pt-4">
          <h1 className="text-2xl md:text-3xl text-secondary leading-tight">
            Specializing in 
            <span className="text-primary font-bold ml-2">
              Brand Experience and Environmental Graphic Design
            </span>
          </h1>

          <div className="space-y-4 text-secondary/70 text-sm leading-relaxed">
            <p>
              Jesslyn Chiunardy is a graphic designer who bridges visual storytelling and 
              physical space. She designs brand identity, signage, infographics, and motion graphics. 
              Her focus is on food & beverage, tech retail, and arts & cultural events, designing brand 
              experiences and environmental graphics to be remembered.
            </p>
          </div>

          <div className="font-bold ">
            Let's talk design.
            <a
              href="mailto:jchiu02@gmail.com" className="text-primary underline ml-1 hover:text-primary/70 transition-colors"
            >
              chiunery@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="aspect-video">
          <iframe
            src="https://player.vimeo.com/video/1182881607?autoplay=0&title=0&byline=0&portrait=0"
            style={{ width: "100%", height: "100%" }}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </main>
  );
}
