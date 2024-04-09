
/*
    A message component specific to my message.
    My and thiers are seperate for formatting.

    Can handle photos or text
    Input: message object
*/

const MyMessage = ({message}) => {
    // If there are photos (attachments), return an html img with the attributes filled in.
    if(message?.attachments?.length > 0) {
        return (
            <img
                src={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{float: 'right'}}
            />
        )
    }
    // If it's text, return a message div (for css stuff) with the text filled in
    return (
        <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3b2a50'}}>
            {message.text}
        </div> 
    )
}

export default MyMessage;