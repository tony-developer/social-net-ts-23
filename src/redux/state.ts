import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";

let renderTree = ()=>{
    console.log("hello")
}

export type StoreType = {
    _state: RootStateType
    _callSubscriber:()=>void
    subscribe:(observer:()=> void )=> void
    getState:()=> RootStateType
    dispatch:(action:any)=>void
}
let store:StoreType = {
    // _state: <RootStateType>{
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi! How are you?", likesCount: 12},
                {id: 2, message: "it's my first post", likesCount: 11}
            ],
            newPostText: 'it.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Victor'},
                {id: 6, name: 'Valera'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your IT?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Sasha'},
                {id: 5, message: 'Victor'},
                {id: 6, message: 'Valera'}
            ],
            newMessageBody: ""
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}


export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}
export type ProfileType = {
    posts: PostType[]
    // addPost:()=>void //?
    newPostText: string //?
}
export type SidebarType = {}
export type RootStateType = {
    profilePage: ProfileType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export default store;
window.store = store;