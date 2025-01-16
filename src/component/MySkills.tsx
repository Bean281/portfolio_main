import htmlIcon from "../assets/Html 5.png";
import cssIcon from "../assets/CSS3.png";
import jsIcon from "../assets/JavaScript.png";
import tsIcon from "../assets/TypeScript.png";
import scssIcon from "../assets/Sass.png";
import tailIcon from "../assets/Tailwind CSS.png";
import reactIcon from "../assets/React Native.png";
import nextIcon from "../assets/Next.js.png";
import nodeIcon from "../assets/Nodejs.png";
import postIcon from "../assets/PostgreSQL.png";

const MySkills = () => {
  return (
    <div className="skill-content py-24">
      <div className="title text-center">
        <div className="title-info flex justify-center gap-2 text-4xl">
          <p className="text-white-text-clr">My</p>
          <p className="text-green-text-clr">Skills</p>
        </div>
        <div className="title-desc mt-3 text-gray-text-clr">
          Program Languages, Tools, Frameworks
        </div>
      </div>
      <div className="mt-16 flex justify-center">
        <div className="box-icon-container mx-10 grid grid-cols-3 gap-5 lg:gap-12 lg:grid-cols-4 ">
          <div className="box-skill-icon flex h-28 w-28 md:h-36 md:w-36 flex-col items-center justify-center gap-1 rounded-xl">
            <img className="w-2/4" src={htmlIcon} alt="" />
            <p className="text- text-center font-semibold text-white-text-clr">
              HTML
            </p>
          </div>
          <div className="box-skill-icon flex h-28 w-28 md:h-36 md:w-36 flex-col items-center justify-center gap-1 rounded-xl">
            <img className="w-1/2" src={cssIcon} alt="" />
            <p className="text-center font-semibold text-white-text-clr">CSS</p>
          </div>
          <div className="box-skill-icon flex h-28 w-28 md:h-36 md:w-36 flex-col items-center justify-center gap-1 rounded-xl">
            <img className="w-1/2" src={jsIcon} alt="" />
            <p className="text-center font-semibold text-white-text-clr">
              Javascript
            </p>
          </div>
          <div className="box-skill-icon flex h-28 w-28 md:h-36 md:w-36 flex-col items-center justify-center gap-1 rounded-xl">
            <img className="w-1/2" src={tsIcon} alt="" />
            <p className="text-center font-semibold text-white-text-clr">
              TypeScript
            </p>
          </div>
          <div className="box-skill-icon flex h-28 w-28 md:h-36 md:w-36 flex-col items-center justify-center gap-1 rounded-xl">
            <img className="w-1/2" src={reactIcon} alt="" />
            <p className="text-center font-semibold text-white-text-clr">
              ReactJS
            </p>
          </div>
          <div className="box-skill-icon flex h-28 w-28 md:h-36 md:w-36 flex-col items-center justify-center gap-1 rounded-xl">
            <img className="w-1/2" src={nextIcon} alt="" />
            <p className="text-center font-semibold text-white-text-clr">
              NextJS
            </p>
          </div>
          <div className="box-skill-icon flex h-28 w-28 md:h-36 md:w-36 flex-col items-center justify-center gap-1 rounded-xl">
            <img className="w-1/2" src={nodeIcon} alt="" />
            <p className="text-center font-semibold text-white-text-clr">
              NodeJS
            </p>
          </div>
          <div className="box-skill-icon flex h-28 w-28 md:h-36 md:w-36 flex-col items-center justify-center gap-1 rounded-xl">
            <img className="w-1/2" src={postIcon} alt="" />
            <p className="text-center font-semibold text-white-text-clr">
              PostgrestSQL
            </p>
          </div>
          <div className="box-skill-icon flex h-28 w-28 md:h-36 md:w-36 flex-col items-center justify-center gap-1 rounded-xl lg:col-start-2 lg:col-end-3">
            <img className="w-1/2" src={tailIcon} alt="" />
            <p className="text-center font-semibold text-white-text-clr">
              Tailwind
            </p>
          </div>
          <div className="box-skill-icon flex h-28 w-28 md:h-36 md:w-36 flex-col items-center justify-center gap-1 rounded-xl col-start-2 lg:col-start-3">
            <img className="w-1/2" src={scssIcon} alt="" />
            <p className="text-center font-semibold text-white-text-clr">
              SASS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
