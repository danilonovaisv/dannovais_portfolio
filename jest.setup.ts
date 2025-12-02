import '@testing-library/jest-dom';

class ResizeObserver {
  constructor(_callback?: ResizeObserverCallback) {
    void _callback;
  }
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
}

class IntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin = '';
  readonly thresholds: ReadonlyArray<number> = [];

  constructor(_callback?: IntersectionObserverCallback, _options?: IntersectionObserverInit) {
    void _callback;
    void _options;
  }

  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
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
