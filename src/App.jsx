import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Homepage from './pages/Homepage/Homepage'
import CategoryArticle from './pages/CategoryArticle/CategoryArticle'
import Header from './components/Header/Header';

function App() {

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={< Homepage/>} />
        <Route path='/category/:categoryName' element={< CategoryArticle/>} />  
      </Routes> 
    </BrowserRouter>
  )
}

export default App
