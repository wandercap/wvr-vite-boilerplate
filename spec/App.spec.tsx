/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { App, WrappedApp } from '../src/App';

describe('App', () => {
  it('render home page', () => {
    render(<WrappedApp />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Hello, world!'
    );
  });

  it('renders 404 page', () => {
    render(
      <MemoryRouter initialEntries={['/test']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      '404: Page not found'
    );
  });
});
