export interface SparkPoint {
  x: number;
  y: number;
}

export class SimpleSparkEngine {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private animId: number = 0;
  private point: SparkPoint = { x: 0, y: 0 };
  private pulse: number = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const context = canvas.getContext("2d");
    if (!context) throw new Error("Could not get 2d context");
    this.ctx = context;
    this.resize();
  }

  public resize() {
    const rect = this.canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.ctx.scale(dpr, dpr);
  }

  public setSparkPoint(p: SparkPoint) {
    this.point = p;
  }

  public start() {
    if (this.animId) return;
    const loop = () => {
      this.update();
      this.draw();
      this.animId = requestAnimationFrame(loop);
    };
    this.animId = requestAnimationFrame(loop);
  }

  public stop() {
    if (this.animId) {
      cancelAnimationFrame(this.animId);
      this.animId = 0;
    }
  }

  private update() {
    this.pulse += 0.04;
  }

  private draw() {
    const rect = this.canvas.getBoundingClientRect();
    this.ctx.clearRect(0, 0, rect.width, rect.height);

    if (!this.point.x) return;

    const { x, y } = this.point;
    const glowScale = 1 + Math.sin(this.pulse) * 0.15;

    // 1. Delicate, soft ambient halo
    const halo = this.ctx.createRadialGradient(x, y, 0, x, y, 16 * glowScale);
    halo.addColorStop(0, "rgba(255, 255, 255, 0.8)");
    halo.addColorStop(0.3, "rgba(255, 171, 0, 0.4)");
    halo.addColorStop(0.7, "rgba(255, 51, 68, 0.15)");
    halo.addColorStop(1, "rgba(0, 0, 0, 0)");

    this.ctx.fillStyle = halo;
    this.ctx.beginPath();
    this.ctx.arc(x, y, 18 * glowScale, 0, Math.PI * 2);
    this.ctx.fill();

    // 2. Subtle simple star cross ray
    this.ctx.save();
    this.ctx.strokeStyle = "rgba(255, 255, 255, " + (0.45 + Math.sin(this.pulse) * 0.1) + ")";
    this.ctx.lineWidth = 1;

    // Horizontal beam
    this.ctx.beginPath();
    this.ctx.moveTo(x - 8 * glowScale, y);
    this.ctx.lineTo(x + 8 * glowScale, y);
    this.ctx.stroke();

    // Vertical beam
    this.ctx.beginPath();
    this.ctx.moveTo(x, y - 8 * glowScale);
    this.ctx.lineTo(x, y + 8 * glowScale);
    this.ctx.stroke();
    this.ctx.restore();

    // 3. Pinpoint core spark
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(x, y, 2.2, 0, Math.PI * 2);
    this.ctx.fillStyle = "#ffffff";
    this.ctx.shadowBlur = 8;
    this.ctx.shadowColor = "#ffffff";
    this.ctx.fill();
    this.ctx.restore();
  }
}
