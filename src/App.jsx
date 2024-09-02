import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import LayOut from './components/LayOut/LayOut';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

let page =createBrowserRouter([
  {path: '', element: <LayOut />, children: [
    {index: true, element: <Home />},
    {path: 'Start-Framework', element: <Home />},
    {path: 'about', element: <About />},
    {path: 'portfolio', element: <Portfolio />},
    {path: 'contact', element: <Contact />},
    {path:"*", element: <NotFound/>}
  ]}
])

function App() {

  return (
    <RouterProvider router={page} />
  )
}

export default App
