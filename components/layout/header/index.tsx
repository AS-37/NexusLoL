import Link from 'next/link'
import Profile from '../../profile'
export default function Header() {

    return (
      
      <div className="bg-indigo-900 sticky">
        <div className="text-gray-300 py-4 text-sm">
          <div className="flex space-x-6 items-center">
            <Link href="/">
              <img className="block pl-4 cursor-pointer" src="/images/Nexus_text.png" height="16" alt="Nexus" width="65" />
            </Link>
            <Link href="/">
              <a className="text-white border-white border-b-2">
                Home
              </a>
            </Link>
            <Link href="/champion">
              <a>
                Champions
              </a>
            </Link>
            <Link href="/">
              <a>
                Search
              </a>
            </Link>
            <Profile></Profile>
          </div>
        </div>
      </div>
    )
}