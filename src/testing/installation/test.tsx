import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Page2 from "../../pages/page2";
import MyCombobox from "../../pages/page5";
import React, { useState, useRef } from "react";
import reducer from "../../store/reducer";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'jest';


self['IS_REACT_ACT_ENVIRONMENT'] = true

const mockStore = createStore(reducer, {});
const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(() => mockDispatch),
}));

describe('Favourites', () => {

    test('render correctly when user logs in', async () => {

        const {container} =render(
            // eslint-disable-next-line react/react-in-jsx-scope
          <MemoryRouter>
              <Provider store={mockStore}>
                {/* eslint-disable-next-line react/react-in-jsx-scope */}
                <Page2 />
              </Provider>
          </MemoryRouter>
            ,
        );
        expect(screen.getByText('Favourites')).toBeInTheDocument(); //check if title exists in page
        expect(screen.getByText('Suggestions')).toBeInTheDocument();
    });
  })


describe('Favourites', () => {

  test('render correctly when user logs in', async () => {

    const {container} =render(
      // eslint-disable-next-line react/react-in-jsx-scope
      <MemoryRouter>
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <MyCombobox />
      </MemoryRouter>
      ,
    );
    expect(screen.getByText('findWay')).toBeInTheDocument(); //check if title exists in page
  });
})
