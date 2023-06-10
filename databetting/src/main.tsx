
import ReactDOM from 'react-dom/client'
import './styles/main.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home.tsx'


const pages = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RouterProvider router={pages} />
)
