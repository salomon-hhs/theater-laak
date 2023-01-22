import {useState, useEffect} from 'react';
import {useLocation} from "react-router-dom";
import Urls from '../Urls';

function Doneren() {
    const [data, setData] = useState(null);
    const search = useLocation().search;
    const jwtToken = new URLSearchParams(search).get('token');

    useEffect(() => {
        fetch("https://ikdoneer.azurewebsites.net/api/donatie", {
                headers: {
                    'Authorization': `Bearer ${jwtToken}`
                }
            })
            .then(res => res.json())
            .then(json => {setData(json); /*console.log(json)*/})
            .catch(console.error);
    }, []);

    if (jwtToken) return <div className="text-white">
        <h1 className="text-2xl">Doneren</h1>
        <p>U heeft toestemming gegeven. We vinden het fijn dat u interesse heeft om ons te steunen!{/*console.log(jwtToken)*/}</p>
        {data ? (data.length > 0 ? donations(data) : <p>"U heeft nog geen donaties gedaan."</p>) : <p>"Het is ons niet gelukt om uw donaties op te halen."</p>}
    </div>

    let redirectUrl = encodeURIComponent(`${Urls.frontend}/doneren`);

    return <div className="text-white">
        <h1 className="text-2xl">Doneren</h1>
        <p>Theater Laak is voor een deel afhankelijk van steun in de vorm van (kleine) donaties. U kunt ons bijvoorbeeld al helpen met een donatie van €10 via het donatie-platform van IkDoneer (<a href="https://ikdoneer.azurewebsites.net/" className="underline">ikdoneer.azurewebsites.net</a>).</p>
        <p>U kunt Theater Laak toestemming geven om uw donaties te kunnen zien door de volgende link te bezoeken:</p>
        <a href={`https://ikdoneer.azurewebsites.net/Toegang?url=${redirectUrl}`} className="underline">Ik wil toestemming geven voor donaties via IkDoneer.</a>
    </div>
}

function donations(data) {
    data = data.filter(i => i.doel == "Theater Laak K3G6");

    let items = data.map(i => {
        return Donatie(i);
    });

    let total = data.reduce((p, i) => p + i.hoeveelheid, 0);

    return <>
        <h2 className="text-xl mt-4">Uw donaties:</h2>
        <ul>
            {items}
        </ul>
        <p className="mt-4">U heeft in totaal €{total} gedoneerd aan Theater Laak! Bedankt voor uw steun!</p>
    </>;
}

function Donatie(i) {
    return <li className="border border-l-8 px-8 py-4 mt-2">
        <p className="text-2xl">€{i.hoeveelheid}</p>
        <p className="italic">"{i.tekst}"</p>
    </li>
}

export default Doneren;
