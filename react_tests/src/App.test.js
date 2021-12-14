import { render, screen, act } from '@testing-library/react';
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
  test('renders learn react link', () => {
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders reactjs logo', () => {
    const imageElement = screen.getByAltText("logo");
    expect(imageElement).toBeInTheDocument();
  })
})
