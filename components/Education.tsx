export default function Education() {
  return (
    <section id="education">
      <div className="container flex flex-col px-8 mx-auto">
        <h1 className="md:text-4xl text-3xl md:py-5 py-3 mb-3">Education</h1>
        <div className="flex flex-col py-3 sm:m-4 m-2 px-6 sm:px-8 border-solid
    border-2 border-pink-300 rounded-lg bg-red-100">
          <div className="p-1 sm:py-2 sm:mb-2 mb-1">
            <h1 className="sm:text-2xl text-xl text-yellow-900">
              National Institute of Technology Silchar</h1>
            <p className="text-lg md:py-3 py-2">
              Bachelor of Technology in Computer Science and Engineering</p>
            <p>2020-24</p>
          </div>
          <a href="http://nits.ac.in/" target="_blank" rel="noreferrer">
            <button className="rounded-full bg-cyan-300 sm:p-3 p-2">
              Visit Website</button></a>
        </div>

        <div className="flex flex-col py-3 sm:m-4 m-2 px-6 sm:px-8 border-solid
    border-2 border-pink-300 rounded-lg bg-red-100">
          <div className="p-1 sm:py-2 sm:mb-2 mb-1">
            <h1 className="sm:text-2xl text-xl text-yellow-900">
              Cotton University</h1>
            <p className="text-lg md:py-3 py-2">
              Higher Secondary in Science (Class 11-12)</p>
            <p>2018-20</p>
          </div>
          <a href="https://cottonuniversity.ac.in/" target="_blank" 
          rel="noreferrer">
            <button className="rounded-full bg-cyan-300 sm:p-3 p-2">
              Visit Website</button></a>
        </div>

        <div className="flex flex-col py-3 sm:m-4 m-2 px-6 sm:px-8 border-solid
    border-2 border-pink-300 rounded-lg bg-red-100">
          <div className="p-1 sm:py-2 sm:mb-2 mb-1">
            <h1 className="sm:text-2xl text-xl text-yellow-900">
              Palasbari RB HS and MP School, Mirza</h1>
            <p className="text-lg md:py-3 py-2">
              High School (Class 6-10)</p>
            <p>2013-18</p>
          </div>
        </div>
      </div>
    </section>
  )
}