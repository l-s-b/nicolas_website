import '../assets/css/home/Home.css'
import { useBackground } from '../context/BackgroundProvider'
import { useEffect } from 'react'
import Newsletter from '../components/Newsletter'
import HomeSongList from '../components/HomeSongList'
import HomeHero from '../components/HomeHero'
import HomePostales from '../components/HomePostales'

export default function Home() {
  const { applyRootClass } = useBackground();
  useEffect(() => { applyRootClass('homeRoot') }, [applyRootClass]);
  
  return (
    <main id="home">
      <HomeHero />
      <HomeSongList />
      <HomePostales />
      <Newsletter />
    </main>
  )
}
  