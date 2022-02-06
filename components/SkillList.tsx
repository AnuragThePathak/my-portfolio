import Image from "next/image"
import skillArray from "../data/skills.json"
import { shimmer, toBase64 } from "./Shimmer"

export default function SkillList() {

  return (
    <section className="container px-8 pt-2 pb-6 mx-auto">
      <h1 className="md:text-4xl text-3xl pb-3">
        Technologies I&#39;m familiar with...</h1>
      <div className="flex flex-wrap m-2 justify-start">
        {skillArray.map((skill) => (
          <div key={skill.tech} className="m-2 sm:py-3 py-2 md:w-1/6 w-1/4 md:h-10
           h-3">
            <Image src={skill.imageUrl} width="170" height="40"
              alt={skill.tech} placeholder="blur" blurDataURL=
              {`data:image/svg+xml;base64,${toBase64(shimmer(170, 40))}`} />
          </div>
        ))}
      </div>
    </section>
  )
}