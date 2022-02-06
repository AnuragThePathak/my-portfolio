export default function Contact() {

  return (
    <section id="contact">
      <div className="container mx-auto px-8 py-7 sm:py-10">
        <h1 className="md:text-4xl text-3xl pb-3">Get in touch</h1>

        <div className="flex md:flex-nowrap flex-wrap px-3">
          <div className="flex flex-col md:w-1/2 bg-slate-300 p-4 container">

            <form name="contact" method="POST" data-netlify="true"
              netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact" />

              <label className="p-2 my-4">
                Name
                <input type="text" name="name" className="container rounded my-2"
                  required />
              </label>

              <label className="p-2 my-4">
                Email
                <input type="email" name="email"
                  className="container rounded my-2" required />
              </label>

              <label className="p-2 my-4">
                Message
                <textarea name="message"
                  className="container rounded my-2 md:h-28 h-20" required />
              </label>

              <label className="hidden" >
                Don’t fill this out if you’re human:
                <input name="bot-field" />
              </label>

              <input type="submit" value="Submit"
                className="bg-cyan-300 rounded-full p-2 w-24 
                hover:bg-yellow-50" />
            </form>
          </div>

          <div className="flex flex-col md:w-1/2 py-4 justify-evenly 
          bg-blue-100 container border-2 border-purple-500">
            <div className="flex flex-col items-center mb-4">
              <p className="leading-relaxed sm:text-lg px-auto py-5">
                Alternatively you may also email me on</p>

              <a href="mailto:anuragpathak911@gmail.com" target="_blank"
                rel="noreferrer">
                <span className="container bg-stone-400 sm:text-2xl text-xl
            font-bold font-mono p-2 break-all">anuragpathak911@gmail.com</span>
              </a>
            </div>

            <div className="flex flex-col items-center">
              <p className="leading-relaxed sm:text-lg px-auto py-5">Or you
                can also message me on my Twitter handle</p>

              <a href="https://twitter.com/AnuragThePathak" target="_blank"
                rel="noreferrer">
                <span className="bg-stone-400 sm:text-2xl text-xl
            font-bold font-mono p-2">@AnuragThePathak</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}