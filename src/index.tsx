import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
    {id: 1, message: "Hi! How are you?", likesCount: 12},
    {id: 2, message: "it's my first post",likesCount: 11}
]
let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Valera'},
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your IT?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Sasha'},
    {id: 5, message: 'Victor'},
    {id: 6, message: 'Valera'}
]

export type DialogPropsType ={
    id:number
    name: string
}
export type MessagePropsType = {
    id:number
    message:string
}
export type PostPropsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsPropsType = {
    dialogs: DialogPropsType[]
    messages:MessagePropsType[]
    posts: PostPropsType[]
}


ReactDOM.render(
    <App  dialogs={dialogs} posts={posts} messages={messages} />,
  document.getElementById('root')
);