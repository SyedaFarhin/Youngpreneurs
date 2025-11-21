import React from "react";
import voicesBanner from "../assets/voicesBanner.png"

const ambassadors = [
  {
    name: "Naisha",
    quote: "Innovation begins the moment you decide to look deeper.",
    description:
      "Naisha shares how observing the world around her led her to identify meaningful problems and channel her curiosity into building something of value.",
  },
  {
    name: "Krishika",
    quote: "You find clarity when you start creating, not when you wait.",
    description:
      "Krishika talks about how taking her first step brought focus, structure, and direction — helping her understand her own potential as a builder.",
  },
  {
    name: "Shivay",
    quote: "Once you start building, the world starts opening up.",
    description:
      "Shivay reflects on how experimenting with ideas broadened his perspective, helping him recognise opportunities hidden in everyday challenges.",
  },
  {
    name: "Kshitij",
    quote: "Every big journey starts with one small spark.",
    description:
      "Kshitij describes the moment that ignited his passion to create — and how that first spark transformed into a journey of curiosity and continuous growth.",
  },
];

const YoungPreneursVoices = () => {
  return (
    <>
     <style>{`




.hero-section {
  background-image: url(${voicesBanner});
  background-size: cover;            /* ensures full coverage without stretching */
  background-position: center top;   /* better positioning for tall mobile screens */
  background-repeat: no-repeat;
  width: 100%;
  min-height: 60vh;                  /* gives a tall hero on desktop */
    max-height: 100vh;                  /* gives a tall hero on desktop */

  position: relative;
}

/* Tablet */
@media (max-width: 768px) {
  .hero-section {
    min-height: 50vh;                /* slightly smaller */
    background-position: top center; /* focus top part of image */
  }
}

/* Mobile */
@media (max-width: 480px) {
  .hero-section {
    min-height: 40vh;                /* prevent extreme zoom-in */
    background-size: contain;        /* show full image */
    background-position: center;     /* center align */
    background-repeat: no-repeat;
    background-color: #000;          /* optional fallback behind image */
  }
}


`}
      
      
</style>
    <div className="hero-section">
      
      </div>
    
    <div className="min-h-screen bg-[#f8f9fb] text-[#1c2a2f]">
      <section className="w-full px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <p className="text-xl uppercase font-semibold tracking-[0.4em] text-[#dcae1a]">
            YoungPreneurs Voices
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-[#2c4a3f]">
            Young founders proving that age is no barrier to vision.
          </h1>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 pb-16">
        <div className="mx-auto max-w-4xl bg-[#dcae1a] rounded-3xl shadow-sm border border-[#e6eaef] p-8 md:p-12 space-y-6 leading-relaxed text-lg text-white">
        <p className="text-3xl font-semibold text-white text-center">
  The Power of Starting Early
</p>

          <p>
            YoungPreneurs™ is built on a simple belief: Innovation has no age —
            and vision grows when young minds are given the space to explore,
            question, and build.
          </p>
          <p>
            Meet the young founders who embody this belief. Our Brand Ambassadors
            represent the clarity, courage, and structured thinking that define
            the YoungPreneurs™ journey. Through their experiences, they
            demonstrate what becomes possible when students begin shaping ideas
            with intention.
          </p>
          <p>
            Their stories reflect the mindset we champion — the early spark of
            problem-solving, the discipline to build, and the confidence to
            lead. Watch their interviews, see their journeys unfold, and witness
            what starting early makes possible.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 pb-20">
        <div className="mx-auto max-w-4xl text-center space-y-3 mb-12">
          <p className="text-xl font-semibold uppercase tracking-[0.3em] text-[#dcae1a]">
            Meet Our YoungPreneurs Brand Ambassadors
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0d1e1f]">
            Voices of clarity, courage, and momentum.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {ambassadors.map((ambassador) => (
            <article
              key={ambassador.name}
              className="flex flex-col bg-white rounded-3xl border border-[#e4e9ee] p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col gap-3">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#9aa6ac]">
                  {ambassador.name}
                </p>
                <p className="text-lg italic text-[#0f272c]">
                  “{ambassador.quote}”
                </p>
              </div>

              <div className="mt-6 mb-5 w-full aspect-video bg-[#f1f4f7] rounded-2xl border border-dashed border-[#c8d3dd] flex items-center justify-center text-sm uppercase tracking-[0.4em] text-[#95a2ac]">
                Video Placeholder
              </div>

              <p className="text-sm text-[#4a5a61] leading-relaxed">
                {ambassador.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 pb-20">
        <div className="mx-auto max-w-4xl bg-[#0f272c] text-white rounded-3xl p-8 md:p-12 space-y-5">
          <p className="text-sm uppercase tracking-[0.4em] text-[#7fb7b0]">
            A Movement Led by Young Builders
          </p>
          <p className="text-xl leading-relaxed text-[#eef6f4]">
            These young founders represent the mindset India needs — curious,
            driven, structured, and courageous. Their journeys show the power of
            starting early, the impact of disciplined thinking, and the strength
            of the solution-seeking mindset. This is the future YoungPreneurs™
            stands for — and these voices are leading the way.
          </p>
        </div>
      </section>
    </div>
    </>
  );
};

export default YoungPreneursVoices;