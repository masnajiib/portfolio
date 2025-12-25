import { render, screen, fireEvent } from '@testing-library/react';
import Contact from './Contact';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
}));

describe('Contact Component', () => {
  it('renders contact form', () => {
    render(<Contact />);
    expect(screen.getByText("Let's Work Together")).toBeInTheDocument();
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
  });

  it('updates input values', () => {
    render(<Contact />);
    const nameInput = screen.getByLabelText(/Name/i) as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput.value).toBe('John Doe');
  });
});
