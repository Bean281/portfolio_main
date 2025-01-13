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
        <div className="title-info text-4xl flex justify-center gap-2">
          <p className="text-white-text-clr">My</p>
          <p className="text-green-text-clr">Skills</p>
        </div>
        <div className="title-desc text-gray-text-clr mt-3">
          Program Languages, Tools, Frameworks
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <div className="box-icon-container mx-10 grid grid-cols-4 gap-12   ">
            <div className="box-skill-icon w-36 h-36 rounded-xl flex justify-center flex-col items-center gap-1">
              <img className="w-2/4" src={htmlIcon} alt="" />
              <p className="text-center text-white-text-clr font-semibold text-">HTML</p>
            </div>
            <div className="box-skill-icon w-36 h-36 rounded-xl flex justify-center flex-col items-center gap-1">
              <img className="w-1/2"  src={cssIcon} alt="" />
              <p className="text-center text-white-text-clr font-semibold">CSS</p>
            </div>
            <div className="box-skill-icon w-36 h-36 rounded-xl flex justify-center flex-col items-center gap-1">
              <img className="w-1/2" src={jsIcon} alt="" />
              <p className="text-center text-white-text-clr font-semibold">Javascript</p>
            </div>
            <div className="box-skill-icon w-36 h-36 rounded-xl flex justify-center flex-col items-center gap-1">
              <img className="w-1/2" src={tsIcon} alt="" />
              <p className="text-center text-white-text-clr font-semibold">TypeScript</p>
            </div>
            <div className="box-skill-icon w-36 h-36 rounded-xl flex justify-center flex-col items-center gap-1">
              <img className="w-1/2" src={reactIcon} alt="" />
              <p className="text-center text-white-text-clr font-semibold">ReactJS</p>
            </div>
            <div className="box-skill-icon w-36 h-36 rounded-xl flex justify-center flex-col items-center gap-1">
              <img className="w-1/2" src={nextIcon} alt="" />
              <p className="text-center text-white-text-clr font-semibold">NextJS</p>
            </div>
            <div className="box-skill-icon w-36 h-36 rounded-xl flex justify-center flex-col items-center gap-1">
              <img className="w-1/2" src={nodeIcon} alt="" />
              <p className="text-center text-white-text-clr font-semibold">NodeJS</p>
            </div>
            <div className="box-skill-icon w-36 h-36 rounded-xl flex justify-center flex-col items-center gap-1">
              <img className="w-1/2" src={postIcon} alt="" />
              <p className="text-center text-white-text-clr font-semibold">PostgrestSQL</p>
            </div>
            <div className="box-skill-icon w-36 h-36 rounded-xl col-start-2 col-end-3 flex justify-center flex-col items-center gap-1">
              <img className="w-1/2" src={tailIcon} alt="" />
              <p className="text-center text-white-text-clr font-semibold">Tailwind</p>
            </div>
            <div className="box-skill-icon w-36 h-36 rounded-xl col-span-2 flex justify-center flex-col items-center gap-1">
              <img className="w-1/2" src={scssIcon} alt="" />
              <p className="text-center text-white-text-clr font-semibold">SASS</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
