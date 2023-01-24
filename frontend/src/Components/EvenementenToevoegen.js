import React, {useState} from "react";
import {Link} from 'react-router-dom';
import Urls from "../Urls";

export default function EvenementenToevoegen() {
    const[naamEvent,setnaamEvent]= useState('');
    //const[bandnaam,setBandnaam]= useState('');
    const[zaalnr,setZaalnr]= useState('');
    const[beschrijving,setBeschrijving]= useState('');
    //const[zaalbeschrijving,setZaalBeschrijving]= useState('');
    const[datum,setDatum]= useState('');
    const[img,setImg]= useState('');
    const[alt,setAlt]= useState('');


    // Add Evenement
    const handleAddEvent = async (e) => {
        e.preventDefault();
        await fetch(`${Urls.backend}/api/Evenement/`, {
            "method": "POST",
            "headers": { 'Content-Type': 'application/json' },
            "body": JSON.stringify({
                "titel": naamEvent,
                "zaal": zaalnr,
                "beschrijving": beschrijving,
                "datum": datum,
                "img": img,
                "alt": alt
            })
        });
    }

    // // Delete Evenement
    // const handleDeleteEvent = async (e, id) => {
    //     e.preventDefault();
    //     await fetch(`${Urls.backend}/api/Evenement/${id}`, {
    //         "method": "DELETE",
    //         "headers": { 'Content-Type': 'application/json' },
    //     });
    // }

    return (
        <div className="auth-form text-black">

            <p className='mt-5 text-white'>Terug naar Menu</p>
            <button className="bg-red-900 hover:bg-red-700 py-2 px-8 rounded text-white m-5" id='backToMenu'>
                <Link to={'/admin'}> Menu</Link>
            </button>
            <h2 className="text-2xl text-left text-white m-5">Evenementen Toevoegen</h2>
            
            <label htmlFor="naamEvent">Evenementnaam</label>
            <input value={naamEvent} onChange={(e) => setnaamEvent(e.target.value)} type="naamEvent" id="naamEvent"/>

            <label htmlFor="datum">Datum</label>
            <input value={datum} onChange={(e) => setDatum(e.target.value)} type="datum" id="datum"/>

            {/*<label htmlFor="id">Id</label>*/}
            {/*<input value={id} onChange={(e) => setId(e.target.value)} type="id" id="id" />*/}


            {/*<label htmlFor="bandnaam">Bandnaam</label>*/}
            {/*<input value={bandnaam} onChange={(e) => setBandnaam(e.target.value)} type="bandnaam" id="bandnaam"/>*/}

            <label htmlFor="beschrijving">Beschrijving</label>
            <input value={beschrijving} onChange={(e) => setBeschrijving(e.target.value)} type="beschrijvingnaam" id="beschrijving"/>

            <label htmlFor="img">foto link</label>
            <input value={img} onChange={(e) => setImg(e.target.value)} id="img"/>

            <label htmlFor="beschrijving">foto alt-text</label>
            <input value={alt} onChange={(e) => setAlt(e.target.value)} id="alt"/>

            <label htmlFor="zaalnr">Zaal</label>
            <input value={zaalnr} onChange={(e) => setZaalnr(e.target.value)} type="number" id="zaalnr"/>
            
            {/*<label htmlFor="zaalbeschrijving">Zaal beschrijving</label>*/}
            {/*<input value={zaalbeschrijving} onChange={(e) => setZaalBeschrijving(e.target.value)} type="zaalbeschrijving" id="zaalbeschrijving"/>*/}

            <button className="bg-white hover:bg-red-700 py-2 px-8 rounded text-black m-5" 
            type="submit" id="addEvenement" onClick={handleAddEvent}>Toevoegen</button>

            {/*<button className="bg-white hover:bg-red-700 py-2 px-8 rounded text-black m-5"*/}
            {/*type="submit" id="deleteEvent" onClick={() => handleDeleteEvent(id)}>Verwijder</button>*/}


        </div>
    );
}
