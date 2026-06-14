import React, { useState } from 'react';
import { Award, CheckCircle2, ExternalLink, Search } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const certs = [
    {
      title: 'AWS Certified Solutions Architect - Associate',
      issuer: 'Amazon Web Services (AWS)',
      issuerKey: 'aws',
      date: 'Feb 2026',
      id: 'AWS-ASA-9941',
      skills: ['Cloud Architecture', 'S3 & EC2 VPC Services', 'Security IAM', 'Serverless Lambda', 'Load Balancing & Auto-Scaling'],
      link: 'https://aws.amazon.com/certification/'
    },
    {
      title: 'Oracle Cloud Infrastructure - AI Foundations Associate',
      issuer: 'Oracle',
      issuerKey: 'oracle',
      date: 'Dec 2025',
      id: 'OCI-AIF-7721',
      skills: ['Artificial Intelligence', 'Generative AI', 'Large Language Models (LLMs)', 'OCI Machine Learning Services'],
      link: 'https://education.oracle.com/'
    },
    {
      title: 'Cisco Networking Basics',
      issuer: 'Cisco Networking Academy',
      issuerKey: 'cisco',
      date: 'Oct 2025',
      id: 'CISCO-NET-2209',
      skills: ['Routing & Switching', 'TCP/IP Model', 'IP Addressing & Subnetting', 'Network Security Foundations'],
      link: 'https://www.netacad.com/'
    }
  ];

  const filteredCerts = certs.filter((cert) => {
    const matchesFilter = filter === 'all' || cert.issuerKey === filter;
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cert.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="certifications" className="section">
      <div className="section-header">
        <h2>Certifications</h2>
      </div>

      {/* Searching and Filtering controls */}
      <div className="certs-controls">
        <div className="certs-search-wrapper glass-panel">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search credentials, skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="certs-filters glass-panel">
          {['all', 'aws', 'oracle', 'cisco'].map((key) => (
            <button
              key={key}
              className={`filter-btn ${filter === key ? 'active' : ''}`}
              onClick={() => setFilter(key)}
            >
              {key === 'all' ? 'All Vendors' : key.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Certification cards layout */}
      <div className="certs-grid">
        {filteredCerts.length > 0 ? (
          filteredCerts.map((cert, index) => (
            <div key={index} className="cert-card glass-panel">
              <div className="cert-card-header">
                <div className="cert-badge-wrapper">
                  <Award className="cert-award-icon" />
                </div>
                <div className="cert-title-area">
                  <h3>{cert.title}</h3>
                  <span className="cert-issuer">{cert.issuer}</span>
                </div>
              </div>

              <div className="cert-details">
                <div className="cert-detail-row">
                  <span className="cert-lbl">Issued:</span>
                  <span className="cert-val">{cert.date}</span>
                </div>
                <div className="cert-detail-row">
                  <span className="cert-lbl">Credential ID:</span>
                  <span className="cert-val font-mono">{cert.id}</span>
                </div>
              </div>

              <div className="cert-skills-area">
                <span className="skills-title">Core Competencies:</span>
                <div className="cert-skills-list">
                  {cert.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="cert-skill-tag">
                      <CheckCircle2 size={12} className="check-icon" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary btn-sm cert-verify-btn"
              >
                Verify Credential <ExternalLink size={14} />
              </a>
            </div>
          ))
        ) : (
          <div className="no-certs glass-panel">
            <p>No certifications matching your filters or search term were found.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
