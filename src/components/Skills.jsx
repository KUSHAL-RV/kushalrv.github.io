import React, { useState } from 'react';
import { BrainCircuit, Cloud, Code2, Database, LayoutGrid, Terminal } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('languages');

  const categories = [
    { id: 'languages', label: 'Languages', icon: <Terminal size={18} /> },
    { id: 'web', label: 'Web & Frameworks', icon: <Code2 size={18} /> },
    { id: 'cloud', label: 'Cloud & Tools', icon: <Cloud size={18} /> },
    { id: 'databases', label: 'Databases', icon: <Database size={18} /> },
    { id: 'ai', label: 'AI / ML & Other', icon: <BrainCircuit size={18} /> },
    { id: 'fundamentals', label: 'CS Fundamentals', icon: <LayoutGrid size={18} /> }
  ];

  const skillData = {
    languages: [
      { name: 'JavaScript', level: 90, color: '#f7df1e', usage: 'Web apps, backend logic, interactive sims' },
      { name: 'Python', level: 85, color: '#3776ab', usage: 'AI/ML models, scripting, data engineering' },
      { name: 'Java', level: 80, color: '#007396', usage: 'Data structures, backend service designs' },
      { name: 'C', level: 75, color: '#a8b9cc', usage: 'Operating systems research, systems design' }
    ],
    web: [
      { name: 'React.js', level: 90, color: '#61dafb', usage: 'Interactive frontend development' },
      { name: 'Node.js', level: 85, color: '#339933', usage: 'Server-side processing, API development' },
      { name: 'Express.js', level: 85, color: '#828282', usage: 'RESTful API architectures' },
      { name: 'HTML5 / CSS3', level: 95, color: '#e34f26', usage: 'Semantic layouts & animations' },
      { name: 'REST APIs', level: 90, color: '#00f2fe', usage: 'Client-server communication protocols' }
    ],
    cloud: [
      { name: 'AWS Cloud', level: 80, color: '#ff9900', usage: 'Solutions Architect Associate level services' },
      { name: 'Oracle Cloud (OCI)', level: 70, color: '#f80000', usage: 'Infrastructure, AI foundations' },
      { name: 'Git & GitHub', level: 85, color: '#f05032', usage: 'Version control, team workflows' },
      { name: 'VS Code & Tools', level: 90, color: '#007acc', usage: 'IDE customizing, extensions, coding' }
    ],
    databases: [
      { name: 'MySQL', level: 85, color: '#4479a1', usage: 'Relational schemas, query optimization, ACID' },
      { name: 'MongoDB', level: 80, color: '#47a248', usage: 'NoSQL document models, fast prototyping' }
    ],
    ai: [
      { name: 'Feature Engineering', level: 80, color: '#a855f7', usage: 'Data preprocessing, model input selection' },
      { name: 'Model Development', level: 75, color: '#a855f7', usage: 'Training, evaluation, validation' },
      { name: 'Scikit-Learn', level: 80, color: '#f89939', usage: 'Classic machine learning algorithms' },
      { name: 'TensorFlow', level: 70, color: '#ff6f00', usage: 'Deep learning implementations' },
      { name: 'LLM & RAG', level: 75, color: '#00f2fe', usage: 'Retrieval Augmented Generation pipelines' }
    ],
    fundamentals: [
      { name: 'Data Structures & Algorithms', level: 85, color: '#00f2fe', usage: 'Problem solving, efficient storage' },
      { name: 'Operating Systems', level: 80, color: '#a855f7', usage: 'Threads, processes, memory management' },
      { name: 'Computer Networks', level: 85, color: '#00f2fe', usage: 'TCP/IP layers, routing, web protocols' },
      { name: 'Software Testing', level: 75, color: '#828282', usage: 'Unit tests, debug verification' }
    ]
  };

  return (
    <section id="skills" className="section">
      <div className="section-center-header">
        <h2>Technical Skills</h2>
      </div>

      <div className="skills-container">
        {/* Navigation tabs */}
        <div className="skills-tabs glass-panel">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`skills-tab-btn ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skill cards container */}
        <div className="skills-display-grid">
          {skillData[activeTab].map((skill, index) => (
            <div
              key={index}
              className="skill-item-card glass-panel"
              style={{ '--skill-accent': skill.color }}
            >
              <div className="skill-card-top">
                <span className="skill-name">{skill.name}</span>
              </div>
              
              <p className="skill-usage-note">
                {skill.usage}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
