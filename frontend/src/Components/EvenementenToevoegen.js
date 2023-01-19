import React, {useState} from "react";

export default function EvenementenToevoegen() {
    const[id,setId]= useState('');
    const[naamEvent,setnaamEvent]= useState('');
    const[bandnaam,setBandnaam]= useState('');
    const[zaalnr,setZaalnr]= useState('');
    const[beschrijving,setBeschrijving]= useState('');
    const[zaalbeschrijving,setZaalBeschrijving]= useState('');
    const[datum,setDatum]= useState('');



    // Add Evenement
    const handleAddEvent = async (e) => {
        e.preventDefault();
        await fetch("https://localhost:3001/api/Evenement/", {
            "method": "POST",
            "headers": { 'Content-Type': 'application/json' },
            "body": JSON.stringify({
                "titel": naamEvent,
                "zaal": zaalnr,
                "beschrijving": beschrijving,
                "datum": datum
            })
        });
    }

    // Update Evenement
    const handleUpdateEvent = async (e, id) => {
        e.preventDefault();
        await fetch("https://localhost:3001/api/Evenement/${id}", {
            "method": "PUT",
            "headers": { 'Content-Type': 'application/json' },
            "body": JSON.stringify({
                "id": id,
                "titel": naamEvent,
                "zaal": zaalnr,
                "beschrijving": beschrijving,
                "datum": datum
            })
        });
    }

    // Delete Evenement
    const handleDeleteEvent = async (e, id) => {
        e.preventDefault();
        await fetch("https://localhost:3001/api/Evenement/${id}", {
            "method": "DELETE",
            "headers": { 'Content-Type': 'application/json' },
        });
    }

    return (
        <div className="auth-form text-black">
            <h2 className="text-2xl text-left text-white m-5">Evenementen Toevoegen</h2>
            
            <label htmlFor="naamEvent">Evenementnaam</label>
            <input value={naamEvent} onChange={(e) => setnaamEvent(e.target.value)} type="naamEvent" />

            <label htmlFor="datum">Datum</label>
            <input value={datum} onChange={(e) => setDatum(e.target.value)} type="datum" />

            <label htmlFor="id">Id</label>
            <input value={id} onChange={(e) => setId(e.target.value)} type="id" />


            <label htmlFor="bandnaam">Bandnaam</label>
            <input value={bandnaam} onChange={(e) => setBandnaam(e.target.value)} type="bandnaam" />

            <label htmlFor="beschrijving">Beschrijving</label>
            <input value={beschrijving} onChange={(e) => setBeschrijving(e.target.value)} type="beschrijvingnaam" id="beschrijving"/>

            
            <label htmlFor="zaalnr">Zaal</label>
            <input value={zaalnr} onChange={(e) => setZaalnr(e.target.value)} type="zaalnr" />
            
            <label htmlFor="zaalbeschrijving">Zaal beschrijving</label>
            <input value={zaalbeschrijving} onChange={(e) => setZaalBeschrijving(e.target.value)} type="zaalbeschrijving" id="zaalbeschrijving"/>

            <button className="bg-white hover:bg-red-700 py-2 px-8 rounded text-black m-5" 
            type="submit" onClick={handleAddEvent}>Toevoegen</button>

            <button className="bg-white hover:bg-red-700 py-2 px-8 rounded text-black m-5" 
            type="submit" onClick={() => handleUpdateEvent(id)}>Updaten</button>

            <button className="bg-white hover:bg-red-700 py-2 px-8 rounded text-black m-5" 
            type="submit" onClick={() => handleDeleteEvent(id)}>Verwijder</button>


        </div>
    );
}