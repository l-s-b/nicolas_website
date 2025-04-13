import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './assets/css/App.css'
import './assets/css/responsiveness/App_breakpoints.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './views/Home'
import Song from './views/Song'
import NotFound from './views/NotFound'
import Songs from './views/Songs'
import PostalesTour from './views/PostalesTour'
import UseTitle from './hooks/useTitle'
import UseScroll from './hooks/useScroll'

export default function App() {
  return (
    <>
      <Router>
        <UseTitle />
        <UseScroll />
        <Header />
        <Routes>
          <Route path="/" element={<Home bg="home" />} />
          <Route path="/postalesTour" element={<PostalesTour />} />
          <Route path="/songs/:name" element={<Song bg="song" />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
