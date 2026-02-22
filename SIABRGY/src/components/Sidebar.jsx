// components/Sidebar.jsx
import React from 'react';

const Sidebar = ({ activeNav, setActiveNav }) => {
    // reduced set of sidebar icons per design
    const navItems = [
        // high‑level sections
        { id: 'dashboard', icon: '🔲', title: 'Dashboard' },
        { id: 'issuance', icon: '📄', title: 'Document Issuance' },
        { id: 'analytics', icon: '📈', title: 'Analytics' },
        { id: 'insights', icon: '📊', title: 'Insights' },
    ];

    return (
        <div className="sidebar">
            <div className="sidebar-logo" onClick={() => setActiveNav('dashboard')}>
                BD
            </div>
            <nav className="sidebar-nav">
                {navItems.map(item => (
                    <div
                        key={item.id}
                        className={`sidebar-icon ${activeNav === item.id ? 'active' : ''}`}
                        onClick={() => setActiveNav(item.id)}
                        title={item.title}
                    >
                        {item.icon}
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
