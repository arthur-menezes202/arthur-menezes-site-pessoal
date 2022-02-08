import './App.css'

import { BrowserRouter, Route } from 'react-router-dom';
import { About, HomePage, Contact, Curriculo, Header, Footer } from './components';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Route path="/" component={Header} />
      <Route path="/about" component={About} />
      <Route path="/homePage" component={HomePage} />
      <Route path="/contact" component={Contact} />
      <Route path="/curriculo" component={Curriculo} />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
