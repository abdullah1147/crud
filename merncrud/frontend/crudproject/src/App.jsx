import { Route, Routes } from 'react-router-dom'
import './App.css'
import ImageAdd from './ImageAdd'
import ImageFetch from './ImageFetch'
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageEdit from './ImageEdit';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<ImageAdd/>}/>
        <Route path='/read' element={<ImageFetch/>}/>
        <Route path='/edit/:id' element={<ImageEdit/>}/>
      </Routes>
    </>
  )
}

export default App
