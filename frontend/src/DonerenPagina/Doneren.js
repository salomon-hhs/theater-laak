import {useLocation} from "react-router-dom";

function Doneren() {
    const search = useLocation().search;
    const jwtToken = new URLSearchParams(search).get('token');

    if (jwtToken) return <div className="text-white text-center">
        <p>Je JWT Token is: {jwtToken}</p>
    </div>

    return <div className="text-white text-center">
        <h1 className="text-2xl">Doneren</h1>
        <p>Theater Laak is voor een deel afhankelijk van steun in de vorm van (kleine) donaties. U kunt ons bijvoorbeeld al helpen met een donatie van €10 via het donatie-platform van IkDoneer (<a href="https://ikdoneer.azurewebsites.net/" className="underline">ikdoneer.azurewebsites.net</a>).</p>
        <p>Om te doneren geeft u Theater Laak eerst toestemming om uw donaties te kunnen zien door de volgende link te bezoeken:</p>
        <a href="https://ikdoneer.azurewebsites.net/Toegang?url=https%3A%2F%2Fdelightful-field-0b7540403.2.azurestaticapps.net%2FDoneren" className="underline">Ik wil toestemming geven voor donaties via IkDoneer.</a>
    </div>
}

export default Doneren;
