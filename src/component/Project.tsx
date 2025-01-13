import todoImg from "../assets/todolist.png";
import githubIcon from "../assets/GitHub.png";
import networkIcon from "../assets/Personal Hotspot.png";

const Project = () => {
  return (
    <div className="project-content py-24">
      <div className="title text-center text-white-text-clr text-4xl">
        <p>
          All <span className="text-green-text-clr">Creative</span> Works
        </p>
        <p>
          Selected <span className="text-green-text-clr">Projects</span>
        </p>
      </div>

      <div className="flex justify-center mt-16">
        <div className="grid grid-cols-3 gap-5">
          <div className="relative w-80 h-80 bg-slate-950 rounded-xl group">
            <img
              className="h-full w-full object-cover rounded-xl"
              src={todoImg}
              alt=""
            />
            <div className="hover-item absolute bottom-0 w-80 h-16 bg- rounded-b-xl flex items-center justify-between px-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="font-normal text-white-text-clr">To Do List App</p>
              <div className="project-icon flex items-center gap-3">
                <div className="w-8">
                  <img src={githubIcon} alt="" />
                </div>
                <div className="w-7">
                  <img src={networkIcon} alt="" />
                </div>
              </div>
            </div>
          </div>

          
          <div className="relative w-80 h-80 bg-slate-950 rounded-xl group">
            <img
              className="h-full w-full object-cover rounded-xl"
              src={todoImg}
              alt=""
            />
            <div className="hover-item absolute bottom-0 w-80 h-16 bg- rounded-b-xl flex items-center justify-between px-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="font-normal text-white-text-clr">To Do List App</p>
              <div className="project-icon flex items-center gap-3">
                <div className="w-8">
                  <img src={githubIcon} alt="" />
                </div>
                <div className="w-7">
                  <img src={networkIcon} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-80 h-80 bg-slate-950 rounded-xl group">
            <img
              className="h-full w-full object-cover rounded-xl"
              src={todoImg}
              alt=""
            />
            <div className="hover-item absolute bottom-0 w-80 h-16 bg- rounded-b-xl flex items-center justify-between px-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="font-normal text-white-text-clr">To Do List App</p>
              <div className="project-icon flex items-center gap-3">
                <div className="w-8">
                  <img src={githubIcon} alt="" />
                </div>
                <div className="w-7">
                  <img src={networkIcon} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-80 h-80 bg-slate-950 rounded-xl group">
            <img
              className="h-full w-full object-cover rounded-xl"
              src={todoImg}
              alt=""
            />
            <div className="hover-item absolute bottom-0 w-80 h-16 bg- rounded-b-xl flex items-center justify-between px-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="font-normal text-white-text-clr">To Do List App</p>
              <div className="project-icon flex items-center gap-3">
                <div className="w-8">
                  <img src={githubIcon} alt="" />
                </div>
                <div className="w-7">
                  <img src={networkIcon} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-80 h-80 bg-slate-950 rounded-xl group">
            <img
              className="h-full w-full object-cover rounded-xl"
              src={todoImg}
              alt=""
            />
            <div className="hover-item absolute bottom-0 w-80 h-16 bg- rounded-b-xl flex items-center justify-between px-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="font-normal text-white-text-clr">To Do List App</p>
              <div className="project-icon flex items-center gap-3">
                <div className="w-8">
                  <img src={githubIcon} alt="" />
                </div>
                <div className="w-7">
                  <img src={networkIcon} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-80 h-80 bg-slate-950 rounded-xl group">
            <img
              className="h-full w-full object-cover rounded-xl"
              src={todoImg}
              alt=""
            />
            <div className="hover-item absolute bottom-0 w-80 h-16 bg- rounded-b-xl flex items-center justify-between px-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="font-normal text-white-text-clr">To Do List App</p>
              <div className="project-icon flex items-center gap-3">
                <div className="w-8">
                  <img src={githubIcon} alt="" />
                </div>
                <div className="w-7">
                  <img src={networkIcon} alt="" />
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Project;
