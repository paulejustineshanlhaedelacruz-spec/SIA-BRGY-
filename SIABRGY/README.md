# Barangay DIPS - Document Issuance and Processing System

A modern web application for managing document issuance and processing in barangay offices, built with React, HTML5, and CSS3.

## Project Structure

```
SIABRGY/
├── index.html                 # Main React HTML entry point
├── dashboard.html             # Static dashboard prototype (linked to others)
├── issuance.html              # Static document issuance page
├── analytics.html             # Static analytics page
├── insights.html              # Static insights page
├── src/
│   ├── index.js              # React app initialization
│   ├── App.jsx               # Main app component
│   ├── components/           # React components
│   │   ├── Sidebar.jsx
│   │   ├── Header.jsx
│   │   ├── Dashboard.jsx
│   │   ├── DocumentIssuance.jsx
│   │   ├── ProgressIndicator.jsx
│   │   ├── ResidentSelector.jsx
│   │   ├── DocumentSelector.jsx
│   │   ├── StatCard.jsx
│   │   ├── ActivityList.jsx
│   │   ├── TransactionsTable.jsx
│   │   └── DocumentChart.jsx
│   └── styles/               # CSS stylesheets
│       ├── global.css        # Global styles & variables
│       ├── components.css    # Component-specific styles
│       ├── dashboard.css     # Dashboard layout styles
│       └── document-issuance.css  # Document issuance styles
└── public/                   # Static assets
```

## Features

### Dashboard
- **Stat Cards**: Display key metrics (documents issued, revenue collected, pending requests, flagged requests)
- **Revenue Trend**: Line chart showing revenue trends over time
- **Document Distribution**: Pie chart visualizing document type distribution
- **Recent Activity**: Activity feed with transaction details
- **Recent Transactions**: Paginated table of recent transactions

### Document Issuance Workflow
- **Step 1: Select Resident** - Search and select residents with filtering capabilities
- **Step 2: Choose Document** - Browse and select document types with fee information
- **Step 3: Details & Fees** - Review order summary
- **Step 4: Payment** - Process payment (placeholder)
- **Step 5: Preview & Issue** - Final review and document issuance

### Navigation
- Sidebar with 7 main sections:
  - Dashboard
  - Documents
  - Document Issuance
  - Requests
  - Reports
  - Users
  - Settings

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or Node.js required

### Installation

1. **Open the application directly**:
   - Simply open `index.html` in your web browser
   - Or serve the files using any web server

2. **Using Python's built-in server** (if Python is installed):
   ```bash
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000`

3. **Using any other web server**:
   - Node.js: `npx http-server`
   - Ruby: `ruby -run -ehttpd . -p8000`
   - PHP: `php -S localhost:8000`

## Technology Stack

- **Frontend Framework**: React 18.2.0 (via CDN)
- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox
- **JavaScript**: ES6+ with React Hooks

## Key Components

### StatCard
Displays key metrics with color-coded backgrounds.
```jsx
<StatCard 
  title="Document Issued Today"
  value="141"
  subtitle="↑ 2 activities"
  color="primary"
  icon="📄"
/>
```

### ResidentSelector
- Allows search and filter by name/status.
- Displays a detailed card when a resident is clicked, including voter status and
  an eligibility badge (cleared/blocked).
- The "Next Step" button is disabled for blocked users and a warning appears in
  the parent document issuance page.
Allows searching and filtering residents with status indication.

### DocumentSelector
Grid-based document selection with pricing and descriptions.

### ProgressIndicator
5-step progress indicator for document issuance workflow.

### Dashboard
Main dashboard with stats, charts, and activity feed.

## Styling

### Color Scheme
- **Primary**: `#3B5FFF` (Blue)
- **Cyan**: `#00BCD4`
- **Success**: `#4CAF50` (Green)
- **Danger**: `#F44336` (Red)
- **Warning**: `#FFC107` (Yellow)

### CSS Variables
All colors and spacing are defined as CSS custom properties in `global.css`:
```css
--primary-blue: #3B5FFF;
--spacing-md: 16px;
--radius-lg: 12px;
/* ... and more */
```

## Component Documentation

### Dashboard
Main landing page showing:
- 4 stat cards (key metrics)
- Revenue trend chart
- Document distribution pie chart
- Recent activity list
- Transaction history table

### Document Issuance
Multi-step wizard for issuing documents:
1. Select a resident from the system
2. Choose document type
3. Review details and fees
4. Process payment
5. Preview and issue

### Sidebar
Fixed navigation with 7 main sections and expandable menus.

### Header
Top navigation bar with search, notifications, settings, and user profile.

## Customization

### Adding New Documents
Edit the `documents` array in `DocumentSelector.jsx`:
```javascript
const documents = [
  {
    id: 10,
    title: 'New Document Type',
    description: 'Description here',
    fee: '₱50.00',
    isFree: false,
    icon: '📄',
  },
  // ...
];
```

### Adding New Residents
Edit the `residents` array in `ResidentSelector.jsx`:
```javascript
const residents = [
  {
    id: 4,
    name: 'New Resident',
    address: 'Address here',
    birthDate: 'Date',
    age: 30,
    civilStatus: 'Status',
    voterStatus: 'Registered Voter',
  },
  // ...
];
```

### Changing Colors
Update CSS variables in `src/styles/global.css`:
```css
:root {
  --primary-blue: #YOUR_COLOR;
  --primary-cyan: #YOUR_COLOR;
  /* ... */
}
```

## File Descriptions

### HTML & CSS
- **index.html**: Entry point with React CDN links
- **global.css**: CSS variables, base styles, typography
- **components.css**: Reusable component styles (buttons, cards, inputs)
- **dashboard.css**: Dashboard layout and grid structure
- **document-issuance.css**: Document issuance workflow styles

### React Components
- **index.js**: App initialization and main component logic
- **Sidebar.jsx**: Navigation sidebar
- **Header.jsx**: Top navigation header
- **Dashboard.jsx**: Main dashboard page
- **DocumentIssuance.jsx**: Multi-step document issuance
- **StatCard.jsx**: Key metrics display
- **ActivityList.jsx**: Recent activity feed
- **TransactionsTable.jsx**: Transaction history
- **DocumentChart.jsx**: Distribution pie chart
- **ProgressIndicator.jsx**: Step indicator
- **ResidentSelector.jsx**: Resident selection form
- **DocumentSelector.jsx**: Document selection grid

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- Lightweight: No build step required
- React from CDN: Loaded from global CDN
- CSS optimized: Custom properties and grid layouts
- No external dependencies: Self-contained application

## Future Enhancements

- [ ] Backend API integration
- [ ] User authentication
- [ ] Database connectivity
- [ ] Real charts with Chart.js or similar
- [ ] PDF generation for documents
- [ ] Email notifications
- [ ] Advanced search and filtering
- [ ] Analytics dashboard
- [ ] Export functionality
- [ ] Multi-language support

## License

This project is part of the Barangay DIPS system.

## Support

For issues or questions, please contact the development team.
