import React, {useState} from "react";
import {Link} from 'react-router-dom';

export default function Register(props){
    const[vnaam,setVnaam]= useState(''); 
    const[anaam,setAnaam]= useState('');
    const[email,setEmail]= useState(''); /*inside the useState is the initial value*/
    const[passw,setPassw]= useState('');
    const[passw_conf,setPassw_conf]= useState('');  
    
    const handleSubmit = async (e) => { /*e stands for event handler*/
        e.preventDefault();
        {/*if you don't don't do this the page is going to get reloaded and then you will lose the state*/
        }
        await fetch("https://localhost:3001/api/Account/registreer", {
            "method": "POST",
            "headers": { 'Content-Type': 'application/json'},
            "body": JSON.stringify({
                "Username": vnaam,
                "password": passw
            })
            }).then((r) => alert(r.status));
    }

    return(
       
        <div className="auth-form bg-dark">
            <div className="col-1">
                <h2 className=" text-2xl text-left text-white m-5">Inschrijven</h2>{/*text-[#bada55] to add color to text when using tailwind*/}

                <form className="register-form text-black" onSubmit={handleSubmit}>

                    <label htmlFor="voornaam">Naam</label>
                    <input value={vnaam} onChange={(e) => setVnaam(e.target.value)} name="voornaam" id="vnaam"/>

                    <label htmlFor="achternaam">Achternaam</label>
                    <input value={anaam} onChange={(e) => setAnaam(e.target.value)}name="achternaam" id="anaam"/>

                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"
                     pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"                    
                    />
             
                    <label htmlFor="password">Wachtwoord</label>
                    <input value={passw} onChange={(e) => setPassw(e.target.value)} type="password"
                    // pattern="/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$/"
                    title="Moet minimaal één cijfer en één hoofdletter en kleine letter bevatten, en minimaal 8 of meer tekens"/>

                    <label htmlFor="passwordConformation">Wachtwoord herhalen</label>
                    <input value={passw_conf} onChange={(e) => setPassw_conf(e.target.value)} type="password"
                    // pattern="/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$/"
                    />                           

                    <button className="bg-white hover:bg-red-600 py-2 px-8 rounded text-black m-5" type="submit">Account Aanmaken</button>
                </form>

                <Link to={'/inloggen'} className="link-btn m-5">Heeft u al een account? Dan kunt u hier inloggen.</Link>

            </div>
        </div>
        
    );
}
