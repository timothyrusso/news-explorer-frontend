import { renderHook, act } from '@testing-library/react';
import { useWindowResize } from './useWindowResize';

describe('useWindowResize', () => {
  let originalInnerWidth: PropertyDescriptor | undefined;
  let addEventListenerMock: jest.SpyInstance;
  let removeEventListenerMock: jest.SpyInstance;

  beforeEach(() => {
    originalInnerWidth = Object.getOwnPropertyDescriptor(window, 'innerWidth');
    Object.defineProperty(window, 'innerWidth', {
      value: 800,
      configurable: true,
    });

    addEventListenerMock = jest.spyOn(window, 'addEventListener');
    removeEventListenerMock = jest.spyOn(window, 'removeEventListener');
  });

  afterEach(() => {
    if (originalInnerWidth) {
      Object.defineProperty(window, 'innerWidth', originalInnerWidth);
    }
    addEventListenerMock.mockRestore();
    removeEventListenerMock.mockRestore();
  });

  it('should set screenWidth to initial window width', () => {
    const { result } = renderHook(() => useWindowResize());
    expect(result.current.screenWidth).toBe(800);
  });

  it('should update screenWidth when window is resized', () => {
    const { result } = renderHook(() => useWindowResize());

    act(() => {
      Object.defineProperty(window, 'innerWidth', { value: 1000 });
      const resizeEvent = new Event('resize');
      window.dispatchEvent(resizeEvent);
    });

    expect(result.current.screenWidth).toBe(1000);
  });

  it('should add and remove event listener on mount and unmount', () => {
    const { unmount } = renderHook(() => useWindowResize());

    expect(addEventListenerMock).toHaveBeenCalledWith(
      'resize',
      expect.any(Function)
    );
    unmount();
    expect(removeEventListenerMock).toHaveBeenCalledWith(
      'resize',
      expect.any(Function)
    );
  });
});
