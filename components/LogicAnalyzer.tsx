import React, { useEffect, useRef } from 'react';

const LogicAnalyzer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let offset = 0;
    
    // Create random digital signals
    const signals = Array(8).fill(0).map(() => {
        const pattern = [];
        for(let i=0; i<50; i++) pattern.push(Math.random() > 0.5 ? 1 : 0);
        return pattern;
    });

    const draw = () => {
      if (!canvas || !ctx) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      ctx.clearRect(0, 0, rect.width, rect.height);
      ctx.lineWidth = 1.5;
      
      const signalHeight = 40;
      const stepWidth = 40;
      const speed = 1;
      
      offset -= speed;
      if (offset <= -stepWidth * signals[0].length) offset = 0;

      signals.forEach((signal, index) => {
        const yBase = index * 50 + 20;
        ctx.strokeStyle = index % 2 === 0 ? '#00f0ff' : '#00ff9d';
        ctx.globalAlpha = 0.2;
        
        ctx.beginPath();
        for (let i = 0; i < signal.length * 3; i++) {
            const val = signal[i % signal.length];
            const x = i * stepWidth + offset;
            
            if (i > 0) {
                const prevVal = signal[(i - 1) % signal.length];
                if (prevVal !== val) {
                    ctx.lineTo(x, yBase - (prevVal * signalHeight));
                }
            }
            if (i === 0) ctx.moveTo(x, yBase - (val * signalHeight));
            ctx.lineTo(x + stepWidth, yBase - (val * signalHeight));
        }
        ctx.stroke();
      });
      
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" />;
};

export default LogicAnalyzer;