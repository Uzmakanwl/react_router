
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Layout from './layout'
import Home from './home'
import About from './about'
import Contact from './contact'
function App() {
 

  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element ={<Home></Home>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={< Contact></Contact>}></Route>
        
        </Route>
        
      </Routes>
     </Router>
    </>
  )
}

export default App
