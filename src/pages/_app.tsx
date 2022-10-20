import '../styles/globals.css'
import '../styles/media.css'
import { SessionProvider } from "next-auth/react"
import SwiperCore, {Pagination, A11y } from "swiper";
SwiperCore.use([Pagination, A11y]);
import "swiper/css";
import "swiper/css/pagination";
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
