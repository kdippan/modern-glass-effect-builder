// ========================================
// Glassmorphism & Neumorphism Hybrid Maker
// Professional, accessible, performant
// ========================================

class GlassMorphismGenerator {
    constructor() {
        // DOM elements
        this.previewCard = document.getElementById('previewCard');
        this.previewBg = document.getElementById('previewBg');
        this.htmlCode = document.getElementById('htmlCode');
        this.cssCode = document.getElementById('cssCode');
        this.jsCode = document.getElementById('jsCode');
        
        // Control elements
        this.controls = {
            bgColor1: document.getElementById('bgColor1'),
            bgColor2: document.getElementById('bgColor2'),
            gradientAngle: document.getElementById('gradientAngle'),
            blurAmount: document.getElementById('blurAmount'),
            transparency: document.getElementById('transparency'),
            glassColor: document.getElementById('glassColor'),
            shadowIntensity: document.getElementById('shadowIntensity'),
            lightShadow: document.getElementById('lightShadow'),
            darkShadow: document.getElementById('darkShadow'),
            borderRadius: document.getElementById('borderRadius'),
            borderWidth: document.getElementById('borderWidth'),
            borderColor: document.getElementById('borderColor'),
            borderOpacity: document.getElementById('borderOpacity')
        };
        
        // Output displays
        this.outputs = {
            angleValue: document.getElementById('angleValue'),
            blurValue: document.getElementById('blurValue'),
            transparencyValue: document.getElementById('transparencyValue'),
            shadowValue: document.getElementById('shadowValue'),
            radiusValue: document.getElementById('radiusValue'),
            borderWidthValue: document.getElementById('borderWidthValue'),
            borderOpacityValue: document.getElementById('borderOpacityValue')
        };
        
        this.init();
    }
    
    init() {
        // Add event listeners to all controls
        Object.entries(this.controls).forEach(([key, element]) => {
            element.addEventListener('input', () => this.updatePreview());
        });
        
        // Update output displays
        this.controls.gradientAngle.addEventListener('input', (e) => {
            this.outputs.angleValue.textContent = e.target.value;
        });
        
        this.controls.blurAmount.addEventListener('input', (e) => {
            this.outputs.blurValue.textContent = e.target.value;
        });
        
        this.controls.transparency.addEventListener('input', (e) => {
            this.outputs.transparencyValue.textContent = e.target.value;
        });
        
        this.controls.shadowIntensity.addEventListener('input', (e) => {
            this.outputs.shadowValue.textContent = e.target.value;
        });
        
        this.controls.borderRadius.addEventListener('input', (e) => {
            this.outputs.radiusValue.textContent = e.target.value;
        });
        
        this.controls.borderWidth.addEventListener('input', (e) => {
            this.outputs.borderWidthValue.textContent = e.target.value;
        });
        
        this.controls.borderOpacity.addEventListener('input', (e) => {
            this.outputs.borderOpacityValue.textContent = e.target.value;
        });
        
        // Tab switching
        this.setupTabs();
        
        // Preset buttons
        this.setupPresets();
        
        // Copy button
        document.getElementById('copyHtml').addEventListener('click', () => this.copyCode());
        
        // Initial render
        this.updatePreview();
    }
    
    hexToRgb(hex) {
        const result = /^#?([a-fd]{2})([a-fd]{2})([a-fd]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    
    updatePreview() {
        const values = this.getValues();
        
        // Update background gradient
        this.previewBg.style.background = 
            `linear-gradient(${values.gradientAngle}deg, ${values.bgColor1}, ${values.bgColor2})`;
        
        // Update card glassmorphism
        const glassRgb = this.hexToRgb(values.glassColor);
        const borderRgb = this.hexToRgb(values.borderColor);
        
        this.previewCard.style.cssText = `
            background: rgba(${glassRgb.r}, ${glassRgb.g}, ${glassRgb.b}, ${values.transparency});
            backdrop-filter: blur(${values.blurAmount}px);
            -webkit-backdrop-filter: blur(${values.blurAmount}px);
            border-radius: ${values.borderRadius}px;
            border: ${values.borderWidth}px solid rgba(${borderRgb.r}, ${borderRgb.g}, ${borderRgb.b}, ${values.borderOpacity});
            box-shadow: 
                ${values.shadowIntensity}px ${values.shadowIntensity}px ${values.shadowIntensity * 2}px ${values.darkShadow}1a,
                -${values.shadowIntensity}px -${values.shadowIntensity}px ${values.shadowIntensity * 2}px ${values.lightShadow}1a;
        `;
        
        // Generate code
        this.generateCode(values);
    }
    
    getValues() {
        return {
            bgColor1: this.controls.bgColor1.value,
            bgColor2: this.controls.bgColor2.value,
            gradientAngle: this.controls.gradientAngle.value,
            blurAmount: this.controls.blurAmount.value,
            transparency: this.controls.transparency.value,
            glassColor: this.controls.glassColor.value,
            shadowIntensity: this.controls.shadowIntensity.value,
            lightShadow: this.controls.lightShadow.value,
            darkShadow: this.controls.darkShadow.value,
            borderRadius: this.controls.borderRadius.value,
            borderWidth: this.controls.borderWidth.value,
            borderColor: this.controls.borderColor.value,
            borderOpacity: this.controls.borderOpacity.value
        };
    }
    
    generateCode(values) {
        const glassRgb = this.hexToRgb(values.glassColor);
        const borderRgb = this.hexToRgb(values.borderColor);
        
        // HTML Code
        const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Glassmorphism Card</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="background">
        <div class="glass-card">
            <h3>Preview Card</h3>
            <p>This is a beautiful glassmorphic card with neumorphic shadows.</p>
            <div class="card-content">
                <div class="stat">
                    <span class="stat-value">24K</span>
                    <span class="stat-label">Visitors</span>
                </div>
                <div class="stat">
                    <span class="stat-value">98%</span>
                    <span class="stat-label">Success</span>
                </div>
            </div>
            <button class="cta-button">Get Started</button>
        </div>
    </div>
</body>
</html>`;
        
        // CSS Code
        const cssContent = `/* Glassmorphism & Neumorphism Hybrid Styles */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
}

.background {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(${values.gradientAngle}deg, ${values.bgColor1}, ${values.bgColor2});
    position: relative;
    overflow: hidden;
}

/* Animated background elements */
.background::before {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    top: -50px;
    right: -50px;
    animation: float 6s ease-in-out infinite;
}

.background::after {
    content: '';
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    bottom: -30px;
    left: -30px;
    animation: float 8s ease-in-out infinite reverse;
}

@keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
}

/* Glassmorphism Card */
.glass-card {
    background: rgba(${glassRgb.r}, ${glassRgb.g}, ${glassRgb.b}, ${values.transparency});
    backdrop-filter: blur(${values.blurAmount}px);
    -webkit-backdrop-filter: blur(${values.blurAmount}px);
    border-radius: ${values.borderRadius}px;
    padding: 32px;
    border: ${values.borderWidth}px solid rgba(${borderRgb.r}, ${borderRgb.g}, ${borderRgb.b}, ${values.borderOpacity});
    
    /* Neumorphic shadows */
    box-shadow: 
        ${values.shadowIntensity}px ${values.shadowIntensity}px ${values.shadowIntensity * 2}px ${values.darkShadow}1a,
        -${values.shadowIntensity}px -${values.shadowIntensity}px ${values.shadowIntensity * 2}px ${values.lightShadow}1a;
    
    max-width: 400px;
    width: 100%;
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
}

.glass-card h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: 8px;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.glass-card p {
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 24px;
    line-height: 1.6;
}

.card-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 24px;
}

.stat {
    background: rgba(255, 255, 255, 0.1);
    padding: 16px;
    border-radius: 12px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.stat-value {
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: 4px;
}

.stat-label {
    display: block;
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.8);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.cta-button {
    width: 100%;
    padding: 12px 24px;
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 12px;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.cta-button:hover {
    background: rgba(255, 255, 255, 0.35);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

/* Responsive */
@media (max-width: 768px) {
    .card-content {
        grid-template-columns: 1fr;
    }
}`;
        
        // JavaScript Code (optional enhancements)
        const jsContent = `// Optional: Add interactive hover effects

document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.glass-card');
    const button = document.querySelector('.cta-button');
    
    // Parallax hover effect
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
});
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
    
    // Button click animation
    button.addEventListener('click', () => {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
    });
});`;
        
        // Update code blocks
        this.htmlCode.textContent = htmlContent;
        this.cssCode.textContent = cssContent;
        this.jsCode.textContent = jsContent;
    }
    
    setupTabs() {
        const tabs = document.querySelectorAll('.tab-btn');
        const codeBlocks = document.querySelectorAll('.code-block');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetTab = tab.dataset.tab;
                
                // Update active tab
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // Update active code block
                codeBlocks.forEach(block => {
                    block.classList.remove('active');
                    if (block.id === `${targetTab}Code`) {
                        block.classList.add('active');
                    }
                });
            });
        });
    }
    
    setupPresets() {
        const presets = {
            ios: {
                bgColor1: '#667eea',
                bgColor2: '#764ba2',
                gradientAngle: 135,
                blurAmount: 12,
                transparency: 0.15,
                glassColor: '#ffffff',
                shadowIntensity: 15,
                lightShadow: '#ffffff',
                darkShadow: '#000000',
                borderRadius: 24,
                borderWidth: 1,
                borderColor: '#ffffff',
                borderOpacity: 0.3
            },
            stripe: {
                bgColor1: '#6366f1',
                bgColor2: '#8b5cf6',
                gradientAngle: 45,
                blurAmount: 16,
                transparency: 0.1,
                glassColor: '#ffffff',
                shadowIntensity: 25,
                lightShadow: '#ffffff',
                darkShadow: '#000000',
                borderRadius: 16,
                borderWidth: 1.5,
                borderColor: '#ffffff',
                borderOpacity: 0.4
            },
            vibrant: {
                bgColor1: '#f093fb',
                bgColor2: '#f5576c',
                gradientAngle: 180,
                blurAmount: 20,
                transparency: 0.2,
                glassColor: '#ffffff',
                shadowIntensity: 30,
                lightShadow: '#ffd700',
                darkShadow: '#ff1493',
                borderRadius: 32,
                borderWidth: 2,
                borderColor: '#ffffff',
                borderOpacity: 0.5
            },
            minimal: {
                bgColor1: '#e0e7ff',
                bgColor2: '#cffafe',
                gradientAngle: 90,
                blurAmount: 8,
                transparency: 0.25,
                glassColor: '#ffffff',
                shadowIntensity: 10,
                lightShadow: '#ffffff',
                darkShadow: '#cbd5e1',
                borderRadius: 12,
                borderWidth: 0.5,
                borderColor: '#ffffff',
                borderOpacity: 0.6
            }
        };
        
        document.querySelectorAll('.preset-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const preset = presets[btn.dataset.preset];
                this.applyPreset(preset);
            });
        });
    }
    
    applyPreset(preset) {
        Object.entries(preset).forEach(([key, value]) => {
            if (this.controls[key]) {
                this.controls[key].value = value;
                
                // Update output displays
                if (this.outputs[`${key}Value`]) {
                    this.outputs[`${key}Value`].textContent = value;
                }
            }
        });
        
        this.updatePreview();
    }
    
    async copyCode() {
        const activeTab = document.querySelector('.tab-btn.active').dataset.tab;
        let code = '';
        
        if (activeTab === 'html') code = this.htmlCode.textContent;
        if (activeTab === 'css') code = this.cssCode.textContent;
        if (activeTab === 'js') code = this.jsCode.textContent;
        
        try {
            await navigator.clipboard.writeText(code);
            const btn = document.getElementById('copyHtml');
            const originalText = btn.innerHTML;
            
            btn.classList.add('copied');
            btn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Copied!
            `;
            
            setTimeout(() => {
                btn.classList.remove('copied');
                btn.innerHTML = originalText;
            }, 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
            alert('Failed to copy code. Please try again.');
        }
    }
}

// Initialize the generator
new GlassMorphismGenerator();