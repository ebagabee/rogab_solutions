import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import AllProjects from './pages/AllProjects.jsx'
import { useSeo } from './lib/seo.js'

export default function AppRoutes() {
  useSeo()
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<AllProjects />} />
          <Route path="/projetos/:slug" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
