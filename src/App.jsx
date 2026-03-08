import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Giorno from './pages/Giorno'
import Info from './pages/Info'
import Rsvp from './pages/Rsvp'
import ListaNozze from './pages/ListaNozze'
import Storia from './pages/Storia'
import Location from './pages/Location'

function App() {
  return (
    <Layout>
      <Home />
      <Giorno />
      <Info />
      <Rsvp />
      <ListaNozze />
      <Storia />
      <Location />
    </Layout>
  )
}

export default App
