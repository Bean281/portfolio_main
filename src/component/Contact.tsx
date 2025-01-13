import instaIcon from "../assets/Instagram.png";
import linkedinIcon from "../assets/LinkedIn.png";
import githubIcon from "../assets/GitHub.png";


const Contact = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="left-content">
          <div className="title-main">
            <p>Contact</p>
            <p>Me.</p>
          </div>
          <div className="desc">"Let's build something amazing together!"</div>
        </div>
        <div className="right-content">
          <div className="full-name">Full Name: Nguyen Duy Tan Hung</div>
          <div className="email">Email: ndthung281@gmail.com</div>
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
      </div>
    </div>
  );
};

export default Contact;
