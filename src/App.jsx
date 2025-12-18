import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Storia from './pages/Storia'
import Giorno from './pages/Giorno'
import Location from './pages/Location'
import Rsvp from './pages/Rsvp'
import ListaNozze from './pages/ListaNozze'
import Info from './pages/Info'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/storia" element={<Storia />} />
          <Route path="/giorno" element={<Giorno />} />
          <Route path="/location" element={<Location />} />
          <Route path="/rsvp" element={<Rsvp />} />
          <Route path="/lista-nozze" element={<ListaNozze />} />
          <Route path="/info" element={<Info />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
