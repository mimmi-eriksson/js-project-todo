import Footer from "./sections/Footer"
import Header from "./sections/Header"
import Main from "./sections/Main"

export const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Main />
        <Footer />
      </div>

    </>
  )
}
