import React from 'react';
import Image from './components/Image';
import MainContent from './components/MainContent';
import Header from './components/Header';
import Buttons from './components/Buttons';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Image />
      <div className="container">
        <Header />
        <Buttons />
        <MainContent />
      </div>
      <Footer />
    </>
  );
}
