import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Giorno from './pages/Giorno'
import Info from './pages/Info'
import ListaNozze from './pages/ListaNozze'
import Rsvp from './pages/Rsvp'

function App() {
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

export default App
