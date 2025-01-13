import avatar from "../assets/avarta.png";
import instaIcon from "../assets/Instagram.png";
import linkedinIcon from "../assets/LinkedIn.png";
import githubIcon from "../assets/GitHub.png";
import downIcon from "../assets/Down.png";

const Hero = () => {
  return (
    <div className="relative ">
      <div className="  img-box flex justify-center items-center">
        <img
          className="flex w-2/5 items-center  justify-center"
          src={avatar}
          alt=""
        />
      </div>

      <div className="hero-content absolute w-full top-24 grid grid-cols-2  ">
        <div className="left-hero pl-36">
          <div className="logo mb-16 leading-none">
            <p className="p-0 m-0 text-green-text-clr text-3xl font-bold ">
              BEAN
            </p>
            <p className="p-0 m-0 text-green-text-clr text-3xl font-bold">
              DEV<b className="text-white-text-clr">_28</b>
            </p>
          </div>

          <div className="main-name">
            <p className="text-8xl text-white-text-clr font-bold">Bean</p>
            <p className="text-8xl text-white-text-clr font-bold">Nguyen</p>
            <p className="underline bg-green-text-clr h-3 w-20 mt-8"></p>
          </div>

          <div className="box-icon flex gap-5 mt-20">
            <div className="w-8">
              <img src={instaIcon} alt="" />
            </div>
            <div className="w-8">
              <img src={linkedinIcon} alt="" />
            </div>
            <div className="w-8">
              <img src={githubIcon} alt="" />
            </div>
          </div>
        </div>

        <div className="right-hero pr-36">
          <div className="flex justify-end">
            <div>
              <div className="navbar flex gap-20 mb-20  ">
                <div className="flex gap-1 text-xl font-semibold">
                  <p className="text-white-text-clr ">Stories</p>
                  <p className="text-green-text-clr ">.</p>
                </div>
                <div className="flex gap-1 text-xl font-semibold text-gray-text-clr">
                  <p>Projects</p>
                  <p>.</p>
                </div>
                <div className="flex gap-1 text-xl font-semibold text-gray-text-clr">
                  <p>Contacts</p>
                  <p>.</p>
                </div>
              </div>

              <div className="description-container">
                <div className="intro text-gray-text-clr mb-10">
                  <p>/ THIS IS ME</p>
                </div>

                <div className="main">
                  <p className="text-white-text-clr text-4xl mb-8">
                    Front-end Developer
                  </p>
                </div>

                <div className="w-96 desc-info text-gray-text-clr">
                  A passionate front-end developer. Love to learn new things and
                  teamwork effectively.
                </div>

                <div className="mini-tag mt-44 w-full flex justify-end">
                  <p className="down text-gray2-text-clr font-bold text-lg flex items-center gap-2">
                    scroll for more
                    <img className="w-5 h-5" src={downIcon} alt="" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
