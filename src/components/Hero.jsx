import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, FileText, Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

const Hero = ({ onOpenResume }) => {
  const canvasRef = useRef(null);


  // Canvas Particle System
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const particleCount = Math.min(100, Math.floor((width * height) / 15000));
    const connectionDistance = 120;
    const mouse = { x: null, y: null, radius: 150 };

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse interaction (repel)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.hypot(dx, dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            this.x += Math.cos(angle) * force * 2;
            this.y += Math.sin(angle) * force * 2;
          }
        }
      }

      draw() {
        ctx.fillStyle = 'rgba(0, 242, 254, 0.4)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw background noise/grid lines if wanted, or just clean particles
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      // Connect particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < connectionDistance) {
            const alpha = (connectionDistance - dist) / connectionDistance;
            ctx.strokeStyle = `rgba(0, 242, 254, ${alpha * 0.15})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <canvas ref={canvasRef} className="hero-canvas" />
      
      <div className="hero-content">
        <div className="hero-greeting-container">
          <span className="hero-greeting animate-float">Hello, I'm</span>
        </div>
        
        <h1 className="hero-name">
          KUSHAL <span className="gradient-text">RV</span>
        </h1>
        
        <div className="hero-role-wrapper">
          <span className="hero-role-item">Cloud Architect</span>
          <span className="hero-role-dot">.</span>
          <span className="hero-role-item">Full Stack</span>
          <span className="hero-role-dot">.</span>
          <span className="hero-role-item">AI/ML</span>
          <span className="hero-role-dot">.</span>
          <span className="hero-role-item">SDE</span>
        </div>

        <p className="hero-summary">
          Full-stack and cloud-focused engineering student building distributed platforms, 
          real-time dashboards, AI/ML solutions, and database-driven applications with clean architecture.
        </p>

        <div className="hero-ctas">
          <button onClick={() => scrollTo('projects')} className="btn btn-primary">
            Explore Work <ArrowRight size={18} />
          </button>
          <button onClick={onOpenResume} className="btn btn-secondary">
            View Resume <FileText size={18} />
          </button>
          <button onClick={() => scrollTo('contact')} className="btn btn-secondary">
            Get In Touch <Mail size={18} />
          </button>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/KUSHAL-RV" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/r-v-kushal-aa0851288" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:cb.en.u4cce23065@cb.students.amrita.edu" className="social-link" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="scroll-indicator" onClick={() => scrollTo('about')}>
        <div className="mouse-wheel"></div>
      </div>
    </section>
  );
};

export default Hero;
