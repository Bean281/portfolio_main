


const AboutMe = () => {
    return (
<div className="grid grid-cols-2 py-24">
          <div className="info-number  flex gap-24 justify-center items-center">
            <div className="experiences">
              <p className="number text-green-text-clr text-8xl font-semibold ">
                2+
              </p>
              <div className="number-desc text-xl mt-2 text-gray-text-clr leading-tight">
                <p>Years of</p>
                <p>experiences.</p>
              </div>
            </div>
            <div className="experiences">
              <p className="number text-green-text-clr text-8xl font-semibold">
                28+
              </p>
              <div className="number-desc text-xl mt-2 text-gray-text-clr leading-tight">
                <p>Participated</p>
                <p>project.</p>
              </div>
            </div>
          </div>

          <div className="info-desc  pr-32">
            <div className="intro text-gray-text-clr mb-10">
              <p>/ PROBLEM SOLVER</p>
            </div>
            <div className="info-main">
              <p className="text-white-text-clr text-4xl mb-8 leading-snug">
                I’m motivated by the challenge of creating seamless user
                interfaces that leave a lasting impression.
              </p>
            </div>
            <div className="desc-info text-gray-text-clr mb-8">
              My goal is to contribute to impactful projects and continue
              growing as a developer by learning new tools and technologies.
            </div>
            <div className="desc-info text-gray-text-clr">
              Actively improving my skills by contributing to real-world
              projects on platforms like Frontend Mentor.
            </div>
          </div>
        </div>
    )
}

export default AboutMe;