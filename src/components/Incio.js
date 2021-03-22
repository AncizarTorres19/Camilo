import React from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
  

function Inicio() {

  
const responseGoogle = (response) => {
  console.log(response);
  console.log(response.profileObj);

  
}
const responseFacebook = (response) => {
  console.log(response);
}

const componentClicked =()=>{
  //alert('Evento onClick');
}
  return (
    <div className="Google input-field col s12" >
      <br></br> <br></br>
       <GoogleLogin
    clientId="83222682010-dmf313b71ck3u098001rmmlv9becaa0u.apps.googleusercontent.com"
    /*render={renderProps => (
      <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
    )}*/
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />

        <FacebookLogin
            appId="301948257953975"
            autoLoad={true}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook} />

    </div>



  )
}

export default Inicio;



  