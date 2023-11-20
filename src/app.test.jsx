import { describe, it, expect } from 'vitest';
import App from './App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe('test if all categories are displayed right', () => {
  it('renders all categories', () => {
    render(<App/>)
    expect(screen.getByRole('navigation').firstChild.children.length).toBe(5);
  });
  it("checks that the order of categories is correct",()=>{
    render(<App/>)
    expect(screen.getByRole('navigation').firstChild.firstChild.textContent).toBe("Home")
  })
});

describe('test if the buttons work as expected', () =>{

  it('expects 0 to be the number of total items we begin with',()=>{
    render(<App/>)
    let SpanNode = screen.getByText(0)
    expect(SpanNode.textContent).toBe("0")
  })

  it("finds the button/s after the fetch completes",async()=>
  {
    render(<App/>)
    let buyBtns = await screen.findAllByRole('button')
    expect(buyBtns[0]).toBeInTheDocument()
  })

  it("should not update the state unless the button is pressed",async()=>
  {
    render(<App/>)
    let SpanNode = screen.getByText(0)

    expect(SpanNode.textContent).toBe("0")
  })

  it('ads 1 to the number of items when a button on a card is pressed', async()=>{

    function sleep(period) {
      return new Promise(resolve => setTimeout(resolve, period));
    }

    const user = userEvent.setup()
    render(<App/>)
    let SpanNode = screen.getByText(0)
    let buyBtns = await screen.findAllByRole('button')

    user.click(buyBtns[0])
    await act(async () => {
      await sleep(300);
    });
    expect(SpanNode.textContent).toBe("1")

  })
  it('ads 2 to the number of items when a button on a card is pressed twice', async()=>{

    function sleep(period) {
      return new Promise(resolve => setTimeout(resolve, period));
    }

    const user = userEvent.setup()
    render(<App/>)
    let SpanNode = screen.getByText(0)
    let buyBtns = await screen.findAllByRole('button')

    user.click(buyBtns[0])
    user.click(buyBtns[0])

    await act(async () => {
      await sleep(300);
    });
    
    expect(SpanNode.textContent).toBe("1")

  })

})
