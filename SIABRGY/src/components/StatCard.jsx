// components/StatCard.jsx
import React from 'react';

const StatCard = ({ title, value, subtitle, color = 'primary', icon = '📄', onClick }) => {
    const colorClass = {
        primary: '',
        cyan: 'cyan',
        green: 'green',
        pink: 'pink',
    }[color] || '';

    const handleClick = () => {
        if (typeof onClick === 'function') {
            onClick();
        }
    };

    return (
        <div 
            className={`stat-card ${colorClass}`} 
            onClick={handleClick} 
            style={{ cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                    <h3>{title}</h3>
                    <div className="stat-card-value">{value}</div>
                    <p>{subtitle}</p>
                </div>
                <div style={{ fontSize: '40px', opacity: 0.3 }}>{icon}</div>
            </div>
        </div>
    );
};

export default StatCard;
