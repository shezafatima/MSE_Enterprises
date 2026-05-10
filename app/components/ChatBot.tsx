// "use client";

// import { useEffect, useState } from "react";
// import { MessageCircle, X, Send } from "lucide-react";

// export default function ChatBot() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState<{ sender: string; text: string }[]>([
//     { sender: "bot", text: "👋 Hi there! I'm your Haris Packages Assistant. How can I help you today?" },
//   ]);
//   const [input, setInput] = useState("");
//   const [isTyping, setIsTyping] = useState(false);

//   // Predefined quick questions
//   const quickQuestions = [
//     "Tell me about Haris Packages",
//     "What products do you offer?",
//     "How can I contact you?",
//     "Where is your company located?",
//   ];

//   const handleSend = async () => {
//     if (!input.trim()) return;

//     const userMessage = input.trim();
//     setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
//     setInput("");
//     setIsTyping(true);

//     try {
//       const res = await fetch("/api/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message: userMessage }),
//       });
//       const data = await res.json();

//       setMessages((prev) => [
//         ...prev,
//         { sender: "bot", text: data.reply || "Sorry, I didn’t understand that." },
//       ]);
//     } catch (error) {
//       setMessages((prev) => [
//         ...prev,
//         { sender: "bot", text: "⚠️ Something went wrong. Please try again later." },
//       ]);
//     }

//     setIsTyping(false);
//   };

//   const handleQuickQuestion = (q: string) => {
//     setInput(q);
//     handleSend();
//   };

//   useEffect(() => {
//     const chatBody = document.querySelector(".chat-body");
//     if (chatBody) chatBody.scrollTop = chatBody.scrollHeight;
//   }, [messages]);

//   return (
//     <>
//       {/* Floating Chat Button */}
//       <div
//         className="fixed bottom-4 right-4 z-[60]"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? (
//           <X
//             size={42}
//             className="bg-blue-500 text-white p-2 rounded-full shadow-lg cursor-pointer hover:bg-blue-600 transition-all"
//           />
//         ) : (
//           <MessageCircle
//             size={42}
//             className="bg-blue-600 text-white p-2 rounded-full shadow-lg cursor-pointer hover:bg-blue-700 transition-all"
//           />
//         )}
//       </div>

//       {/* Chat Window */}
//       {isOpen && (
//         <div
//           className="fixed bottom-20 right-6 w-80 md:w-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 z-[59]"
//         >
//           {/* Header */}
//           <div className="bg-blue-600 text-white p-3 text-center font-semibold">
//             Haris Packages Assistant
//           </div>

//           {/* Chat Body */}
//           <div className="chat-body flex-1 overflow-y-auto p-3 space-y-3 text-sm">
//             {messages.map((msg, i) => (
//               <div
//                 key={i}
//                 className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
//               >
//                 <div
//                   className={`p-2 rounded-xl max-w-[80%] ${
//                     msg.sender === "user"
//                       ? "bg-blue-600 text-white"
//                       : "bg-gray-100 text-gray-800"
//                   }`}
//                 >
//                   {msg.text}
//                 </div>
//               </div>
//             ))}
//             {isTyping && <p className="text-gray-400 text-xs">Assistant is typing...</p>}
//           </div>

//           {/* Quick Questions */}
//           <div className="p-2 flex flex-wrap gap-2 border-t border-gray-200">
//             {quickQuestions.map((q, i) => (
//               <button
//                 key={i}
//                 onClick={() => handleQuickQuestion(q)}
//                 className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full hover:bg-gray-200 transition"
//               >
//                 {q}
//               </button>
//             ))}
//           </div>

//           {/* Input */}
//           <div className="p-2 border-t border-gray-200 flex items-center">
//             <input
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && handleSend()}
//               placeholder="Type your message..."
//               className="flex-1 border rounded-full px-3 py-1 text-sm outline-none"
//             />
//             <button
//               onClick={handleSend}
//               className="ml-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
//             >
//               <Send size={16} />
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import {BotMessageSquare , X, Send } from "lucide-react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([
    {
      sender: "bot",
      text: "👋 Hi there! I'm your Haris Packages Assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const quickQuestions = [
    "Tell me about Haris Packages",
    "What products do you offer?",
    "How can I contact you?",
    "Where is your company located?",
  ];

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.reply || "Sorry, I didn’t understand that." },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "⚠️ Something went wrong. Please try again later.",
        },
      ]);
    }

    setIsTyping(false);
  };

  const handleQuickQuestion = (q: string) => {
    setInput(q);
    handleSend();
  };

  useEffect(() => {
    const chatBody = document.querySelector(".chat-body");
    if (chatBody) chatBody.scrollTop = chatBody.scrollHeight;
  }, [messages]);

  return (
    <>
      {/* Floating Message Icon (always visible) */}
      <div
        className="fixed bottom-4 right-4 z-[60]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <BotMessageSquare
          size={42}
          className={`bg-blue-600 text-white p-2 rounded-full shadow-lg cursor-pointer transition-all hover:bg-blue-700 ${
            isOpen ? "scale-95 opacity-90" : "scale-100"
          }`}
        />
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 md:w-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 z-[59]">
          {/* Header with Close Button */}
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center font-semibold">
            <span>Haris Packages Assistant</span>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-blue-700 rounded-full p-1 transition"
              aria-label="Close Chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Chat Body */}
          <div className="chat-body flex-1 overflow-y-auto p-3 space-y-3 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-2 rounded-xl max-w-[80%] ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <p className="text-gray-400 text-xs">Assistant is typing...</p>
            )}
          </div>

          {/* Quick Questions */}
          <div className="p-2 flex flex-wrap gap-2 border-t border-gray-200">
            {quickQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => handleQuickQuestion(q)}
                className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full hover:bg-gray-200 transition"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-2 border-t border-gray-200 flex items-center">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className="flex-1 border rounded-full px-3 py-1 text-sm outline-none"
            />
            <button
              onClick={handleSend}
              className="ml-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
