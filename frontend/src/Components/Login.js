import React, {useState} from "react";
import {Link, redirect} from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";


export default function Login(props){ /*props is a way to pass on value to children elements/components */
    const[gbnaam,setGbnaam]= useState(''); /*inside the useState is the initial value*/
    const[passw,setPassw]= useState('');

    const handleSubmit = async (e) => { /*e stands for event handler*/
        e.preventDefault();
        await fetch("https://localhost:3001/api/Account/login", {
            "method": "POST",
            "headers": { 'Content-Type': 'application/json'},
            "body": JSON.stringify({
                "Username": gbnaam,
                "password": passw
            })
        }).then(async (r) => {
            if (r.status === 200) {
                let id;
                let name;
                await r.json().then(u => {
                    name = u.name;
                    id = u.id;
                });
                sessionStorage.setItem('user', name);
                sessionStorage.setItem('userId', id);
                window.location.assign("/");
            }
        })
    }

    function onChange(value) {
        console.log("Captcha value:", value);
    }

    return(
       
        <div className="auth-form bg-dark">
            <div className="col-1">
                <h2 className="text-2xl text-left text-white m-5">Inloggen</h2>

                <form className="login-form text-black" onSubmit={handleSubmit}>

                    <label htmlFor="gbnaam">Gebruikersnaam</label>
                    <input value={gbnaam} onChange={(e) => setGbnaam(e.target.value)} type="text"/>
             

                    <label htmlFor="password">Wachtwoord</label>
                    <input value={passw} onChange={(e) => setPassw(e.target.value)} type="password"/>
                    
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
