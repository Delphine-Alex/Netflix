import Mainlayout from "../layout/MainLayout"

function MyApp({ Component, pageProps }) {
  return (
    <Mainlayout>
      <Component {...pageProps} />
    </Mainlayout>
  )
}

export default MyApp
