import { describe, it, expect } from 'vitest';
import App from './App';
import { render, screen } from '@testing-library/react';

describe('test if all categories are displayed right', () => {
  it('renders all categories', () => {
    render(<App/>)
    expect(screen.getByRole('navigation').firstChild.children.length).toBe(7);
  });
  it("checks that the order of categories is correct",()=>{
    render(<App/>)
    expect(screen.getByRole('navigation').firstChild.firstChild.textContent).toBe("Home")
  })
});