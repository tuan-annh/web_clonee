import { useContext } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import './App.css'
import { AppContext } from './contexts/HighApp.context'
import path from './constants/path'
import About from './pages/About/About'
import MainLayout from './layouts/MainLayout/MainLayout'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import ProductsList from './pages/ProductsList/ProductsList'
import Home from './pages/Home/Home'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import ProfileLayout from './layouts/ProfileLayout/ProfileLayout'
import MyAccount from './pages/Profile/MyAccount'
import ChangePassword from './pages/Profile/ChangePassword'
import ContactUs from './pages/Contact/ContactUs'
import CartPage from './pages/CartPage/CartPage'
import WishList from './pages/WishList/WishList'

function App() {
  const { isAuthenticated } = useContext(AppContext)

  const elements = useRoutes([
    {
      path: path.home,
      // index: true, // nhận diện route chính của useRoutes
      element: <Outlet />,
      children: [
        {
          path: '',
          element: (
            <MainLayout>
              <Home />
            </MainLayout>
          )
        },
        {
          path: path.products,
          element: (
            <MainLayout>
              <ProductsList />
            </MainLayout>
          )
        },
        {
          path: `${path.products}/:category`,
          element: (
            <MainLayout>
              <ProductsList />
            </MainLayout>
          )
        },
        {
          path: `${path.products}/:category/:id`,
          element: (
            <MainLayout>
              <ProductDetail />
            </MainLayout>
          )
        },
        {
          path: path.profile,
          element: isAuthenticated ? (
            <MainLayout>
              <ProfileLayout>
                <MyAccount />
              </ProfileLayout>
            </MainLayout>
          ) : (
            <Navigate to={path.home} />
          )
        },
        {
          path: path.paycart,
          element: (
            <MainLayout>
              <CartPage />
            </MainLayout>
          )
        },
        {
          path: path.changePassword,
          element: (
            <MainLayout>
              <ProfileLayout>
                <ChangePassword />
              </ProfileLayout>
            </MainLayout>
          )
        },
        {
          path: path.about,
          element: (
            <MainLayout>
              <About />
            </MainLayout>
          )
        },
        {
          path: path.contact,
          element: (
            <MainLayout>
              <ContactUs />
            </MainLayout>
          )
        },
        {
          path: path.wishList,
          element: (
            <MainLayout>
              <WishList />
            </MainLayout>
          )
        }
      ]
    },
    {
      path: path.login,
      element: isAuthenticated ? <Navigate to={path.home} /> : <Login />
    },
    {
      path: path.register,
      element: isAuthenticated ? <Navigate to={path.home} /> : <Register />
    },
    {
      path: '*',
      element: <Navigate to={path.home} />
    }
  ])

  return (
    <>
      {elements}
      <ToastContainer
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        theme='colored'
      />
    </>
  )
}

export default App
