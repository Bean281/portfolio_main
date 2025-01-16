const AboutMe = () => {
  return (
    <div className="about-me-content grid grid-cols-1 py-24 lg:grid-cols-2">
      <div className="info-number mb-24 flex items-center justify-center gap-24 px-24 lg:mb-0">
        <div className="experiences">
          <p className="number text-6xl lg:text-8xl font-semibold text-green-text-clr">
            2+
          </p>
          <div className="number-desc mt-2 text-xl leading-tight text-gray-text-clr">
            <p>Years of</p>
            <p>experiences.</p>
          </div>
        </div>
        <div className="experiences">
          <p className="number text-6xl lg:text-8xl font-semibold text-green-text-clr">
            28+
          </p>
          <div className="number-desc mt-2 text-xl leading-tight text-gray-text-clr">
            <p>Participated</p>
            <p>project.</p>
          </div>
        </div>
      </div>

      <div className="info-desc px-20 lg:pr-32">
        <div className="intro mb-10 text-gray-text-clr">
          <p>/ PROBLEM SOLVER</p>
        </div>
        <div className="info-main">
          <p className="mb-8 text-4xl leading-snug text-white-text-clr">
            I’m motivated by the challenge of creating seamless user interfaces
            that leave a lasting impression.
          </p>
        </div>
        <div className="desc-info mb-8 text-gray-text-clr">
          My goal is to contribute to impactful projects and continue growing as
          a developer by learning new tools and technologies.
        </div>
        <div className="desc-info text-gray-text-clr">
          Actively improving my skills by contributing to real-world projects on
          platforms like Frontend Mentor.
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
