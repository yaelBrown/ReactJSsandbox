import { render, screen, act, fireEvent } from '@testing-library/react';
import App from './App';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  render(<App />);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe('App component', () => {  
  // test('renders learn react link', () => {
  //   const linkElement = screen.getByText(/learn react/i);
  //   expect(linkElement).toBeInTheDocument();
  // });

  // test('renders reactjs logo', () => {
  //   const imageElement = screen.getByAltText("logo");
  //   console.log("something")
  //   expect(imageElement).toBeInTheDocument();
  // })

  test('this is true', () => {
    expect(true).toBe(true)
  })

  test('should be in document', () => {
    const impEl = screen.getByTestId("inp")
    expect(impEl).toBeInTheDocument();
  })

  test('should add input to input field', () => {
    const impEl = screen.getByTestId("inp")
    fireEvent.change(impEl, { target: { value: "test" } })
    expect(impEl.value).toBe("test")
  })
  
  
})
