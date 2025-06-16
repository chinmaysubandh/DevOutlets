import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
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
  Hero,
  LoginPage,
  PostListPage,
  RegisterPage,
  SinglePostPage,
  WritePage,
  HomePage
} from './pages'


const router = createBrowserRouter([{
  path: "/",
  element: <HomePage></HomePage>
},
{
  path: "/posts",
  element: <PostListPage></PostListPage>
},
{
  path: "/:slug",
  element: <PostListPage></PostListPage>
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
    element:<RegisterPage></RegisterPage>
}



])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,



)
