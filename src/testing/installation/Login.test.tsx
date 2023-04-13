import {fireEvent, render, screen} from "@testing-library/react";
import Login from "../../pages/Login";

const { gapi } = require("../mock/gapi-script");
const { initClient } = require('../../pages/Login');

describe('test google login', () => {
  it('should initialize gapi auth2', async () => {
    //Given
    await initClient();
    //When
    render(<Login/>);
    //Then
    const button = screen.getByRole('button', { name: 'Sign in with Google' });
    fireEvent.click(button);
    await gapi.auth2.init();
    expect(gapi.auth2.init().currentUser.get().getId).toHaveBeenCalled();
    expect(gapi.auth2.init().currentUser.get().getName).toHaveBeenCalled();
    expect(gapi.auth2.init().currentUser.get().getEmail).toHaveBeenCalled();
  });
});
