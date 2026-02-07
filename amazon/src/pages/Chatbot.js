import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import './Chatbot.css';

const Chatbot = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hello! I\'m your Amazon assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    { id: 1, text: 'Track my order', keyword: 'track' },
    { id: 2, text: 'Return policy', keyword: 'return' },
    { id: 3, text: 'Help with payment', keyword: 'payment' },
    { id: 4, text: 'Delivery info', keyword: 'delivery' }
  ];

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();

    // Order tracking
    if (lowerMessage.includes('track') || lowerMessage.includes('order')) {
      return 'You can track your orders by going to "You" section → "Your Orders". Would you like me to take you there?';
    }

    // Returns
    if (lowerMessage.includes('return') || lowerMessage.includes('refund')) {
      return 'Our return policy allows returns within 30 days of delivery. To initiate a return, go to Your Orders and select the item you wish to return. Need more help?';
    }

    // Payment
    if (lowerMessage.includes('payment') || lowerMessage.includes('pay')) {
      return 'We accept various payment methods including Credit/Debit Cards, UPI, Net Banking, and Cash on Delivery. Is there a specific payment issue you\'re facing?';
    }

    // Delivery
    if (lowerMessage.includes('deliver') || lowerMessage.includes('shipping')) {
      return 'Standard delivery takes 3-5 business days. Free delivery on orders above ₹499. For faster delivery, check out our Prime membership!';
    }

    // Help
    if (lowerMessage.includes('help') || lowerMessage.includes('support')) {
      return 'I can help you with:\n• Order tracking\n• Returns & refunds\n• Payment issues\n• Delivery information\n• Product queries\n\nWhat would you like to know more about?';
    }

    // Prime
    if (lowerMessage.includes('prime')) {
      return 'Amazon Prime offers free same-day/one-day delivery, exclusive deals, Prime Video, and more! Want to know about Prime benefits?';
    }

    // Cart
    if (lowerMessage.includes('cart')) {
      return 'Your shopping cart is accessible from the cart icon in the header or bottom navigation. Would you like to view your cart?';
    }

    // Greetings
    if (lowerMessage.includes('hi') || lowerMessage.includes('hello') || lowerMessage.includes('hey')) {
      return 'Hello! 👋 How can I assist you with your Amazon shopping today?';
    }

    // Thanks
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return 'You\'re welcome! Is there anything else I can help you with today? 😊';
    }

    // Default response
    return 'I understand you need help. Could you please be more specific? You can ask me about orders, returns, payments, delivery, or general help.';
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = getBotResponse(inputText);
      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickReply = (reply) => {
    setInputText(reply.text);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="chatbot-page">
      <Header />

      <div className="chatbot-content">
        <div className="chat-header">
          <button className="back-button" onClick={() => navigate('/home')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <div className="chat-header-info">
            <div className="bot-avatar">🤖</div>
            <div className="bot-info">
              <h3>Amazon Assistant</h3>
              <span className="bot-status">Online</span>
            </div>
          </div>
        </div>

        <div className="messages-container">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
            >
              {message.sender === 'bot' && (
                <div className="message-avatar">🤖</div>
              )}
              <div className="message-content">
                <div className="message-bubble">
                  <p>{message.text}</p>
                </div>
                <span className="message-time">{formatTime(message.timestamp)}</span>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="message bot-message">
              <div className="message-avatar">🤖</div>
              <div className="message-content">
                <div className="message-bubble typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className="quick-replies">
          {quickReplies.map((reply) => (
            <button
              key={reply.id}
              className="quick-reply-btn"
              onClick={() => handleQuickReply(reply)}
            >
              {reply.text}
            </button>
          ))}
        </div>

        <div className="chat-input-container">
          <input
            type="text"
            className="chat-input"
            placeholder="Type your message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            className="send-button"
            onClick={handleSendMessage}
            disabled={!inputText.trim()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Chatbot;
