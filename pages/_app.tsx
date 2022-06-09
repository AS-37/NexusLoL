import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import Layout from '../components/layout'
import { useRouter } from 'next/router'
import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

export default function MyApp({ Component, pageProps }:any) {
  const router = useRouter()
  
  return (
    <div>
      <Head>
        <title>Nexus</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      {router.asPath === "/" &&
        <style jsx global>{'body { background: #3730A3; }'}</style>
      }
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}