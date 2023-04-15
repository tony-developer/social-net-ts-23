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
import {RootStateType} from "./redux/state";

export type PropsAppType = {
    state: RootStateType
    addPost: () => void  //?
}

const App = (props: PropsAppType) => {
    console.log(props)
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                {/*<Profile/>*/}
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs
                        store={props.store}
                        dialogs={props.state.dialogsPage.dialogs}
                        messages={props.state.dialogsPage.messages}/>}/>
                    <Route path='/profile' render={() => <Profile
                        posts={props.state.profilePage.posts}
                        dispatch={props.dispatch}
                    />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
