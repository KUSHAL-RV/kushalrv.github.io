import React, { useState } from 'react';
import { Copy, Check, Send, Mail, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const emailAddress = 'cb.en.u4cce23065@cb.students.amrita.edu';
  const [copied, setCopied] = useState(false);
  
  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    
    // Simulate sending message API request (1.5 seconds)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success notification after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section">
      <div className="section-header">
        <h2>Get In Touch</h2>
      </div>

      <div className="contact-layout">
        {/* Contact info panel */}
        <div className="contact-info glass-panel">
          <h3>Let's Collaborate</h3>
          <p>
            I am always open to discussing new project opportunities, distributed systems challenges, 
            or developer internships. Feel free to shoot a message!
          </p>

          <div className="info-channels">
            <div className="info-channel-card">
              <Mail className="channel-icon" />
              <div className="channel-details">
                <span className="channel-lbl">Email Me</span>
                <span className="channel-val">{emailAddress}</span>
              </div>
              <button 
                onClick={copyToClipboard} 
                className={`copy-btn ${copied ? 'copied' : ''}`}
                aria-label="Copy Email"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>

            <div className="info-channel-card">
              <MapPin className="channel-icon" />
              <div className="channel-details">
                <span className="channel-lbl">Location</span>
                <span className="channel-val">Amrita University, Coimbatore, India</span>
              </div>
            </div>
          </div>

          <div className="social-links-block">
            <span className="socials-label">Connect elsewhere:</span>
            <div className="social-row">
              <a href="https://www.linkedin.com/in/r-v-kushal-aa0851288" target="_blank" rel="noopener noreferrer" className="social-btn">
                <Linkedin size={18} /> LinkedIn <ExternalLink size={12} />
              </a>
              <a href="https://github.com/KUSHAL-RV" target="_blank" rel="noopener noreferrer" className="social-btn">
                <Github size={18} /> GitHub <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container glass-panel">
          {submitSuccess ? (
            <div className="form-success-message">
              <div className="success-icon-wrapper">
                <Check size={36} className="success-check-icon animate-float" />
              </div>
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for reaching out, Kushal will get back to you as soon as possible.</p>
              <button onClick={() => setSubmitSuccess(false)} className="btn btn-secondary btn-sm">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Internship / Collaboration opportunity"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="btn btn-primary submit-btn"
              >
                {isSubmitting ? (
                  <>Sending Message...</>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
