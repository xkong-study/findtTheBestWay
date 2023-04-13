import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';
import 'antd-mobile/es/global';
import 'jest';


it('renders without crashing', async () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  await act(async () => {
    root.render(
      <MemoryRouter>
        <App/>
      </MemoryRouter>);
    await new Promise(resolve => setTimeout(resolve, 1000));
  })
})
