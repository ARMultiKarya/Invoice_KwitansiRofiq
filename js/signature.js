/**
 * Signature Pad Manager
 * Provides canvas drawing, touch support, undo/clear, and image upload capabilities.
 */

class SignaturePadManager {
    constructor(canvasId, onChangeCallback) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.isDrawing = false;
        this.history = [];
        this.onChangeCallback = onChangeCallback;

        this.initCanvas();
        this.attachEvents();
    }

    initCanvas() {
        // Set canvas crisp resolution
        const rect = this.canvas.getBoundingClientRect();
        this.canvas.width = rect.width * 2 || 600;
        this.canvas.height = rect.height * 2 || 200;
        this.ctx.scale(2, 2);
        
        this.ctx.strokeStyle = '#1e293b';
        this.ctx.lineWidth = 2.5;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        
        this.saveState();
    }

    saveState() {
        if (this.history.length > 15) this.history.shift();
        this.history.push(this.canvas.toDataURL());
    }

    getPos(e) {
        const rect = this.canvas.getBoundingClientRect();
        let clientX = e.clientX;
        let clientY = e.clientY;

        if (e.touches && e.touches.length > 0) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        }

        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    }

    startDrawing(e) {
        e.preventDefault();
        this.isDrawing = true;
        const pos = this.getPos(e);
        this.ctx.beginPath();
        this.ctx.moveTo(pos.x, pos.y);
    }

    draw(e) {
        if (!this.isDrawing) return;
        e.preventDefault();
        const pos = this.getPos(e);
        this.ctx.lineTo(pos.x, pos.y);
        this.ctx.stroke();
    }

    stopDrawing(e) {
        if (!this.isDrawing) return;
        this.isDrawing = false;
        this.ctx.closePath();
        this.saveState();
        if (this.onChangeCallback) this.onChangeCallback(this.toDataURL());
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.history = [];
        this.saveState();
        if (this.onChangeCallback) this.onChangeCallback(null);
    }

    undo() {
        if (this.history.length > 1) {
            this.history.pop(); // remove current state
            const previousState = this.history[this.history.length - 1];
            const img = new Image();
            img.onload = () => {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.ctx.drawImage(img, 0, 0, this.canvas.width / 2, this.canvas.height / 2);
                if (this.onChangeCallback) this.onChangeCallback(this.toDataURL());
            };
            img.src = previousState;
        } else {
            this.clear();
        }
    }

    toDataURL() {
        // Check if canvas is blank
        const pixelBuffer = new Uint32Array(
            this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height).data.buffer
        );
        const hasContent = pixelBuffer.some(color => color !== 0);
        return hasContent ? this.canvas.toDataURL('image/png') : null;
    }

    loadImage(dataUrl) {
        const img = new Image();
        img.onload = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.drawImage(img, 0, 0, this.canvas.width / 2, this.canvas.height / 2);
            this.saveState();
            if (this.onChangeCallback) this.onChangeCallback(this.toDataURL());
        };
        img.src = dataUrl;
    }

    attachEvents() {
        // Mouse events
        this.canvas.addEventListener('mousedown', (e) => this.startDrawing(e));
        this.canvas.addEventListener('mousemove', (e) => this.draw(e));
        this.canvas.addEventListener('mouseup', (e) => this.stopDrawing(e));
        this.canvas.addEventListener('mouseleave', (e) => this.stopDrawing(e));

        // Touch events for mobile/tablets
        this.canvas.addEventListener('touchstart', (e) => this.startDrawing(e), { passive: false });
        this.canvas.addEventListener('touchmove', (e) => this.draw(e), { passive: false });
        this.canvas.addEventListener('touchend', (e) => this.stopDrawing(e));
    }
}
