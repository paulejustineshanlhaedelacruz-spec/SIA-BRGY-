// components/Header.jsx
import React from 'react';

const Header = ({ title = 'Barangay DIPS' }) => {
    return (
        <div className="header">
            <div className="header-left">
                <div className="header-title">{title}</div>
                <div className="header-search search-input">
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Search documents, residents..."
                    />
                </div>
            </div>
            <div className="header-right">
                <button className="header-icon-btn" title="Notifications">
                    🔔
                </button>
                <button className="header-icon-btn" title="Settings">
                    ⚙️
                </button>
                <div className="avatar">
                    <span>AD</span>
                </div>
            </div>
        </div>
    );
};

export default Header;
