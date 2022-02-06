import Image from "next/image"
import projectArray from "../data/projects.json"

export default function Projects() {
  return (
    <section id="projects">
      <div className="container mx-auto px-8 sm:py-12 md:py-16 py-7">
        <h1 className="md:text-4xl text-3xl pb-3">Projects</h1>

        <div className="flex flex-wrap flex-row pt-6">
          {projectArray.map((project) => (
            <div key={project.url} className="md:w-1/2 md:p-3 p-2">
              <div className="flex flex-col px-5 py-3 bg-orange-200 rounded-lg">
                <h1 className="sm:text-2xl text-xl font-medium text-gray-900">
                  {project.title}</h1>
                <p className="leading-relaxed py-3">{project.description}</p>

                <div className="flex justify-between flex-wrap">
                  <a href={project.url} target="_blank" rel="noreferrer">
                    <button className="rounded-full bg-cyan-200 p-2 my-1">
                      Check on Github
                    </button>
                  </a>

                  <div className="flex flex-nowrap">
                    {project.icons.map((icon) => (
                      <div key={icon.tech} className="sm:px-2 px-1 my-1">
                        <Image src={icon.src} width="40" height="40"
                          alt={icon.tech} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}