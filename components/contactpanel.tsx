import React, { useState } from "react";

interface ContactPanelProps {
  open: boolean;
  onClose: () => void;
}

const ContactPanel: React.FC<ContactPanelProps> = ({ open, onClose }) => {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            
        const res = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (res.ok) {
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
            setTimeout(onClose, 1500); // auto-close
        } else {
            setStatus("error");
        }
        } catch (err) {
        setStatus("error");
        }
    };

  if (!open) return null;

  return (
    <div className="fixed py-20 inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex justify-end">
      <div className="w-full max-w-md h-full bg-cyber-950 border-l border-cyber-800 p-6 flex flex-col animate-slide-left">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg md:text-xl font-bold font-mono text-white tracking-tight">
            TRANSMIT PACKET
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white text-2xl leading-none">×</button>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col flex-1">
          <input
            className="w-full mb-4 p-3 bg-black/40 border border-cyber-800 text-white font-mono text-sm rounded-sm"
            placeholder="Name"
            required
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
          />

          <input
            type="email"
            className="w-full mb-4 p-3 bg-black/40 border border-cyber-800 text-white font-mono text-sm rounded-sm"
            placeholder="Email"
            required
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />

          <textarea
            className="w-full mb-4 p-3 h-32 bg-black/40 border border-cyber-800 text-white font-mono text-sm rounded-sm resize-none"
            placeholder="Message..."
            required
            value={formData.message}
            onChange={e => setFormData({ ...formData, message: e.target.value })}
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-3 bg-cyber-primary text-black font-mono font-bold text-sm rounded-sm hover:bg-white transition disabled:opacity-50"
          >
            {status === "sending" ? "TRANSMITTING..." : "SEND"}
          </button>
        </form>

        {/* STATUS */}
        {status === "success" && (
          <p className="text-[10px] mt-4 text-cyber-secondary font-mono"> PACKET DELIVERED // Awaiting Operator Response</p>
        )}
        {status === "error" && (
          <p className="text-[10px] mt-4 text-red-400 font-mono">ERROR: Transmission Failed</p>
        )}
        {status === "idle" && (
          <p className="text-[10px] mt-4 text-slate-500 font-mono"> STATUS: Awaiting Transmission...</p>
        )}
      </div>
    </div>
  );
};

export default ContactPanel;
