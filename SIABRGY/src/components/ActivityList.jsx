// components/ActivityList.jsx
import React from 'react';

const ActivityList = ({ activities = [] }) => {
    const defaultActivities = [
        {
            id: 1,
            type: 'success',
            title: 'Aunt Inka Cruz issued Barangay Clearance — SUCCESS',
            time: '5/25/2025',
            icon: '✓'
        },
        {
            id: 2,
            type: 'info',
            title: 'Payment recorded for DRRT-2025-000078 — ₱150',
            time: '5/24/2025',
            icon: '💳'
        },
        {
            id: 3,
            type: 'success',
            title: 'Ame Villarussea issued Certificate of Residency — SUCCESS',
            time: '5/23/2025',
            icon: '✓'
        },
        {
            id: 4,
            type: 'info',
            title: 'Payment recorded for DRRT-2025-000077 — ₱60',
            time: '5/22/2025',
            icon: '💳'
        },
        {
            id: 5,
            type: 'danger',
            title: "Roberto Augusto attempted Barangay Clearance — RESTRICTED",
            time: '5/21/2025',
            icon: '⚠️'
        },
        {
            id: 6,
            type: 'info',
            title: 'Maria Santos document request created',
            time: '5/20/2025',
            icon: '📄'
        },
        {
            id: 7,
            type: 'danger',
            title: "Sofia Duran attempted Business Permit — RESTRICTED",
            time: '5/19/2025',
            icon: '⚠️'
        },
    ];

    const displayActivities = activities.length > 0 ? activities : defaultActivities;

    const handleActivityClick = (activity) => {
        console.log('Clicked activity:', activity);
        alert(`Activity: ${activity.title}\nTime: ${activity.time}`);
    };

    return (
        <div className="activity-list">
            {displayActivities.map(activity => (
                <div 
                    key={activity.id} 
                    className="activity-item"
                    onClick={() => handleActivityClick(activity)}
                    style={{ cursor: 'pointer', transition: 'background-color 0.2s' }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#f5f5f5';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                >
                    <div className={`activity-icon ${activity.type}`}>
                        {activity.icon}
                    </div>
                    <div className="activity-content">
                        <p className="activity-title">{activity.title}</p>
                        <p className="activity-time">{activity.time}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ActivityList;
