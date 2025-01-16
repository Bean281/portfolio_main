


import "./App.css";
import AboutMe from "./component/AboutMe";
import Contact from "./component/Contact";
import Hero from "./component/Hero";
import MySkills from "./component/MySkills";
import Project from "./component/Project";

function App() {
  return (
    <div className="">
      <div className="scroll-watcher">
        
      </div>

      <section className="relative hero-section">
        <Hero/>
      </section>

      <section className="about-me bg-second-bg-clr ">
        <AboutMe/>
      </section>

      <section className="my-skill">
        <MySkills/>
      </section>

      <section className="project bg-second-bg-clr">
        <Project/>
      </section>

      <section className="contact bg-main-bg-clr">
        <Contact/>
      </section>
    </div>
  );
}

export default App;
