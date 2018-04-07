import React, {Component} from 'react';
import MessageAttachement from '../MessageAttachement/MessageAttachement';
import MessageInput from '../MessageInput/MessageInput';
import api from '../../api';
import './SendMessage.css';
import {sendMessage} from "../../reducers/chat/action";
import {connect} from "react-redux";


class SendMessage extends Component {
    clickTextHundler() {
        const valueText = document.querySelector('.sendmessage__textarea').value;
        document.querySelector('.sendmessage__textarea').value = '';

        this.props.sendMessage(this.props.roomId, valueText);
    }


    render() {
        return (
            <div className="sendmessage">
                <MessageAttachement />
                <MessageInput />
                <div className="sendmessage__send-button">
                  <button className="send-button__button" onClick={() => this.clickTextHundler()}>
                    <i className="fa fa-paper-plane" aria-hidden="true"></i>
                  </button>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        roomId: state.chat.currentChatId,
        messages: state.chat.messages
    }), {
        sendMessage
    }
)(SendMessage)
