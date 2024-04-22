import './App.css';
import Root from '../components/Root/Root.jsx'
import { Home } from '../components/Pages/Home/Home.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from '../components/Error.jsx';



const router = createBrowserRouter(
  [
    { 
      path: '/', 
      element: <Root />, 
      errorElement: <Error/>,
      children: [
        {path: '/', element: <Home/>},
      ]
    },
    
  ]
)

export default function App() {

  return <RouterProvider router={router}/>
}
