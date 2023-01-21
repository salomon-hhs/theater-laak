import React, {useState} from "react";
import {Link} from 'react-router-dom';


export default function ZaalToevoegen(){
    const[id,setId]= useState('');
    const[zaal,setZaal]= useState('');
    const[zaalDescriptie,setZaalDescriptie]= useState('');

    function handleAddEvent() {
        const data = {id:id, zaal:zaal, zaalDescriptie:zaalDescriptie};
        fetch('api/Zaal', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    const handleUpdateEvent = async (e, id) => {
        e.preventDefault();
        await fetch("https://localhost:3001/api/Evenement/${id}", {
            "method": "PUT",
            "headers": { 'Content-Type': 'application/json' },
            "body": JSON.stringify({
                "id": id,
                "zaal": zaal,
            })
        });
    }

    const handleDeleteEvent = async (e, id) => {
        e.preventDefault();
        await fetch("https://localhost:3001/api/Zaal/${id}", {
            "method": "DELETE",
            "headers": { 'Content-Type': 'application/json' },
        });
    }
    
    return(
        <div className="auth-form text-black">
            <p className='mt-5'>Terug naar Menu</p>
            <button className="bg-red-900 hover:bg-red-700 py-2 px-8 rounded text-white m-5" id='backToMenuFromZaal'>
                <Link to={'/admin'}> Menu</Link>
            </button>

            <h2 className="text-2xl text-left text-white m-5">Zaal Toevoegen</h2>

            <label htmlFor="zaal">Zaal</label>
            <input value={zaal} onChange={(e) => setZaal(e.target.value)} type="zaal" id="zaal"/>

            <label htmlFor="zaalId">Zaal id</label>
            <input value={id} onChange={(e) => setId(e.target.value)} type="zaalId" id="zaalId"/>
            
            <label htmlFor="zaalbeschrijving">Zaal beschrijving</label>
            <input value={zaalDescriptie} onChange={(e) => setZaalDescriptie(e.target.value)} type="zaalDescriptie" id="zaalbeschrijving"/>

            <button className="bg-white hover:bg-red-700 py-2 px-8 rounded text-black m-5" 
            type="submit" id="addZaal" onClick={handleAddEvent}>Toevoegen</button>

            <button className="bg-white hover:bg-red-700 py-2 px-8 rounded text-black m-5"
                type="submit" id="updateZaal" onClick={handleUpdateEvent}>Update</button>

            <button className="bg-white hover:bg-red-700 py-2 px-8 rounded text-black m-5" 
            type="submit" id="deleteZaal" onClick={handleDeleteEvent}>Verwijderen</button>
        </div>
    );
}