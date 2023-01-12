import React, {useState} from "react";

export default function PasswVergeten(props){
    const[email,setEmail]= useState(''); /*inside the useState is the initial value*/

    const handleSubmit = (e)=>{ /*e stands for event handler*/
        e.preventDefault(); {/*if you don't don't do this the page is going to get reloaded and then you will lose the state*/}
        console.log(email);
    }
    return(

        <div className="auth-form">
            <div className="col-1">
                <h2 className="text-2xl text-left text-white m-5">Inloggen</h2>

                <form className="passwVergeten-form" onSubmit={handleSubmit}>

                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" 
                     pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"                    
                    />

                    <button className="bg-red-900 hover:bg-red-700 py-2 px-8 rounded text-white m-5" type="submit">Verzenden</button>
                </form>

                <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Geen account? Account aanmaken</button>

            </div>
        </div>
        
    );  
}