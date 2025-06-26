import { useState } from 'react';
import { askQuestion } from '../services/api';
import Message from './Message';
import Loader from './Loader';

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSend() {
    if (!input.trim()) return;
    const userMsg = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const answer = await askQuestion(userMsg.text);
      const botMsg = { sender: 'bot', text: answer };
      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      setMessages(prev => [...prev, { sender: 'bot', text: 'Error: ' + err.message }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="chatbox">
      <div className="messages">
        {messages.map((msg, i) => (
          <Message key={i} {...msg} />
        ))}
        {loading && <Loader />}
      </div>
      <div className="input-area">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          placeholder="Escriba su pregunta..."
        />
        <button onClick={handleSend}>Enviar</button>
      </div>
    </div>
  );
}
