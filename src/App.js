import './App.css';
import About from './Components/About';
import Corousel from './Components/Corousel';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Pagination from './Components/Pagination';
import TextForms from './Components/TextForms';
import Verticalbuttons from './Components/Verticalbuttons';
import { useState } from 'react';
import Alerts from './Components/Alerts';
import Cards from './Components/Cards';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './Components/Profile';

function App() {
    const [btntext, setbtntext] = useState('Enable dark mode');
    const [elementmode, setelementmode] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            message: message,
            type: type,
        });
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    };

    const [myStyle, setmyStyle] = useState({
        backgroundColor: 'white',
    });

    const togglemode = () => {
        if (myStyle.backgroundColor === 'white') {
            setmyStyle({
                color: 'white',
                backgroundColor: '#0f0d20',
            });
            setbtntext('Enable light mode');
            setelementmode('dark');
            showAlert('Dark mode enabled', 'success');
            document.title = 'TextEditor-darkmode';
        } else {
            setmyStyle({
                backgroundColor: 'white',
            });
            setbtntext('Enable dark mode');
            setelementmode('light');
            showAlert('Light mode enabled', 'success');
            document.title = 'TextEditor-lightmode';
        }
    };

    return (
        <>
            <Router>
                <div style={myStyle}>
                    <div id='navbar' className='container'>
                        <Navbar
                            title=' MYSPACE '
                            TextEditor='TextEditor'
                            asterisk='Asterisk Edu. Blogs '
                            about=' Portfolio/About Me'
                            togglemode={togglemode}
                            elementmode={elementmode}
                        />
                    </div>
                    <div id='alerts'>
                        <Alerts alert={alert} />
                    </div>

                    <Switch>
                        <Route exact path='/'>
                            <TextForms
                                elementmode={elementmode}
                                heading='Enter Text to Analyze....'
                                showAlert={showAlert}
                            />
                            <Pagination elementmode={elementmode} />
                        </Route>
                        <Route exact path='/TextEditor'>
                            <TextForms
                                elementmode={elementmode}
                                heading='Enter Text to Analyze....'
                                showAlert={showAlert}
                            />
                            <Pagination elementmode={elementmode} />
                        </Route>

                        <Route path='/About'>
                            <div className='container'>
                                <Profile />
                            </div>
                            <div className='container' id='carousel'>
                                <Corousel elementmode={elementmode} />{' '}
                            </div>
                            <About elementmode={elementmode} />
                        </Route>
                    </Switch>

                    <div className='container' id='cards'>
                        <Cards elementmode={elementmode} />
                    </div>

                    <div id='Verticalbuttons' className='container'>
                        <Verticalbuttons elementmode={elementmode} />
                    </div>

                    <div id='bottommodebutton' className='container'>
                        <button
                            onClick={togglemode}
                            className='btn btn-secondary'
                        >
                            {btntext}
                        </button>
                    </div>

                    <div id='footer'>
                        <Footer elementmode={elementmode} />
                    </div>
                </div>
            </Router>
        </>
    );
}
export default App;
