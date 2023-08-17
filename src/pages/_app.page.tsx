import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import { globalStyles } from '@/styles/global'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'

const nunito = Nunito({ subsets: ['latin'], weight: ['400', '500', '700'] })

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter()

  return (
    <div className={`${nunito.className}`}>
      <SessionProvider session={session}>
        {router.pathname === '/' ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </SessionProvider>
    </div>
  )
}
