# Limburg Open Dashboard

A modern, responsive web dashboard showcasing Limburg Open events from 2014-2026.

## 📋 Contents

- **index.html** - Main dashboard page with interactive tiles and history panel
- **styles.css** - Styling with animations and responsive design

## 🚀 Features

- ✨ 8 interactive tiles (2020-2026 + History)
- 🎨 Unique gradient color scheme for each year
- 📱 Fully responsive design (desktop, tablet, mobile)
- ⚡ Smooth hover animations and transitions
- 🔗 Direct links to Adobe Express pages
- 📜 Interactive history modal showing all events from 2014-2025
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

## 📂 How to Use

1. Open `index.html` in your web browser
2. Click any year tile to visit the corresponding event page
3. Click the "History" tile to view all events from 2014-2025
4. Tiles open in a new tab (or show modal for history)

## 📜 History Panel

The interactive history panel displays:
- **Years**: 2014-2026 complete event history
- **Participants**: All attendees for each year
- **Golf Courses**: Complete list of venues visited

Click "History" tile to toggle the modal open/close.

## 🔧 Customization

### Change Link URLs
Edit the `href` attribute in each tile within `index.html`:

```html
<a href="YOUR_NEW_URL" target="_blank" class="tile tile-2025">
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

## 📄 License

Created for Limburg Open events
