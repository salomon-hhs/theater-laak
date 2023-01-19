
import React, {useState} from "react";
export function EvenementenPagina(){

  return <>
  
 <h2 className="ml-7 mb-2 text-4xl">Alle evenementen</h2>
 <div className="flex flex-wrap justify-center content-around" id="flex1">
            <div className=" mx-2 my-6">
              <img className="Event_img rounded-2xl" src="https://cdn.pixabay.com/photo/2016/11/08/05/15/ramayana-festival-1807516_1280.jpg" alt="Link en een foto van een asian celebration evenement"/>
              <h3 className="text-left text-2xl text-normal">Chinese New Years</h3>
              <div className="text-left"><a id="Chinese_Ney_Years" className="meerInfoLink" href="/">Meer weten over Celebration of some sort</a></div>
            </div>
            
            <div className="mx-2 my-6">
             <img className="Event_img rounded-2xl" src="https://cdn.pixabay.com/photo/2016/09/13/07/35/walking-dead-1666584_1280.jpg" alt="Link en een foto van de walking dead evenement"/>
             <h3 className="text-left text-2xl text-normal">The Walking Dead</h3>
             <div className="text-left"><a id="The_Walking_Dead" className="meerInfoLink" href="/">Meer weten over Celebration of some sort</a></div>
            </div>

            <div className="mx-2 my-6">
              <img className="Event_img rounded-2xl" src="https://cdn.pixabay.com/photo/2014/08/29/05/00/dance-430554_1280.jpg" alt="" />
              <h3 className="text-left text-2xl text-normal">Step Up 5</h3>
              <div className="text-left"><a id="Step_Up" className="meerInfoLink" href="/">Meer weten over Celebration of some sort</a></div>
            </div>

            <div className="mx-2 my-6">
              <img className=" Event_img rounded-2xl" src="https://cdn.pixabay.com/photo/2016/11/08/05/15/ramayana-festival-1807516_1280.jpg" alt="Link en een foto van een asian celebration evenement"/>
              <h3 className="text-left text-2xl text-normal">Celebration of a sort</h3>
              <div className="text-left"><a id="Celebration_of_some_sort" className="meerInfoLink" href="/">Meer weten over Celebration of some sort</a></div>
            </div>
            
            <div className="mx-2 my-6">
             <img className="Event_img rounded-2xl" src="https://cdn.pixabay.com/photo/2016/09/13/07/35/walking-dead-1666584_1280.jpg" alt="Link en een foto van de walking dead evenement"/>
             <h3 className="text-left text-2xl text-normal">Dead Man Walking</h3>
             <div className="text-left"><a id="Dead_Man_Walking" className="meerInfoLink" href="/">Meer weten over Celebration of some sort</a></div>
            </div>

            <div className="mx-2 my-6">
              <img className="Event_img rounded-2xl" src="https://cdn.pixabay.com/photo/2014/08/29/05/00/dance-430554_1280.jpg" alt="" />
              <h3 className="text-left text-2xl text-normal">Step Up Another Sequel</h3>
              <div className="text-left"><a id="Step Up Another Sequel" className="meerInfoLink" href="/">Meer weten over Celebration of some sort</a></div>
            </div>
  </div> </>
  
}

export function TicketPagina(props){
  //this should be a fetch one day

   const[totaal, PlusMinTotaal]= useState(0);
   const[aantal, PlusMinAantal]= useState(0);
   let prijs = 12.50;
   let aantalRang = 3;

function print(){
   if(aantalRang === 2){
    return <TweeRankZalen/>
      }
      else{
        return <DrieRankZalen/>
      }
    }

    

    function Plus(){
        if(aantal >= 5){
        alert("U heeft te veel tickets geresiveerd");
        }
        else{
            PlusMinTotaal(totaal + prijs);
            PlusMinAantal(aantal + 1);
        }
    }

    function Min(){
        if(aantal <= 0){
            alert("Dat mag niet");
            }
            else{
            PlusMinAantal(aantal - 1);
            PlusMinTotaal(totaal - prijs);
            }
    }

    return<>
    <div className="max-w-xl m-auto mb-10">
    <h2 id="Evenement_Naam">Naam</h2>
    <p id="Evenement_ID">beschrijving</p>
    </div>


    <div className="bg-dark max-w-xl h-56 rounded-md mb-10 m-auto "> 
        <p className="my-5 mx-2">Kies uw voorkeur:</p>
        <div className="Rang_Kiezen mt-8">

        <h4 className="">Kies uw voorkeurszitplaats:</h4>
        <form>
        <div className="flex">
        {print()}
        <input type="radio" id="gehandicapt_rang" name="voorkeur_rang" value="Gehandicapt_Rang"/>
        <label for="gehandicapt_rang"><img className="h-6 w-6" src="https://cdn-icons-png.flaticon.com/512/657/657563.png"/></label>
        </div>
        
        <button className="bg-red-900 hover:bg-red-700 py-2 px-3 rounded text-white my-3 flex justify-center" type="submit">Preferentie toepassen</button>
        </form>
        </div>

    </div>


    <div className="max-w-xl mb-10 m-auto ">
        <div className="flex flex-row space-x-24 mb-2">
            <h3>Datum</h3>
            <h3>Prijs</h3>
            <h3>Aantal</h3>
            <h3>Totaal</h3>
        </div>

        <span className="flex flex-row space-x-28 bg-dark max-w-xl text-center p-2 px-3 rounded-md">
            <div><p text-center id="Datum">Datum</p></div>

            <div><p id="Prijs">{prijs}</p></div>

            <div> 
                <span><button className="bg-darkest px-2 rounded-md rotate-180"  onClick={Plus} >v</button></span>
                <span>--</span>
                <span><button className="bg-darkest px-2 rounded-md"  onClick={Min}>v</button></span>
                <span id="aantal"> ({aantal})</span>
            </div>

            <div id="totaal">{totaal}</div>
        </span>
        <div className="m-auto"><button className="bg-red-900 hover:bg-red-700 py-2 px-3 rounded text-white my-3 flex justify-center">Betaal</button></div>
    </div>
    </>

}
function TweeRankZalen(){
return <>
<input type="radio" id="rang1" name="voorkeur_rang" value="Rang1"/>
        <label for="rang1">1</label>

        <input type="radio" id="rang2" name="voorkeur_rang" value="Rang2"/>
        <label for="rang2">2</label>
</>
}

function DrieRankZalen(){
  return<>
  <input type="radio" id="rang1" name="voorkeur_rang" value="Rang1"/>
          <label for="rang1">1</label>
  
          <input type="radio" id="rang2" name="voorkeur_rang" value="Rang2"/>
          <label for="rang2">2</label>
  
          <input type="radio" id="rang3" name="voorkeur_rang" value="Rang3"/>
          <label for="rang3">3</label>
          </>
}