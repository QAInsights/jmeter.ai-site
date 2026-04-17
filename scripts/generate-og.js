import { createCanvas } from '@napi-rs/canvas';
import fs from 'fs';
import path from 'path';

async function main() {
const WIDTH = 1200;
const HEIGHT = 630;

const canvas = createCanvas(WIDTH, HEIGHT);
const ctx = canvas.getContext('2d');

// Colors matching jmeter.ai theme
const bgGradientStart = '#0a0e1a';
const bgGradientEnd = '#1a1f2e';
const accentColor = '#00d4ff';
const textColor = '#ffffff';
const subtextColor = '#94a3b8';

// Background gradient
const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
gradient.addColorStop(0, bgGradientStart);
gradient.addColorStop(1, bgGradientEnd);
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, WIDTH, HEIGHT);

// Decorative circuit/grid pattern
ctx.strokeStyle = 'rgba(0, 212, 255, 0.08)';
ctx.lineWidth = 1;
for (let i = 0; i < WIDTH; i += 60) {
  ctx.beginPath();
  ctx.moveTo(i, 0);
  ctx.lineTo(i, HEIGHT);
  ctx.stroke();
}
for (let i = 0; i < HEIGHT; i += 60) {
  ctx.beginPath();
  ctx.moveTo(0, i);
  ctx.lineTo(WIDTH, i);
  ctx.stroke();
}

// Accent glow effect
const glowGradient = ctx.createRadialGradient(WIDTH * 0.8, HEIGHT * 0.2, 0, WIDTH * 0.8, HEIGHT * 0.2, 400);
glowGradient.addColorStop(0, 'rgba(0, 212, 255, 0.15)');
glowGradient.addColorStop(1, 'transparent');
ctx.fillStyle = glowGradient;
ctx.fillRect(0, 0, WIDTH, HEIGHT);

// Main accent line at top
ctx.fillStyle = accentColor;
ctx.fillRect(0, 0, WIDTH, 4);

// Logo/Brand text
ctx.font = 'bold 48px "Segoe UI", "Helvetica Neue", Arial, sans-serif';
ctx.fillStyle = accentColor;
ctx.fillText('JMeter.AI', 80, 100);

// Main headline - using system fonts since custom fonts need registration
ctx.font = 'bold 72px "Segoe UI", "Helvetica Neue", Arial, sans-serif';
ctx.fillStyle = textColor;
ctx.fillText('Performance', 80, 220);
ctx.fillText('Intelligence', 80, 300);
ctx.fillText('Suite', 80, 380);

// Subtitle
ctx.font = '32px "Segoe UI", "Helvetica Neue", Arial, sans-serif';
ctx.fillStyle = subtextColor;
ctx.fillText('AI-Powered Tools & Plugins for Apache JMeter', 80, 460);

// Feature badges
const badges = [
  { text: 'AI Agents', x: 80 },
  { text: 'Plugins', x: 260 },
  { text: 'Smart Analysis', x: 430 }
];

badges.forEach(badge => {
  ctx.fillStyle = 'rgba(0, 212, 255, 0.15)';
  ctx.strokeStyle = accentColor;
  ctx.lineWidth = 1;
  const padding = 20;
  const textWidth = ctx.measureText(badge.text).width;
  const badgeWidth = textWidth + padding * 2;
  const badgeHeight = 44;
  const y = 520;

  // Rounded rect
  ctx.beginPath();
  ctx.roundRect(badge.x, y - 30, badgeWidth, badgeHeight, 8);
  ctx.fill();
  ctx.stroke();

  // Text
  ctx.font = '24px "Segoe UI", "Helvetica Neue", Arial, sans-serif';
  ctx.fillStyle = accentColor;
  ctx.fillText(badge.text, badge.x + padding, y);
});

// Bottom accent bar
ctx.fillStyle = accentColor;
ctx.globalAlpha = 0.3;
ctx.fillRect(0, HEIGHT - 2, WIDTH * 0.6, 2);
ctx.globalAlpha = 1;

// QAInsights branding at bottom right
ctx.font = '20px "Segoe UI", "Helvetica Neue", Arial, sans-serif';
ctx.fillStyle = subtextColor;
ctx.textAlign = 'right';
ctx.fillText('by QAInsights', WIDTH - 80, HEIGHT - 40);
ctx.textAlign = 'left';

// Save
const buffer = await canvas.encode('png');
const outputPath = path.join(process.cwd(), 'public', 'og.png');
fs.writeFileSync(outputPath, buffer);

console.log(`OG image generated: ${outputPath}`);
}

main().catch(console.error);
