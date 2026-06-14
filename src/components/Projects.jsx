import React, { useState, useEffect } from 'react';
import { Activity, AlertTriangle, ArrowRight, Github, Info, Play, RotateCcw, ShieldAlert, Sliders } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  // --- Project 3: Sleep Classification State ---
  const [activeSleepModel, setActiveSleepModel] = useState('rnn');
  const [sleepPredicting, setSleepPredicting] = useState(false);
  const [classificationProgress, setClassificationProgress] = useState(0);
  const [classificationResult, setClassificationResult] = useState(null);
  const [selectedEpoch, setSelectedEpoch] = useState('1043');

  const sleepModels = {
    rnn: { name: 'Recurrent Neural Network (RNN)', accuracy: '89%', auc: '0.92', f1: '0.89', speed: 'Fast (Seq)', type: 'Deep Learning (PyTorch)' },
    cnn: { name: 'Convolutional Neural Network (CNN)', accuracy: '85%', auc: '0.88', f1: '0.85', speed: 'Very Fast', type: 'Deep Learning (PyTorch)' },
    svm: { name: 'Support Vector Machine (SVM)', accuracy: '81%', auc: '0.84', f1: '0.81', speed: 'Moderate', type: 'Classical ML (Scikit-learn)' },
    knn: { name: 'K-Nearest Neighbors (KNN)', accuracy: '76%', auc: '0.79', f1: '0.76', speed: 'Slow (inference)', type: 'Classical ML (Scikit-learn)' },
    logreg: { name: 'Logistic Regression', accuracy: '72%', auc: '0.75', f1: '0.72', speed: 'Instantaneous', type: 'Baseline ML (Scikit-learn)' },
    kmeans: { name: 'K-Means Clustering', accuracy: '60%', auc: '0.65', f1: '0.58', speed: 'Fast', type: 'Unsupervised (Scikit-learn)' }
  };

  const epochData = {
    '1043': {
      epochId: '1043',
      signalType: 'EEG (Fp1-A2)',
      waveName: 'Beta & Alpha rhythms (Alert)',
      wavePath: "M 10 30 L 20 20 L 30 40 L 40 10 L 50 35 L 60 15 L 70 45 L 80 10 L 90 30 L 100 25 L 110 40 L 120 15 L 130 35 L 140 20 L 150 45 L 160 10 L 170 30 L 180 25 L 190 40 L 200 15 L 210 35 L 220 20 L 230 45 L 240 10 L 250 30 L 260 25 L 270 40 L 280 15 L 290 35 L 300 20 L 310 45 L 320 10 L 330 30 L 340 25 L 350 40 L 360 15 L 370 35 L 380 20 L 390 45 L 400 10 L 410 30 L 420 25 L 430 40 L 440 15 L 450 35 L 460 20 L 470 45 L 480 10 L 490 30 L 500 25 L 510 40 L 520 15 L 530 35 L 540 20 L 550 45 L 560 10 L 570 35 L 580 20 L 590 30 M 590 30 L 600 20 L 610 40 L 620 10 L 630 35 L 640 15 L 650 45 L 660 10 L 670 30 L 680 25 L 690 40 L 700 15 L 710 35 L 720 20 L 730 45 L 740 10 L 750 30 L 760 25 L 770 40 L 780 15 L 790 35 L 800 20 L 810 45 L 820 10 L 830 30 L 840 25 L 850 40 L 860 15 L 870 35 L 880 20 L 890 45 L 900 10 L 910 30 L 920 25 L 930 40 L 940 15 L 950 35 L 960 20 L 970 45 L 980 10 L 990 30",
      stage: 'Stage W (Wakefulness)',
      description: 'Signal analysis shows prominent high frequency Beta (13-30 Hz) and Alpha (8-12 Hz) rhythms. Subject is awake, alert, or resting with eyes closed.',
      confidences: { rnn: 94, cnn: 90, svm: 87, knn: 80, logreg: 78, kmeans: 70 }
    },
    '4812': {
      epochId: '4812',
      signalType: 'EEG (C3-A2)',
      waveName: 'Sleep Spindles & K-Complexes',
      wavePath: "M 10 30 L 25 25 L 35 35 L 45 10 L 55 45 L 70 20 L 80 40 L 95 30 L 105 10 L 110 50 L 115 15 L 120 45 L 125 20 L 130 40 L 135 25 L 145 30 L 160 30 L 175 25 L 185 35 L 195 10 L 205 45 L 220 20 L 230 40 L 245 30 L 255 10 L 260 50 L 265 15 L 270 45 L 275 20 L 280 40 L 285 25 L 295 30 L 310 30 L 325 25 L 335 35 L 345 10 L 355 45 L 370 20 L 380 40 L 395 30 L 405 10 L 410 50 L 415 15 L 420 45 L 425 20 L 430 40 L 435 25 L 445 30 L 460 30 L 475 25 L 485 35 L 495 10 L 505 45 L 520 20 L 530 40 L 545 30 L 555 10 L 560 50 L 565 15 L 570 45 L 580 25 L 590 30 M 590 30 L 605 25 L 615 35 L 625 10 L 635 45 L 650 20 L 660 40 L 675 30 L 685 10 L 690 50 L 695 15 L 700 45 L 705 20 L 710 40 L 715 25 L 725 30 L 740 30 L 755 25 L 765 35 L 775 10 L 785 45 L 800 20 L 810 40 L 825 30 L 835 10 L 840 50 L 845 15 L 850 45 L 855 20 L 860 40 L 865 25 L 875 30 L 890 30 L 905 25 L 915 35 L 925 10 L 935 45 L 950 20 L 960 40 L 975 30 L 985 10 L 990 50",
      stage: 'Stage N2 (Light Sleep)',
      description: 'Characterized by the appearance of sleep spindles (11-16 Hz bursts) and K-complexes (high-amplitude biphasic waves). The most common stage of light sleep.',
      confidences: { rnn: 91, cnn: 86, svm: 80, knn: 74, logreg: 70, kmeans: 58 }
    },
    '7389': {
      epochId: '7389',
      signalType: 'EEG (O1-A2)',
      waveName: 'Delta Waves (Slow-Wave Deep Sleep)',
      wavePath: "M 10 30 Q 30 50 50 30 T 90 30 T 130 30 T 170 30 T 210 30 T 250 30 T 290 30 T 330 30 T 370 30 T 410 30 T 450 30 T 490 30 T 530 30 T 570 30 T 610 30 T 650 30 T 690 30 T 730 30 T 770 30 T 810 30 T 850 30 T 890 30 T 930 30 T 970 30 T 990 30",
      stage: 'Stage N3 (Slow Wave Deep Sleep)',
      description: 'Dominated by high-amplitude, low-frequency Delta (0.5-4 Hz) waves. Sleep depth is maximum; this is the highly restorative stage of deep slow-wave sleep.',
      confidences: { rnn: 95, cnn: 89, svm: 85, knn: 78, logreg: 68, kmeans: 61 }
    }
  };

  const classifySleepSignal = () => {
    if (sleepPredicting) return;
    setSleepPredicting(true);
    setClassificationResult(null);
    setClassificationProgress(0);

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 5;
      setClassificationProgress(currentProgress);
      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          const selectedData = epochData[selectedEpoch];
          setClassificationResult({
            stage: selectedData.stage,
            description: selectedData.description,
            confidence: selectedData.confidences[activeSleepModel],
            modelStats: sleepModels[activeSleepModel]
          });
          setSleepPredicting(false);
        }, 300);
      }
    }, 50);
  };

  // --- Project 1: Distributed System Simulator State ---
  const [isSimulating, setIsSimulating] = useState(false);
  const [isPartitioned, setIsPartitioned] = useState(false);
  const [cacheHit, setCacheHit] = useState(false);
  const [simLogs, setSimLogs] = useState([
    'System status: ONLINE. Click "Send Request" to test topology.'
  ]);
  const [animationStep, setAnimationStep] = useState(0); // 0: Idle, 1: LB, 2: Queue, 3: Cache, 4: DB, 5: Return
  const [activePath, setActivePath] = useState(null); // 'normal', 'cache', 'failover'

  // Run distributed system simulation sequence
  const startSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setAnimationStep(1);
    
    const isWarmed = cacheHit; // cache warmed on first run
    const hasFailure = isPartitioned;
    const path = isWarmed ? 'cache' : hasFailure ? 'failover' : 'normal';
    setActivePath(path);

    addLog('🚀 Request dispatched from Client...');

    // LB phase
    setTimeout(() => {
      setAnimationStep(2);
      addLog('➔ Load Balancer: Routing request (Round-Robin algorithm)...');
    }, 800);

    // Queue phase
    setTimeout(() => {
      setAnimationStep(3);
      addLog('➔ Message Queue: Queued and deserialized packet (12ms queue latency)...');
    }, 1600);

    // Cache Check phase
    setTimeout(() => {
      setAnimationStep(4);
      if (isWarmed) {
        addLog('⚡ Cache Layer: HIT! Found record. Returning cached payload...');
        setAnimationStep(6); // Skip DB, return directly
      } else {
        addLog('🛈 Cache Layer: MISS! Querying relational databases...');
      }
    }, 2400);

    // DB phase (if cache missed)
    if (!isWarmed) {
      setTimeout(() => {
        setAnimationStep(5);
        if (hasFailure) {
          addLog('⚠ Telemetry: DB Replica 1 is UNREACHABLE (Partition active). Initiating automatic failover...');
          setTimeout(() => {
            addLog('➔ Replica 2: Query executed successfully (ACID transactional read)...');
            setAnimationStep(6);
          }, 1000);
        } else {
          addLog('➔ DB Replica 1: Executed SQL query with primary index (32ms latency)...');
          setAnimationStep(6);
        }
      }, 3200);
    }

    // Return phase
    const finalTimeout = isWarmed ? 3200 : hasFailure ? 5200 : 4000;
    setTimeout(() => {
      setAnimationStep(7); // Final Client Return
      const totalTime = isWarmed ? '15ms (Fast path)' : hasFailure ? '98ms (Failover path)' : '58ms (Relational path)';
      addLog(`✔ Response received by Client. Total round-trip latency: ${totalTime}.`);
      if (!isWarmed) {
        setCacheHit(true);
        addLog('⚡ System Event: Cache hydrated. Next duplicate requests will HIT the cache.');
      }
      setIsSimulating(false);
    }, finalTimeout);
  };

  const togglePartition = () => {
    setIsPartitioned(!isPartitioned);
    addLog(
      !isPartitioned 
        ? '⚠️ NETWORK PARTITION INJECTED: DB Replica 1 disconnected from cluster.' 
        : '♻ Network Partition resolved. Re-establishing cluster consensus (Raft/Paxos sync)...'
    );
  };

  const resetSimulator = () => {
    setIsSimulating(false);
    setIsPartitioned(false);
    setCacheHit(false);
    setAnimationStep(0);
    setActivePath(null);
    setSimLogs(['System status: ONLINE. Click "Send Request" to test topology.']);
  };

  const addLog = (msg) => {
    setSimLogs((prev) => [msg, ...prev.slice(0, 7)]); // Keep last 8 logs
  };


  // --- Project 2: Farm Management Dashboard State ---
  const [cropPrice, setCropPrice] = useState(15);      // $/kg (10 - 50)
  const [stockLevel, setStockLevel] = useState(500);    // kg (100 - 1000)
  const [salesVolume, setSalesVolume] = useState(300);  // kg (50 - 500)

  // Recalculate dashboard metrics
  const totalRevenue = cropPrice * salesVolume;
  const inventoryValue = cropPrice * stockLevel;
  const baseOperatingCost = 1500;
  const operationalProfit = Math.max(0, totalRevenue - baseOperatingCost);
  const efficiencyRate = Math.min(100, Math.round((salesVolume / stockLevel) * 100));

  return (
    <section id="projects" className="section">
      <div className="section-center-header">
        <h2>Featured Projects</h2>
      </div>

      <div className="projects-grid">
        {/* Project 1: Distributed Simulator */}
        <div className="project-card glass-panel wide-card">
          <div className="project-meta">
            <div className="project-badge">Next.js • Node.js • Redis • Kafka • Docker</div>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="github-link" aria-label="GitHub">
              <Github size={20} />
            </a>
          </div>

          <h3 className="project-title">Distributed System Design & Simulation Platform</h3>
          <p className="project-desc">
            An interactive simulator showcasing event-driven routing, load balancing, real-time message queue 
            deserialization, cache warming, and network partition failovers across database replicas.
          </p>

          {/* Interactive Distributed Simulator Widget */}
          <div className="simulator-widget">
            <div className="simulator-controls">
              <button 
                onClick={startSimulation} 
                disabled={isSimulating} 
                className="btn btn-primary btn-sm"
              >
                <Play size={14} /> Send Request
              </button>
              <button 
                onClick={togglePartition} 
                className={`btn btn-sm ${isPartitioned ? 'btn-danger' : 'btn-secondary'}`}
              >
                <AlertTriangle size={14} /> {isPartitioned ? 'Partition Active' : 'Inject Partition'}
              </button>
              <button onClick={resetSimulator} className="btn btn-secondary btn-sm" aria-label="Reset">
                <RotateCcw size={14} />
              </button>
            </div>

            {/* Topology Flow Canvas */}
            <div className="simulator-topology">
              {/* Client */}
              <div className={`topo-node client ${animationStep === 1 || animationStep === 7 ? 'active' : ''}`}>
                <div className="node-icon">💻</div>
                <div className="node-label">Client</div>
              </div>

              {/* Load Balancer */}
              <div className={`topo-node lb ${animationStep === 2 ? 'active' : ''}`}>
                <div className="node-icon">🔀</div>
                <div className="node-label">Load Balancer</div>
              </div>

              {/* Message Queue */}
              <div className={`topo-node mq ${animationStep === 3 ? 'active' : ''}`}>
                <div className="node-icon">📥</div>
                <div className="node-label">Kafka Queue</div>
              </div>

              {/* Cache Layer */}
              <div className={`topo-node cache ${animationStep === 4 ? 'active' : ''} ${cacheHit ? 'warmed' : ''}`}>
                <div className="node-icon">⚡</div>
                <div className="node-label">Redis Cache {cacheHit && <span className="cache-tag">HIT</span>}</div>
              </div>

              {/* Databases */}
              <div className="db-cluster">
                <div 
                  className={`topo-node db1 ${animationStep === 5 && !isPartitioned ? 'active' : ''} ${isPartitioned ? 'partitioned' : ''}`}
                >
                  <div className="node-icon">💾</div>
                  <div className="node-label">Replica 1 {isPartitioned && <span className="offline-tag">OFFLINE</span>}</div>
                </div>

                <div 
                  className={`topo-node db2 ${animationStep === 5 && isPartitioned ? 'active' : ''}`}
                >
                  <div className="node-icon">💾</div>
                  <div className="node-label">Replica 2</div>
                </div>
              </div>

              {/* Dynamic Path SVG Overlay */}
              <svg className="topo-connections" width="100%" height="100%">
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(255,255,255,0.2)"/>
                  </marker>
                </defs>
                {/* Visual indicator paths */}
                <line x1="10%" y1="50%" x2="25%" y2="50%" className="conn-line" markerEnd="url(#arrow)" />
                <line x1="37%" y1="50%" x2="48%" y2="50%" className="conn-line" markerEnd="url(#arrow)" />
                <line x1="60%" y1="50%" x2="72%" y2="50%" className="conn-line" markerEnd="url(#arrow)" />
                
                {/* To DB 1 (Top) */}
                <path d="M 82% 42% Q 86% 25% 90% 25%" className={`conn-line ${isPartitioned ? 'broken' : ''}`} fill="none" markerEnd="url(#arrow)" />
                {/* To DB 2 (Bottom) */}
                <path d="M 82% 58% Q 86% 75% 90% 75%" className="conn-line" fill="none" markerEnd="url(#arrow)" />

                {/* Packet Animations */}
                {isSimulating && animationStep === 1 && (
                  <circle cx="10%" cy="50%" r="6" className="packet-dot">
                    <animate attributeName="cx" from="10%" to="25%" dur="0.8s" repeatCount="1" fill="freeze" />
                  </circle>
                )}
                {isSimulating && animationStep === 2 && (
                  <circle cx="25%" cy="50%" r="6" className="packet-dot">
                    <animate attributeName="cx" from="25%" to="48%" dur="0.8s" repeatCount="1" fill="freeze" />
                  </circle>
                )}
                {isSimulating && animationStep === 3 && (
                  <circle cx="48%" cy="50%" r="6" className="packet-dot">
                    <animate attributeName="cx" from="48%" to="72%" dur="0.8s" repeatCount="1" fill="freeze" />
                  </circle>
                )}
                
                {/* Normal direct cache hit response */}
                {isSimulating && animationStep === 6 && activePath === 'cache' && (
                  <circle cx="72%" cy="50%" r="6" className="packet-dot cache-hit">
                    <animate attributeName="cx" from="72%" to="10%" dur="0.8s" repeatCount="1" fill="freeze" />
                  </circle>
                )}

                {/* Normal path DB access */}
                {isSimulating && animationStep === 4 && activePath === 'normal' && (
                  <path d="M 72% 50% Q 86% 25% 90% 25%" fill="none" className="packet-path">
                    <animate attributeName="stroke-dashoffset" from="100" to="0" dur="0.8s" repeatCount="1" fill="freeze" />
                  </path>
                )}

                {/* Failover path DB access */}
                {isSimulating && animationStep === 4 && activePath === 'failover' && (
                  <path d="M 72% 50% Q 86% 75% 90% 75%" fill="none" className="packet-path">
                    <animate attributeName="stroke-dashoffset" from="100" to="0" dur="0.8s" repeatCount="1" fill="freeze" />
                  </path>
                )}
              </svg>
            </div>

            {/* Telemetry Logs */}
            <div className="simulator-logs">
              <div className="logs-header">
                <Activity size={14} className="animate-pulse" />
                <span>Live System Telemetry Logs</span>
              </div>
              <div className="logs-body">
                {simLogs.map((log, index) => (
                  <div key={index} className="log-line">
                    <span className="log-time">[{new Date().toLocaleTimeString()}]</span> {log}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project 2: Farm Management System */}
        <div className="project-card glass-panel">
          <div className="project-meta">
            <div className="project-badge">MySQL • Node.js • Express.js • React</div>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="github-link" aria-label="GitHub">
              <Github size={20} />
            </a>
          </div>

          <h3 className="project-title">Farm Management System (E-Commerce Platform)</h3>
          <p className="project-desc">
            A comprehensive farmers e-marketplace backed by optimized MySQL queries and custom relational schemas. 
            Features real-time inventory aggregation pipelines.
          </p>

          {/* Interactive Calculator/Dashboard widget */}
          <div className="farm-widget">
            <div className="farm-header">
              <Sliders size={16} />
              <span>Interactive ETL Aggregator Tool</span>
            </div>
            
            <div className="farm-sliders">
              <div className="slider-group">
                <label>Crop Market Price: <span>${cropPrice} / kg</span></label>
                <input 
                  type="range" 
                  min="10" 
                  max="50" 
                  value={cropPrice} 
                  onChange={(e) => setCropPrice(Number(e.target.value))} 
                />
              </div>

              <div className="slider-group">
                <label>Stock in Inventory: <span>{stockLevel} kg</span></label>
                <input 
                  type="range" 
                  min="100" 
                  max="1000" 
                  value={stockLevel} 
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setStockLevel(val);
                    if (salesVolume > val) setSalesVolume(val); // Keep sales volume under inventory
                  }} 
                />
              </div>

              <div className="slider-group">
                <label>Sales Volume: <span>{salesVolume} kg</span></label>
                <input 
                  type="range" 
                  min="50" 
                  max={stockLevel} 
                  value={salesVolume} 
                  onChange={(e) => setSalesVolume(Number(e.target.value))} 
                />
              </div>
            </div>

            {/* Calculated Metrics Panel */}
            <div className="farm-metrics-grid">
              <div className="farm-metric-card">
                <span className="f-metric-title">Aggregated Revenue</span>
                <span className="f-metric-val text-cyan">${totalRevenue.toLocaleString()}</span>
              </div>
              <div className="farm-metric-card">
                <span className="f-metric-title">Estimated Profit</span>
                <span className="f-metric-val text-purple">${operationalProfit.toLocaleString()}</span>
              </div>
              <div className="farm-metric-card">
                <span className="f-metric-title">Inventory Valuation</span>
                <span className="f-metric-val">${inventoryValue.toLocaleString()}</span>
              </div>
              <div className="farm-metric-card">
                <span className="f-metric-title">Sell-Through Rate</span>
                <span className="f-metric-val">{efficiencyRate}%</span>
              </div>
            </div>

            {/* Live SVG Bar Chart */}
            <div className="farm-chart-container">
              <span className="chart-label">Aggregation Chart (Live recalculation)</span>
              <svg viewBox="0 0 300 120" className="farm-svg-chart">
                {/* Grid Lines */}
                <line x1="30" y1="20" x2="280" y2="20" stroke="rgba(255,255,255,0.05)" />
                <line x1="30" y1="55" x2="280" y2="55" stroke="rgba(255,255,255,0.05)" />
                <line x1="30" y1="90" x2="280" y2="90" stroke="rgba(255,255,255,0.1)" />

                {/* Bars - Revenue */}
                <rect 
                  x="50" 
                  y={90 - Math.min(70, (totalRevenue / 25000) * 70)} 
                  width="35" 
                  height={Math.min(70, (totalRevenue / 25000) * 70)} 
                  fill="var(--primary)" 
                  rx="3"
                />
                <text x="67" y="105" textAnchor="middle" fill="var(--text-muted)" className="chart-text">Rev</text>
                
                {/* Bars - Profit */}
                <rect 
                  x="130" 
                  y={90 - Math.min(70, (operationalProfit / 25000) * 70)} 
                  width="35" 
                  height={Math.min(70, (operationalProfit / 25000) * 70)} 
                  fill="var(--secondary)" 
                  rx="3"
                />
                <text x="147" y="105" textAnchor="middle" fill="var(--text-muted)" className="chart-text">Prof</text>

                {/* Bars - Valuation */}
                <rect 
                  x="210" 
                  y={90 - Math.min(70, (inventoryValue / 50000) * 70)} 
                  width="35" 
                  height={Math.min(70, (inventoryValue / 50000) * 70)} 
                  fill="var(--text-main)" 
                  rx="3"
                />
                <text x="227" y="105" textAnchor="middle" fill="var(--text-muted)" className="chart-text">Val</text>

                {/* Value tooltips inside chart */}
                <text x="67" y={85 - Math.min(70, (totalRevenue / 25000) * 70)} textAnchor="middle" fill="var(--primary)" className="chart-val-lbl">${totalRevenue}</text>
                <text x="147" y={85 - Math.min(70, (operationalProfit / 25000) * 70)} textAnchor="middle" fill="var(--secondary)" className="chart-val-lbl">${operationalProfit}</text>
                <text x="227" y={85 - Math.min(70, (inventoryValue / 50000) * 70)} textAnchor="middle" fill="var(--text-main)" className="chart-val-lbl">${inventoryValue}</text>
              </svg>
            </div>
          </div>
        </div>

        {/* Project 3: Sleep Stage Classification */}
        <div className="project-card glass-panel">
          <div className="project-meta">
            <div className="project-badge">Python • Scikit-learn • PyTorch • NeuroKit2</div>
            <a href="https://github.com/KUSHAL-RV" target="_blank" rel="noopener noreferrer" className="github-link" aria-label="GitHub">
              <Github size={20} />
            </a>
          </div>

          <h3 className="project-title">Sleep Stage Classification using Machine Learning</h3>
          <p className="project-desc">
            An end-to-end signal processing and deep learning pipeline benchmarking RNNs, CNNs, and classical ML algorithms 
            (SVM, KNN, Logistic Regression) on the PhysioNet Sleep-EDF dataset (~8,000 epochs) to automate multi-class sleep stage detection.
          </p>

          {/* Interactive Classifier Widget */}
          <div className="sleep-widget">
            <div className="sleep-header">
              <Sliders size={16} />
              <span>Interactive Signal Classification Simulator</span>
            </div>

            <div className="sleep-config">
              {/* Select Epoch */}
              <div className="sleep-select-group">
                <label htmlFor="epoch-select">Select Dataset Epoch:</label>
                <select 
                  id="epoch-select"
                  className="sleep-dropdown"
                  value={selectedEpoch}
                  onChange={(e) => {
                    setSelectedEpoch(e.target.value);
                    setClassificationResult(null);
                  }}
                  disabled={sleepPredicting}
                >
                  <option value="1043">Epoch #1043 (EEG Signal - Wakefulness State)</option>
                  <option value="4812">Epoch #4812 (EEG Signal - Stage N2 Light Sleep)</option>
                  <option value="7389">Epoch #7389 (EEG Signal - Stage N3 Deep Sleep)</option>
                </select>
              </div>

              {/* Select Model */}
              <div className="sleep-select-group">
                <label htmlFor="model-select">Classification Algorithm:</label>
                <select 
                  id="model-select"
                  className="sleep-dropdown"
                  value={activeSleepModel}
                  onChange={(e) => {
                    setActiveSleepModel(e.target.value);
                    setClassificationResult(null);
                  }}
                  disabled={sleepPredicting}
                >
                  <option value="rnn">Recurrent Neural Network (RNN) - PyTorch [Acc: 89%]</option>
                  <option value="cnn">Convolutional Neural Network (CNN) - PyTorch [Acc: 85%]</option>
                  <option value="svm">Support Vector Machine (SVM) - Scikit-learn [Acc: 81%]</option>
                  <option value="knn">K-Nearest Neighbors (KNN) - Scikit-learn [Acc: 76%]</option>
                  <option value="logreg">Logistic Regression - Scikit-learn [Acc: 72%]</option>
                  <option value="kmeans">K-Means Clustering - Unsupervised [Acc: 60%]</option>
                </select>
              </div>
            </div>

            {/* EEG Signal Wave Visualizer */}
            <div className="sleep-visualizer-container">
              <div className="visualizer-header">
                <span className="signal-badge">{epochData[selectedEpoch].signalType}</span>
                <span className="signal-note">Signal Pattern: {epochData[selectedEpoch].waveName}</span>
              </div>

              <div className="sleep-svg-frame">
                <svg viewBox="0 0 1000 80" className="sleep-svg-signal" preserveAspectRatio="none">
                  {/* Grid Lines background */}
                  <line x1="0" y1="40" x2="1000" y2="40" stroke="rgba(0, 242, 254, 0.05)" strokeWidth="1" />
                  
                  {/* EEG Signal Wave */}
                  <path 
                    d={epochData[selectedEpoch].wavePath} 
                    fill="none" 
                    stroke="var(--primary)" 
                    strokeWidth="1.5" 
                    className="eeg-path"
                  />
                </svg>
                
                {/* Laser scan line overlay */}
                {sleepPredicting && (
                  <div 
                    className="sleep-scanner-laser" 
                    style={{ left: `${classificationProgress}%` }}
                  />
                )}
              </div>

              <div className="sleep-action-row">
                <button 
                  onClick={classifySleepSignal} 
                  disabled={sleepPredicting} 
                  className="btn btn-primary btn-sm"
                >
                  <Play size={14} /> {sleepPredicting ? 'Extracting & Classifying...' : 'Classify Epoch Signal'}
                </button>
                {sleepPredicting && (
                  <div className="sleep-progress-bar-container">
                    <div className="sleep-progress-fill" style={{ width: `${classificationProgress}%` }}></div>
                    <span className="sleep-progress-txt">{classificationProgress}%</span>
                  </div>
                )}
              </div>
            </div>

            {/* Results Display */}
            {classificationResult && (
              <div className="classification-result-panel glass-panel animate-float-in">
                <div className="result-header">
                  <div className="result-title">
                    <span className="result-label">Predicted Sleep Stage:</span>
                    <h4>{classificationResult.stage}</h4>
                  </div>
                  <div className="result-confidence">
                    <span className="conf-label">Confidence:</span>
                    <span className="conf-value">{classificationResult.confidence}%</span>
                  </div>
                </div>

                <p className="result-desc-text">{classificationResult.description}</p>

                <div className="model-stats-footer">
                  <span className="stat-pill"><strong>Algorithm:</strong> {classificationResult.modelStats.type}</span>
                  <span className="stat-pill"><strong>Model AUC:</strong> {classificationResult.modelStats.auc}</span>
                  <span className="stat-pill"><strong>Model F1-Score:</strong> {classificationResult.modelStats.f1}</span>
                  <span className="stat-pill"><strong>Inference Speed:</strong> {classificationResult.modelStats.speed}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
