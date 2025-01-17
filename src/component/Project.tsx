import todoImg from "../assets/todolist.png";
import githubIcon from "../assets/GitHub.png";
import networkIcon from "../assets/Personal Hotspot.png";

const Project = () => {
  return (
    <div className="project-content py-24">
      <div className="title text-center text-4xl text-white-text-clr">
        <p>
          All <span className="text-green-text-clr">Creative</span> Works
        </p>
        <p>
          Selected <span className="text-green-text-clr">Projects</span>
        </p>
      </div>

      <div className="mt-16 flex justify-center">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          <div className="group relative h-80 w-80 rounded-xl bg-slate-950">
            <img
              className="h-full w-full rounded-xl object-cover"
              src={todoImg}
              alt=""
            />
            <div className="hover-item bg- absolute bottom-0 flex h-16 w-80 items-center justify-between rounded-b-xl px-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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

          <div className="group relative h-80 w-80 rounded-xl bg-slate-950">
            <img
              className="h-full w-full rounded-xl object-cover"
              src={todoImg}
              alt=""
            />
            <div className="hover-item bg- absolute bottom-0 flex h-16 w-80 items-center justify-between rounded-b-xl px-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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

          <div className="group relative h-80 w-80 rounded-xl bg-slate-950">
            <img
              className="h-full w-full rounded-xl object-cover"
              src={todoImg}
              alt=""
            />
            <div className="hover-item bg- absolute bottom-0 flex h-16 w-80 items-center justify-between rounded-b-xl px-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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

          <div className="group relative h-80 w-80 rounded-xl bg-slate-950">
            <img
              className="h-full w-full rounded-xl object-cover"
              src={todoImg}
              alt=""
            />
            <div className="hover-item bg- absolute bottom-0 flex h-16 w-80 items-center justify-between rounded-b-xl px-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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

          <div className="group relative h-80 w-80 rounded-xl bg-slate-950">
            <img
              className="h-full w-full rounded-xl object-cover"
              src={todoImg}
              alt=""
            />
            <div className="hover-item bg- absolute bottom-0 flex h-16 w-80 items-center justify-between rounded-b-xl px-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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

          <div className="group relative h-80 w-80 rounded-xl bg-slate-950">
            <img
              className="h-full w-full rounded-xl object-cover"
              src={todoImg}
              alt=""
            />
            <div className="hover-item bg- absolute bottom-0 flex h-16 w-80 items-center justify-between rounded-b-xl px-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
