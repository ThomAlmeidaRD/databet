
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import './styles/main.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const pages = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/home',
        element: <Home />
    }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RouterProvider router={pages} />
)
