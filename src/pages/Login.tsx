import React, {useCallback, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';


export async function initClient() {
  const clientId = '597741942610-qqm963rcm440o9i52sqevjauldifehgd.apps.googleusercontent.com'
  const API_KEY = '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'
  const SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";
  await gapi.auth2.init({
    clientId: clientId,
    scope: SCOPES,
    apiKey: API_KEY,
    cookiepolicy: 'single_host_origin'
  });
  console.log('ok')
  await gapi.load('client:auth2', initClient)
}

export default function Login() {
  const navigate = useNavigate()
  const [ profile, setProfile ] = useState([]);
  const clientId = '597741942610-qqm963rcm440o9i52sqevjauldifehgd.apps.googleusercontent.com'

  const onSuccess = (res) => {
    if(res.profileObj.tokenId!=""){
      localStorage.setItem("imageUrl",res.profileObj.imageUrl)
      localStorage.setItem("givenName",res.profileObj.givenName)
      localStorage.setItem("familyName",res.profileObj.familyName)
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
