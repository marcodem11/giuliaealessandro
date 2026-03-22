import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Giorno from './pages/Giorno'
import Info from './pages/Info'
import ListaNozze from './pages/ListaNozze'
import Rsvp from './pages/Rsvp'
import Login from './pages/Login'
import Admin from './pages/Admin'

function MainSite() {
  return (
    <Layout>
      <Home />
      <Giorno />
      <Info />
      <ListaNozze />
      <Rsvp />
    </Layout>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
