import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './app.css';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="bd7ec66b-be09-4876-8971-a0062e26c16b"
            userName="Sebastiantu"
            userSecret="12345"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;