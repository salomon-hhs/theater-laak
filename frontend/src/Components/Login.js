import React, {useState} from "react";
import {Link} from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";


export default function Login(props){ /*props is a way to pass on value to children elements/components */
    const[email,setEmail]= useState(''); /*inside the useState is the initial value*/
    const[passw,setPassw]= useState('');

    const handleSubmit = async (e)=>{ /*e stands for event handler*/
        e.preventDefault(); {/*if you don't don't do this the page is going to get reloaded and then you will lose the state*/}
        await fetch("https://localhost:3001/api/Account/login", {
            "method": "POST",
            "headers": { 'Content-Type': 'application/json'},
            "body": JSON.stringify({
                "Username": email,
                "password": passw
            })
        }).then((r) => alert(r.status));
    }

    function onChange(value) {
        console.log("Captcha value:", value);
    }

    return(
       
        <div className="auth-form bg-dark">
            <div className="col-1">
                <h2 className="text-2xl text-left text-white m-5">Inloggen</h2>

                <form className="login-form text-black" onSubmit={handleSubmit}>

                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}
                     // type="email"
                     // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    />
             

                    <label htmlFor="password">Wachtwoord</label>
                    <input value={passw} onChange={(e) => setPassw(e.target.value)} type="password"
                    // pattern="/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$/"
                    title="Moet minimaal één cijfer en één hoofdletter en kleine letter bevatten, en minimaal 8 of meer tekens"
                    />
                                    

                    <button className="bg-red-900 hover:bg-red-700 py-2 px-8 rounded text-white m-5" type="submit">Inloggen</button>
                </form>

                <ReCAPTCHA
                    sitekey=" 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={onChange}
                />

                <button className="link-btn">
                    <Link to={'/registreren'}> geen account? Account aanmaken</Link>
                </button>
                <br/>
                <button className="link-btn m-5">
                    <Link to={'/wachtwoord_vergeten'}> Wachtwoord vergeten?</Link>
                </button>


            </div>
        </div>
        
    );
}