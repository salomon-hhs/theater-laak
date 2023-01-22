import React, {useState} from "react";
import {Link} from 'react-router-dom';
import Urls from "../Urls";

export default function ZaalToevoegen(){
    const[rang1, setRang1]= useState(10)
    const[rang2, setRang2]= useState(15)
    const[rang3, setRang3]= useState(0)

    function handleAddEvent() {
        let url = `${Urls.backend}/api/Zaal?`
        if (rang1 > 0) {url += "rang1="+rang1}
        if (rang2 > 0) {url += "&rang2="+rang2}
        if (rang3 > 0) {url += "&rang3="+rang3}

        fetch(url, {
            method: 'POST',
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return(
        <div className="auth-form text-black">
            <p className='mt-5 text-white'>Terug naar Menu</p>
            <button className="bg-red-900 hover:bg-red-700 py-2 px-8 rounded text-white m-5" id='backToMenuFromZaal'>
                <Link to={'/admin'}> Menu</Link>
            </button>

            <h2 className="text-2xl text-left text-white m-5">Zaal Toevoegen</h2>

            <label htmlFor="rang1">rang 1</label>
            <input value={rang1} onChange={(e) => setRang1(parseInt(e.target.value))} type="number" id="rang1"/>

            <label htmlFor="rang2">rang 2</label>
            <input value={rang2} onChange={(e) => setRang2(parseInt(e.target.value))} type="number" id="rang2"/>

            <label htmlFor="rang3">rang 3</label>
            <input value={rang3} onChange={(e) => setRang3(parseInt(e.target.value))} type="number" id="rang3"/>

            <button className="bg-white hover:bg-red-700 py-2 px-8 rounded text-black m-5" 
            type="submit" id="addZaal" onClick={handleAddEvent}>Toevoegen</button>

        </div>
    );
}
