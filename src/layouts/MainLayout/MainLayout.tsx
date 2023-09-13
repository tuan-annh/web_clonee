import BackToTop from '../../components/BackToTop/BackToTop'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
      <BackToTop />
    </div>
  )
}

export default MainLayout
