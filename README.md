# 🔮 GlassLab - Glassmorphism & Neumorphism Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-SITE-ID/deploy-status)](https://app.netlify.com/sites/glasslab-io/deploys)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)
[![WCAG 2.2](https://img.shields.io/badge/WCAG-2.2%20AA-green.svg)](https://www.w3.org/WAI/WCAG22/quickref/)
![Performance](https://img.shields.io/badge/performance-90%2B-brightgreen)

> Create stunning glassmorphism and neumorphism UI effects with live preview and instant code generation. Perfect for modern web design with iOS-style frosted glass effects.

**🚀 Live Demo:** [https://glasslab-io.netlify.app](https://glasslab-io.netlify.app)

---

## 📸 Preview

![GlassLab Preview](https://via.placeholder.com/800x400/667eea/ffffff?text=GlassLab+Preview+Screenshot)

---

## ✨ Features

- 🎨 **Live Preview** - See changes in real-time as you customize
- 💾 **Instant Code Export** - Generate production-ready HTML, CSS, and JavaScript
- 🎭 **Dual Design Styles** - Combines glassmorphism's transparency with neumorphism's depth
- 🎯 **4 Style Presets** - iOS, Stripe, Vibrant, and Minimal pre-configured styles
- 🎚️ **Full Customization** - Control blur, transparency, shadows, borders, and gradients
- ♿ **WCAG 2.2 AA Compliant** - Accessible design with proper contrast ratios
- 📱 **Fully Responsive** - Mobile-first design (320px to 1440px+)
- ⚡ **Zero Dependencies** - Pure vanilla JavaScript, no frameworks required
- 📋 **Copy to Clipboard** - One-click code copying with visual feedback
- 🔧 **SEO Optimized** - Semantic HTML5 and meta tags included

---

## 🎯 Use Cases

- 🎨 Design prototypes for modern UI/UX projects
- 💼 Create glassmorphic cards for landing pages
- 📱 iOS-style design elements
- 🖼️ Dashboard components with depth
- 🎓 Learn CSS backdrop-filter and modern effects
- 🛠️ Rapid prototyping for client presentations

---

## 🚀 Quick Start

### Option 1: Use Online

Simply visit [https://glasslab-io.netlify.app](https://glasslab-io.netlify.app) and start creating!

### Option 2: Local Installation

```
# Clone the repository
git clone https://github.com/kdippan/modern-glass-effect-builder.git

# Navigate to the project directory
cd modern-glass-effect-builder

# Open index.html in your browser
open index.html
# OR
# Use a local server (recommended)
python -m http.server 8000
# Then visit http://localhost:8000
```

### Option 3: Deploy Your Own

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kdippan/modern-glass-effect-builder)

---

## 📖 How to Use

### 1. Customize Background Gradient
- Select two colors for your gradient background
- Adjust the gradient angle (0-360°)

### 2. Configure Glassmorphism
- **Blur Amount**: Control the backdrop-filter blur (0-30px)
- **Opacity**: Adjust transparency (0-1)
- **Glass Tint**: Choose the glass color overlay

### 3. Add Neumorphic Shadows
- **Shadow Intensity**: Control depth effect (0-50px)
- **Light/Dark Shadows**: Customize shadow colors for 3D effect

### 4. Fine-tune Details
- **Border Radius**: Adjust corner roundness (0-50px)
- **Border Width & Opacity**: Control edge definition
- **Border Color**: Customize border appearance

### 5. Use Presets
Click any preset button for instant style changes:
- **iOS Style**: Apple's signature frosted glass
- **Stripe**: Modern, professional dashboard look
- **Vibrant**: Bold colors with strong effects
- **Minimal**: Clean, subtle elegance

### 6. Export Code
- Switch between HTML, CSS, and JavaScript tabs
- Click "Copy All" to copy the current tab's code
- Paste into your project and customize further!

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic structure with ARIA labels |
| **CSS3** | Modern features (Grid, Flexbox, backdrop-filter) |
| **Vanilla JavaScript** | DOM manipulation and code generation |
| **CSS Variables** | Dynamic theming and customization |
| **Clipboard API** | Modern copy-to-clipboard functionality |

---

## 📂 Project Structure

```
modern-glass-effect-builder/
├── index.html          # Main HTML structure
├── styles.css          # Complete CSS with responsive design
├── script.js           # JavaScript functionality
├── LICENSE             # MIT License
└── README.md           # This file
```

---

## 🎨 Browser Compatibility

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 76+ | ✅ Full |
| Firefox | 103+ | ✅ Full |
| Safari | 9+ | ✅ Full |
| Edge | 79+ | ✅ Full |
| Opera | 63+ | ✅ Full |

**Note:** Glassmorphism requires `backdrop-filter` support. For older browsers, graceful fallbacks are included.

---

## 🌟 Key Features Explained

### Glassmorphism
A modern design trend featuring:
- Translucent backgrounds (rgba with low opacity)
- Backdrop blur effect (`backdrop-filter: blur()`)
- Subtle borders with transparency
- Multi-layered depth perception

### Neumorphism
Soft UI design characterized by:
- Dual shadows (light and dark)
- Subtle, tactile appearance
- Minimal color contrast
- Embossed or extruded surfaces

### The Hybrid Approach
GlassLab combines both styles to create:
- Depth through neumorphic shadows
- Transparency through glassmorphism
- Enhanced visual hierarchy
- Modern, professional aesthetics

---

## ⚡ Performance

- **Lighthouse Score**: 90+ across all metrics
- **Bundle Size**: 
  - HTML: ~3KB
  - CSS: ~8KB
  - JavaScript: ~6KB
- **Load Time**: <1s on broadband, <3s on 3G
- **Core Web Vitals**:
  - LCP: <2.5s ✅
  - INP: <200ms ✅
  - CLS: <0.1 ✅

---

## ♿ Accessibility

- **WCAG 2.2 AA Compliant**
- Minimum 4.5:1 contrast ratio for text
- 44×44px minimum touch targets
- Keyboard navigation with visible focus indicators
- ARIA labels for screen readers
- Supports `prefers-reduced-motion`
- Supports `prefers-contrast: high`

---

## 📱 Responsive Breakpoints

| Device | Width | Layout |
|--------|-------|--------|
| Mobile | 320-767px | Single column, stacked controls |
| Tablet | 768-1023px | Two columns, side-by-side |
| Desktop | 1024-1439px | Multi-column, optimized spacing |
| Large | 1440px+ | Max-width container, centered |

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
   ```
   git clone https://github.com/kdippan/modern-glass-effect-builder.git
   ```

2. **Create a feature branch**
   ```
   git checkout -b feature/amazing-feature
   ```

3. **Commit your changes**
   ```
   git commit -m "Add amazing feature"
   ```

4. **Push to the branch**
   ```
   git push origin feature/amazing-feature
   ```

5. **Open a Pull Request**

### Contribution Guidelines
- Follow existing code style and formatting
- Add comments for complex logic
- Test on multiple browsers
- Update documentation as needed
- Maintain WCAG 2.2 AA compliance

---

## 🐛 Bug Reports & Feature Requests

Found a bug or have an idea? Please open an issue:

1. Go to [Issues](https://github.com/kdippan/modern-glass-effect-builder/issues)
2. Click "New Issue"
3. Choose "Bug Report" or "Feature Request"
4. Fill in the template with details

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### MIT License Summary

**✅ You Can:**
- Use commercially
- Modify the code
- Distribute copies
- Use privately
- Sublicense

**⚠️ You Must:**
- Include copyright notice
- Include license text

**❌ You Cannot:**
- Hold author liable
- Use author's name to promote derivatives (without permission)

```
MIT License

Copyright (c) 2025 Dippan Bhusal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🚀 Deployment

### Deploy to Netlify

1. **Automatic Deployment** (Recommended)
   - Fork this repository
   - Connect your GitHub account to Netlify
   - Click "New site from Git"
   - Select your forked repository
   - Deploy! ✨

2. **Manual Deployment**
   ```
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Navigate to project directory
   cd modern-glass-effect-builder
   
   # Deploy
   netlify deploy --prod
   ```

3. **One-Click Deploy**
   
   [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kdippan/modern-glass-effect-builder)

### Deploy to Other Platforms

- **Vercel**: [vercel.com](https://vercel.com)
- **GitHub Pages**: [pages.github.com](https://pages.github.com)
- **Cloudflare Pages**: [pages.cloudflare.com](https://pages.cloudflare.com)

---

## 🔗 Links

- **Live Demo**: [https://glasslab-io.netlify.app](https://glasslab-io.netlify.app)
- **GitHub Repository**: [https://github.com/kdippan/modern-glass-effect-builder](https://github.com/kdippan/modern-glass-effect-builder)
- **Report Issues**: [GitHub Issues](https://github.com/kdippan/modern-glass-effect-builder/issues)
- **Documentation**: [Wiki](https://github.com/kdippan/modern-glass-effect-builder/wiki)

---

## 💡 Inspiration & Resources

- [Glassmorphism.com](https://glassmorphism.com/)
- [Apple iOS Design Guidelines](https://developer.apple.com/design/)
- [Stripe Dashboard Design](https://stripe.com)
- [CSS-Tricks: backdrop-filter](https://css-tricks.com/almanac/properties/b/backdrop-filter/)
- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)

---

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/kdippan/modern-glass-effect-builder?style=social)
![GitHub forks](https://img.shields.io/github/forks/kdippan/modern-glass-effect-builder?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/kdippan/modern-glass-effect-builder?style=social)
![GitHub issues](https://img.shields.io/github/issues/kdippan/modern-glass-effect-builder)
![GitHub pull requests](https://img.shields.io/github/issues-pr/kdippan/modern-glass-effect-builder)
![GitHub last commit](https://img.shields.io/github/last-commit/kdippan/modern-glass-effect-builder)

---

## 👨‍💻 Author

**Dippan Bhusal**
- GitHub: [@KDippan](https://github.com/kdippan)
- Email: [Dippan.connect@gmail.com](mailto:Dippan.connect@gmail.com)

---

## 🙏 Acknowledgments

- Inspired by Apple's iOS design language
- Thanks to the CSS community for backdrop-filter support
- Built with modern web standards
- Special thanks to all contributors

---

## 📝 Changelog

### Version 1.0.0 (October 2025)
- ✨ Initial release
- 🎨 4 preset styles (iOS, Stripe, Vibrant, Minimal)
- 💾 Code generation for HTML, CSS, JavaScript
- ♿ WCAG 2.2 AA accessibility compliance
- 📱 Full responsive design
- 📋 Copy-to-clipboard functionality
- 🎯 Live preview with real-time updates

---

## 📞 Support

Need help? Here are some ways to get support:

- 📖 Read the [Documentation](https://github.com/kdippan/modern-glass-effect-builder/wiki)
- 💬 Join [Discussions](https://github.com/kdippan/modern-glass-effect-builder/discussions)
- 🐛 Report [Issues](https://github.com/kdippan/modern-glass-effect-builder/issues)
- 📧 Email: [Dippan.connect@gmail.com](mailto:Dippan.connect@gmail.com)

---

## ⭐ Show Your Support

If you found this project helpful, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 🔀 Forking and contributing
- 📢 Sharing with others

---

<div align="center">

**Made with ❤️ using vanilla JavaScript**

[Report Bug](https://github.com/kdippan/modern-glass-effect-builder/issues) · 
[Request Feature](https://github.com/kdippan/modern-glass-effect-builder/issues) · 
[Live Demo](https://glasslab-io.netlify.app)

</div>

---

<div align="center">
  <sub>Built with modern web technologies. Licensed under MIT.</sub>
</div>