import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('example test', () => {
  it('first test', async () => {
    render(<MemoryRouter>
    <App />
    </MemoryRouter>);
  });
});

