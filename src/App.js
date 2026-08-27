import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPortfolioData } from './store/portfolioSlice';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.portfolio);

  useEffect(() => {
    dispatch(loadPortfolioData());
  }, [dispatch]);

  if (status === 'loading' || status === 'idle') {
    return (
      <div className="loader-screen">
        <div className="loader-ring" />
      </div>
    );
  }

  if (status === 'failed') {
    return <div className="loader-screen" style={{ color: '#f87171' }}>Failed to load portfolio data.</div>;
  }

  return (
    <div className="app">
      <Navbar />
      <Hero data={data.hero} />
      <About data={data.about} />
      <Experience data={data.experience} />
      <Education data={data.education} />
      <Skills data={data.skills} />
      <Projects data={data.projects} />
      <Contact email={data.hero.email} />
      <Footer name={data.hero.name} />
    </div>
  );
}

export default App;
