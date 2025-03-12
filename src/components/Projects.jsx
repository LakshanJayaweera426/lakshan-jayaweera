import { useEffect, useRef } from "react";
import { PROJECTS } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        opacity: 0,
        y: 50,
        duration: 2,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 50%",
          toggleActions: "play none none none",
        },
      });
    }, projectsRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="pt-16" id="projects" ref={projectsRef}>
      <div className="px-4">
        <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
          Projects
        </h2>
        <div className="flex flex-wrap justify-center">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="project-card flex w-full flex-col p-4 md:w-1/2 lg:w-1/3"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-lg border border-purple-300/20">
                {" "}
                {/* Added h-full */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    className="h-48 w-full object-cover sm:h-60" // Reduced initial height and adjusted on small screens
                  />
                </a>
                <div className="flex flex-col justify-between p-6">
                  {" "}
                  {/* Added flex column and justify-between */}
                  <div>
                    {" "}
                    {/* Wrapper div for title and description */}
                    <h3 className="mb-2 text-lg font-medium lg:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-sm">{project.description}</p>{" "}
                    {/* Reduced font size */}
                  </div>
                  <div>
                    <strong className="block mb-2">Tech Stack:</strong>{" "}
                    {/*Made it a block element*/}
                    <ul className="flex flex-wrap">
                      {" "}
                      {/*Made the Tech stack wrapper a flexbox container*/}
                      {project.techStack.map((tech, index) => (
                        <li
                          key={index}
                          className="mb-1 mr-2 rounded-full border-2 border-pink-500/30 px-3 py-1 text-xs font-semibold" // Reduced font size
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
