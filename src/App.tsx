import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { FeaturedServices } from './components/home/FeaturedServices';
import { TopStories } from './components/home/TopStories';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <FeaturedServices />
        <TopStories />
      </main>
      <Footer />
    </div>
  );
}

export default App;