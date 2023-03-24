import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Page2 from "../../pages/page2";
import MyCombobox from "../../pages/page5";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { SparklesIcon } from "@heroicons/react/24/solid";
import { useSwipeable } from "react-swipeable";
import { classNames } from "../utils/utils";
import Divider from "../components/Divider";
import {ChevronLeftIcon} from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import {Combobox, Transition} from '@headlessui/react'
import { Badge, TabBar } from 'antd-mobile'
import {
  MapIcon,
  MapPinIcon,
  ChevronLeftIcon,
  MagnifyingGlassIcon,
  ClockIcon,
  XMarkIcon
} from '@heroicons/react/20/solid'
import {BiBus,AiOutlineSave,BiMap,FiCornerUpRight} from "react-icons/all"
import {GoogleMap, useJsApiLoader} from "@react-google-maps/api";
import {useLocation, useNavigate} from 'react-router-dom';

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
