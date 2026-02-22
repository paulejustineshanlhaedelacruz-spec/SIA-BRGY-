import React from 'react';

const Insights = () => {
    return (
        <div className="page-content">
            <div className="page-header">
                <h1>Insights</h1>
                <p>Key information and trends</p>
            </div>

            <div className="dashboard-section">
                <p style={{ color: 'var(--text-gray)' }}>
                    This section will surface actionable insights derived from the data.
                    You can add charts, highlights, or summaries here as needed.
                </p>
            </div>
        </div>
    );
};

export default Insights;
