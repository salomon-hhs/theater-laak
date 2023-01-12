import React, {useState} from "react";


export default function Register(props){
    const[vnaam,setVnaam]= useState(''); 
    const[anaam,setAnaam]= useState('');
    const[email,setEmail]= useState(''); /*inside the useState is the initial value*/
    const[passw,setPassw]= useState('');
    const[passw_conf,setPassw_conf]= useState('');  
    
    const handleSubmit = (e)=>{ /*e stands for event handler*/
        e.preventDefault(); {/*if you don't don't do this the page is going to get reloaded and then you will lose the state*/}
        console.log(email);
    }

    return(
       
        <div className="auth-form bg-dark">
            <div className="col-1">
                <h2 className=" text-2xl text-left text-white m-5">Inschrijven</h2>{/*text-[#bada55] to add color to text when using tailwind*/}

                <form className="register-form" onSubmit={handleSubmit}>

                    <label htmlFor="voornaam">Naam</label>
                    <input value={vnaam} name="voornaam" id="vnaam"/>

                    <label htmlFor="achternaam">Achternaam</label>
                    <input value={anaam}  name="achternaam" id="anaam"/>

                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"
                     pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"                    
                    />
             
                    <label htmlFor="password">Wachtwoord</label>
                    <input value={passw} onChange={(e) => setPassw(e.target.value)} type="password"
                    pattern="/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$/" 
                    title="Moet minimaal één cijfer en één hoofdletter en kleine letter bevatten, en minimaal 8 of meer tekens"/>     

                    <label htmlFor="passwordConformation">Wachtwoord herhalen</label>
                    <input value={passw} onChange={(e) => setPassw(e.target.value)} type="password"
                    pattern="/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$/"
                    />                           

                    <button className="bg-white hover:bg-red-600 py-2 px-8 rounded text-black m-5" type="submit">Account Aanmaken</button>
                </form>

                <button className="link-btn m-5" onClick={() => props.onFormSwitch('login')}>Heb al een account? Log hier in</button>

            </div>
        </div>
        
    );
}