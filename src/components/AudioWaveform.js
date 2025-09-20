import React, { useRef, useEffect } from 'react';

const AMPLITUDE = 38;
const SPEED = 0.07;
const LINE_WIDTH = 4;
const OPACITY = 0.7;
const NUM_WAVES = 10;

function lerp(a, b, t) {
  return a + (b - a) * t;
}

const AudioWaveform = ({ className = '', style = {}, ...props }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  // For random amplitude, phase, and frequency per wave
  const amplitudesRef = useRef(Array(NUM_WAVES).fill(1));
  const targetAmplitudesRef = useRef(Array(NUM_WAVES).fill(1));
  const phasesRef = useRef(Array(NUM_WAVES).fill(0));
  const targetPhasesRef = useRef(Array(NUM_WAVES).fill(0));
  const freqsRef = useRef(Array(NUM_WAVES).fill(1));
  const targetFreqsRef = useRef(Array(NUM_WAVES).fill(1));
  const lastUpdateRef = useRef(Date.now());
  // Pause state
  const pausedRef = useRef(false);
  const pauseUntilRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let running = true;
    let dpr = window.devicePixelRatio || 1;
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    let t = 0;

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

    function updateWaveParams() {
      const now = Date.now();
      // Handle pause state
      if (pausedRef.current) {
        if (now >= pauseUntilRef.current) {
          pausedRef.current = false;
        } else {
          // During pause, keep amplitudes low, don't update phase/freq
          for (let i = 0; i < NUM_WAVES; i++) {
            targetAmplitudesRef.current[i] = 0.05 + Math.random() * 0.07;
          }
        }
        // Still lerp toward target amplitudes for smoothness
        for (let i = 0; i < NUM_WAVES; i++) {
          amplitudesRef.current[i] = lerp(
            amplitudesRef.current[i],
            targetAmplitudesRef.current[i],
            0.08
          );
        }
        return;
      }
      // Occasionally trigger a pause
      if (now - lastUpdateRef.current > 700 + Math.random() * 300) {
        lastUpdateRef.current = now;
        if (Math.random() < 0.2) { // 1 in 5 chance
          pausedRef.current = true;
          pauseUntilRef.current = now + 120 + Math.random() * 180;
          for (let i = 0; i < NUM_WAVES; i++) {
            targetAmplitudesRef.current[i] = 0.05 + Math.random() * 0.07;
          }
        } else {
          for (let i = 0; i < NUM_WAVES; i++) {
            targetAmplitudesRef.current[i] = 0.3 + Math.random() * 0.8;
            targetPhasesRef.current[i] = Math.random() * Math.PI * 2;
            targetFreqsRef.current[i] = 1.1 + Math.random() * 1.2;
          }
        }
      }
      // Smoothly interpolate current params toward target
      for (let i = 0; i < NUM_WAVES; i++) {
        amplitudesRef.current[i] = lerp(
          amplitudesRef.current[i],
          targetAmplitudesRef.current[i],
          0.08
        );
        phasesRef.current[i] = lerp(
          phasesRef.current[i],
          targetPhasesRef.current[i],
          0.08
        );
        freqsRef.current[i] = lerp(
          freqsRef.current[i],
          targetFreqsRef.current[i],
          0.08
        );
      }
    }

    function draw() {
      updateWaveParams();
      ctx.clearRect(0, 0, width, height);
      for (let w = 0; w < NUM_WAVES; w++) {
        const waveAmp = AMPLITUDE * amplitudesRef.current[w];
        const waveFreq = freqsRef.current[w];
        const wavePhase = w * 0.7 + phasesRef.current[w];
        const opacity = 0.13 + 0.08 * Math.cos(w * Math.PI / (NUM_WAVES - 1));
        // Gradient for the wave
        const grad = ctx.createLinearGradient(0, 0, width, 0);
        grad.addColorStop(0, '#3b82f6'); // blue
        grad.addColorStop(0.5, '#8b5cf6'); // purple
        grad.addColorStop(1, '#f59e42'); // orange
        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.shadowColor = '#f59e42';
        ctx.shadowBlur = 18;
        ctx.strokeStyle = grad;
        ctx.lineWidth = LINE_WIDTH;
        ctx.beginPath();
        for (let x = 0; x <= width; x += 2) {
          const normX = x / width;
          const phaseOffset = t * 0.12 + w * 0.8 + phasesRef.current[w];
          let y =
            height / 2 +
            (
              Math.sin(normX * Math.PI * 2 * waveFreq + wavePhase + phaseOffset) * (0.6 + Math.sin(t * 0.08 + w) * 0.2) +
              Math.sin(normX * Math.PI * 6 + wavePhase + phaseOffset * 1.2) * (0.25 + Math.sin(t * 0.15 + w) * 0.08) +
              Math.sin(normX * Math.PI * 13 + wavePhase + phaseOffset * 1.7) * (0.12 + Math.sin(t * 0.2 + w) * 0.04)
            ) * waveAmp;
          // Make troughs deeper
          if (y > height / 2) {
            // peak
          } else {
            y = height / 2 - (Math.abs(y - height / 2) * 1.3);
          }
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.restore();
      }
      t += 0.02;
      if (running) animationRef.current = requestAnimationFrame(draw);
    }
    draw();
    return () => {
      running = false;
      window.removeEventListener('resize', resize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div
      className={`w-full h-24 flex items-center justify-center ${className}`}
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

export default AudioWaveform;

/*
.line-button {
  background: none;
  border: none;
  color: #4f46e5;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.5em 0.8em;
  border-bottom: 2px solid #818cf8;
  border-radius: 0;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s;
  outline: none;
}
.line-button:hover, .line-button:focus {
  color: #312e81;
  border-bottom: 2px solid #f59e42;
  background: linear-gradient(90deg, rgba(129,140,248,0.08) 0%, rgba(245,158,66,0.08) 100%);
}
.line-button:active {
  color: #1e1b4b;
  border-bottom: 2px solid #3b82f6;
}
*/ 