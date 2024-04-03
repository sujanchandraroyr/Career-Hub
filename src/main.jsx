import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/Routes.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <HelmetProvider>
      <RouterProvider router={routes}></RouterProvider>
      <ToastContainer />
    </HelmetProvider>

  </>,
)
