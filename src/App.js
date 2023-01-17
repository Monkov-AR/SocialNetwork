import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            {/* 
            в новых версиях react'a заменены оба комонента component и render на element
            чтобы пробросить ему props используется кострукция ниже 
            <Route path={urls.courses} element={<CoursesList otherProp={myProp} />} /> 
            пример конкретно для данного случая(ниже)
            <Route path="/dialogs" element={<Dialogs dialogs={dialogs} messages={messages}/>} /> 
            */}
            <Route path="/profile" element={<Profile/>} />
            <Route path="/dialogs/*" element={<Dialogs/>} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
