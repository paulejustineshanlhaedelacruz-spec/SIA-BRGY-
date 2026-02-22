// App.jsx
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

// pages / high level navigation targets
import Dashboard from './pages/Dashboard';
import DocumentIssuance from './pages/DocumentIssuance';
import Analytics from './pages/Analytics';
import Insights from './pages/Insights';

const App = () => {
    const [activeNav, setActiveNav] = useState('dashboard');

    const renderPage = () => {
        switch (activeNav) {
            case 'dashboard':
                return <Dashboard />;
            case 'issuance':
                return <DocumentIssuance />;
            case 'analytics':
                return <Analytics />;
            case 'insights':
                return <Insights />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <div className="dashboard-container">
            <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />
            <div className="main-content">
                <Header title="Barangay DIPS" />
                {renderPage()}
            </div>
        </div>
    );
};

export default App;
