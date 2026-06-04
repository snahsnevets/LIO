# Limburg Open Dashboard

A modern, responsive web dashboard showcasing Limburg Open events from 2014-2026.

## 📋 Contents

- **index.html** - Main dashboard page with interactive tiles and event navigation
- **history.html** - Interactive history modal showing all events from 2014-2025
- **Kaart.html** - Map page displaying course locations and venues
- **WHS.html** - World Handicap System calculator and player information
- **styles.css** - Central styling with animations and responsive design
- **scripts.js** - Main JavaScript functionality
- **whs-calculator.js** - WHS calculation logic and utilities
- **manifest.json** - PWA manifest for web app configuration

## 🚀 Features

- ✨ 8 interactive tiles (2020-2026 + History)
- 🎨 Unique gradient color scheme for each year
- 📱 Fully responsive design (desktop, tablet, mobile)
- ⚡ Smooth hover animations and transitions
- 🔗 Direct navigation between pages
- 📜 Interactive history showing all events from 2014-2025
- 🗺️ Map page for course locations
- 🏌️ WHS calculator for handicap management
- 🏌️ Golf-themed styling with emojis
- 🎯 Professional modern UI design

## 🎯 Color Scheme

- **2026**: Orange to Red Gradient (Coming Soon)
- **2025**: Purple Gradient
- **2024**: Pink to Red Gradient
- **2023**: Cyan to Blue Gradient
- **2022**: Green to Teal Gradient
- **2021**: Pink to Yellow Gradient
- **2020**: Cyan to Purple Gradient
- **History**: Purple to Blue Gradient

## 💻 Technology Stack

This project is built with:

- **HTML**: 55.2%
- **CSS**: 24.3%
- **JavaScript**: 20.5%

## 📂 How to Use

1. Open `index.html` in your web browser
2. Navigate between pages:
   - **Main Dashboard**: View all event years and access history
   - **History**: Click "History" tile to view all events from 2014-2025
   - **Map**: View golf course locations across Netherlands and Belgium
   - **WHS Calculator**: Calculate and manage player handicaps
3. Tiles and links open in new tabs or modals

## 📜 History Panel

The interactive history panel displays:

- **Years**: 2014-2026 complete event history
- **Participants**: All attendees for each year
- **Golf Courses**: Complete list of venues visited

## 🗺️ Map Page

The Kaart.html page features:

- Geographic visualization of golf courses
- Course locations across Netherlands and Belgium
- Interactive venue information

## 🏌️ WHS Calculator

The `WHS.html` page provides a small World Handicap System (WHS) score calculator.

How to use

- Open `WHS.html` in your web browser.
- Choose a course, select gender and tee, enter your handicap and score. The page calculates:
  - Estimated "slagen" (strokes received)
  - WHS-score (playing/course adjustments)

Adding or updating courses

- Course data is stored separately in `courses.json` (top-level). Edit this file to add or modify courses — no JavaScript changes required.

Example course entry (add under the top-level object):

```json
"mycourse": {
    "name": "My Course Name",
    "par": 72,
    "male": {
        "wit": { "SR": 140, "CR": 72.3 },
        "geel": { "SR": 135, "CR": 70.1 }
    },
    "female": {
        "geel": { "SR": 145, "CR": 75.4 }
    }
}
```

Notes

- After editing `courses.json` refresh `WHS.html` to pick up changes.
- `whs-calculator.js` loads `courses.json` dynamically and populates the course dropdown.

## 🔧 Customization

### Change Link URLs

Edit the `href` attribute in each tile within `index.html`:

```html
<a href="YOUR_NEW_URL" target="_blank" class="tile tile-2025"></a>
```

### Modify Colors

Update the gradient values in `styles.css`:

```css
.tile-2026 {
  background: linear-gradient(135deg, #ff9a56 0%, #ff6b6b 100%);
}
```

### Adjust Spacing

Modify the grid gap in `.dashboard`:

```css
.dashboard {
  gap: 30px; /* Change this value */
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 3 columns (auto-fit)
- **Tablet**: 2 columns
- **Mobile**: 1 column

## 🌐 Browser Support

Works on all modern browsers:

- Chrome
- Firefox
- Safari
- Edge

## 🏌️ Limburg Open Information

The Limburg Open is an annual golf tournament that has been running since 2014. The tournament rotates between different locations and features a group of passionate golfers who enjoy competitive golf.

### Event Statistics

- **Years Active**: 2014-2026 (12 years)
- **Total Participants**: Multiple recurring and guest players
- **Locations Visited**: Across Netherlands and Belgium
- **Golf Courses**: 50+ different courses

## ✅ Validation & CI

This repository includes an automated validation step to ensure `courses.json` is well-formed.

- Run locally:

```bash
# Validate using Node.js
node validate-courses.js

# Or using npm (from repository root)
npm run validate:courses
```

- CI: A GitHub Actions workflow is configured at `.github/workflows/validate-courses.yml`. It runs the same validation on pushes and pull requests when `courses.json` or `validate-courses.js` change.

If the validator reports errors, fix the indicated fields in `courses.json` and push again.

## 📄 License

Created for Limburg Open events
