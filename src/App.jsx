
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Resume from './Pages/Resume'
import Saved from './Pages/Saved'
import Info from './Pages/Info'
import Pnf from './Pages/Pnf'
import Download from './Pages/Download'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

//pages:
//components:

  return (
    <>
   <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/all-resumes' element={<Saved/>}/>
      <Route path='/resume/:id' element={<view/>}/>
      <Route path='/resume-details' element={<Info/>}/>
      <Route path='/download' element={<Download/>}/>
      <Route path='/*' element={<Pnf/>}/>
    </Routes>
    <Footer/>
   </>
  )
}

export default App
