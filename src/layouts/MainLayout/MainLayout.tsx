import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className='min-h-screen'>{children}</div>
      <Footer />
    </>
  )
}

export default MainLayout
