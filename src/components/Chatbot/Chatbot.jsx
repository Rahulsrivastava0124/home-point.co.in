import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { IoClose, IoSend } from "react-icons/io5";
import { RiChat3Line } from "react-icons/ri";
import "./chatbot.css";

const Chatbot = () => {
  const WEBHOOK_URL =
    "https://homepoint.app.n8n.cloud/webhook/77bc89c9-4c84-44ea-a234-20cbd90fc9dd";
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! 👋 Welcome to Home Point. How can we help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const storedSessionId = localStorage.getItem("chatbot_session_id");
    if (storedSessionId) {
      setSessionId(storedSessionId);
      return;
    }

    const newSessionId =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `session-${Date.now()}`;

    localStorage.setItem("chatbot_session_id", newSessionId);
    setSessionId(newSessionId);
  }, []);

  const getBotMessageFromResponse = (resultText) => {
    try {
      const parsed = JSON.parse(resultText);
      return (
        parsed?.message ||
        parsed?.response ||
        parsed?.text ||
        parsed?.data ||
        resultText
      );
    } catch (error) {
      return resultText;
    }
  };

  const formatBotText = (text) => {
    if (!text) return text;

    return text
      .replace(/\s*\*\s+/g, "\n- ")
      .replace(/\n{3,}/g, "\n\n")
      .trim();
  };

  const sendMessage = async (text) => {
    if (!text.trim() || isLoading) return;

    const userMessage = {
      id: `${Date.now()}-user`,
      text,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        sessionId: sessionId || "anonymous",
        action: "sendMessage",
        chatInput: text,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const response = await fetch(WEBHOOK_URL, requestOptions);
      const resultText = await response.text();

      const botResponse = {
        id: `${Date.now()}-bot`,
        text: formatBotText(getBotMessageFromResponse(resultText)),
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      const botResponse = {
        id: `${Date.now()}-error`,
        text: "Sorry, something went wrong. Please try again in a moment.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const messageText = inputValue;
    setInputValue("");
    sendMessage(messageText);
  };

  const handleQuickReply = (reply) => {
    sendMessage(reply);
  };

  const quickReplies = [
    "View Projects",
    "Contact Us",
    "About Us",
    "Payment Plans",
  ];

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="chatbot-button"
          aria-label="Open chatbot"
        >
          <RiChat3Line size={24} />
          <span className="chatbot-badge">1</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-container">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-content">
              <div className="chatbot-header-icon">
                <RiChat3Line size={20} />
              </div>
              <div className="chatbot-header-text">
                <h3>Home Point Assistant</h3>
                <p className="online-status">Online • Usually replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="chatbot-close-btn"
              aria-label="Close chatbot"
            >
              <IoClose size={24} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="chatbot-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message-wrapper ${message.sender}`}
              >
                <div
                  className={`message ${message.sender}`}
                  role="article"
                  aria-label={`${message.sender} message: ${message.text}`}
                >
                  <ReactMarkdown>{message.text}</ReactMarkdown>
                </div>
                <span className="message-time">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            ))}

            {isLoading && (
              <div className="message-wrapper bot">
                <div className="message bot typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}

            {messages.length === 1 && !isLoading && (
              <div className="quick-replies">
                <p>Quick replies:</p>
                <div className="quick-reply-buttons">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="quick-reply-btn"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="chatbot-input-area">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="chatbot-input"
              disabled={isLoading}
              aria-label="Chat message input"
            />
            <button
              type="submit"
              className="chatbot-send-btn"
              disabled={isLoading || !inputValue.trim()}
              aria-label="Send message"
            >
              <IoSend size={20} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
