import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export default function Appbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav>
      <div className="px-8 py-6 flex flex-col bg-slate-900
      text-yellow-100 text-lg max-w-full">
        <div className="flex flex-row justify-between">
          <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu" >
            <FontAwesomeIcon icon={faBars} />
          </button>

          <span className="flex-auto px-3">
            <Link href="#">
              <a>Anurag Pathak</a>
            </Link>
          </span>

          <NavOptions extraClasses=" sm:flex hidden flex-row justify-end" />
        </div>

        <NavOptions extraClasses={" sm:hidden flex-col" +
          (isOpen ? " flex" : " hidden")} />
      </div>
    </nav>
  )
}

// It contains the navigation options
function NavOptions({ extraClasses }: { extraClasses: string }) {
  return (
    <div className={"flex sm:space-x-4 md:space-x-8" + extraClasses} >
      <Link href="#skills">
        <a className="hover:font-thin">Skills</a>
      </Link>
      <Link href="#projects">
        <a className="hover:font-thin">Projects</a>
      </Link>
      <Link href="#education">
        <a className="hover:font-thin">Education</a>
      </Link>
      <Link href="#contact">
        <a className="hover:font-thin">Contact</a>
      </Link>
    </div>
  )
}