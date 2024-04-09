import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

/*
    Chat Feed Component.
    Overrides the default chat feed.
    Takes in props from ChatEngine and creates a feed.
*/
const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;
    const chat = chats && chats[activeChat];        // If the chats exist

    // Function that loops through the messages and displays them on the feed.
    const renderMessages = () => {
        const keys = Object.keys(messages);
        console.log(keys);

        // Loops through messages
        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index-1];
            const isMyMessage = userName === message.sender.username;

            // Returns a message block with MyMessage or TheirMessage with different styling.
            return (
                <div key={`msg_${index}`} style={{width:'100%'}}> 
                    <div className="message-block">
                        {
                            isMyMessage
                            ? <MyMessage message={message} />
                            : <TheirMessage message={message} lastMessage={messages[lastMessageKey]}/>
                        }
                    </div>
                    <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft : isMyMessage ? '0px' : '68px'}}>
                        read-receipts
                    </div>
                </div>
            )
        })
    }

    // If there is no chat
    if (!chat) return 'Loading...';

    // If there is a chat, return a feed.
    // Composed of a Title, SubTitle (with participants names), renderMessage() results, and a input box form.
    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat?.title}</div>
                <div className="chat-subtitle">
                    {chat.people.map((person) => ` ${person.person.username}`)}
                </div>
            </div>
            { renderMessages() }
            <div style={{ height: '100px'}}></div>
            <div className="message-form-container">
                <MessageForm {...props} chatId={activeChat}/>
            </div>
        </div>
    )
}

export default ChatFeed