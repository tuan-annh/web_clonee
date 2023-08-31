import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />

      {children}
      {/* <div className='h-screen bg-gray-200'></div> */}
      <Footer />
    </div>
  )
}

export default MainLayout
