import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('Color Router', () => {
  it('displays the r/g/b values from the route path as the background color', () => {
    // Render the app to the "screen"
    render(<App />);

    // Find & check the label on the page lists the current color
    let label = screen.getByText(/rgb\(\d+,\d+,\d+\)/i);
    expect(label.innerHTML).toEqual('rgb(255,203,5)');

    // Find & click the "Teal" link to navigate to the next page:
    fireEvent.click(screen.getByText(/teal/i));

    // Check that the label updated its values to match the "teal" color:
    label = screen.getByText(/rgb\(\d+,\d+,\d+\)/i);
    expect(label.innerHTML).toEqual('rgb(20,220,207)');

    // Find & click the "Purple" link to navigate to the next page:
    fireEvent.click(screen.getByText(/blue/i));

    // Check that the label updated its values to match the "purple" color:
    label = screen.getByText(/rgb\(\d+,\d+,\d+\)/i);
    expect(label.innerHTML).toEqual('rgb(0,39,76)');
  });
});
