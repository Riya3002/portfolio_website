import React, { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';

const SystemMonitor: React.FC = () => {
  const [cpuLoad, setCpuLoad] = useState([20, 45, 30, 60]);
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuLoad(prev => prev.map(v => Math.min(100, Math.max(10, v + (Math.random() * 20 - 10)))));
      setBlink(b => !b);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-cyber-950/90 border border-cyber-800 rounded-lg p-4 font-mono text-xs w-full max-w-sm shadow-[0_0_30px_rgba(0,240,255,0.1)] relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-primary to-transparent opacity-50"></div>
      
      <div className="flex justify-between items-center mb-4 border-b border-cyber-800 pb-2">
        <span className="text-cyber-primary font-bold flex items-center gap-2">
          <Activity className="w-3 h-3" /> SYSTEM_MONITOR
        </span>
        <span className="text-cyber-secondary flex items-center gap-1">
          <span className={`w-2 h-2 rounded-full bg-cyber-secondary ${blink ? 'opacity-100' : 'opacity-20'}`}></span>
          LIVE
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between">
           <span className="text-slate-400">CORE_TEMP</span>
           <span className="text-cyber-secondary">42°C</span>
        </div>
        <div className="flex justify-between">
           <span className="text-slate-400">VCC_RAIL</span>
           <span className="text-cyber-primary">3.30V</span>
        </div>

        <div className="space-y-1 pt-2 border-t border-cyber-800/50">
          {cpuLoad.map((load, i) => (
            <div key={i} className="flex items-center gap-2">
               <span className="text-slate-500 w-8">CPU{i}</span>
               <div className="flex-1 h-2 bg-cyber-900 rounded-sm overflow-hidden">
                 <div className="h-full bg-cyber-primary transition-all duration-500" style={{ width: `${load}%` }}></div>
               </div>
            </div>
          ))}
        </div>

        <div className="h-20 overflow-hidden text-[10px] text-slate-500 pt-2 border-t border-cyber-800/50 space-y-1">
           <p><span className="text-blue-400">[INFO]</span> Initializing UART1...</p>
           <p><span className="text-green-400">[OK]</span> Baud rate set to 115200</p>
           <p><span className="text-blue-400">[INFO]</span> Connecting to MQTT broker...</p>
           <p className={blink ? 'opacity-100' : 'opacity-50'}><span className="text-yellow-400">[WAIT]</span> Awaiting handshake...</p>
        </div>
      </div>
    </div>
  );
};

export default SystemMonitor;