
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.tsx'
import './styles/main.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const pages = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RouterProvider router={pages} />
)
