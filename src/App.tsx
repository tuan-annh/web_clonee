import { useContext } from 'react'
import './App.css'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import { AppContext } from './contexts/HighApp.context'
import path from './constants/path'
import MainLayout from './layouts/MainLayout/MainLayout'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import ProductsList from './pages/ProductsList/ProductsList'
import Profile from './pages/Profile/Profile'
import Home from './pages/Home/Home'

function App() {
  const { isAuthenticated } = useContext(AppContext)

  const elements = useRoutes([
    {
      path: path.home,
      // index: true, // nhận diện route chính của useRoutes
      element: isAuthenticated ? <Outlet /> : <Navigate to={path.login} />,
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
          path: path.profile,
          element: (
            <MainLayout>
              <Profile />
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

  return <div>{elements}</div>
}

export default App
