import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { Terminal, X, ChevronRight, Cpu, Minimize2 } from 'lucide-react';
import { PERSONAL_INFO, SKILLS } from '../constants';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'init-0', role: 'system', text: "Initializing RiyaOS v1.0.4..." },
    { id: 'init-1', role: 'system', text: "Kernel loaded. System checks passed." },
    { id: 'init-2', role: 'system', text: "Welcome. Type 'help' to view available commands." }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleCommand = (cmd: string) => {
    const lowerCmd = cmd.trim().toLowerCase();
    let responseText = "";
    
    // Command Logic
    switch (lowerCmd) {
      case 'help':
        responseText = "Available commands:\n  about    - Brief professional summary\n  skills   - Technical capabilities\n  contact  - Communication channels\n  clear    - Clear terminal screen\n  whoami   - User identification";
        break;
      case 'about':
        responseText = `${PERSONAL_INFO.title}\n${PERSONAL_INFO.tagline}\n\n${PERSONAL_INFO.about}`;
        break;
      case 'contact':
        responseText = `[CONNECTIVITY]\nEmail:    ${PERSONAL_INFO.email}\nGitHub:   ${PERSONAL_INFO.socials.github}\nLinkedIn: ${PERSONAL_INFO.socials.linkedin}`;
        break;
      case 'skills':
        responseText = SKILLS.map(s => {
        const title = s.domain.toUpperCase();
        const items = s.categories.map(c => `${c.name}: ${c.items.join(', ')}`).join('\n');
        return `[${title}]\n${items}`;}).join('\n\n');
        break;
      case 'whoami':
        responseText = "User: Guest\nPrivileges: Read-Only\nSession: Active";
        break;
      case 'sudo':
      case 'root':
      case 'admin':
        responseText = "Error: Permission denied. You do not have root access.";
        break;
      case 'clear':
        setMessages([]);
        return;
      default:
        responseText = `Error: Command '${cmd}' not recognized. Type 'help' for a list of commands.`;
    }

    // Add slight delay for realism
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'system',
        text: responseText
      }]);
    }, 200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMsg]);
    handleCommand(input);
    setInput('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-mono">
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-cyber-950/95 backdrop-blur-md rounded-lg shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-cyber-800 overflow-hidden flex flex-col h-[500px] animate-in slide-in-from-bottom-5 fade-in duration-300 ring-1 ring-cyber-primary/20">
          {/* Terminal Header */}
          <div className="bg-cyber-900 p-3 border-b border-cyber-800 flex justify-between items-center text-cyber-secondary select-none">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <div>
                <h3 className="text-xs font-bold tracking-wider">DEBUG_CONSOLE</h3>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-white transition opacity-70 hover:opacity-100">
              <Minimize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Terminal Output */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2 font-mono text-xs scrollbar-thin scrollbar-thumb-cyber-800 scrollbar-track-transparent">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
              >
                {msg.role === 'user' ? (
                   <div className="flex items-center gap-2 text-cyber-primary mb-1">
                      <span className="text-slate-500">$</span>
                      <span>{msg.text}</span>
                   </div>
                ) : (
                   <div className="text-slate-300 whitespace-pre-wrap leading-relaxed">
                      {msg.role === 'system' && <span className="text-cyber-secondary mr-2">{'>'}</span>}
                      {msg.text}
                   </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Line */}
          <form onSubmit={handleSubmit} className="p-3 bg-cyber-950 border-t border-cyber-800 flex gap-2 items-center">
            <span className="text-cyber-secondary animate-pulse">{'>'}</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter command..."
              autoFocus={isOpen}
              className="flex-1 bg-transparent border-none p-0 text-sm focus:ring-0 text-cyber-primary placeholder-slate-700 font-mono"
              autoComplete="off"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="text-cyber-800 hover:text-cyber-primary disabled:opacity-0 transition"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center justify-center w-14 h-14 rounded-full shadow-2xl border border-cyber-primary/20 transition-all duration-300 ${isOpen ? 'bg-cyber-900 text-white' : 'bg-cyber-950 text-cyber-primary hover:bg-cyber-900 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]'}`}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Cpu className="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" />
        )}
      </button>
    </div>
  );
};

export default ChatWidget;