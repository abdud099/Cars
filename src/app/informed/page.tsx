import React from "react";

const ExploreSection = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">
            Explore Lucid Gravity
          </h2>
          <p className="mt-4 text-lg md:text-xl">
            Discover the future of sustainable mobility with extraordinary
            design, performance, range, and utility.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <video
              className="rounded-lg w-full max-w-md"
              autoPlay
              muted
              loop
              preload="auto"
              controlsList="nodownload"
              aria-label="Lucid Gravity Exceptional Range"
            >
              <source src="/videos/gravity-range.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3 className="text-2xl font-semibold mt-6">Exceptional Range</h3>
            <p className="mt-4">
              With an EPA estimated range of up to 450 miles, you&rsquo;re free
              to take the scenic route without worrying about where to charge.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <video
              className="rounded-lg w-full max-w-md"
              autoPlay
              muted
              loop
              preload="auto"
              controlsList="nodownload"
              aria-label="Lucid Gravity Performance"
            >
              <source src="/videos/gravity-performance.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3 className="text-2xl font-semibold mt-6">
              Unmatched Performance
            </h3>
            <p className="mt-4">
              An SUV with the soul of a sports car, boasting up to 828 hp to
              outpace and outmaneuver the competition.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <video
              className="rounded-lg w-full max-w-md"
              autoPlay
              muted
              loop
              preload="auto"
              controlsList="nodownload"
              aria-label="Lucid Gravity Spacious Interior"
            >
              <source src="/videos/gravity-interior.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3 className="text-2xl font-semibold mt-6">Spacious Interior</h3>
            <p className="mt-4">
              With seating for up to 7 adults and versatile configurations,
              Lucid Gravity offers unparalleled space and comfort.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center">
            <video
              className="rounded-lg w-full max-w-md"
              autoPlay
              muted
              loop
              preload="auto"
              controlsList="nodownload"
              aria-label="Lucid Gravity Advanced Technology"
            >
              <source src="/videos/gravity-technology.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3 className="text-2xl font-semibold mt-6">Advanced Technology</h3>
            <p className="mt-4">
              Experience cutting-edge features like Dynamic Ambient Lights,
              Surreal Sound™ Pro, and customizable climate zones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
