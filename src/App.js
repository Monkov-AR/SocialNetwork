import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            {/* 
            в новых версиях react'a заменены оба комонента component и render на element
            чтобы пробросить ему props используется кострукция ниже (она же и использована)
            <Route path="/dialogs" element={<Dialogs dialogs={dialogs} messages={messages}/>} /> 
            */}
            <Route path="/profile" element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
            <Route path="/dialogs/*" element={<Dialogs dialogsPage={props.state.dialogsPage}/>} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
