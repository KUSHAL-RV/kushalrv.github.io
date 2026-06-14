import React, { useState } from 'react';
import { BookOpen, Calendar, ChevronDown, ChevronUp, GraduationCap, Users } from 'lucide-react';
import './Timeline.css';

const Timeline = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const timelineItems = [
    {
      id: 'btech',
      type: 'education',
      title: 'B.Tech — Computer and Communication Engineering',
      institution: 'Amrita Vishwa Vidyapeetham, Coimbatore, India',
      period: 'Aug 2023 - Present',
      highlight: 'CGPA: 7.48',
      icon: <GraduationCap size={18} />,
      details: [
        'Rigorous study of computer architecture, communication engineering, and software design.',
        'Core coursework: Data Structures & Algorithms, Operating Systems, Database Management Systems (DBMS), Computer Networks.',
        'Completed practical lab projects simulating TCP/IP socket connections and multi-threaded scheduling algorithms.',
        'Active participant in coding hackathons and technical symposiums.'
      ]
    },
    {
      id: 'schooling',
      type: 'education',
      title: 'Higher Secondary (AISSCE) & High School (SSLC)',
      institution: 'Sri Chaitanya Techno School, Hosur, India',
      period: 'Jun 2023 & Apr 2021',
      highlight: 'AISSCE: 81.2% | SSLC: 87%',
      icon: <BookOpen size={18} />,
      details: [
        'Focused studies in Physics, Chemistry, Mathematics, and Computer Science.',
        'Developed foundational programming models in C++ and Python.',
        'Secured distinction grades across all science streams.'
      ]
    },
    {
      id: 'elite-club',
      type: 'leadership',
      title: 'Core Member — Elite Club',
      institution: 'Amrita Vishwa Vidyapeetham',
      period: 'Sep 2024 - Present',
      highlight: 'Leadership & Activities',
      icon: <Users size={18} />,
      details: [
        'Spearheaded organizing team for campus-wide technical events, increasing attendance by 30%.',
        'Facilitated peer-to-peer programming review sessions on Data Structures and Web Development.',
        'Coordinated student-led technical projects and volunteer initiatives.'
      ]
    }
  ];

  const toggleExpand = (id) => {
    if (expandedItem === id) {
      setExpandedItem(null);
    } else {
      setExpandedItem(id);
    }
  };

  return (
    <section id="timeline" className="section">
      <div className="section-header">
        <h2>Education & Leadership</h2>
      </div>

      <div className="timeline-container">
        {timelineItems.map((item, idx) => {
          const isExpanded = expandedItem === item.id;
          return (
            <div key={idx} className="timeline-item">
              {/* Left timeline line marker */}
              <div className="timeline-marker">
                <div className={`timeline-marker-icon ${item.type === 'education' ? 'edu' : 'lead'}`}>
                  {item.icon}
                </div>
                <div className="timeline-line"></div>
              </div>

              {/* Main content box */}
              <div 
                className={`timeline-content glass-panel ${isExpanded ? 'expanded' : ''}`}
                onClick={() => toggleExpand(item.id)}
              >
                <div className="timeline-content-header">
                  <div className="timeline-title-block">
                    <h3>{item.title}</h3>
                    <span className="timeline-institution">{item.institution}</span>
                  </div>
                  
                  <div className="timeline-meta">
                    <span className="timeline-period">
                      <Calendar size={14} /> {item.period}
                    </span>
                    <span className="timeline-highlight">{item.highlight}</span>
                    <button className="expand-toggle-btn" aria-label="Toggle Details">
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                  </div>
                </div>

                {isExpanded && (
                  <div className="timeline-details">
                    <ul>
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {!isExpanded && (
                  <div className="timeline-preview-prompt">
                    <span>Click to reveal details & achievements</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Timeline;
