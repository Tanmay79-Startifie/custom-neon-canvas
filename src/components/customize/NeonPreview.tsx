import { useEffect, useRef } from "react";

interface NeonPreviewProps {
  text: string;
  color: string;
  font: string;
  size: string;
}

export const NeonPreview = ({ text, color, font, size }: NeonPreviewProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const colorMap: Record<string, string> = {
    pink: '#ff0080',
    blue: '#0080ff',
    purple: '#8000ff',
    green: '#00ff80',
    orange: '#ff8000',
    yellow: '#ffff00',
    red: '#ff0040',
    cyan: '#00ffff'
  };

  const fontMap: Record<string, string> = {
    'modern': 'Inter, sans-serif',
    'script': 'Dancing Script, cursive',
    'bold': 'Montserrat, sans-serif',
    'retro': 'Orbitron, monospace',
    'elegant': 'Playfair Display, serif'
  };

  const sizeMap: Record<string, number> = {
    small: 48,
    medium: 72,
    large: 96,
    xlarge: 120
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 800;
    canvas.height = 300;

    // Clear canvas
    ctx.fillStyle = '#0f0f0f';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (!text) return;

    // Set font properties
    const fontSize = sizeMap[size] || 72;
    const fontFamily = fontMap[font] || 'Inter, sans-serif';
    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const neonColor = colorMap[color] || '#8000ff';

    // Create neon glow effect
    ctx.shadowColor = neonColor;
    ctx.shadowBlur = 20;
    ctx.fillStyle = neonColor;
    ctx.fillText(text, centerX, centerY);

    // Add inner glow
    ctx.shadowBlur = 40;
    ctx.fillText(text, centerX, centerY);

    // Add outer glow
    ctx.shadowBlur = 60;
    ctx.fillText(text, centerX, centerY);

    // Final bright center
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#ffffff';
    ctx.fillText(text, centerX, centerY);

  }, [text, color, font, size]);

  return (
    <div className="bg-black rounded-xl p-8 neon-border">
      <canvas 
        ref={canvasRef}
        className="w-full max-w-2xl mx-auto rounded-lg"
        style={{ maxHeight: '300px' }}
      />
    </div>
  );
};