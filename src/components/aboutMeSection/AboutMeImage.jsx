

const AboutMeImage = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Glow Background */}
      <div className="absolute w-[320px] h-[320px] rounded-full bg-gradient-to-r from-cyan-500 to-orange-500 blur-3xl z-0" />

      {/* Hexagon Image Container */}
      <div className="relative w-[250px] h-[250px] z-10 hexagon-frame overflow-hidden">
        <img
          src="/images/about-me.jpg" // Make sure image is in public/images
          alt="About Me"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default AboutMeImage;
