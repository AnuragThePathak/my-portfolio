import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import Image from "next/image"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import profilePic from "../public/image.webp"

export default function HeroSection() {
  return (
    <section id="#" className="text-gray-600">
      <div className="flex px-8 py-12 md:flex-row flex-col items-center
      container mx-auto">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0
        flex-none"> 
          <Image src={profilePic} alt="author's picture"
            className="object-cover object-center rounded" 
            onContextMenu={(e) => {
              e.preventDefault()
            }} placeholder="blur" />
        </div>

        <div className="flex flex-col
         sm:items-start text-left px-14 flex-wrap">
          <h1 className="sm:text-2xl text-xl font-medium pb-2">
            Hello, I&#39;m</h1>
          <h1 className="sm:text-4xl text-3xl mb-3 font-medium 
          text-gray-900">Anurag Pathak</h1>
          <h1 className="sm:text-2xl text-xl font-medium mb-5">
            Android and MERN Developer</h1>
          <p className="mb-8 leading-relaxed break-normal">
            I am a Software Developer from India experienced in Android and Web.
            I am also passionate about DevOps and Kubernetes. With more than a
            year of experience in software development, I can learn and start
            using new technologies/frameworks quite fast.</p>

          <div className="flex sm:justify-between flex-wrap">

            <span className="m-2 sm:px-2">
              <a href="https://twitter.com/AnuragThePathak" target="_blank"
                rel="noreferrer" aria-label="Twitter profile" >
                <FontAwesomeIcon icon={faTwitter} size="3x" color="#00acee" />
              </a></span>
            <span className="m-2 sm:px-2">
              <a href="https://github.com/AnuragThePathak" target="_blank"
                rel="noreferrer" aria-label="Github profile" >
                <FontAwesomeIcon icon={faGithub} size="3x" /></a></span>
            <span className="m-2 sm:px-2">
              <a href="https://linkedin.com/in/anuragthepathak" target="_blank"
                rel="noreferrer" aria-label="Linkedin profile" >
                <FontAwesomeIcon icon={faLinkedin} size="3x" color="#0e76a8" />
              </a></span>
            <span className="m-2 sm:px-2">
              <a href="mailto:anuragpathak911@gmail.com" target="_blank"
                rel="noreferrer" aria-label="Email" >
                <FontAwesomeIcon icon={faEnvelope} size="3x" /></a></span>
          </div>
        </div>
      </div>
    </section>
  )
}
