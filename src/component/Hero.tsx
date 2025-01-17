import avatar from "../assets/avarta.png";
import instaIcon from "../assets/Instagram.png";
import linkedinIcon from "../assets/LinkedIn.png";
import githubIcon from "../assets/GitHub.png";
import downIcon from "../assets/Down.png";

const Hero = () => {
  return (
    <div className="relative h-fit lg:h-screen">
      <div className="img-box h-full lg:flex lg:items-center lg:justify-center">
        <img
          className="hidden lg:block lg:w-2/5"
          src={avatar}
          alt=""
        />
      </div>

      <div className="hero-content grid w-full grid-cols-1 lg:gap-4 py-24 lg:absolute lg:top-24 lg:grid-cols-2 lg:py-0">
        <div className="left-hero pl-10 lg:pl-36">
          <div className="logo mb-16 flex items-center justify-between leading-none">
            <div>
              <p className="m-0 p-0 text-3xl font-bold text-green-text-clr">
                BEAN
              </p>
              <p className="m-0 p-0 text-3xl font-bold text-green-text-clr">
                DEV<b className="text-white-text-clr">_28</b>
              </p>
            </div>
            <div className="mr-20 w-24 lg:hidden">
              <img className="" src={avatar} alt="" />
            </div>
          </div>

          <div className="main-name">
            <p className="text-8xl font-bold text-white-text-clr">Bean</p>
            <p className="text-8xl font-bold text-white-text-clr">Nguyen</p>
            <p className="mt-8 h-3 w-20 bg-green-text-clr underline"></p>
          </div>

          <div className="box-icon mt-20 flex gap-5">
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

        <div className="right-hero mt-24  lg:mt-0 lg:pr-36">
          <div className="lg:flex lg:justify-end">
            <div>
              <div className="navbar mb-20 flex gap-10 lg:gap-20">
                <div className="flex gap-1 text-lg lg:text-xl font-semibold">
                  <p className="text-white-text-clr">Stories</p>
                  <p className="text-green-text-clr">.</p>
                </div>
                <div className="flex gap-1 text-lg lg:text-xl font-semibold text-gray-text-clr">
                  <p>Projects</p>
                  <p>.</p>
                </div>
                <div className="flex gap-1 text-lg lg:text-xl font-semibold text-gray-text-clr">
                  <p>Contacts</p>
                  <p>.</p>
                </div>
              </div>

              <div className="description-container">
                <div className="intro mb-10 text-gray-text-clr">
                  <p>/ THIS IS ME</p>
                </div>

                <div className="main">
                  <p className="mb-8 text-4xl text-white-text-clr">
                    Front-end Developer
                  </p>
                </div>

                <div className="desc-info block text-gray-text-clr lg:w-96">
                  A passionate front-end developer. Love to learn new things and
                  teamwork effectively.
                </div>

                <div className="mini-tag mt-24 flex w-full justify-end lg:mt-44">
                  <p className="down flex items-center gap-2 text-lg font-bold text-gray2-text-clr">
                    scroll for more
                    <img className="h-5 w-5" src={downIcon} alt="" />
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
