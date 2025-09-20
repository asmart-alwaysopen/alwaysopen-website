import React, { useRef, useEffect } from 'react';

const SineWaveform = ({ className = '', style = {}, ...props }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let running = true;
    let dpr = window.devicePixelRatio || 1;
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    let time = 0;

    function resize() {
      dpr = window.devicePixelRatio || 1;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }
    
    resize();
    window.addEventListener('resize', resize);

    function draw() {
      ctx.clearRect(0, 0, width, height);
      
      // Draw multiple wave layers for depth
      const waves = [
        {
          color: 'rgba(124, 58, 237, 0.4)', // Purple
          frequency: 2,
          amplitude: height * 0.25,
          speed: 0.02,
          offset: 0
        },
        {
          color: 'rgba(59, 130, 246, 0.3)', // Blue
          frequency: 1.5,
          amplitude: height * 0.2,
          speed: 0.015,
          offset: Math.PI / 3
        },
        {
          color: 'rgba(168, 85, 247, 0.25)', // Light purple
          frequency: 2.5,
          amplitude: height * 0.18,
          speed: 0.025,
          offset: Math.PI / 2
        },
        {
          color: 'rgba(124, 58, 237, 0.2)', // Purple
          frequency: 1.8,
          amplitude: height * 0.15,
          speed: 0.018,
          offset: Math.PI / 4
        },
        {
          color: 'rgba(59, 130, 246, 0.15)', // Blue
          frequency: 2.2,
          amplitude: height * 0.12,
          speed: 0.022,
          offset: Math.PI / 6
        },
        {
          color: 'rgba(168, 85, 247, 0.12)', // Light purple
          frequency: 1.3,
          amplitude: height * 0.1,
          speed: 0.012,
          offset: Math.PI / 8
        }
      ];
      
      waves.forEach((wave, index) => {
        // Create gradient for each wave
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, wave.color);
        gradient.addColorStop(0.5, wave.color.replace('0.4', '0.6').replace('0.3', '0.5').replace('0.25', '0.4'));
        gradient.addColorStop(1, wave.color);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1 + index * 0.2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
        // Add shadow for glow effect
        ctx.shadowColor = wave.color;
        ctx.shadowBlur = 6 + index * 2;
        
        ctx.beginPath();
        
        // Draw sine wave
        for (let x = 0; x <= width; x += 1) {
          const normalizedX = x / width;
          const verticalOffset = Math.sin(time * 0.01 + index * 0.5) * height * 0.02; // Vertical wave movement
          
          // Dynamic amplitude that changes over time and position
          const dynamicAmplitude = wave.amplitude * (0.7 + 0.3 * Math.sin(time * 0.005 + normalizedX * Math.PI * 2 + index * 0.3));
          
          // Animated phase that makes crests and troughs move from left to right
          const animatedPhase = time * wave.speed + wave.offset + index * 0.2;
          
          const y = height / 2 + 
                   Math.sin(normalizedX * Math.PI * 2 * wave.frequency + animatedPhase) * dynamicAmplitude +
                   verticalOffset;
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.stroke();
      });
      
      time += 1;
      if (running) {
        animationRef.current = requestAnimationFrame(draw);
      }
    }
    
    draw();
    
    return () => {
      running = false;
      window.removeEventListener('resize', resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`sine-waveform ${className}`}
      style={style}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ width: '100%', height: '100%', display: 'block' }}
        aria-hidden="true"
      />
    </div>
  );
};

export default SineWaveform; 