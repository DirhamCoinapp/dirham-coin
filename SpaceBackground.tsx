import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  color: string;
  hasGlow: boolean;
  vx: number;
  vy: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  decay: number;
  size: number;
}

export const SpaceBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Color palette for cosmic stars
    const starColors = [
      '#ffffff', // Crisp white
      '#bae6fd', // Soft sky blue
      '#7dd3fc', // Bright cyan sky
      '#38bdf8', // Neon electric blue
      '#e0f2fe', // Ice white
      '#fef08a', // Rare warm starlight
    ];

    // Generate stars
    const starCount = Math.min(Math.floor((width * height) / 7000), 220);
    const stars: Star[] = [];

    for (let i = 0; i < starCount; i++) {
      const size = Math.random() < 0.85 ? Math.random() * 1.4 + 0.6 : Math.random() * 2.2 + 1.2;
      const color = starColors[Math.floor(Math.random() * starColors.length)];
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size,
        baseAlpha: Math.random() * 0.6 + 0.25,
        alpha: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 0.025 + 0.008,
        twinklePhase: Math.random() * Math.PI * 2,
        color,
        hasGlow: size > 1.8,
        vx: (Math.random() - 0.5) * 0.08,
        vy: -Math.random() * 0.12 - 0.03, // gentle upward cosmic drift
      });
    }

    // Shooting stars array
    const shootingStars: ShootingStar[] = [];

    const spawnShootingStar = () => {
      // Spawn occasionally from top or right side
      const angle = (Math.PI / 4) + (Math.random() * 0.2 - 0.1); // ~45 degrees diagonal
      const startX = Math.random() * (width * 1.2) - width * 0.1;
      const startY = Math.random() * (height * 0.4);

      shootingStars.push({
        x: startX,
        y: startY,
        length: Math.random() * 90 + 70,
        speed: Math.random() * 8 + 12,
        angle,
        opacity: 1,
        decay: Math.random() * 0.015 + 0.012,
        size: Math.random() * 1.5 + 1.2,
      });
    };

    // Periodic shooting star trigger
    let nextShootingStarTime = Date.now() + 1500;

    // Mouse parallax tracking
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / width - 0.5) * 20;
      targetMouseY = (e.clientY / height - 0.5) * 20;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);

    // Animation loop
    const render = () => {
      // Smooth mouse easing
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Check if it's time for a shooting star
      const now = Date.now();
      if (now > nextShootingStarTime) {
        spawnShootingStar();
        // Next shooting star in 2.5 to 5.5 seconds
        nextShootingStarTime = now + Math.random() * 3000 + 2500;
      }

      // Draw faint constellation / cosmic network lines between close stars
      ctx.lineWidth = 0.5;
      for (let i = 0; i < stars.length; i += 2) {
        for (let j = i + 1; j < stars.length; j += 4) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 90) {
            const lineAlpha = (1 - dist / 90) * 0.12 * stars[i].alpha;
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(stars[i].x + mouseX * 0.3, stars[i].y + mouseY * 0.3);
            ctx.lineTo(stars[j].x + mouseX * 0.3, stars[j].y + mouseY * 0.3);
            ctx.stroke();
          }
        }
      }

      // Update & Render Stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Cosmic drifting
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around boundaries
        if (star.y < -10) star.y = height + 10;
        if (star.x < -10) star.x = width + 10;
        if (star.x > width + 10) star.x = -10;

        // Twinkle calculation
        star.twinklePhase += star.twinkleSpeed;
        const currentAlpha = Math.max(0.15, Math.min(1, star.baseAlpha + Math.sin(star.twinklePhase) * 0.35));

        const renderX = star.x + mouseX * (star.size * 0.3);
        const renderY = star.y + mouseY * (star.size * 0.3);

        // Halo / Glow for prominent stars
        if (star.hasGlow) {
          const glowGrad = ctx.createRadialGradient(
            renderX,
            renderY,
            0,
            renderX,
            renderY,
            star.size * 3.5
          );
          glowGrad.addColorStop(0, `rgba(56, 189, 248, ${currentAlpha * 0.4})`);
          glowGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(renderX, renderY, star.size * 3.5, 0, Math.PI * 2);
          ctx.fill();

          // Star cross flare for the brightest stars
          ctx.strokeStyle = `rgba(224, 242, 254, ${currentAlpha * 0.3})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(renderX - star.size * 3, renderY);
          ctx.lineTo(renderX + star.size * 3, renderY);
          ctx.moveTo(renderX, renderY - star.size * 3);
          ctx.lineTo(renderX, renderY + star.size * 3);
          ctx.stroke();
        }

        // Draw star core
        ctx.globalAlpha = currentAlpha;
        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(renderX, renderY, star.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // Update & Render Shooting Stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const meteor = shootingStars[i];

        meteor.x += Math.cos(meteor.angle) * meteor.speed;
        meteor.y += Math.sin(meteor.angle) * meteor.speed;
        meteor.opacity -= meteor.decay;

        if (meteor.opacity <= 0 || meteor.x > width + 100 || meteor.y > height + 100) {
          shootingStars.splice(i, 1);
          continue;
        }

        const tailX = meteor.x - Math.cos(meteor.angle) * meteor.length;
        const tailY = meteor.y - Math.sin(meteor.angle) * meteor.length;

        const meteorGrad = ctx.createLinearGradient(tailX, tailY, meteor.x, meteor.y);
        meteorGrad.addColorStop(0, 'rgba(14, 165, 233, 0)');
        meteorGrad.addColorStop(0.6, `rgba(56, 189, 248, ${meteor.opacity * 0.5})`);
        meteorGrad.addColorStop(1, `rgba(255, 255, 255, ${meteor.opacity})`);

        ctx.strokeStyle = meteorGrad;
        ctx.lineWidth = meteor.size;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(meteor.x, meteor.y);
        ctx.stroke();

        // Glowing meteor head
        ctx.fillStyle = `rgba(255, 255, 255, ${meteor.opacity})`;
        ctx.beginPath();
        ctx.arc(meteor.x, meteor.y, meteor.size * 1.3, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep Space Background Canvas with Twinkling Stars & Shooting Meteors */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
      />

      {/* Atmospheric Space Nebula Dust Clouds */}
      <div
        className="absolute -top-40 -left-40 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-sky-900/18 via-sky-600/10 to-transparent blur-[120px] opacity-70 animate-pulse"
        style={{ animationDuration: '8s' }}
      />
      <div
        className="absolute top-1/3 -right-32 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-blue-950/25 via-sky-500/10 to-transparent blur-[140px] opacity-60"
      />
      <div
        className="absolute -bottom-32 left-1/4 w-[800px] h-[600px] rounded-full bg-gradient-to-t from-sky-950/30 via-indigo-950/15 to-transparent blur-[150px] opacity-65"
      />

      {/* Subtle cosmic grid dust overlay */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/10 via-transparent to-transparent opacity-80"
      />
    </div>
  );
};
