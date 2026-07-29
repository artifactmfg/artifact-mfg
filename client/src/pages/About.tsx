import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About | Artifact Mfg.";
  }, []);

  return (
    <main className="bg-neutral-950 text-stone-100 min-h-screen font-sans">

      {/* Hero Photo */}
      <div className="w-full h-[85vh] overflow-hidden">
        <img
          src="/images/about-jason-jenelle.jpg"
          alt="Jason and Jenelle Robertson, founders of Artifact Mfg."
          className="w-full h-full object-cover object-[center_60%]"
        />
      </div>

      {/* Text Content */}
      <div className="max-w-2xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-light tracking-widest uppercase text-stone-100 mb-12">About</h1>

        <div className="space-y-6 text-stone-300 text-lg leading-relaxed font-light">
          <p>People occasionally ask how a philosophy professor ends up making concrete for a living.</p>
          <p>It's a fair question.</p>
          <p>A few years ago, I left academia to start Artifact. Looking back, it probably wasn't the obvious career move, but it was the right one.</p>
          <p>I wanted to build something.</p>
          <p>Not just a business, but a body of work that would stand on its own. One project at a time. One client at a time. One mistake, one lesson, and one improvement at a time.</p>
          <p>Today, Artifact designs and fabricates custom concrete fireplaces, countertops, sinks, furniture, and architectural concrete elements from our shop in southwest Ohio. We work with homeowners, architects, builders, designers, and commercial developers on projects ranging from a single custom piece to large-scale production runs.</p>
          <p>If there's one thing my years teaching philosophy gave me, it wasn't answers. It was an appreciation for asking better questions.</p>
          <p className="pl-6 border-l border-stone-600">How should this piece be built?<br />Will this detail still make sense ten years from now?<br />Is concrete actually the right material for this project?</p>
          <p>Sometimes the answer to that last question is no.</p>
          <p>We're perfectly comfortable saying that.</p>
          <p>Other materials do some things better than concrete, and we'd rather lose a project than convince someone to choose the wrong material. But when concrete is the right choice, we think it offers something that's difficult to find anywhere else.</p>
          <p>People also ask why we don't have a showroom.</p>
          <p>The honest answer is that, when we started, we couldn't afford one.</p>
          <p>The unexpected answer is that we've never really missed it.</p>
        </div>

        {/* Shop Photo */}
        <div className="w-full my-16 overflow-hidden">
          <img
            src="/images/about-jason-shop.jpg"
            alt="Jason Robertson fabricating concrete in the Artifact Mfg. shop"
            className="w-full object-cover"
          />
        </div>

        <div className="space-y-6 text-stone-300 text-lg leading-relaxed font-light">
          <p>Instead, we invite people into our home. They see countertops we've lived with for years, not displays designed to sell them. They get a better sense of what concrete actually looks like, how it ages, and whether it's a material they want to live with.</p>
          <p>Artifact has grown far beyond what my wife, Jenelle, and I imagined when we started. While her career as a physical therapist keeps her busy, her encouragement, perspective, and willingness to believe this crazy idea might actually work have shaped the business from the beginning.</p>
          <p>At the end of the day, this isn't really a story about concrete.</p>
          <p>It's about trying to do honest work, continuing to learn, and making things that deserve to outlast us.</p>
          <p>If that sounds like the kind of company you're looking for, we'd be glad to start a conversation.</p>
        </div>
      </div>
    </main>
  );
}
