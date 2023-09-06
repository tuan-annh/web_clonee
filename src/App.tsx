import { useContext } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import './App.css'
import { AppContext } from './contexts/HighApp.context'
import path from './constants/path'
import MainLayout from './layouts/MainLayout/MainLayout'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import ProductsList from './pages/ProductsList/ProductsList'
import Profile from './pages/Profile/Profile'
import Home from './pages/Home/Home'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import CartPage from './pages/CartPage/CartPage'

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
          element: (
            <MainLayout>
              <Profile />
            </MainLayout>
          )
        },
        {
          path: path.paycard,
          element: (
            <MainLayout>
              <CartPage />
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
        // hideProgressBar
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss={false}
        theme='colored'
      />
    </>
  )
}

export default App
