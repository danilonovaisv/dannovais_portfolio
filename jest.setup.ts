import '@testing-library/jest-dom';

class ResizeObserver {
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
}

const globalWithResizeObserver = globalThis as typeof globalThis & {
  ResizeObserver?: typeof ResizeObserver;
};

if (!globalWithResizeObserver.ResizeObserver) {
  globalWithResizeObserver.ResizeObserver = ResizeObserver;
}
