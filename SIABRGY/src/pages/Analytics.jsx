import React, { useRef, useState } from 'react';
import StatCard from '../components/StatCard';
import DocumentChart from '../components/DocumentChart';

const Analytics = () => {
    const blocklistRef = useRef(null);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [blocklist, setBlocklist] = useState([
        { id: 'BL-001', name: 'Juan Dela Cruz', reason: 'Unpaid fees', date: '2025-12-10', restricted: ['Barangay Clearance', 'Business Permit'] },
        { id: 'BL-002', name: 'Maria Santos', reason: 'Pending violations', date: '2025-11-22', restricted: ['Cedula', 'Barangay Clearance'] },
        { id: 'BL-003', name: 'Pedro Reyes', reason: 'Fraudulent documents', date: '2026-01-05', restricted: ['All Documents'] },
        { id: 'BL-004', name: 'Ana Garcia', reason: 'Court order', date: '2026-01-15', restricted: ['Certificate of Residency'] },
    ]);

    const scrollToBlocklist = () => {
        if (blocklistRef.current) {
            blocklistRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleCardClick = (index) => {
        if (index === 3) scrollToBlocklist();
    };

    const handleAddPerson = () => setShowAddModal(true);
    const handleBlockConfirm = () => {
        setShowAddModal(false);
        setShowSuccessModal(true);
    };
    const closeSuccess = () => setShowSuccessModal(false);

    return (
        <div className="page-content">
            <div className="page-header">
                <h1>Analytics</h1>
                <p>{new Date().toDateString()}</p>
            </div>

            <div className="stat-cards-grid">
                <StatCard
                    title="Total Documents Issued"
                    value="1,370"
                    color="primary"
                    icon="📄"
                    onClick={() => handleCardClick(0)}
                />
                <StatCard
                    title="Revenue This Month"
                    value="₱5,800"
                    color="cyan"
                    icon="💰"
                    onClick={() => handleCardClick(1)}
                />
                <StatCard
                    title="Issued Today"
                    value="18"
                    color="green"
                    icon="📅"
                    onClick={() => handleCardClick(2)}
                />
                <StatCard
                    title="Blocked Individuals"
                    value="4"
                    color="pink"
                    icon="🚫"
                    onClick={() => handleCardClick(3)}
                />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-lg)' }}>
                <div className="dashboard-section">
                    <div className="section-header">
                        <h2 className="section-title">Revenue Trend</h2>
                    </div>
                    <div
                        className="chart-container"
                        style={{
                            backgroundColor: 'var(--light-gray)',
                            borderRadius: 'var(--radius-md)',
                            padding: 'var(--spacing-lg)'
                        }}
                    >
                        <svg width="100%" height="100%" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet">
                            <polyline
                                points="20,250 60,180 100,200 140,120 180,150 220,100 260,180 300,140 340,160"
                                fill="none"
                                stroke="#FF6B6B"
                                strokeWidth="2"
                            />
                            {[20, 60, 100, 140, 180, 220, 260, 300, 340].map((x, i) => (
                                <circle
                                    key={i}
                                    cx={x}
                                    cy={[250, 180, 200, 120, 150, 100, 180, 140, 160][i]}
                                    r="3"
                                    fill="#FF6B6B"
                                />
                            ))}
                            <line x1="0" y1="250" x2="360" y2="250" stroke="#E0E0E0" strokeWidth="1" />
                            <line x1="0" y1="200" x2="360" y2="200" stroke="#E0E0E0" strokeWidth="1" />
                            <line x1="0" y1="150" x2="360" y2="150" stroke="#E0E0E0" strokeWidth="1" />
                            <line x1="0" y1="100" x2="360" y2="100" stroke="#E0E0E0" strokeWidth="1" />
                            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map((m, idx) => (
                                <text key={idx} x={20 + idx * 40} y="280" fontSize="12" textAnchor="middle">
                                    {m}
                                </text>
                            ))}
                        </svg>
                    </div>
                </div>
                <div className="dashboard-section">
                    <div className="section-header">
                        <h2 className="section-title">Document Issuance</h2>
                    </div>
                    <DocumentChart />
                </div>
            </div>

            <div ref={blocklistRef} className="dashboard-section">
                <div className="section-header" style={{ justifyContent: 'space-between' }}>
                    <h2 className="section-title">Blocklist</h2>
                    <button className="btn" onClick={handleAddPerson}>+ Add Person</button>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Reason</th>
                            <th>Date Blocked</th>
                            <th>Restricted Documents</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blocklist.map((b) => (
                            <tr key={b.id}>
                                <td>{b.id}</td>
                                <td>{b.name}</td>
                                <td>{b.reason}</td>
                                <td>{b.date}</td>
                                <td>{b.restricted.join(', ')}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showAddModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <div className="modal-header">
                            <h3>Add to Blocklist</h3>
                            <button onClick={() => setShowAddModal(false)}>✖</button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label className="form-label required">First Name</label>
                                <input type="text" className="input-field" />
                            </div>
                            <div className="form-group">
                                <label className="form-label required">Last Name</label>
                                <input type="text" className="input-field" />
                            </div>
                            <div className="form-group">
                                <label className="form-label required">Reason</label>
                                <input
                                    type="text"
                                    className="input-field"
                                    placeholder="Unpaid fees, Pending Violations, Fraudulent Documents, Court Order, others"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label required">Restricted Documents</label>
                                <div className="checkbox-group">
                                    <label><input type="checkbox" /> All Documents</label><br />
                                    <label><input type="checkbox" /> Cedula</label><br />
                                    <label><input type="checkbox" /> Business Permit</label><br />
                                    <label><input type="checkbox" /> Barangay Clearance</label><br />
                                    <label><input type="checkbox" /> Certificate of Residency</label>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn" onClick={() => setShowAddModal(false)}>Cancel</button>
                            <button className="btn btn-danger" onClick={handleBlockConfirm}>Block Person</button>
                        </div>
                    </div>
                </div>
            )}

            {showSuccessModal && (
                <div className="modal-overlay">
                    <div className="modal" style={{ maxWidth: '400px', textAlign: 'center' }}>
                        <div className="modal-body">
                            <img src="/logo192.png" alt="logo" style={{ width: 80, marginBottom: 16 }} />
                            <h3>Blocked successfully.</h3>
                            <button className="btn" onClick={closeSuccess}>Done!</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Analytics;
