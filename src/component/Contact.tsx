import instaIcon from "../assets/Instagram.png";
import linkedinIcon from "../assets/LinkedIn.png";
import githubIcon from "../assets/GitHub.png";


const Contact = () => {
  return (
    <div className="">
      <div className="contact-content flex justify-between px-64 items-center gap-72 pt-24">
        <div className="left-content">
          <div className="title-main text-9xl font-semibold">
            <p className="text-green-text-clr">Contact</p>
            <p className="text-white-text-clr">Me.</p>
          </div>
          <div className="desc text-gray-text-clr mt-5">"Let's build something amazing together!"</div>
        </div>
        <div className="right-content text-white-text-clr">
          <div className="full-name mb-8">Full Name: Nguyen Duy Tan Hung</div>
          <div className="email">Email: ndthung281@gmail.com</div>
          <div className="box-icon flex gap-5 mt-8">
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

      <div className="copy-right text-gray2-text-clr text-center pb-24 mt-9">© BeanDev_28, 2025</div>
    </div>
  );
};

export default Contact;
