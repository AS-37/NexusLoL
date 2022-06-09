
import { useRouter } from 'next/router'
import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Footer from '../components/layout/footer';

export default function Home() {
  const router = useRouter()

  const searchForSummoner = async (event:any) => {
    event.preventDefault();

    router.push(`/summoner/${event.target.name.value}`)
  }

  return (
    <><div className="bg-indigo-800 py-8">
      <img className="block mx-auto" height="200" src="/images/nexus.png" alt="Nexus" />
      <form onSubmit={searchForSummoner} className="bg-white flex mx-auto w-4/6 h-12 shadow-lg">
        <input className="flex mx-auto w-5/6 outline-none" type="text" name="name" placeholder="Name1, Name2, ..." />
        <a className="bg-gray-500 text-white text-sm w-8 h-5 justify-center flex mt-4">EUW</a>
        <a className="items-center flex p-2 w-16">
          <button type="submit">
            <img className="ml-2" src="/images/search.png" />
          </button>
        </a>
      </form>
    </div><Footer></Footer></>
  )

}
