import { renderHook, act } from '@testing-library/react';
import { useScrollBehavior } from './useScrollBehavior';

describe('useScrollBehavior', () => {
  // Mocking window.scrollY and window.addEventListener/window.removeEventListener
  let originalScrollY: (PropertyDescriptor & ThisType<any>) | undefined;
  let addEventListenerMock: jest.SpyInstance<
    void,
    [
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions | undefined
    ],
    any
  >;
  let removeEventListenerMock: jest.SpyInstance<
    void,
    [
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | EventListenerOptions | undefined
    ],
    any
  >;

  beforeEach(() => {
    originalScrollY = Object.getOwnPropertyDescriptor(window, 'scrollY');
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true });

    addEventListenerMock = jest.spyOn(window, 'addEventListener');
    removeEventListenerMock = jest.spyOn(window, 'removeEventListener');
  });

  afterEach(() => {
    if (originalScrollY) {
      Object.defineProperty(window, 'scrollY', originalScrollY);
    }
    addEventListenerMock.mockRestore();
    removeEventListenerMock.mockRestore();
  });

  it('should set navbarColor to false initially', () => {
    const { result } = renderHook(() => useScrollBehavior());
    expect(result.current.navbarColor).toBe(false);
  });

  it('should change navbarColor to true when scrolling past 66', () => {
    Object.defineProperty(window, 'scrollY', { value: 100 });
    const { result } = renderHook(() => useScrollBehavior());

    act(() => {
      const changeBackground = addEventListenerMock.mock
        .calls[0][1] as EventListener;
      changeBackground(new Event('scroll'));
    });

    expect(result.current.navbarColor).toBe(true);
  });

  it('should add and remove event listener on mount and unmount', () => {
    const { unmount } = renderHook(() => useScrollBehavior());

    expect(addEventListenerMock).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function)
    );
    unmount();
    expect(removeEventListenerMock).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function)
    );
  });
});
