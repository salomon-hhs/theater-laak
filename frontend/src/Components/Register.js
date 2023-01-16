import React, {useState} from "react";
import {Link} from 'react-router-dom';
import PasswordChecklist from "react-password-checklist"
import invalidFoto from '../assets/invalid.png'; 
import validFoto from '../assets/valid.png'; 



export default function Register(props){
    const[vnaam,setVnaam]= useState(''); 
    const[email,setEmail]= useState(''); /*inside the useState is the initial value*/
    const[passw,setPassw]= useState('');
    const[passw_conf,setPassw_conf]= useState('');  
    
    const handleSubmit = async (e)=>{ /*e stands for event handler*/
        e.preventDefault(); {/*if you don't don't do this the page is going to get reloaded and then you will lose the state*/}
        //console.log(email);
        await fetch("https://localhost:3001/api/Account/registreer", {
            "method": "POST",
            "headers": { 'Content-Type': 'application/json'},
            "body": JSON.stringify({
                "Username": vnaam,
                "password": passw,
                "email": email
            })
        });
    }


    return(
       
        <div className="auth-form bg-dark">
            <div className="col-1">
                <h2 className=" text-2xl text-left text-white m-5">Inschrijven</h2>{/*text-[#bada55] to add color to text when using tailwind*/}

                <form className="register-form text-black" onSubmit={handleSubmit}>

                    <label htmlFor="voornaam">Naam</label>
                    <input value={vnaam} onChange={(e) => setVnaam(e.target.value)} name="voornaam" id="vnaam" />

                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"
                     pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"                    
                    />
             
                    <label htmlFor="password">Wachtwoord</label>
                    <input value={passw} onChange={(e) => setPassw(e.target.value)} type="password"
                    />     

                    <label htmlFor="passwordConformation">Wachtwoord herhalen</label>
                    <input value={passw_conf} onChange={(e) => setPassw_conf(e.target.value)} type="password"
                    />  

                    <PasswordChecklist className="text-white "
                        rules={["minLength", "specialChar", "number", "capital","lowercase","notEmpty", "match"]}
                        minLength={7}
                        //invalidColor={"white"}
                        iconComponents = {{ValidIcon: <img src={validFoto} alt="voldaan" />, InvalidIcon: <img src={invalidFoto} alt="niet voldaan" />}}
                        value={passw}
                        valueAgain={passw_conf}
                        messages={{
                            minLength: "Wachtwoord heeft meer dan 7 karakters",
                            specialChar: "Wachtwoord heeft minimaal 1 speciaal karakter.",
                            number: "Wachtwoord heeft minimaal 1 nummer ",
                            capital: "Wachtwoord heeft minimaal 1 hoofdletter",
                            lowercase: "Wachtwoord heeft minimaal 1 kleine letter",
                            notEmpty:"Wachtwoord veld is niet leeg",
                            match: "De wachtwoorden zijn overeen",
                        }}

                    />
                         

                    <button className="bg-white hover:bg-red-600 py-2 px-8 rounded text-black m-5" type="submit">Account Aanmaken</button>
                </form>

                <Link to={'/inloggen'} className="link-btn m-5">Heeft u al een account? Dan kunt u hier inloggen.</Link>

            </div>
        </div>
        
    );
}
