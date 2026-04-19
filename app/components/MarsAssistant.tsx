"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMarsAssistant } from "@/app/context/MarsAssistantContext";

type ChatMessage = { role: "user" | "assistant"; content: string };

const SparkleIcon = ({ size = 16, color = "#A7AAB4" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 1L9.5 6.5L15 8L9.5 9.5L8 15L6.5 9.5L1 8L6.5 6.5L8 1Z" fill={color} />
    <path d="M13 2L13.5 3.5L15 4L13.5 4.5L13 6L12.5 4.5L11 4L12.5 3.5L13 2Z" fill={color} opacity="0.6" />
  </svg>
);

const PaperPlaneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5 1.5L7 9M14.5 1.5L10 14.5L7 9M14.5 1.5L1.5 6L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SUGGESTED_PROMPTS = [
  "What does Ishan specialise in?",
  "Tell me about his experience",
  "What tools does Ishan use?",
];

export function MarsAssistant() {
  const { isOpen, closeMars } = useMarsAssistant();
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMars();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeMars]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 300);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isLoading]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    setError(null);
    const next: ChatMessage[] = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setInputValue("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/mars", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();
      const reply = (data?.reply ?? "").trim();
      if (!reply) throw new Error("Empty reply");
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error(err);
      setError("Mars couldn't respond right now. Try again in a moment.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = () => sendMessage(inputValue);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  const hasMessages = messages.length > 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={closeMars}
          />

          <motion.div
            className="relative w-full max-w-[440px] h-[600px] max-h-[85vh] rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-2xl overflow-hidden flex flex-col"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 400px 300px at 10% -10%, rgba(255,255,255,0.06) 0%, transparent 60%)",
                zIndex: 0,
              }}
            />

            <div className="relative z-10 flex flex-col h-full p-5">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2F3037] flex items-center justify-center shrink-0">
                    <SparkleIcon size={18} color="#00F48D" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-base font-semibold leading-tight">Mars</span>
                    <span className="text-[#A7AAB4] text-xs">AI Portfolio Assistant</span>
                  </div>
                </div>
                <button
                  onClick={closeMars}
                  className="text-[#A7AAB4] hover:text-white transition-colors p-1"
                  aria-label="Close"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Body: empty state OR chat transcript */}
              <div ref={scrollRef} className="flex-1 overflow-y-auto py-4 scrollbar-hide">
                {!hasMessages ? (
                  <div className="h-full flex flex-col items-center justify-center gap-3 text-center">
                    <div className="w-14 h-14 rounded-full bg-[#2F3037] flex items-center justify-center">
                      <SparkleIcon size={24} color="#00F48D" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-white text-base font-semibold">Hey! I&apos;m Mars, Ishan&apos;s AI assistant 👋</p>
                      <p className="text-[#A7AAB4] text-sm">Ask me anything about his work &amp; experience</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    {messages.map((m, i) => (
                      <div
                        key={i}
                        className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                          m.role === "user"
                            ? "self-end bg-white/[0.1] text-white rounded-br-md"
                            : "self-start bg-[#2F3037] text-white rounded-bl-md"
                        }`}
                      >
                        {m.content}
                      </div>
                    ))}
                    {isLoading && (
                      <div className="self-start bg-[#2F3037] text-[#A7AAB4] px-3.5 py-2.5 rounded-2xl rounded-bl-md text-sm flex gap-1">
                        <span className="animate-pulse">•</span>
                        <span className="animate-pulse [animation-delay:150ms]">•</span>
                        <span className="animate-pulse [animation-delay:300ms]">•</span>
                      </div>
                    )}
                    {error && (
                      <div className="self-start bg-red-500/10 border border-red-500/20 text-red-300 px-3.5 py-2.5 rounded-2xl text-sm">
                        {error}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Suggested prompts — only show when no messages yet */}
              {!hasMessages && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {SUGGESTED_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => sendMessage(prompt)}
                      disabled={isLoading}
                      className="px-3 py-2 rounded-full bg-white/[0.06] border border-white/10 text-sm text-white hover:bg-white/[0.1] transition-colors disabled:opacity-40"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              )}

              {/* Input row */}
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about Ishan..."
                  disabled={isLoading}
                  className="flex-1 bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#A7AAB4] focus:outline-none focus:border-white/20 transition-colors disabled:opacity-60"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isLoading}
                  className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#A7AAB4] hover:text-white hover:bg-white/[0.1] transition-colors disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
                  aria-label="Send"
                >
                  <PaperPlaneIcon />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
