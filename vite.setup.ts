import { mockComponent } from './src/mocks/MockComponent';

vi.mock('@mui/material', async (importOriginal: () => Promise<object>) => ({
  ...(await importOriginal()),
  ...mockComponent('Container'),
  ...mockComponent('Stack'),
  ...mockComponent('Box'),
  ...mockComponent('SvgIcon'),
  ...mockComponent('Typography'),
  ...mockComponent('Chip'),
  ...mockComponent('CircularProgress'),
}));

vi.mock('date-fns', async (importOriginal: () => Promise<object>) => ({
  ...(await importOriginal()),
  format: (val: any, f: string) => `formatted: ${val} format: ${f}`,
}));

const mockLocalStorage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
};

Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage,
});

global.ResizeObserver = class ResizeObserver {
  observe() {
    // do nothing
  }
  unobserve() {
    // do nothing
  }
  disconnect() {
    // do nothing
  }
};
