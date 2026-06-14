import React from 'react';
import { X, Printer, Download, Mail, Linkedin, Github } from 'lucide-react';
import './ResumeModal.css';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-modal-overlay">
      <div className="resume-modal-container glass-panel animate-float-in">
        {/* Modal Header Controls */}
        <div className="resume-modal-header no-print">
          <h3>Curriculum Vitae</h3>
          <div className="header-actions">
            <a 
              href="/resume.pdf" 
              download="Kushal_RV_Resume.pdf" 
              className="btn btn-primary btn-sm"
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
            >
              <Download size={14} /> Download PDF
            </a>
            <button onClick={handlePrint} className="btn btn-secondary btn-sm" aria-label="Print/Save">
              <Printer size={14} /> Print / Save PDF
            </button>
            <button onClick={onClose} className="close-modal-btn" aria-label="Close Modal">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Resume Sheet Content */}
        <div className="resume-sheet">
          {/* Header */}
          <div className="resume-sheet-header">
            <h2>KUSHAL RV</h2>
            <div className="resume-contacts">
              <a href="mailto:cb.en.u4cce23065@cb.students.amrita.edu" className="contact-item">
                <Mail size={12} /> cb.en.u4cce23065@cb.students.amrita.edu
              </a>
              <a href="https://www.linkedin.com/in/r-v-kushal-aa0851288" target="_blank" rel="noopener noreferrer" className="contact-item">
                <Linkedin size={12} /> LinkedIn (Kushal RV)
              </a>
              <a href="https://github.com/KUSHAL-RV" target="_blank" rel="noopener noreferrer" className="contact-item">
                <Github size={12} /> GitHub (Kushal-RV)
              </a>
            </div>
          </div>

          <hr className="divider" />

          {/* Summary */}
          <div className="resume-section">
            <h4 className="section-title">SUMMARY</h4>
            <p className="section-p">
              Computer and Communication Engineering student with strong foundations in Data Structures & Algorithms, 
              Networking, Full-Stack Development, and Cloud Computing. Experienced in building distributed systems 
              and database-driven applications. AWS Certified Solutions Architect – Associate with a passion for 
              designing scalable, reliable, and efficient software solutions.
            </p>
          </div>

          {/* Education */}
          <div className="resume-section">
            <h4 className="section-title">EDUCATION</h4>
            <div className="education-row">
              <div className="row-header">
                <strong>B.Tech — Computer and Communication Engineering</strong>
                <span className="row-date">Aug 2023 – Present</span>
              </div>
              <div className="row-sub">
                <span>Amrita Vishwa Vidyapeetham, Coimbatore, India</span>
                <span className="row-metric">CGPA: 7.48</span>
              </div>
            </div>
            <div className="education-row">
              <div className="row-header">
                <strong>Higher Secondary (AISSCE) & High School (SSLC)</strong>
                <span className="row-date">Jun 2023 & Apr 2021</span>
              </div>
              <div className="row-sub">
                <span>Sri Chaitanya Techno School, Hosur, India</span>
                <span className="row-metric">AISSCE: 81.2% | SSLC: 87%</span>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="resume-section">
            <h4 className="section-title">TECHNICAL SKILLS</h4>
            <table className="skills-table">
              <tbody>
                <tr>
                  <td><strong>Languages</strong></td>
                  <td>C, Python, Java, JavaScript</td>
                </tr>
                <tr>
                  <td><strong>Web & Frameworks</strong></td>
                  <td>HTML, CSS, React, Node.js, Express.js, REST APIs</td>
                </tr>
                <tr>
                  <td><strong>Databases</strong></td>
                  <td>MySQL, MongoDB</td>
                </tr>
                <tr>
                  <td><strong>AI / ML</strong></td>
                  <td>Feature Engineering, Model Development, Scikit-learn, TensorFlow</td>
                </tr>
                <tr>
                  <td><strong>Cloud & Tools</strong></td>
                  <td>AWS, Oracle Cloud Infrastructure, Git, GitHub, VS Code</td>
                </tr>
                <tr>
                  <td><strong>CS Fundamentals</strong></td>
                  <td>Data Structures & Algorithms, Operating Systems, Networking</td>
                </tr>
                <tr>
                  <td><strong>Other</strong></td>
                  <td>IoT, LLM & RAG, Agile Development, Software Testing</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Projects */}
          <div className="resume-section">
            <h4 className="section-title">PROJECTS</h4>
            <div className="project-row">
              <div className="row-header">
                <strong>
                  Distributed System Design & Simulation Platform{' '}
                  <a href="https://github.com/KUSHAL-RV" target="_blank" rel="noopener noreferrer" className="resume-project-link">
                    <Github size={12} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '4px' }} />
                  </a>
                </strong>
                <span className="row-date">Jan 2026 – Mar 2026</span>
              </div>
              <span className="row-tech">Next.js, Node.js, Redis, Kafka, Docker</span>
              <ul className="row-bullet-points">
                <li>Built an interactive platform for designing and simulating distributed system architectures using Next.js, Node.js, and WebSocket-based real-time communication.</li>
                <li>Implemented 15+ distributed components including load balancers, message queues, cache layers, and databases with configurable routing and fault-tolerance behaviors.</li>
                <li>Developed an event-driven simulation engine modeling CAP theorem trade-offs, network partitions, latency, and failure injection across distributed topologies.</li>
                <li>Designed real-time telemetry dashboards and analytics, enabling performance monitoring and reducing architecture design iteration time by ~40%.</li>
              </ul>
            </div>
            <div className="project-row">
              <div className="row-header">
                <strong>
                  Farm Management System (E-Commerce Platform){' '}
                  <a href="https://github.com/KUSHAL-RV" target="_blank" rel="noopener noreferrer" className="resume-project-link">
                    <Github size={12} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '4px' }} />
                  </a>
                </strong>
                <span className="row-date">Sep 2025 – Nov 2025</span>
              </div>
              <span className="row-tech">MySQL, Node.js, Express.js, React</span>
              <ul className="row-bullet-points">
                <li>Designed normalized relational schema (Farmers, Crops, Inventory, Sales) in MySQL with ACID transactions and referential integrity constraints.</li>
                <li>Built ETL pipeline for sales data aggregation; indexed queries and stored procedures reduced query execution time by ~40% for high-volume operations.</li>
                <li>Engineered real-time analytics dashboard for inventory turnover, sales trends, and farmer performance; boosted operational efficiency by ~30%.</li>
              </ul>
            </div>
            <div className="project-row">
              <div className="row-header">
                <strong>
                  Sleep Classification using Machine Learning Algorithms{' '}
                  <a href="https://github.com/KUSHAL-RV" target="_blank" rel="noopener noreferrer" className="resume-project-link">
                    <Github size={12} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '4px' }} />
                  </a>
                </strong>
                <span className="row-date">Feb 2025 – Mar 2025</span>
              </div>
              <span className="row-tech">Python, Scikit-learn, PyTorch, NeuroKit2</span>
              <ul className="row-bullet-points">
                <li>Processed and analysed EEG/ECG signal data from the PhysioNet Sleep-EDF dataset (~8,000 epochs), extracting time-domain, frequency-domain, and NeuroKit2-based features for multi-class sleep stage classification.</li>
                <li>Trained and benchmarked 6 ML models (RNN, CNN, SVM, KNN, Logistic Regression, K-Means) using Scikit-learn and PyTorch, evaluating with accuracy, ROC-AUC, F1-score, and confusion matrix across 5 sleep stages.</li>
                <li>Achieved best performance with RNN (AUC = 0.92, F1 = 0.89); built end-to-end pipeline covering preprocessing, feature extraction, hyperparameter tuning, and visualisation using modular Python scripts.</li>
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div className="resume-section">
            <h4 className="section-title">CERTIFICATIONS</h4>
            <ul className="bullets-list">
              <li><strong>AWS Certified Solutions Architect – Associate</strong> — Amazon Web Services</li>
              <li><strong>Oracle Cloud Infrastructure – AI Foundations Associate</strong> — Oracle</li>
              <li><strong>Cisco Networking Academy – Networking Basics</strong> — Cisco</li>
            </ul>
          </div>

          {/* Leadership & Activities */}
          <div className="resume-section">
            <h4 className="section-title">LEADERSHIP & ACTIVITIES</h4>
            <ul className="bullets-list">
              <li><strong>Core Member, Elite Club</strong> — Amrita Vishwa Vidyapeetham; contributed to technical events, team-building initiatives, and student-led projects.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
