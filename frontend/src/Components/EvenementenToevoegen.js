import React, {useState} from "react";

export default function EvenementenToevoegen() {
    const[id,setId]= useState('');
    const[naamEvent,setnaamEvent]= useState('');
    const[bandnaam,setBandnaam]= useState('');
    const[zaalnr,setZaalnr]= useState('');
    const[beschrijving,setBeschrijving]= useState('');
    const[zaalbeschrijving,setZaalBeschrijving]= useState('');


    const handleSubmit = async (e)=>{ /*e stands for event handler*/
        e.preventDefault(); //if you don't don't do this the page is going to get reloaded and then you will lose the state
        await fetch("https://localhost:3001/api/Evenement/", {
            "method": "POST",
            "headers": { 'Content-Type': 'application/json'},
            "body": JSON.stringify({
                "id": id,
                "titel": naamEvent,
                "zaal": zaalnr,
                "beschrijving": beschrijving
            })
        });
    }

    return (
        <div>
            <h2 className="text-2xl text-left text-white m-5">Evenementen Toevoegen</h2>

            <label htmlFor="naamEvent">Evenementnaam</label>
            <input value={naamEvent} onChange={(e) => setnaamEvent(e.target.value)} type="naamEvent" />

            <label htmlFor="id">Id</label>
            <input value={id} onChange={(e) => setId(e.target.value)} type="id" />


            <label htmlFor="bandnaam">Bandnaam</label>
            <input value={bandnaam} onChange={(e) => setBandnaam(e.target.value)} type="bandnaam" />

            <label htmlFor="beschrijving">Beschrijving</label>
            <input value={beschrijving} onChange={(e) => setBeschrijving(e.target.value)} type="beschrijvingnaam" />

            
            <label htmlFor="zaalnr">Zaal</label>
            <input value={zaalnr} onChange={(e) => setZaalnr(e.target.value)} type="zaalnr" />
            
            <label htmlFor="zaalbeschrijving">Zaal beschrijving</label>
            <input value={zaalbeschrijving} onChange={(e) => setZaalBeschrijving(e.target.value)} type="zaalbeschrijving" />

            <button className="bg-red-900 hover:bg-red-700 py-2 px-8 rounded text-white m-5" type="submit" onSubmit={handleSubmit}>Toevoegen</button>

            <button className="bg-red-900 hover:bg-red-700 py-2 px-8 rounded text-white m-5" type="submit" onSubmit={handleSubmit}>Verwijder</button>

        </div>
    );
}