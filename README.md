# Vishal Chauhan — Personal Website

A modern, responsive personal website for Human–Machine Interaction researcher Vishal Chauhan, featuring a clean design, smooth animations, and optimal user experience across all devices.

## 🎨 Design Features

### Modern Aesthetic
- **TailwindCSS Framework**: Utility-first CSS framework for rapid and consistent styling
- **Google Fonts**: Poppins for headings, Inter for body text
- **Animate.css**: Subtle animations and transitions for enhanced user experience
- **Modern Color Palette**: 
  - Primary: Indigo (#6366f1)
  - Secondary: Purple (#8b5cf6)
  - Accent: Pink (#ec4899)
  - Gradient backgrounds and smooth transitions throughout

### Responsive Design
- Fully responsive layout optimized for mobile, tablet, and desktop
- Mobile-first approach with breakpoints for different screen sizes
- Glassmorphism effects on header with backdrop blur
- Collapsible mobile navigation with smooth animations

### UI Components
- **Modern Cards**: Elevated cards with hover effects and shadows
- **Gradient Buttons**: Eye-catching CTAs with smooth hover transitions
- **Icon Integration**: Emojis and SVG icons for visual interest
- **Smooth Scrolling**: Native smooth scroll behavior for navigation
- **Scroll-to-Top Button**: Appears after scrolling down 300px

## 📁 Files Included

- `index.html` — Main HTML file with semantic markup
- `styles.css` — Custom CSS styles complementing TailwindCSS
- `script.js` — JavaScript for interactivity (navigation, scroll effects, etc.)
- `README.md` — This file
- `.gitignore` — Git ignore configuration

## 🚀 Features

### Sections
1. **Hero**: Eye-catching introduction with gradient text and summary card
2. **Research**: Focus areas displayed in modern card grid
3. **Publications**: Numbered publication cards with conference badges
4. **Projects**: Three-column grid with technology tags
5. **Experience**: Timeline-style experience cards
6. **Education & Skills**: Two-column layout with degree badges and skill tags
7. **Contact**: Large contact cards with email and phone
8. **Footer**: Dark gradient footer with social links

### Functionality
- ✅ Mobile navigation toggle with icon animation
- ✅ Smooth scroll to sections with offset for fixed header
- ✅ Scroll-to-top button with fade-in effect
- ✅ Dynamic copyright year
- ✅ Console welcome message
- ✅ ARIA labels for accessibility
- ✅ Focus states for keyboard navigation
- ✅ SEO meta tags and Open Graph tags

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **TailwindCSS 3.x**: Utility-first CSS framework (CDN)
- **Google Fonts**: Poppins & Inter font families
- **Animate.css**: CSS animation library (CDN)
- **Vanilla JavaScript**: No frameworks, pure JS for optimal performance

## 📦 Deployment

### GitHub Pages

1. **Enable GitHub Pages**:
   ```
   Repository Settings → Pages → Source: Branch 'main', Folder '/ (root)'
   ```

2. **Access your site**:
   ```
   https://vish0012.github.io/Website-/
   ```

3. **Custom Domain** (Optional):
   - Add a CNAME file with your custom domain
   - Configure DNS settings in your domain registrar

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/vish0012/Website-.git
   cd Website-
   ```

2. **Start a local server**:
   ```bash
   # Python 3
   python3 -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (with http-server)
   npx http-server
   ```

3. **Open in browser**:
   ```
   http://localhost:8000
   ```

## ✏️ Customization

### Update Personal Information

1. **Google Scholar Link** (index.html & script.js):
   ```javascript
   // Replace YOUR_ID with your actual Google Scholar ID
   href="https://scholar.google.com/citations?user=YOUR_ID"
   ```

2. **Color Scheme** (index.html - TailwindCSS config):
   ```javascript
   colors: {
     primary: '#6366f1',    // Change to your preferred color
     secondary: '#8b5cf6',   // Change to your preferred color
     accent: '#ec4899',      // Change to your preferred color
   }
   ```

3. **Content**: Edit the HTML directly in `index.html` to update:
   - Publications
   - Projects
   - Experience
   - Education
   - Skills
   - Contact information

### Add Custom Favicon

Replace the emoji favicon in the `<head>` section:
```html
<link rel="icon" type="image/png" href="favicon.png">
```

### Advanced Customization

- **Add New Sections**: Follow the existing pattern with TailwindCSS classes
- **Modify Animations**: Edit `styles.css` for custom animations
- **Add Features**: Extend `script.js` with new functionality

## 🎯 Performance Optimizations

- ✅ CDN resources with crossorigin attribute
- ✅ Minimal JavaScript for fast load times
- ✅ Optimized images (using emojis and SVGs where possible)
- ✅ Lazy loading for external resources
- ✅ Reduced motion for accessibility

## 🔒 Security

- ✅ No security vulnerabilities (CodeQL verified)
- ✅ HTTPS recommended for production
- ✅ No external form submissions (email links only)

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available for personal use. Feel free to fork and customize for your own portfolio.

## 🤝 Contributing

Suggestions and improvements are welcome! Please open an issue or submit a pull request.

## 📞 Contact

- **Email**: vishalchauhan@outlook.sg
- **Phone**: +81 80-7457-7773
- **GitHub**: [@vish0012](https://github.com/vish0012)
- **Location**: Tokyo, Japan

---

© 2026 Vishal Chauhan — Human–Machine Interaction Researcher
