import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import Urls from "../Urls";

export function EvenementenPagina(){
  const [Evenementen, setEvenement] = useState([]);

  const fetchEvenementen = () => {
    fetch(`${Urls.backend}/api/Evenement`).
    then((response) => response.json()).
    then((data) => 
    {
      setEvenement(data);
      console.log(data);

    });
  }

  useEffect(() => {
    fetchEvenementen();
  }, []);

  return (
      <>
          <h2 className="ml-7 mb-2 text-4xl">{Evenementen ? "Alle" : "Geen"} evenementen</h2>
          <div className="flex flex-wrap justify-center content-around" id="flex1">
              {Evenementen ? Evenementen.map((Evenement) => (
                  <div className=" mx-2 my-6" key={Evenement.id}>
                      <Link to={"/Ticket/"+ Evenement.id} id='eventlink'><img className="Event_img rounded-2xl object-cover" src={Evenement.img} alt={Evenement.alt}/></Link>
                      <h3 className="text-left text-2xl text-normal">{Evenement.titel}</h3>
                      <div className="text-left"><Link to={"/Ticket/"+ Evenement.id}>{Evenement.beschrijving}</Link></div>
                  </div>
              )) : null}
          </div>
      </>  )
}






export function TicketPagina(props) {

    let {id} = useParams();

    const [rang1, setRang1] = useState(false);
    const [rang2, setRang2] = useState(false);
    const [rang3, setRang3] = useState(false);

    const [user, setUser] = useState("");

    const [Evenement, setEvenement] = useState();
    const [date, setDate] = useState("")


    const [selection, setSelection] = useState(3);
    const [hidden, setHidden] = useState(true)
    const [ref, setRef] = useState(0)


    useEffect(() => {
        fetchEvent()
        checkAvailable()
        const loggedInUser = sessionStorage.getItem("userId");
        if (loggedInUser) {
            setUser(loggedInUser);
        }
    }, []);

    function checkAvailable() {
        fetch(`${Urls.backend}/api/Evenement/${id}/a`)
            .then(r => r.json())
            .then(o => {
                setRang1(o[0] ? o[0] : false)
                setRang2(o[1] ? o[1] : false)
                setRang3(o[2] ? o[2] : false)
            })
    }

    function fetchEvent() {
        fetch(`${Urls.backend}/api/Evenement/${id}`)
            .then(r => r.json())
            .then(o => {
                setEvenement(o)
                setDate(o? o.datum : "")
            })
    }

    function fetchTicket() {
        setHidden(false)
        fetch(`${Urls.backend}/api/Ticket/addTicket`, {
            "method": "POST",
            "headers": {'Content-Type': 'application/json'},
            "body": JSON.stringify({
                "EventId": id,
                "UserId": user,
                "rank": selection,
            })
        }).then(r => r.json().then(o => {
            setRef(o.id)
            console.log(ref)
        }))//hi
    }

    function parseDate(d) {
        return (
            <>
                {d.split('T')[1]} <br/> {d.split('T')[0]}
            </>
        )
    }

    let prijs = 12.50;

    return (
        <>
        <form method="POST" action="https://fakepay.azurewebsites.net">
            <div className="max-w-xl m-auto mb-10">
                <h2 id="Evenement_Naam">{Evenement ? Evenement.titel : ""}</h2>
                <p id="Evenement_ID">{Evenement ? Evenement.beschrijving : ""}</p>
            </div>

            <div className="bg-dark max-w-xl rounded-md mb-10 m-auto p-4">
                <p className="my-5 mx-2">Kies uw voorkeur:</p>
                <div className="Rang_Kiezen mt-8">

                    <h4 className="">Kies uw voorkeurszitplaats:</h4>

                        <div className="flex">
                            <input onClick={() => setSelection(1)} disabled={!rang1} hidden={!rang1} type="radio" id="rang1" name="voorkeur_rang" value="Rang1"/>
                            <label hidden={!rang1} htmlFor="rang1">1</label>

                            <input onClick={() => setSelection(2)} disabled={!rang2} hidden={!rang2} type="radio" id="rang2" name="voorkeur_rang" value="Rang2"/>
                            <label hidden={!rang2} htmlFor="rang2">2</label>

                            <input onClick={() => setSelection(3)} disabled={!rang3} hidden={!rang3} type="radio" id="rang3" name="voorkeur_rang" value="Rang3"/>
                            <label hidden={!rang3} htmlFor="rang3">3</label>

                            <input onClick={() => setSelection(3)} type="radio" id="gehandicapt_rang" name="voorkeur_rang" value="Gehandicapt_Rang"/>
                            <label htmlFor="gehandicapt_rang"><img className="h-6 w-6" src="https://cdn-icons-png.flaticon.com/512/657/657563.png"/></label>

                            <input id="amount" value={prijs} name="amount" type="text" hidden={true} aria-hidden={true}/>
                            <input id="reference" value={ref} name="reference" type="text" hidden={true} aria-hidden={true}/>
                            <input id="url" value={`${Urls.backend}/api/Ticket/Status`} name="url" type="text" hidden={true} aria-hidden={true}/>
                        </div>

                </div>

            </div>


            <div className="max-w-xl mb-10 m-auto ">
                <div className="flex flex-row space-x-24 mb-2 justify-center">
                    <h3>Datum</h3>
                    <h3>Prijs</h3>
                </div>

                <span className="flex flex-row justify-center space-x-28 bg-dark max-w-xl text-center p-2 px-3 rounded-md">
                <div><p className="text-center" id="Datum">{Evenement ? parseDate(date) : null}</p></div>

                <div><p id="Prijs">€{prijs.toFixed(2)}</p></div>

                </span>
                <div className="m-auto">
                    <button onClick={fetchTicket} type="button" id="reserveerBtn"
                            className="bg-red-900 hover:bg-red-700 py-2 px-3 rounded text-white my-3 flex justify-center">Reserveer
                    </button>
                    <button id="betaalBtn" type="submit" disabled={hidden} aria-hidden={hidden}
                            className={
                        hidden ?
                            "bg-red-900 hover:bg-red-700 py-2 px-3 rounded text-white my-3 flex justify-center hidden"
                            : "bg-red-900 hover:bg-red-700 py-2 px-3 rounded text-white my-3 flex justify-center"
                    }>Betaal
                    </button>
                </div>
            </div>
        </form>
        </>
    )
}
