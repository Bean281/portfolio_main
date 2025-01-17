import instaIcon from "../assets/Instagram.png";
import linkedinIcon from "../assets/LinkedIn.png";
import githubIcon from "../assets/GitHub.png";

const Contact = () => {
  return (
    <div className=" ">
      <div className="flex items-center justify-center">
        <div className="contact-content lg:px-50 grid grid-cols-1 gap-16 px-10 pt-24 md:grid-cols-2 md:px-20 lg:gap-72">
          <div className="left-content">
            <div className="title-main text-8xl font-semibold md:text-8xl lg:text-8xl">
              <p className="text-green-text-clr">Contact</p>
              <p className="text-white-text-clr">Me.</p>
            </div>
            <div className="desc mt-5 text-gray-text-clr">
              "Let's build something amazing together!"
            </div>
          </div>

          <div className="flex items-center">
            <div className="right-content text-white-text-clr">
              <div className="full-name mb-8">
                Full Name: Nguyen Duy Tan Hung
              </div>
              <div className="email">Email: ndthung281@gmail.com</div>
              <div className="box-icon mt-8 flex gap-5">
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
          </div>
        </div>
      </div>

      <div className="copy-right mt-9 pb-24 text-center text-gray2-text-clr">
        © BeanDev_28, 2025
      </div>
    </div>
  );
};

export default Contact;
