import { useState } from "react";

function LoginPopup({onClose}){

const [isLogin,setIsLogin]=useState(true);

return(

<div className="overlay">

<div className="popup">

{

isLogin ?

<>

<h2>Login</h2>

<input placeholder="Email"/>

<input placeholder="Password"/>

<button>

Login

</button>

<p

onClick={()=>setIsLogin(false)}

>

Create Account

</p>

</>

:

<>

<h2>Sign Up</h2>

<input placeholder="Name"/>

<input placeholder="Email"/>

<input placeholder="Password"/>

<button>

Sign Up

</button>

<p

onClick={()=>setIsLogin(true)}

>

Already have an account?

</p>

</>

}

<button onClick={onClose}>

Close

</button>

</div>

</div>

)

}

export default LoginPopup;