import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Page2 from "../../pages/page2";
import MyCombobox from "../../pages/page5";


describe('Favourites', () => {

    test('render correctly when user logs in', async () => {

        const {container} =render(
            // eslint-disable-next-line react/react-in-jsx-scope
            <MemoryRouter>
                {/* eslint-disable-next-line react/react-in-jsx-scope */}
                <Page2 />
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
