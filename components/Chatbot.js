import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'YOUR_OPENAI_API_URL_HERE';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async () => {
    // Add user message to messages state
    setMessages([...messages, { text: input, user: true }]);

    try {
      // Create a personalized prompt based on user's message
      const userPrompt = `User: ${input}\nBot:`;

      // Send the prompt to the OpenAI API
      const response = await axios.post(API_URL, {
        prompt: userPrompt,
        max_tokens: 50, // You can adjust this to control the response length
      });

      // Add chatbot response to messages state
      setMessages([...messages, { text: response.data.choices[0].text, user: false }]);
      setInput('');
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="chatbot">
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.user ? 'user' : 'bot'}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
