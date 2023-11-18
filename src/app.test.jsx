import { describe, it, expect } from 'vitest';
import App from './App';
import { render, screen } from '@testing-library/react';

describe('test if all categories are displayed right', () => {
  it('renders all categories', () => {
    render(<App/>)
    expect(screen.getByRole('navigation').children.length).toBe(4);
  });
  it("checks that the order of categories is correct",()=>{
    render(<App/>)
    expect(screen.getByRole('navigation').firstChild.textContent).toBe("Home")
    expect(screen.getByRole('navigation').lastChild.textContent).toBe("Filters")
  })
//   it("checks that the multiCategories exist",()=>{
//     render(<App/>)
//     expect(screen.getByText("Hello")).toBeInTheDocument()
//   })

});