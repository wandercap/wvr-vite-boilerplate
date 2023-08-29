/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../src/App';

describe('App', () => {
  it('renders learn react link', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Hello, world!'
    );
  });

  it('renders 404 page', () => {
    render(
      <MemoryRouter initialEntries={['/404']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Not found'
    );
  });
});
