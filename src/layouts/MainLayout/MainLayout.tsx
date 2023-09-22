import BackToTop from '../../components/BackToTop/BackToTop'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import HeaderMobileBottom from '../../components/Header/HeaderMobileBottom/HeaderMobileBottom'

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <HeaderMobileBottom />
      <div className='h-max'>{children}</div>
      <Footer />
      <BackToTop />
    </>
  )
}

export default MainLayout
