import React, {useCallback, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({name: '', password: ''})

  const handleChange = useCallback((val: any, name: any) => {
    setForm(preVal => ({...preVal, [name]: val}))
    console.log(form)
  }, [form])

  const setCookie = (name: any, value: any, expiryDate: any) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + expiryDate);
    document.cookie = name + '=' + value + '; expires=' + currentDate;
  };

  const getCookie = (name: any) => {
    const arr = document.cookie.split('; ');
    for (let i = 0; i < arr.length; i++) {
      const arr2 = arr[i].split('=');
      if (arr2[0] === name) {
        return arr2[1];
      }
    }
    return '';
  };

  const submit = () => {
    if (form.password !== ('') && form.name !== ('')) {
      setCookie('username', form.name, 1);
      setCookie('password', form.password, 1);
      console.log(form.name, form.password)
      navigate('../home')
    } else {
      alert("userName and password cannot be none")
    }
  }
  const [ profile, setProfile ] = useState([]);
  const clientId = '597741942610-qqm963rcm440o9i52sqevjauldifehgd.apps.googleusercontent.com'
  const API_KEY = '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'
  const SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: SCOPES,
        apiKey: API_KEY,
        cookiepolicy: 'single_host_origin'
      });
    };
    gapi.load('client:auth2', initClient);
  });

  const onSuccess = (res) => {
    if(res.profileObj.tokenId!=""){
      navigate('/home')
    }
    console.log('success:', res);
  };
  const onFailure = (err) => {
    console.log('failed:', err);
  };
  const logOut = () => {
    setProfile(null);
  };

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full ma   x-w-md space-y-8">
        <div>
          <img className="mx-auto h-60 w-auto"
               src="https://cdn.pixabay.com/photo/2017/09/29/08/42/gps-2798348_1280.png" alt="Your Company"/>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Saga</h2>
        </div>
        {profile.length!=0 ? (
          <div className="w-60 h-14 absolute inset-1/2 -ml-28">
            <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} className="w-60 h-14 absolute inset-1/2 -ml-28"/>
          </div>
        ) : (
          <GoogleLogin
            clientId={clientId}
            buttonText="Sign in with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            className="w-60 h-14 absolute inset-1/2 -ml-28"
          />
        )}
      </div>
    </div>
  )

}
