import Container from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export default Layout
