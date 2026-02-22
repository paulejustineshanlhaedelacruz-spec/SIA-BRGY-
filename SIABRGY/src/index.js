// Barangay DIPS - Main Application
// verify that React has been loaded from CDN
if (!window.React || !window.ReactDOM) {
    console.error('React or ReactDOM did not load. Application will not initialize.');
    // Do not throw; allow fallback logic in index.html to handle display
}
const React = window.React;
const ReactDOM = window.ReactDOM;

// Sidebar Component
const Sidebar = ({ activeNav, setActiveNav }) => {
    const navItems = [
        { id: 'dashboard', icon: '�', title: 'Dashboard' },
        { id: 'issuance', icon: '📄', title: 'Document Issuance' },
        { id: 'analytics', icon: '📈', title: 'Analytics' },
        { id: 'insights', icon: '📊', title: 'Insights' },
    ];

    return React.createElement(
        'div',
        { className: 'sidebar' },
        React.createElement('div', { className: 'sidebar-logo', onClick: () => setActiveNav('dashboard'), style: { cursor: 'pointer' } }, 'BD'),
        React.createElement('nav', { className: 'sidebar-nav' },
            navItems.map(item =>
                React.createElement('div', {
                    key: item.id,
                    className: `sidebar-icon ${activeNav === item.id ? 'active' : ''}`,
                    onClick: () => setActiveNav(item.id),
                    title: item.title,
                    style: { cursor: 'pointer' }
                }, item.icon)
            )
        )
    );
};

// Header Component
const Header = ({ title }) => {
    return React.createElement(
        'div',
        { className: 'header' },
        React.createElement(
            'div',
            { className: 'header-left' },
            React.createElement('div', { className: 'header-title' }, title),
            React.createElement(
                'div',
                { className: 'header-search search-input' },
                React.createElement('input', {
                    type: 'text',
                    className: 'input-field',
                    placeholder: 'Search documents, residents...'
                })
            )
        ),
        React.createElement(
            'div',
            { className: 'header-right' },
            React.createElement('button', { className: 'header-icon-btn', title: 'Notifications' }, '🔔'),
            React.createElement('button', { className: 'header-icon-btn', title: 'Settings' }, '⚙️'),
            React.createElement('div', { className: 'avatar' }, 'AD')
        )
    );
};

// Stat Card Component
const StatCard = ({ title, value, subtitle, color, icon }) => {
    const colorClass = color === 'primary' ? '' : color;
    return React.createElement(
        'div',
        { className: `stat-card ${colorClass}` },
        React.createElement(
            'div',
            { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' } },
            React.createElement(
                'div',
                null,
                React.createElement('h3', { style: { margin: 0 } }, title),
                React.createElement('div', { className: 'stat-card-value' }, value),
                React.createElement('p', { style: { margin: 0 } }, subtitle)
            ),
            React.createElement('div', { style: { fontSize: '40px', opacity: 0.3 } }, icon)
        )
    );
};

// Dashboard Component
const Dashboard = () => {
    return React.createElement(
        'div',
        { className: 'page-content' },
        React.createElement(
            'div',
            { className: 'page-header' },
            React.createElement('h1', null, 'Dashboard'),
            React.createElement('p', null, 'Mon, February 9, 2026')
        ),
        React.createElement(
            'div',
            { className: 'stat-cards-grid' },
            React.createElement(StatCard, { title: 'Document Issued Today', value: '141', subtitle: '↑ 2 activities', color: 'primary', icon: '📄' }),
            React.createElement(StatCard, { title: 'Revenue Collected Today', value: '₱3,650', subtitle: '2 payments', color: 'cyan', icon: '💰' }),
            React.createElement(StatCard, { title: 'Pending Request', value: '8', subtitle: 'Waiting approval', color: 'green', icon: '⏳' }),
            React.createElement(StatCard, { title: 'Flagged Requests', value: '2', subtitle: '1 needs review', color: 'pink', icon: '🚩' })
        ),
        React.createElement(
            'div',
            { className: 'dashboard-section', style: { marginBottom: 'var(--spacing-lg)' } },
            React.createElement(
                'div',
                { className: 'section-header' },
                React.createElement('h2', { className: 'section-title', style: { margin: 0 } }, 'Revenue Trend'),
                React.createElement(
                    'select',
                    { className: 'input-field', style: { width: '120px' } },
                    React.createElement('option', null, 'Last 7 months'),
                    React.createElement('option', null, 'Last 30 days'),
                    React.createElement('option', null, 'This year')
                )
            ),
            React.createElement(
                'div',
                { className: 'chart-container', style: { backgroundColor: 'var(--light-gray)', borderRadius: 'var(--radius-md)', padding: 'var(--spacing-lg)', height: '300px' } },
                React.createElement('p', { style: { textAlign: 'center', color: 'var(--text-gray)' } }, 'Revenue Trend Chart Placeholder')
            )
        )
    );
};

// Main App Component
const App = () => {
    const [activeNav, setActiveNav] = React.useState('dashboard');

    const renderPage = () => {
        switch (activeNav) {
            case 'dashboard':
                return React.createElement(Dashboard);
            case 'issuance':
                return React.createElement('div', { className: 'page-content' },
                    React.createElement('h1', null, 'Document Issuance (placeholder)')
                );
            case 'analytics':
                return React.createElement('div', { className: 'page-content' },
                    React.createElement('h1', null, 'Analytics (placeholder)')
                );
            case 'insights':
                return React.createElement('div', { className: 'page-content' },
                    React.createElement('h1', null, 'Insights (placeholder)')
                );
            default:
                return React.createElement(Dashboard);
        }
    };

    return React.createElement(
        'div',
        { className: 'dashboard-container' },
        React.createElement(Sidebar, { activeNav, setActiveNav }),
        React.createElement(
            'div',
            { className: 'main-content' },
            React.createElement(Header, { title: 'Barangay DIPS' }),
            renderPage()
        )
    );
};

// Render the app
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
