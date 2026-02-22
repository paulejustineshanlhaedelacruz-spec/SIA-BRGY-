# 👨‍💻 Developer Guide - Barangay DIPS

## Introduction

This guide will help you understand, modify, and extend the Barangay DIPS application.

---

## 🏗️ Architecture Overview

### Technology Stack
- **Framework**: React 18.2.0 (from CDN, no build tools)
- **Markup**: HTML5
- **Styling**: CSS3 with Custom Properties
- **JavaScript**: ES6+ with React Hooks

### Design Pattern
- **Component-Based**: Modular, reusable components
- **Functional Components**: All components use React function components
- **Props Pattern**: Data passed via props
- **State Management**: React Hooks (useState)
- **CSS Modules**: Organized CSS files for different concerns

---

## 📂 Project Structure

```
Root/
├── index.html                 # Entry point
├── src/
│   ├── index.js              # React initialization
│   ├── App.jsx               # Root component
│   ├── components/           # React components
│   └── styles/               # CSS stylesheets
└── public/                   # Static assets
```

### Directory Purposes

| Directory | Purpose |
|-----------|---------|
| `src/` | All source code |
| `src/components/` | React components (JSX) |
| `src/styles/` | CSS stylesheets |
| `src/pages/` | Page-level components |
| `public/` | Static assets (images, fonts) |

---

## 🧩 Component System

### Component Types

#### 1. **Container Components** (Pages)
- `Dashboard` - Main dashboard page
- `DocumentIssuance` - Multi-step workflow page
- `Analytics` - Data & blocklist insights
- `Insights` - Additional reports and summaries
- Located in `src/pages/` to keep top‑level pages separate from smaller UI pieces.

#### 2. **UI Components** (Reusable)
- `StatCard` - Display metrics
- `ActivityList` - Activity feed
- `TransactionsTable` - Data table
- `DocumentChart` - Chart visualization

#### 3. **Layout Components**
- `Sidebar` - Navigation sidebar
- `Header` - Top navigation
- `ProgressIndicator` - Step indicator

#### 4. **Form Components**
- `ResidentSelector` - Resident selection form
- `DocumentSelector` - Document selection grid

### Component Structure

```jsx
// Basic component structure
const ComponentName = ({ prop1, prop2 }) => {
    const [state, setState] = React.useState(initialValue);
    
    const handleEvent = () => {
        // Handler logic
    };
    
    return React.createElement(
        'div',
        { className: 'component-class' },
        // Content here
    );
};

export default ComponentName;
```

### Using createElement Instead of JSX

Since this project doesn't use a build step, all components use `React.createElement`:

```javascript
// Instead of JSX: <div className="box">Hello</div>
// Use createElement:
React.createElement('div', { className: 'box' }, 'Hello')
```

---

## 🎨 Styling Guide

### CSS Architecture

The styling is organized into 4 main files:

#### 1. **global.css** - Foundation
- CSS custom properties (variables)
- Base element styles
- Typography
- Utility classes
- Scrollbar styling

#### 2. **components.css** - UI Components
- Buttons, cards, badges
- Forms, inputs, select
- Tables, avatars
- Modals, spinners

#### 3. **dashboard.css** - Dashboard Layout
- Container structure
- Sidebar styling
- Header styling
- Dashboard sections
- Charts and tables

#### 4. **document-issuance.css** - Workflow
- Progress indicator
- Form sections
- Resident/document selection
- Cards and lists

### CSS Custom Properties

Define reusable values in `:root`:

```css
:root {
    --primary-blue: #3B5FFF;
    --spacing-md: 16px;
    --radius-lg: 12px;
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

Use them in styles:

```css
.button {
    background-color: var(--primary-blue);
    padding: var(--spacing-md);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
}
```

### Color Scheme

```
Primary:    #3B5FFF (Blue)
Cyan:       #00BCD4
Green:      #4CAF50 (Success)
Red:        #F44336 (Danger)
Yellow:     #FFC107 (Warning)
Gray Light: #F5F5F5
Gray Dark:  #333333
Border:     #E0E0E0
```

### Responsive Design

Mobile-first approach with breakpoints:

```css
/* Default: Mobile */
.element { width: 100%; }

/* Tablet (768px+) */
@media (max-width: 768px) { }

/* Large devices (1024px+) */
@media (max-width: 1024px) { }

/* Desktop (1440px+) */
@media (max-width: 1440px) { }
```

---

## 📝 Modifying Components

### Adding a New Component

1. **Create file** in `src/components/NewComponent.jsx`:

```javascript
const NewComponent = ({ prop1, prop2 }) => {
    return React.createElement(
        'div',
        { className: 'new-component' },
        'Content here'
    );
};

export default NewComponent;
```

2. **Add CSS** to appropriate file in `src/styles/`:

```css
.new-component {
    padding: var(--spacing-md);
    background-color: white;
    border-radius: var(--radius-lg);
}
```

3. **Import and use** in parent component:

```javascript
const ParentComponent = () => {
    return React.createElement(NewComponent, { prop1: 'value' });
};
```

### Editing Existing Component

Example: Adding a new stat card to Dashboard

```javascript
// In src/components/Dashboard.jsx, add to the grid:
React.createElement(StatCard, {
    title: 'New Metric',
    value: '999',
    subtitle: 'New subtitle',
    color: 'primary',
    icon: '📊'
})
```

### Updating Data

#### Add Resident

In `src/components/ResidentSelector.jsx`:

```javascript
const residents = [
    // ... existing residents ...
    {
        id: 4,
        name: 'New Person Name',
        address: 'Address here',
        birthDate: 'Month Date, Year',
        age: 30,
        civilStatus: 'Single/Married',
        voterStatus: 'Registered Voter'
    }
];
```

#### Add Document

In `src/components/DocumentSelector.jsx`:

```javascript
const documents = [
    // ... existing documents ...
    {
        id: 10,
        title: 'Document Title',
        description: 'Document description',
        fee: '₱50.00',
        isFree: false,
        icon: '📄'
    }
];
```

#### Change Statistics

In `src/components/Dashboard.jsx`:

```javascript
React.createElement(StatCard, {
    title: 'New Title',
    value: '123',  // Change this
    subtitle: 'New subtitle',
    color: 'primary',
    icon: '📊'
})
```

---

## 🔄 State Management

### Using React Hooks

#### useState Example

```javascript
const [selectedResident, setSelectedResident] = React.useState(null);

// Update state
const handleSelect = (resident) => {
    setSelectedResident(resident);
};

// Use in render
if (selectedResident) {
    // Show resident details
}
```

#### Props Flow

```
Parent Component (state)
    ↓ passes data via props
Child Component (receives props)
    ↓ calls callback props
Parent Component (updates state)
```

Example:

```javascript
// Parent
const [activeNav, setActiveNav] = React.useState('dashboard');

// Pass to child
React.createElement(Sidebar, { activeNav, setActiveNav })

// Child receives and uses
const Sidebar = ({ activeNav, setActiveNav }) => {
    return React.createElement('div', {
        onClick: () => setActiveNav('documents')
    });
};
```

---

## 🖥️ Adding New Pages

### Step 1: Create Component

Create `src/components/NewPage.jsx`:

```javascript
const NewPage = () => {
    return React.createElement(
        'div',
        { className: 'page-content' },
        React.createElement('h1', null, 'New Page Title'),
        React.createElement('p', null, 'Page content here')
    );
};

export default NewPage;
```

### Step 2: Add CSS

Add styles to `src/styles/global.css` or create new CSS file.

### Step 3: Add Navigation

Edit `src/index.js` in the sidebar items and App component:

```javascript
// Add to sidebar items
const navItems = [
    // ... existing items ...
    { id: 'newpage', icon: '📌', title: 'New Page' }
];

// Add to renderPage function
const renderPage = () => {
    switch (activeNav) {
        case 'newpage':
            return React.createElement(NewPage);
        // ... other cases ...
    }
};
```

---

## 🐛 Debugging Tips

### 1. Check Browser Console
Press `F12` to open developer tools → Console tab

Common errors to check:
- React component errors
- CSS file not found
- JavaScript syntax errors

### 2. Inspect Elements
Press `F12` → Elements tab to:
- Check DOM structure
- View applied styles
- Test CSS changes

### 3. Debug State
Add console.log to track state changes:

```javascript
React.useEffect(() => {
    console.log('selectedResident:', selectedResident);
}, [selectedResident]);
```

### 4. Test Responsive Design
In DevTools → Toggle device toolbar or use Ctrl+Shift+M

---

## 📦 Performance Tips

### 1. Component Optimization

Memoize components to prevent unnecessary re-renders:

```javascript
// Wrap expensive components
const MemoizedComponent = React.memo(Component);
```

### 2. CSS Performance

- Use CSS variables instead of hardcoding colors
- Minimize CSS specificity
- Use classes instead of inline styles
- Combine media queries

### 3. JavaScript Performance

- Avoid unnecessary state updates
- Use event delegation
- Minimize DOM manipulations

---

## 🔒 Code Organization Best Practices

### Naming Conventions

- **Components**: PascalCase (e.g., `DashboardPage`)
- **Functions**: camelCase (e.g., `handleClick`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_URL`)
- **CSS Classes**: kebab-case (e.g., `.stat-card`)
- **CSS Variables**: kebab-case with double dash (e.g., `--primary-blue`)

### File Organization

```
components/
├── layout/           # Sidebar, Header
├── pages/            # Dashboard, DocumentIssuance
├── forms/            # ResidentSelector, DocumentSelector
└── ui/               # StatCard, ActivityList, etc.
```

### Comment Style

```javascript
// Single line comment for simple explanations

/* Multi-line comment
   for longer explanations
   and complex logic */
```

---

## 🧪 Testing Checklist

Before deploying, verify:

- [ ] All pages load without errors
- [ ] Navigation works between all pages
- [ ] Forms submit correctly
- [ ] Search functionality works
- [ ] Responsive design on mobile
- [ ] All colors display correctly
- [ ] All fonts render properly
- [ ] No console errors in browser DevTools
- [ ] Links to CSS files work
- [ ] React loads from CDN

---

## 🚀 Deployment Checklist

Before going live:

- [ ] Test on multiple browsers
- [ ] Test on different devices
- [ ] Optimize images in `public/` folder
- [ ] Minify CSS (optional, not required)
- [ ] Test on slow internet speeds
- [ ] Verify all external links work
- [ ] Check for broken asset links
- [ ] Test form submissions
- [ ] Verify responsive breakpoints
- [ ] Check accessibility (keyboard navigation)

---

## 📚 Further Learning

### React
- [React Official Docs](https://react.dev)
- [React Hooks](https://react.dev/reference/react/hooks)
- [React.createElement()](https://react.dev/reference/react/createElement)

### CSS
- [CSS Custom Properties (Variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)

### Web Development
- [MDN Web Docs](https://developer.mozilla.org/)
- [HTML5 Spec](https://html.spec.whatwg.org/)
- [Web Accessibility](https://www.w3.org/WAI/)

---

## 🤝 Contributing

When modifying the project:

1. Keep component structure modular
2. Follow naming conventions
3. Add comments for complex logic
4. Test thoroughly before merging
5. Update documentation
6. Maintain consistent code style

---

## 📞 Common Tasks

### Task: Change App Theme Color
Edit `src/styles/global.css`:
```css
:root {
    --primary-blue: #YOUR_COLOR;
    --primary-cyan: #YOUR_COLOR;
    /* Update other colors */
}
```

### Task: Add New Menu Item
Edit `src/index.js`, add to sidebar and renderPage function.

### Task: Add New Resident
Edit `src/components/ResidentSelector.jsx`, add to residents array.

### Task: Modify Form Validation
Edit form component, add validation logic before submission.

### Task: Add Loading State
Use `React.useState` to track loading, show spinner while loading.

---

## 🎓 Learning Path

1. **Understand Structure**: Read project files
2. **Modify Data**: Change residents/documents
3. **Customize Styles**: Change colors and spacing
4. **Add Components**: Create new UI components
5. **Add Pages**: Create new page sections
6. **Integrate Backend**: Connect to API

---

**Happy Coding!** 🚀

For questions or issues, refer to the README.md or PROJECT_SUMMARY.md files.
