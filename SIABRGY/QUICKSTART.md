# Quick Start Guide - Barangay DIPS

## How to Run

### Option 1: Direct Browser Open
1. Navigate to the project folder: `c:\Users\yanse\Desktop\SIABRGY`
2. Double-click on `index.html`
3. The application will open in your default browser

### Option 2: Using a Web Server (Recommended)

**Python 3:**
```bash
cd c:\Users\yanse\Desktop\SIABRGY
python -m http.server 8000
```
Then visit: `http://localhost:8000`

**Python 2:**
```bash
cd c:\Users\yanse\Desktop\SIABRGY
python -m SimpleHTTPServer 8000
```

**Node.js (npx):**
```bash
cd c:\Users\yanse\Desktop\SIABRGY
npx http-server
```

**PHP:**
```bash
cd c:\Users\yanse\Desktop\SIABRGY
php -S localhost:8000
```

## Project Overview

### Main Pages
1. **Dashboard** - View statistics, charts, and recent activity
2. **Document Issuance** - Multi-step wizard to issue documents

### Key Features
- Responsive sidebar navigation
- Search functionality for residents
- Document type selection with pricing
- Multi-step workflow with progress tracking
- Activity feed and transaction history
- Beautiful UI with modern design

## File Structure

```
SIABRGY/
├── index.html                    # Main page (open this first)
├── README.md                     # Full documentation
├── QUICKSTART.md                 # This file
├── src/
│   ├── index.js                 # React app code
│   ├── styles/
│   │   ├── global.css           # Global styles
│   │   ├── components.css       # Component styles
│   │   ├── dashboard.css        # Dashboard styles
│   │   └── document-issuance.css # Workflow styles
│   └── components/              # React components (JSX files)
└── public/                       # Static assets folder
```

## Navigation

### Sidebar Icons
- 📊 **Dashboard** - Main statistics and overview
- 📄 **Documents** - Document management
- 📋 **Document Issuance** - Issue new documents
- 📬 **Requests** - Manage requests
- 📈 **Reports** - View reports
- 👥 **Users** - User management
- ⚙️ **Settings** - Application settings

### Header Elements
- **Search Bar** - Search documents and residents
- **🔔** - Notifications
- **⚙️** - Settings menu
- **AD** - User profile

## Key Pages

### 1. Dashboard
Shows:
- 4 stat cards (Documents issued, Revenue, Pending, Flagged)
- Revenue trend line chart
- Document type distribution pie chart
- Recent activity feed
- Recent transactions table

**Click on sidebar icons to navigate**

### 2. Document Issuance
5-step process:
1. **Select Resident** - Choose a resident from the list
2. **Choose Document** - Select document type
3. **Details & Fees** - Review information
4. **Payment** - Process payment
5. **Preview & Issue** - Issue document

Each step has "Next Step" and "Back" buttons.

## Customization

### Adding New Residents
Edit `src/components/ResidentSelector.jsx`:
- add `status` and optional `blockedReasons` fields to sample residents
- ensure the filter/dropdown covers "CLEARED" and "BLOCKED" values
```javascript
const residents = [
  {
    id: 1,
    name: 'New Name',
    address: 'Address',
    birthDate: 'Date',
    age: 30,
    civilStatus: 'Single',
    voterStatus: 'Registered Voter'
  }
];
```

### Adding New Documents
Edit `src/components/DocumentSelector.jsx`:
```javascript
const documents = [
  {
    id: 1,
    title: 'Document Name',
    description: 'Description',
    fee: '₱50.00',
    isFree: false,
    icon: '📄'
  }
];
```

### Changing Colors
Edit `src/styles/global.css`:
```css
:root {
  --primary-blue: #3B5FFF;      /* Change this */
  --primary-cyan: #00BCD4;      /* And this */
  /* ... other colors ... */
}
```

## Troubleshooting

### Page Won't Load
1. Make sure all files are in the same directory structure
2. Try opening with a web server instead of direct file access
3. Check browser console (F12) for errors

### Styles Not Loading
1. Verify CSS files are in `src/styles/` directory
2. Check that `index.html` has correct CSS links
3. Clear browser cache (Ctrl+Shift+Delete)

### React Not Working
1. Check that React CDN links are correct in `index.html`
2. Verify internet connection for CDN
3. Open browser console to check for errors

## Browser Requirements
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Tips
- Use a modern browser for best performance
- Disable browser extensions if experiencing issues
- Clear cache regularly

## Next Steps
1. Open `index.html` in your browser
2. Explore the Dashboard
3. Try the Document Issuance workflow
4. Customize content in React components
5. Deploy to your server when ready

## Contact & Support
For issues or questions, refer to `README.md` for detailed documentation.
