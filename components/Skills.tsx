export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-8 md:py-16 sm:py-14 py-7 mx-auto">
        <h1 className="md:text-4xl text-3xl mb-10 pb-3">Things I enjoy doing</h1>
        <div className="-my-8 divide-y-2 divide-gray-100 text-gray-600">

          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col
            md:px-2">
              <span className="font-semibold text-gray-700 sm:text-2xl text-xl">
                Android Development</span>

              <div className="w-5/6 bg-gray-200 h-3 my-6">
                <div className="bg-blue-600 h-3 w-3/4"></div>
              </div>
            </div>

            <div className="md:flex-grow">
              <h2 className="sm:text-2xl text-xl font-medium text-gray-900 
              mb-2">Modern Android Development Skills</h2>
              <p className="leading-relaxed">
                I am experienced in developing small and medium size android
                apps using Kotlin, Android Jetpack Libraries and Kotlin
                coroutines. I can also integrate Android Apps with remote APIs.
                I really enjoy working with Kotlin and would love to start
                using Jetpack Compose as well.
              </p>
            </div>
          </div>

          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col
            md:px-2">
              <span className="font-semibold text-gray-700 sm:text-2xl text-xl">
                Web Development
              </span>
              <div className="w-3/4 bg-gray-200 h-3 my-6">
                <div className="bg-blue-600 h-3 w-3/5"></div>
              </div>
            </div>

            <div className="md:flex-grow">
              <h2 className="sm:text-2xl text-xl font-medium text-gray-900
               mb-2">
                Web Development with Javascript &#38; Typescript</h2>
              <p className="leading-relaxed">
                I can make web apps with Reactjs/Nextjs and Tailwind
                CSS/Bootstrap. I can also develop REST APIs using Nodejs with
                Expressjs and Mongoose. For database I have been using MongoDB
                (MongoDB Atlas) only till now.</p>
            </div>
          </div>

          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col
            md:px-2">
              <span className="font-semibold title-font text-gray-700 
              sm:text-2xl text-xl">
                Cloud Native
              </span>
              <div className="w-3/4 bg-gray-200 h-3 my-6">
                <div className="bg-blue-600 h-3 w-1/2"></div>
              </div>
            </div>

            <div className="md:flex-grow">
              <h2 className="sm:text-2xl text-xl font-medium text-gray-900 
              mb-2">Deployment in Cloud Platforms</h2>
              <p className="leading-relaxed py-2">
                I am familiar with deploying APIs with or without Docker in
                Microsoft Azure, AWS and GCP. Apart from that I that I am
                also familiar with Bash Scripting and various Linux commands.
                Being a Linux user made learning these easier for me. I am
                learning to use Kubernetes and CI/CD.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}