import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
import Skills from './components/Skills';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Skills/>
        <Portfolio resumeData={resumeData}/>
        {/* <Testimonials resumeData={resumeData}/> */}
        {/* This stuff is not finished yet-
              Need to add email contact section */}
        <ContactUs resumeData={resumeData}/>  
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;