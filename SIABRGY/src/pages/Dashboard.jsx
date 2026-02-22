import React from 'react';
import StatCard from '../components/StatCard';
import ActivityList from '../components/ActivityList';
import TransactionsTable from '../components/TransactionsTable';
import DocumentChart from '../components/DocumentChart';

const Dashboard = () => {
    const handleStatCardClick = (cardTitle) => {
        console.log(`Stat card clicked: ${cardTitle}`);
        switch(cardTitle) {
            case 'Document Issued Today':
                alert('Showing detailed document issuance information');
                break;
            case 'Revenue Collected Today':
                alert('Showing detailed revenue information');
                break;
            case 'Pending Request':
                alert('Showing pending requests');
                break;
            case 'Flagged Residents':
                alert('Showing flagged residents');
                break;
            default:
                break;
        }
    };

    return (
        <div className="page-content">
            {/* header */}
            <div className="page-header">
                <h1>Dashboard</h1>
                <p>Mon, February 9, 2026</p>
            </div>

            {/* summary cards */}
            <div className="stat-cards-grid">
                <StatCard
                    title="Document Issued Today"
                    value="141"
                    subtitle="↑ 2 activities"
                    color="primary"
                    icon="📄"
                    onClick={() => handleStatCardClick('Document Issued Today')}
                />
                <StatCard
                    title="Revenue Collected Today"
                    value="₱3,550"
                    subtitle="2 payments"
                    color="cyan"
                    icon="💰"
                    onClick={() => handleStatCardClick('Revenue Collected Today')}
                />
                <StatCard
                    title="Pending Request"
                    value="8"
                    subtitle="Waiting approval"
                    color="green"
                    icon="⏳"
                    onClick={() => handleStatCardClick('Pending Request')}
                />
                <StatCard
                    title="Flagged Residents"
                    value="2"
                    subtitle="1 flagged"
                    color="pink"
                    icon="🚩"
                    onClick={() => handleStatCardClick('Flagged Residents')}
                />
            </div>

            {/* charts + activity */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 350px',
                    gap: 'var(--spacing-lg)',
                    marginBottom: 'var(--spacing-lg)'
                }}
            >
                <div>
                    {/* revenue */}
                    <div className="dashboard-section">
                        <div className="section-header">
                            <h2 className="section-title">Revenue Trend</h2>
                            <select className="input-field" style={{ width: '120px' }}>
                                <option>Last 7 months</option>
                                <option>Last 30 days</option>
                                <option>This year</option>
                            </select>
                        </div>
                        <div
                            className="chart-container"
                            style={{
                                backgroundColor: 'var(--light-gray)',
                                borderRadius: 'var(--radius-md)',
                                padding: 'var(--spacing-lg)'
                            }}
                        >
                            <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 400 300"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <polyline
                                    points="20,250 60,180 100,200 140,120 180,150 220,100 260,180 300,140 340,160"
                                    fill="none"
                                    stroke="#FF6B6B"
                                    strokeWidth="2"
                                />
                                {[20, 60, 100, 140, 180, 220, 260, 300, 340].map((x, i) => (
                                    <circle key={i} cx={x} cy={[250,180,200,120,150,100,180,140,160][i]} r="3" fill="#FF6B6B" />
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

                    {/* document distribution */}
                    <div className="dashboard-section">
                        <div className="section-header">
                            <h2 className="section-title">Document Type Distribution</h2>
                            <select className="input-field" style={{ width: '120px' }}>
                                <option>3 months</option>
                                <option>6 months</option>
                                <option>1 year</option>
                            </select>
                        </div>
                        <DocumentChart />
                    </div>
                </div>

                {/* activity */}
                <div>
                    <div className="dashboard-section" style={{ height: '100%' }}>
                        <div className="section-header">
                            <h2 className="section-title">Recent Activity</h2>
                        </div>
                        <ActivityList />
                    </div>
                </div>
            </div>

            {/* transactions */}
            <div className="dashboard-section">
                <div className="section-header">
                    <h2 className="section-title">Recent Transactions</h2>
                </div>
                <TransactionsTable />
            </div>
        </div>
    );
};

export default Dashboard;
