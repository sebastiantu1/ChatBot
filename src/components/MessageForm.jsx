import { useState } from "react"
import { sendMessage, isTyping } from 'react-chat-engine'
import { SendOutlined, PictureOutlined} from '@ant-design/icons'

/*
    A message form to handle the entering and submission of text and image messages.
*/

const MessageForm = (props) => {
    const [value, setValue] = useState('');
    const { chatId, creds } = props;

    /* On submission (enter/button)
        Block reloading of the page
        Send the message off
        Reset the value, thus resetting the text box
    */
    const handleSubmit = (event) => {
        event.preventDefault();
        const text = value.trim();
        if (text.length > 0) sendMessage(creds, chatId, { text });
        setValue('');
    }

    // Every key pressed, update the value state and says the user is typing to react.
    const handleChange = (event) => {
        setValue(event.target.value);
        isTyping(props, chatId);
    }

    // Send a photo message
    const handleUpload = (event) => {
        sendMessage(creds, chatId, {files: event.target.files, text: ''})
    }

    // Return a form with an onSubmit (which is the enter key)
    // 
    /*
        Return a form with an onSubmit (which is the enter key)
        * Input field (default text)
        * Upload button for images
        * Upload button
        * Submit button
    */
    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input
                className="message-input"
                placeholder="Send a message..."
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
                />
            <label htmlFor="upload-button">
                <span className="image-button">
                    <PictureOutlined className="picture-outline"/>
                </span>
            </label>
            <input
                type="file"
                multiple = {false}
                id="upload-button"
                style={{display: 'none'}}
                onChange={handleUpload}
            />
            <button type="submit" className="send-button">
                <SendOutlined className="send-icon"/>
            </button>
        </form>
    )
}

export default MessageForm;