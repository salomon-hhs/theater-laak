import { Link } from "react-router-dom";
import React, {useEffect, useState} from "react";
import "../tailwind.css";
export function EvenementenHP() {
  const [Evenementen, setEvenement] = useState([]);

  const fetchEvenementen = () => {
    fetch('https://localhost:3001/api/Evenement').
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

  return <>
    <img id="HomeImg_Id" src="https://cdn.pixabay.com/photo/2014/08/31/10/03/theater-432045_1280.jpg" alt="" />
    <div>
      <h2 id="EventTussenKopje" className="text-center my-4 text-4xl">Evenementen</h2>

      <div className="flex justify-center" id="flex1">

          {Evenementen ? Evenementen.slice(0,3).map((Evenement) => (
              <div className="container m-5">
                <Link to={"/Ticket/"+ Evenement.id} id={Evenement.titel}><img className=" Event_imgh object-cover rounded-2xl" src={Evenement.img} alt={Evenement.alt}/></Link>
                <div className="middle">
                  <div className="text">
                    <h3 id="Titel">{Evenement.titel}</h3>
                    <p id="beschrijving">{Evenement.beschrijving}</p>
                  </div>
                </div>
              </div>
          )) : "Geen evenementen"}

      </div>
      <div className="text-center mb-28 mt-10"><a className="Event_img bg-brightest hover:bg-rose-900 rounded-md px-4 py-4" href="/Evenementen">Bekijk alle evenementen</a></div>
    </div>

  </>
}