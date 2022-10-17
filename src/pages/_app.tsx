import '../styles/globals.css'
import '../styles/media.css'
import { SessionProvider } from "next-auth/react"
import type {Session} from"next-auth"
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps: {session, ...pageProps}}: AppProps<{session: Session}>) {
  return (
	<SessionProvider session={session}>
		<Component {...pageProps} />
  	</SessionProvider>
	)
}

export default MyApp
