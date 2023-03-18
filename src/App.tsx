import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Dialogs from "./components/Dialogs/Dialogs";
import state, {RootStateType} from "./redux/state";



const App = (props:RootStateType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                {/*<Profile/>*/}
                <div className='app-wrapper-content'>
                    {/*<Route exact path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/dialogs' render={ ()=> <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                                  messages={props.state.dialogsPage.messages} />  }/>*/}

                    {/*<Route path='/dialogs' render={ ()=> <Dialogs state={props.state.dialogsPage} />  }/>
                    <Route path='/profile' render={ ()=> <Profile state={props.state.profilePage} /> }/>*/}
                    <Route path='/dialogs' render={ ()=> <Dialogs dialogsPage={props.dialogsPage} />  }/>
                    <Route path='/profile' render={ ()=> <Profile profilePage={props.profilePage} /> }/>
                    {/*<Route path='/news' component={News}/>*/}
                    {/*<Route path='/music' component={Music}/>*/}
                    {/*<Route path='/settings' component={Settings}/>*/}
                    {/*<Dialogs/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
