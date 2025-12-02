import '@testing-library/jest-dom';

class ResizeObserver {
  constructor(callback: ResizeObserverCallback) {
    //
  }
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
}

class IntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin = '';
  readonly thresholds: ReadonlyArray<number> = [];

  constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
    //
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
