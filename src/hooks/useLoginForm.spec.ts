import { renderHook, act } from '@testing-library/react';
import { useLoginForm } from './useLoginForm';

describe('useLoginForm', () => {
  it('should have initial states', () => {
    const { result } = renderHook(() => useLoginForm());

    expect(result.current.email).toBe('');
    expect(result.current.password).toBe('');
    expect(result.current.username).toBe('');
  });

  it('should set email', () => {
    const { result } = renderHook(() => useLoginForm());

    act(() => {
      result.current.setEmail('test@email.com');
    });

    expect(result.current.email).toBe('test@email.com');
  });

  it('should set password', () => {
    const { result } = renderHook(() => useLoginForm());

    act(() => {
      result.current.setPassword('password123');
    });

    expect(result.current.password).toBe('password123');
  });

  it('should set username', () => {
    const { result } = renderHook(() => useLoginForm());

    act(() => {
      result.current.setUsername('username123');
    });

    expect(result.current.username).toBe('username123');
  });
});
