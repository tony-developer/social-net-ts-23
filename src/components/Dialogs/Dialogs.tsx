import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    DialogsPageType,
    DialogType,
    MessageType,
} from "../../redux/state";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props: DialogsPageType) => {

    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = state.messages.map(m => <Message message={m.message} id={m.id}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
props.store.dispatch(sendMessageCreator() )
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.store.dispatch( updateNewMessageBodyCreator(body) )
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;