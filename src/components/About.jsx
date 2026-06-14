import React from 'react';
import { BrainCircuit, Cloud, Network, ShieldCheck } from 'lucide-react';
import profileImg from '../assets/kushal.jpg';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="section-header">
        <h2>About Me</h2>
      </div>

      <div className="about-layout">
        {/* Column 1: Profile photo and quick details */}
        <div className="about-profile-card glass-panel">
          <div className="profile-img-wrapper">
            <img src={profileImg} alt="Kushal RV" className="profile-img" />
          </div>
          <div className="about-bio-details">
            <div className="bio-detail-item">
              <span className="detail-label">Location:</span>
              <span className="detail-value">Coimbatore, India</span>
            </div>
            <div className="bio-detail-item">
              <span className="detail-label">Email:</span>
              <span className="detail-value">cb.en.u4cce23065@cb.students.amrita.edu</span>
            </div>
          </div>
        </div>

        {/* Column 2: Biography narrative panel */}
        <div className="about-bio glass-panel">
          <p>
            I am a <strong>Computer and Communication Engineering</strong> student at <strong>Amrita Vishwa Vidyapeetham</strong>,
            driven by a passion for understanding how complex systems communicate, coordinate, and scale.
            My technical focus centers on architecting resilient distributed systems, database engineering, and deploying high-availability cloud solutions.
          </p>
          <p>
            As an <strong>AWS Certified Solutions Architect</strong>, I apply modern architectural practices (ACID, horizontal scaling, partition tolerance) to design real-time simulation engines and transaction-heavy backends. I thrive when resolving complex networking bottlenecks and analyzing telemetry data.
          </p>
        </div>

        {/* Column 3: Core Focus Cards stack */}
        <div className="about-focus-column">
          <h3 className="focus-column-title">Core Focus</h3>
          <div className="about-focus-cards">
            <div className="focus-card glass-panel">
              <div className="focus-card-icon-wrapper">
                <Network size={16} />
              </div>
              <div className="focus-card-content">
                <h4>Distributed Systems</h4>
                <p>Exploring how services talk to each other — queues, event streams, and routing at scale.</p>
              </div>
            </div>

            <div className="focus-card glass-panel">
              <div className="focus-card-icon-wrapper">
                <Cloud size={16} />
              </div>
              <div className="focus-card-content">
                <h4>Cloud Infrastructure</h4>
                <p>Getting comfortable with AWS — containers, storage, networking. Building real world setups.</p>
              </div>
            </div>

            <div className="focus-card glass-panel">
              <div className="focus-card-icon-wrapper">
                <BrainCircuit size={16} />
              </div>
              <div className="focus-card-content">
                <h4>AI / ML</h4>
                <p>Feature engineering, models, and deep learning. Extracting patterns from data.</p>
              </div>
            </div>

            <div className="focus-card glass-panel">
              <div className="focus-card-icon-wrapper">
                <ShieldCheck size={16} />
              </div>
              <div className="focus-card-content">
                <h4>Production Engineering</h4>
                <p>Focusing on reliability and day-2 operations: logging pipelines, telemetry, chaos testing, and automated recovery. Building the invisible infrastructure that keeps production stable.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
