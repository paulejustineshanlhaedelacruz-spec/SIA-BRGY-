// components/DocumentChart.jsx
import React from 'react';

const DocumentChart = () => {
    const chartData = [
        { label: 'Barangay Residency', value: 50, color: '#3B5FFF', count: 40 },
        { label: 'Barangay Indigency', value: 15, color: '#FFEB3B', count: 12 },
        { label: 'Business Permit', value: 25, color: '#F44336', count: 20 },
        { label: 'Others', value: 10, color: '#4CAF50', count: 8 },
    ];

    const total = chartData.reduce((sum, item) => sum + item.value, 0);

    // Simple SVG Pie Chart
    const generatePieChart = () => {
        let currentAngle = -90;
        const paths = [];

        chartData.forEach((item, index) => {
            const sliceAngle = (item.value / total) * 360;
            const startAngle = currentAngle;
            const endAngle = currentAngle + sliceAngle;

            const startRad = (startAngle * Math.PI) / 180;
            const endRad = (endAngle * Math.PI) / 180;

            const x1 = 100 + 80 * Math.cos(startRad);
            const y1 = 100 + 80 * Math.sin(startRad);
            const x2 = 100 + 80 * Math.cos(endRad);
            const y2 = 100 + 80 * Math.sin(endRad);

            const largeArc = sliceAngle > 180 ? 1 : 0;

            const pathData = `M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArc} 1 ${x2} ${y2} Z`;

            paths.push(
                <path key={index} d={pathData} fill={item.color} />
            );

            currentAngle = endAngle;
        });

        return paths;
    };

    return (
        <div className="pie-chart-wrapper">
            <svg className="pie-chart" viewBox="0 0 200 200">
                {generatePieChart()}
            </svg>
            <div className="chart-legend">
                <div style={{ marginBottom: '10px', fontSize: '12px', fontWeight: 'bold', display: 'grid', gridTemplateColumns: '1fr 60px 40px', gap: '10px', paddingRight: '10px' }}>
                    <div>Most requested documents</div>
                    <div style={{ textAlign: 'center' }}>Count</div>
                    <div style={{ textAlign: 'center' }}>%</div>
                </div>
                {chartData.map((item, index) => (
                    <div key={index} className="legend-item">
                        <div className="legend-color" style={{ backgroundColor: item.color }}></div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 60px 40px', gap: '10px', width: '100%', alignItems: 'center' }}>
                            <span className="legend-label">{item.label}</span>
                            <span style={{ textAlign: 'center', fontSize: '12px' }}>{item.count}</span>
                            <span style={{ textAlign: 'center', fontSize: '12px' }}>{item.value}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DocumentChart;
