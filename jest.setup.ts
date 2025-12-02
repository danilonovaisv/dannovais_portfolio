import '@testing-library/jest-dom';

class ResizeObserver {
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
}

class IntersectionObserver {
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
}

const globalWithResizeObserver = globalThis as typeof globalThis & {
  ResizeObserver?: typeof ResizeObserver;
  IntersectionObserver?: typeof IntersectionObserver;
};

if (!globalWithResizeObserver.ResizeObserver) {
  globalWithResizeObserver.ResizeObserver = ResizeObserver;
}

if (!globalWithResizeObserver.IntersectionObserver) {
  globalWithResizeObserver.IntersectionObserver = IntersectionObserver;
}
