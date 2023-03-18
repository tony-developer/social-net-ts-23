export type DialogType ={
    id:number
    name: string
}
export type MessageType = {
    id:number
    message:string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsPageType = {
    dialogs: DialogType[]
    messages:MessageType[]
}
export type ProfileType ={
    posts: PostType[]
}
export type SidebarType = {}
export type RootStateType ={
    profilePage:ProfileType
    dialogsPage:DialogsPageType
    sidebar: SidebarType
}

let state:RootStateType = {
    profilePage:{
        posts: [
            {id: 1, message: "Hi! How are you?", likesCount: 12},
            {id: 2, message: "it's my first post",likesCount: 11}
        ]
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
        ]
    },
    sidebar:{}
}

/*let addPost = (postMessage) => {
    let newPost = {

    }
}*/

export default state