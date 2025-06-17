import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ClerkProvider} from '@clerk/clerk-react'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Form
} from 'react-router-dom'
import {

  LoginPage,
  PostListPage,
  RegisterPage,
  SinglePostPage,
  WritePage,
  HomePage
} from './pages'
import MainLayout from './layouts/MainLayout.jsx'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}


const router = createBrowserRouter([
  {
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "/posts",
        element: <PostListPage></PostListPage>
      },
      {
        path: "/:slug",
        element: <SinglePostPage />
      },
      {
        path: "/write",
        element: (<WritePage></WritePage>)
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>

      },
      {
        path: "register",
        element: <RegisterPage></RegisterPage>
      }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} >
      <RouterProvider router={router}></RouterProvider>
    </ClerkProvider>
    

  </StrictMode>,



)
