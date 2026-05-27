'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  id: string
  type: 'user' | 'bot'
  text: string
  timestamp: Date
}

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      text: 'Hi! 👋 How can Hallor help you today?',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [userInfo, setUserInfo] = useState({ name: '', email: '' })
  const [showUserForm, setShowUserForm] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      // Send message to backend
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: input,
          userInfo,
          timestamp: new Date(),
        }),
      })

      const data = await response.json()

      // Add bot response
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: data.reply || "Thanks for reaching out! We'll get back to you shortly.",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error('Failed to send message:', error)
      const errorMessage: Message = {
        id: (Date.now() + 2).toString(),
        type: 'bot',
        text: 'Sorry, something went wrong. Please try again or email us directly at info@hallorgroup.com',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleStartChat = (e: React.FormEvent) => {
    e.preventDefault()
    if (userInfo.name && userInfo.email) {
      setShowUserForm(false)
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          type: 'bot',
          text: `Great! Nice to meet you, ${userInfo.name}. How can we help you today?`,
          timestamp: new Date(),
        },
      ])
    }
  }

  return (
    <>
      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-4 md:right-6 w-96 max-w-[calc(100vw-2rem)] h-[600px] md:h-[500px] bg-black rounded-2xl border border-[rgba(0,217,255,0.3)] shadow-2xl z-40 flex flex-col overflow-hidden"
            style={{
              boxShadow: '0 25px 50px rgba(0, 217, 255, 0.2)',
            }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#00D9FF] to-[#0099FF] p-4 md:p-5 text-black flex items-center justify-between">
              <div>
                <h3 className="font-900 text-lg">Hallor Support</h3>
                <p className="text-sm opacity-80">We typically reply in minutes</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-black hover:opacity-70 transition"
              >
                ✕
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 md:p-5 space-y-4 bg-black">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${
                    message.type === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 text-sm ${
                      message.type === 'user'
                        ? 'bg-[#00D9FF] text-black font-500'
                        : 'bg-[rgba(0,217,255,0.1)] text-white border border-[rgba(0,217,255,0.3)]'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}

              {/* User Form */}
              {showUserForm && isOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-[rgba(0,217,255,0.05)] border border-[rgba(0,217,255,0.2)] rounded-lg p-4 mt-4"
                >
                  <form onSubmit={handleStartChat} className="space-y-3">
                    <input
                      type="text"
                      placeholder="Your name"
                      value={userInfo.name}
                      onChange={(e) =>
                        setUserInfo({ ...userInfo, name: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-black border border-[rgba(0,217,255,0.3)] rounded-lg text-white text-sm placeholder-[rgba(255,255,255,0.5)] focus:outline-none focus:border-[#00D9FF]"
                    />
                    <input
                      type="email"
                      placeholder="Your email"
                      value={userInfo.email}
                      onChange={(e) =>
                        setUserInfo({ ...userInfo, email: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-black border border-[rgba(0,217,255,0.3)] rounded-lg text-white text-sm placeholder-[rgba(255,255,255,0.5)] focus:outline-none focus:border-[#00D9FF]"
                    />
                    <button
                      type="submit"
                      className="w-full bg-[#00D9FF] text-black font-bold py-2 rounded-lg hover:opacity-90 transition"
                    >
                      Start Chat
                    </button>
                  </form>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            {!showUserForm && (
              <form
                onSubmit={handleSendMessage}
                className="p-4 md:p-5 bg-[rgba(0,217,255,0.05)] border-t border-[rgba(0,217,255,0.2)] flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1 px-3 py-2 bg-black border border-[rgba(0,217,255,0.3)] rounded-lg text-white text-sm placeholder-[rgba(255,255,255,0.5)] focus:outline-none focus:border-[#00D9FF] disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="px-4 py-2 bg-[#00D9FF] text-black font-bold rounded-lg hover:opacity-90 transition disabled:opacity-50"
                >
                  {isLoading ? '...' : '→'}
                </button>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-[#00D9FF] to-[#0099FF] rounded-full shadow-2xl flex items-center justify-center text-white font-bold text-2xl z-50 hover:shadow-lg transition"
        style={{
          boxShadow: isOpen
            ? '0 20px 40px rgba(0, 217, 255, 0.3)'
            : '0 15px 30px rgba(0, 217, 255, 0.25)',
        }}
      >
        {isOpen ? '✕' : '💬'}
      </motion.button>
    </>
  )
}
