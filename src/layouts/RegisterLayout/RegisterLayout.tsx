import Footer from '../../components/Footer/Footer'

function RegisterLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  )
}

export default RegisterLayout
