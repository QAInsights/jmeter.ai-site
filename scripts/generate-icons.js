import { createCanvas } from '@napi-rs/canvas';
import fs from 'fs';
import path from 'path';

const outputDirectory = path.join(process.cwd(), 'public');

function drawIcon(size, { maskable = false } = {}) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  const background = '#0a0e1a';
  const accentStart = '#00e5ff';
  const accentEnd = '#3d8bfd';
  const magenta = '#d500f9';
  const safeAreaInset = maskable ? size * 0.08 : size * 0.04;
  const contentSize = size - safeAreaInset * 2;
  const radius = size * 0.2;

  const bgGradient = ctx.createLinearGradient(0, 0, size, size);
  bgGradient.addColorStop(0, '#0a0e1a');
  bgGradient.addColorStop(0.65, '#111827');
  bgGradient.addColorStop(1, '#0c4a6e');

  ctx.fillStyle = background;
  ctx.fillRect(0, 0, size, size);

  ctx.beginPath();
  ctx.roundRect(safeAreaInset, safeAreaInset, contentSize, contentSize, radius);
  ctx.fillStyle = bgGradient;
  ctx.fill();

  ctx.save();
  ctx.beginPath();
  ctx.roundRect(safeAreaInset, safeAreaInset, contentSize, contentSize, radius);
  ctx.clip();

  const glow = ctx.createRadialGradient(size * 0.78, size * 0.2, 0, size * 0.78, size * 0.2, size * 0.5);
  glow.addColorStop(0, 'rgba(0, 229, 255, 0.24)');
  glow.addColorStop(1, 'rgba(0, 229, 255, 0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, size, size);

  ctx.strokeStyle = 'rgba(61, 139, 253, 0.14)';
  ctx.lineWidth = Math.max(1, size * 0.006);
  const gridStep = size * 0.125;
  for (let x = safeAreaInset; x <= safeAreaInset + contentSize; x += gridStep) {
    ctx.beginPath();
    ctx.moveTo(x, safeAreaInset);
    ctx.lineTo(x, safeAreaInset + contentSize);
    ctx.stroke();
  }
  for (let y = safeAreaInset; y <= safeAreaInset + contentSize; y += gridStep) {
    ctx.beginPath();
    ctx.moveTo(safeAreaInset, y);
    ctx.lineTo(safeAreaInset + contentSize, y);
    ctx.stroke();
  }

  const barWidth = size * 0.08;
  const barRadius = barWidth / 2;
  const barPositions = [
    { x: size * 0.25, y: size * 0.55, height: size * 0.19, alpha: 0.24 },
    { x: size * 0.4, y: size * 0.46, height: size * 0.28, alpha: 0.18 },
    { x: size * 0.55, y: size * 0.32, height: size * 0.42, alpha: 0.14 }
  ];

  barPositions.forEach((bar) => {
    ctx.fillStyle = `rgba(0, 229, 255, ${bar.alpha})`;
    ctx.beginPath();
    ctx.roundRect(bar.x, bar.y, barWidth, bar.height, barRadius);
    ctx.fill();
  });

  const lineGradient = ctx.createLinearGradient(size * 0.18, size * 0.68, size * 0.82, size * 0.36);
  lineGradient.addColorStop(0, accentStart);
  lineGradient.addColorStop(1, accentEnd);

  ctx.strokeStyle = lineGradient;
  ctx.lineWidth = Math.max(2, size * 0.06);
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(size * 0.18, size * 0.66);
  ctx.lineTo(size * 0.34, size * 0.53);
  ctx.lineTo(size * 0.47, size * 0.58);
  ctx.lineTo(size * 0.64, size * 0.37);
  ctx.lineTo(size * 0.81, size * 0.45);
  ctx.stroke();

  const nodes = [
    { x: size * 0.34, y: size * 0.53, color: accentStart, radius: size * 0.055 },
    { x: size * 0.64, y: size * 0.37, color: accentEnd, radius: size * 0.055 },
    { x: size * 0.81, y: size * 0.45, color: magenta, radius: size * 0.055 }
  ];

  nodes.forEach((node) => {
    ctx.fillStyle = background;
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = node.color;
    ctx.lineWidth = Math.max(2, size * 0.03);
    ctx.stroke();
  });

  ctx.strokeStyle = 'rgba(0, 229, 255, 0.45)';
  ctx.lineWidth = Math.max(2, size * 0.024);
  ctx.beginPath();
  ctx.arc(size * 0.74, size * 0.22, size * 0.075, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = accentStart;
  ctx.beginPath();
  ctx.arc(size * 0.74, size * 0.22, size * 0.03, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();

  return canvas;
}

async function writePng(fileName, size, options) {
  const canvas = drawIcon(size, options);
  const buffer = await canvas.encode('png');
  fs.writeFileSync(path.join(outputDirectory, fileName), buffer);
}

async function main() {
  await Promise.all([
    writePng('favicon-16x16.png', 16),
    writePng('favicon-32x32.png', 32),
    writePng('apple-touch-icon.png', 180),
    writePng('icon-192.png', 192),
    writePng('icon-512.png', 512),
    writePng('icon-maskable-512.png', 512, { maskable: true })
  ]);

  console.log('Generated favicon and app icon assets in public/.');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
